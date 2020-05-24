============================================
Steps to define a task on Bio-Data Processor
============================================

.. attention:: 
    | **Targeted readers**: pipeline developers.
    | **Prerequisites**: programs/scripts were already containerized inside Docker container(s).

Bio-Data Processor considers a task as strings of commands and nothing more. Each command contains 1) the executable binary path, 2) the scripts, and 3) arguments that are separated by spaces.

1. The web platform passes the arguments to a task adapter (the 1st argument passing).
2. The task adapter then organized the arguments and then forms executable command(s) to run container(s) to execute the desired programs/scripts (the 2nd argument passing). 
3. If the task requires a batch execution, the task adapter will automatically create multiple commands based on user specifications. Sequential or parallel executions of these commands are determined based on the end-user environments instead of developers settings.

------------------------------------------------------------
Step 1. Create a task on the Bio-Data Processor web platform
------------------------------------------------------------

In this step, you will use a graphical user interface to define a task on the web platform.

.. seealso:: Setting the task on the web platform.
    
----------------------------------------------
Step 2. Task definitions for the task adapter.
----------------------------------------------

2.1. The basic settings for a task template
===========================================
You can define tasks by simply writing task template in the YAML format to define tasks in JavaScripts. Again, to simplify the configurations, the above mentioned 3 things are mainly required. A task is simply defined by filling the fields of **task name**, **dockerImage**, **exec**, **args**, and **option** as the following basic example. 

Say we want to calculate the PI to the `2000` digits after the decimal point. We could execute the following perl command using the perl Docker container:

.. code-block:: shell

    perl -Mbigum=bpi -wle print 'bpi(2000)'

We can write a task template for that command:

.. code-block:: YAML

    # file path: ./tasks/calculate-pi.yaml
    ---
    - task-template:
        name: pi
        dockerImage: perl
        exec: perl
        args:
        - '-Mbignum=bpi'
        - '-wle'
        - "'print bpi(2000)'"
        option:
        setUser: true

Then, we have to declare this task template file in the `task-index.yaml`. which may be looked like this:

.. code-block:: YAML

    # file path: ./task-index.yaml
    tasks:
    calculate-pi: './tasks/calculate-pi.yaml'

We put the **task name** ``calculate-pi`` and its task path that is relative to the path of ``task-index.yaml``.
The ``task-index.yaml`` will be automatically parsed by our task reader in ``task-portal.js``. Based on the given **task name**, we will know where to find the task template file.

The above example is a non-configurable (no arguments allowed) job which uses ``perl`` to calculate pi to the given 2000 accuracy (the number of digits after the decimal point).

To make this example configurable, meaning to allow configuring the accuracy of pi, we can rewrite the above example as:

.. code-block:: YAML

    # file path: ./tasks/calculate-pi.yaml
    ---
    - task-template:
        name: pi
        dockerImage: perl
        exec: perl
        args:
        - '-Mbignum=bpi'
        - '-wle'
        - "'print bpi({{ argv[0] }})'" # Change the 2000 to {{argv[0]}}
        option:
        setUser: true

You see that we changed the ``bpi(2000)`` to ``bpi({{argv[0]}})``. The ``{{ ... }}`` will be recognized by the template engine, Nunjucks. With this template engine, your template can be resolved with some data, e.g. task arguments, environment variables, etc. Hence, the ``{{ argv[0] }}`` will be replaced with the value of the first argumen of your task on Bio-Data Processor.

What is the `argv`?
-------------------
Under the hood, Bio-Data Processor will execute a command line like this:
.. code-block:: shell

    node task-portal.js calculate-pi 3000
                        ^^^^^^^^^^^^ ^^^^
                        taskName     argv[0] is the first argument

The **task name** is ``calculate-pi``, and the ``3000`` is the first argument. The argument index starts with 0, so the first argument is ``argv[0]``. Then thetemplate engine will replace the ``{{argv[0]}}`` with `3000`, so the core job command is
.. code-block:: shell

    perl -Mbignum=bpi -wle 'print bpi(3000)'

.. tip::
    Depending on the selected adapter, the adapter will help you to form the corresponding command. For example, a Docker adapter will form this command that stats with ``docker run ...`` and do all the volume mappings for you. A PBS adapter will form the command with ``qsub ...``. The actual run-time environment should not be defined by developers. Let the task adapters do the favor!



The following lists the two situations to define tasks that were **pre-containerized by 3rd party** or containerized **inside a BDP package container**.

2.2. The program was containerized by 3rd-party (e.g. biocontainers)
====================================================================

We use the MS-GF+ as our example. This MS-GF+ program has a pre-containerized Docker image. See `here <https://omics.pnl.gov/software/ms-gf>`_ for the usage of this program. A task template may be looked like:

.. code-block:: YAML

    ---
    - task-template:
        name: 'run-msgf-plus'
        dockerImage: "quay.io/biocontainers/msgf_plus:2017.07.21--py36_0"
        exec: 'msgf_plus'
        args:
        - "{{ option.mem | prefix('-Xmx') }}" # setting memory
        - "-s" 
        - "{{ argv[0] | pathMapping }}" # argv[9] the input file 
        - "-d" 
        - "{{ argv[1] | pathMapping }}" # argv[1] The database file path
        - "-o"
        - "{{ argv[8] | pathMapping }}" # argv[8]: The output file path
        - "-mod"
        - "{{ argv[2] | pathMapping }}" # argv[2] modification file
        - "-t" 
        - "{{argv[3]}}" # argv[3]: precursorMassTolerance
        - "-inst" 
        - "{{argv[4]}}" # argv[4]: MS2DetectorID
        - "-m"
        - "{{argv[5]}}" # argv[5]: fragmentation
        - "-ntt" 
        - "{{argv[6]}}" # argv[6]: ntt (number of tolerable termini)
        - "-tda"
        - "{{argv[7]}}"  # argv[7]: [-tda 0/1] (0: don't search decoy database (Default), 1: search decoy database)
        - "-thread"
        - "{{ option.cpus }}"
        option:
        setUser: true

The above template demonstrates the MS-GF+ program that is pre-containerized in the ``quay.io/biocontainers/msgf_plus:2017.07.21--py36_0`` image. By specifying the ``dockerImage`` field, you can run other containerized program.

What does the pipe (|) mean?
----------------------------

You may notice that we use ``{{ argv[0] | pathMapping }}`` for the input file path. In fact, we use ``| pathMapping`` to transform all path related arguments. This is because the path outside the container may not be seen inside container. Bio-Data Processor handles the volume mapping when using Docker. This `pathMapping` **filter function** transforms the external path to internal path. Thus, the program inside the container can access the input files/folders.

What is the filter function?
----------------------------
The filter function is defined by the `Nunjucks template engine <https://mozilla.github.io/nunjucks/templating.html#filters>`_
The filter function transforms the value before the pipe ``|``. Under the hood, a filter function is a registered JavaScript function for Nunjucks. The value before the pipe ``|`` will be considered as the first argument of the filter function. You may define your own filter function  in ``task-portal.js``. In this task-portal.js, you can use our programming API to define tasks or define the filter function. 

In addition to the default filter functions of Nunjucks, we provide our set of filter functions, such as the ``pathMapping`` filter. A user manual containing the list of available filter functions will be available.

You can pipe multiple filter functions in sequential.

.. code-block:: none
    
    {{ argv[0] | pathMapping |  suffix('/' + argv[1] + '_concatenated.fasta')}}

In the above example for piping filter functions, the ``argv[0]`` is a folder path. It firstly transforms to the path inside container and than a suffix was added. The suffix was composed as ``'/' + argv[1] + '_concatenated.fasta'``. This makes a new file path under the ``argv[0]`` folder and the file is named ``argv[1] + _concatenated.fasta``. The ``argv[1]`` may be considered as a given sample name.

2.3. The program/script was containerized inside a package container of Bio-Data Processor.
===========================================================================================

Most of the time, you write your own scripts/programs that do not have containerized by others. We recommended you to wrap your scripts/programs inside a BDP package container. We provide `simple instructions (preparing)` for you to build the package container easily. The following example demonstrate the task template for the decoyPYrat python script. You can also find more information about `decoyPYrat here <https://www.sanger.ac.uk/science/tools/decoypyrat>`_. In this example, we wrapped this python script inside a BDP package container. This script becomes one step of our constructed pipelines.

.. code-block:: YAML

    ---
    - task-template:
        name: 'run-decoy-pyrat'
        dockerImage: "{{env.DOCKER_IMG}}" # using the BDP-package container
        exec: 'decoy-pyrat'
        args:
        - '--cleavage_sites'
        - "{{ argv[1] }}" # -c CSITES A list of amino acids at which to cleave during digestion. Default = KR
        - '--anti_cleavage_sites'
        - "{{ argv[2] }}"  # -a NOC A list of amino acids at which not to cleave if following cleavage site ie. Proline. // Default = none
        - '--cleavage_position'
        - "{% if argv[3] == 'c' %}c{% else %}n{% endif %}" # -p {c,n} Set cleavage to be c or n terminal of specified cleavage sites. Default = c
        - '--min_peptide_length'
        - "{{ argv[4] }}" # -l MINLEN Set minimum length of peptides to compare between target and decoy. Default = 5
        - '--max_iterations'
        - "{{ argv[5] }}" # -n MAXIT Set maximum number of times to shuffle a peptide to make it non-target before failing. // Default=100
        - "{{ '--do_not_shuffle' if argv[6] == 'true'}}"
        - "{{ '--do_not_switch' if argv[7] == 'true'}}"
        - '--decoy_prefix'
        - "{{ argv[8] }}"
        - "{{ '--no_isobaric' if argv[9] == 'true' }}"
        - '--output_fasta'
        - "{{ path.parse(argv[0]).dir | suffix('/' + path.parse(argv[0]).name + '_decoy.fasta') | pathMapping }}"
        - '--temp_file'
        - '/tmp/tmp.fasta'
        - "{{ argv[0] | pathMapping }}" # The input database sequence in fasta format (argv[0])
        option:
        setUser: false

What are the available variables in the `task-template`?
--------------------------------------------------------
In addition to ``argv``, the ``path`` or the ``option`` variables, the ``env`` and ``url`` are also provided. That's all. Usually you use ``argv`` and ``env`` to form commands to execute. The ``option`` is usually used when you need some run-time information, such as cpu cores, memory, etc. As for the ``path`` and ``url``, they are from NodeJS (see `path <https://nodejs.org/dist/latest-v10.x/docs/api/path.html>`_ and `url <https://nodejs.org/dist/latest-v10.x/docs/api/url.html>`_. They help you to parse the path and URL strings, respectively.

There is one additional variable, ``item``, in the ``task-template``. The ``item`` is available only when this ``batch-items`` is defined. Please see the next section about the batch tasks.

What does the `{% ... %}` mean?
-------------------------------
    
The template allows you to handle some loops or if-else conditions. You can use them to form the desired arguments for your tasks. Please see the `documentation <https://mozilla.github.io/nunjucks/templating.html>_` for more details about ``{% %}``.

Empty strings are ignored.
--------------------------
    
The ``args`` field is an array of strings. Each element of this array starts with the ``-`` character. However, you might have some optional arguments for your scripts/programs. Use an empty string for an undesired argument.For example, you may configure an argument as ``{{ 'optional-argument' if argv[3] == 'true' }}``. This will leave an empty string when the ``argv[3]`` is not equal to the string `true`. The empty string will be ignored.

No rich features for argument validations
-----------------------------------------

To simplify the complexity, we do NOT check the value types but you could write your own validations using the if-else condition in the ``task-template``. We do NOT    provide any interpretation for Boolean or number values. All elements in the ``argv`` array are strings.


2.4. Handling batch tasks
============================

A batch task contains multiple jobs that execute the same program/script. Usually, these jobs have similar arguments. For example, you have multiple RNA sequencing ``fasta`` files in a folder, and you need to perform sequence alignment for each file. Therefore, you execute the same program many times for these files. 

The concept here is to configure a ``batch-items`` field with a Nunjucks template that ``dump`` an array at the end for our task reader to generate items. Then, for each item, the ``task-template`` will be applied and given the `item` variable. For example, you may want to execute a task that requires to iterate all ``*.mzML`` files in a folder. The template may be looked like this:

.. code-block:: YAML

    batch-items: "{{ argv[0] | fileglob(['*.mzML', '!*.mgf']) | sort | dump }}"

In this example, the ``argv[0]`` is a folder path. This path is then piped into the ``fileglob`` filter function. This function helps you to retrieve all file paths of ``*.mzML`` and not ``*.mgf`` files under the ``argv[0]`` folder. The output of ``fileglob`` is an array of these file paths. We then ``sort`` this list and ``dump`` this list finally. 

.. tip:: 
    The ``sort`` here is a built-in filter function of Nunjucks. You may find a full list of `built-in filter functions <https://mozilla.github.io/nunjucks/templating.html#builtin-filters>`_.

.. tip::
    The ``fileglob`` filter function is provided from BDP task reader. You may find a full list of official filter functions of BDP [here (preparing)](https://). We will provide more filter functions that can help you to generate ``batch-items``. For example, we may have ``getListFromCSV`` and ``getListFromXLSX`` filter functions that can extract a list of strings from csv or xlsx files, respectively. Then, the `task-template` can be applied many times with each ``item`` in the list.

A full example for the MS-GF+ peptide search engine is shown below:

.. code-block:: YAML

    ---
    - task-template:
        name: 'run-msgf-plus'
        #dockerImage: "biocontainers/crux:2.1"
        dockerImage: "quay.io/biocontainers/msgf_plus:2017.07.21--py36_0"
        exec: 'msgf_plus'
        args:
        - "{{ option.mem | prefix('-Xmx') }}" # setting memory
        - "-s" 
        - "{{ item | pathMapping}}" # item: the input file 
        - "-d" 
        - "{{ argv[1] | pathMapping |  suffix('/' + argv[2] + '_concatenated.fasta')}}" # argv[1] (folder); argv[2] database name : the reference fasta file
        - "-o"
        - "{{ argv[8] | pathMapping | suffix('/' + path.parse(item).name + '-msgf_plus.mzid') }}" # argv[11]: output folder
        - "-mod"
        - "{{ argv[3] | pathMapping}}" # argv[3] modification file
        - "-t" 
        - "{{argv[4]}}" # argv[4]: precursorMassTolerance
        - "-inst" 
        - "{{argv[5]}}" # argv[5]: MS2DetectorID
        - "-m"
        - "{{argv[6]}}" # argv[6]: fragmentation
        - "-ntt" 
        - "{{argv[7]}}" # argv[7]: ntt (number of tolerable termini)
        - "-tda" # target-decoy
        - "0" # The target-decoy database is pre-generated. We are not using the buildSA function in msgf+.
        - "-thread"
        - "{{ option.cpus }}"
        option:
        setUser: true
    batch-items: "{{ argv[0] | fileglob(['*.mzML']) | sort | dump }}"

-------------------------------------------------------------
Step 3. Move task definition files into BDP package container
-------------------------------------------------------------
Once you have defined all tasks, you have many task definition YAML files and one task-index file. Move these files under the folder ``./bdp-package/scripts``. This ``./bdp-package`` folder is relative to the package folder that contains a ``Dockerfile``. Then, it is ready to build your BDP package!

.. seealso::
    Please see [here](https://) to build BDP package containers.