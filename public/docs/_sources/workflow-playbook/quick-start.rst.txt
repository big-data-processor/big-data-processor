==================================
A quick start of Workflow Playbook
==================================

The Workflow Playbook is written in the YAML format. It is a human-readable format,
so you may proceed to read this page to get a quick understand of Workflow Playbook.

The only things to learn are **1) the YAML format**, **2) the Nunjucks template expression**, and **3) the filter functions**.
You don't need all the above knowledge to start. They are intuitive to learn. Proceed first!

.. seealso::

    If you are not familiar with the YAML format, you may see the `YAML syntax page <https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html>`_ and its see also section at the bottom of that page.
    For the Nunjucks template, please see `the Nunjucks templating <https://mozilla.github.io/nunjucks/templating.html>`_.


------------
A quick demo
------------

Let's say we want to execute a task command like:

.. code-block:: shell

    perl -Mbigum=bpi -wle print 'bpi(2000)'

This command print the ``pi`` to the 2000 digit accuracy as described in the `concept <concept.html>`_ section.
We can use the following definition for such command.
The command will be executed in a perl container.

.. code-block:: yaml
    :linenos:

    - task-template:
        name: calculate-pi
        image: perl
        exec: perl
        args:
        - "-Mbignum=bpi"
        - "-wle"
        - "print bpi(2000)"


The above example does not allow any user input. Let's modify the template to accept user input for the digit accuracy.


.. code-block:: yaml
    :linenos:

    - task-tempalte:
        name: calculate-pi
        image: perl
        exec: perl
        args:
        - "-Mbignum=bpi"
        - "-wle"
        - "print bpi({{ argv[0] if argv[0] > 0 else 2000 }})"

By replacing ``bpi(2000)`` with ``bpi({{ argv[0] if argv[0] > 0 else 2000 }})``, we can specify the accuracy as the first argument.
Here, any ouptut results after resolving the expression in between the ``{{`` and ``}}`` will replace the template text ``{{ ... }}``. This is templating and we can do loops and conditions using templates.
In this example, the ``{{ argv[0] if argv[0] > 0 else 2000 }}`` is an inline expression. You may expand it to a complete structure in a single line: ``{%- if argv[0] > 0 -%}{{ argv[0] }}{%- else -%}2000{%- endif -%}``, but it's more verbose and may be not easy to read.
The ``{% ... %}`` is called a **block**. It does not produce any text to the final arguments but it allows you to define variables, do a ``if-elif-else-endif`` conditional expression, or do a ``for-loop`` expression.
The `{%-` and `-%}` tells the template engine not inserting blanks before and after this ``{% ... %}`` expression, respectively.

Here, to make this complete structure easier to read. You may need the multi-line mode for the ``args`` arguments.

.. code-block:: yaml
    :linenos:

    - task-template:
        name: calculate-pi
        image: perl
        exec: perl
        args: |
          - "-Mbignum=bpi"
          - "-wle"
          {% if argv[0] %}
          - "print bpi({{ argv[0] }})"
          {% else %}
          - "print bpi(2000)"
          {% endif %}

At line 5, we added a ``|`` after the ``args:``. This specify the ``args`` via a multi-line mode instead of a list.
Under the hood, the ``args`` is firstly defined as a multiline string of YAML template. Then, we parse this string again and expect that the resolved result is a list. 
This is useful especially when the argument length is not fixed. Developers may use the ``for-loop`` to define argument lists of non-fixed lengths.

.. code-block:: yaml
    :linenos:

    args: |
      {% for element in collection %}
      - "{{element}}"
      {% endfor %}


.. seealso::
    
    There are many kinds of multi-line syntaxes, such as ``>``, ``>+``, ``|``, ``|+``, ``|-`` and others. They all have different meanings.
    For a more detailed multiline mode, please see `Multiline syntax in the YAML format <https://yaml-multiline.info/>`_

    For most of the time, you only use ``|`` and ``>-``. You use ``|`` after ``args:`` to specify arguments like the above example, and you use ``>-`` to specify a one liner argument, such as the command argument of ``bash -c``.


--------------------------
Define tasks by templating
--------------------------
The above example shows you to define a task by templating.
This is greatly inspired from the `Ansible Playbook <https://docs.ansible.com/ansible/latest/user_guide/playbooks.html>`_ and how the Ansible team uses a template engine, jinja2, to resolve the playbook. Ansible is an automation system in IT industry. It can deploy app and manage machine configurations automatically. The Ansible Playbook is also written in the YAML format, but it is generalized in the IT world.

.. note::

    The inspiring part acturally comes from how Ansible Playbook resolves a configuration template using a web template engine, jinja2.
    The original purpose of this template engine is to generate web pages by giving data and a web page template. It's smart to apply the template engine here.
    With a (web) template engine, we can specify loops and conditions in a straightforward basic text.
    Since i built the ``workflow-player`` in Pure JavaScript, i found an equivalent template engine: Nunjucks. If you would like to implement your playbook runner in python, you can directly apply jinja2 as part of your template engine.

These templating systems have a special feature, **filter function**, that makes them really suitable for task definitions.
The **filter function** allows us to transform from one value to another by using the pipe character, ``|``, followed by filter function name.
You can consider the filter function as a value-transform function.
For example, we can use a filter function like ``capitalize`` to transform a string to be capitalized.

Several specialized filter functions that commonly used when defining tasks. For example,

.. code-block:: yaml

    - batch-items: "{{ var.mergedSeqFolder | listFromFileGlob(['*.fastq.gz', '*.fq.gz']) }}"
      task-template:
        name: 'some-batch-task'
        image: 'some-image'
        args:
        - "{{ item | pathMapping }}"

First of all, the template engine resolves strings that wrapped between ``{{`` and ``}}``.
You may consider the content of the ``batch-items`` as giving a folder path (left-hand side of the ``|``) to the filter function, ``listFromFileGlob``.
Then, this filter function transforms the given folder path 
The above example uses the ``listFromFileGlob`` filter function, so that we can use globbing expressions to get a list of matched file paths that inside the ``mergedSeqFolder`` folder.
The resulting list is used as batch-items that will be iterated to execute the batch tasks. In this one-line definition, you already declare a batch task for all the matched files. As for the parallelism, it depends on the concurrency parameter. When the concurrency equals to 1, these jobs are executed sequentially. But the concurrency setting is controlled by the end users instead of developers. So, the task parallelism is not handled by developers. It's not part of the playbook.

All other value transforming is in this writing style, just the pipe ``|`` followed by filter functions. That's all.

Let's use a more advanced example to define real workflow.

----------------------------------
A full examplary workflow template
----------------------------------

The following defines an examplary workflow.

.. code-block:: yaml
    :linenos:

    ---
    - var: # This is a step 1 task
        # This trimmedSeqFolder folder contains all the trimmed sequence files.
        trimmedSeqFolder: "{{ argv[0] }}"
        # A folder that contains one reference genome file: refgenome.fa (other files in this folder are bwa indexed files)
        # a refgenome folder expects only one *.fa file.
        refGenomeFolder: "{{ argv[1] }}" 
      # This is a batch task containing multiple jobs.
      batch-items: "{{ var.trimmedSeqFolder | listFromFileGlob(['*_trimmed.fq']) | sort }}"
      task-template:
        name: run-bwa
        condition: "{{ true if item}}"
        image: quay.io/biocontainers/bwa:0.7.17--ha92aebf_3
        exec: bwa
        args:
        - aln
        - -t
        - "{{ option.cpus }}"
        - -f
        - "{{ var.trimmedSeqFolder | suffix('/' + path.basename(item, '_trimmed.fq') + '.sai') | pathMapping }}"
        - "{{ var.refGenomeFolder | listFromFileGlob(['*.fa']) | sort | first | pathMapping }}"
        - "{{ item | pathMapping}}" # The trimmed fastq file.
        option:
          setUser: true
    - task-template: 'another-template' # This is a task of step 2.
      args:
    ...

The above example uses the bwa to map sequencing data to a reference genome.

.. tip::

    **No need to use another file to pipe these tasks.** Constructing workflow is just like stacking building blocks.
    You can concatenate the blocks (here, a block begins with ``- var:``) to form a pipeline. Just making sure that your ``var.name`` is valid and compatible.

1. **Line 1** declares a YAML document start. And you may noticed that the lines 2 and 21 start with a ``-``. In the YAML format, they are list (array) elements. Workflow runner can parse this array structure to execute each of these tasks in order.

2. **lines 2-7** declared the variables for template to use. The values for these variables are from the global arguments. You can see this as setting alias. With the alias, you won't change the content of ``task-template`` whenever the argument orders are changed. These variables will be existed until overwrite. Namely, the step 2 can directly use declared ``var.trimmedSeqFolder`` without specifying again.

3. **Line 9** declares an item list and each item will be used to resolved the ``task-template`` to produce a job in this batch task. Therefore, if we got 10 items in the ``batch-items`` and all of their ``task-template.condition`` is true, there will 10 jobs in this batch task. The workflow runner will wait all the 10 jobs to finish. Then, the workflow proceeds to the next step.

4. **Line 10-24** is the task template. It contains properties of ``name``, ``image``, ``exec``, ``condition``, ``args``, and ``option``.
    
    * The ``name`` is used as a key and is defined by developers. This is mainly used to identify the task.
    * The ``image`` is the full container path.
    * The ``exec`` is the executable. For a common use case, you can use ``/bin/sh`` or ``/bin/bash`` here and use ``-c`` to formulate your commands.
    * The ``condition`` tells if this task will be executed or not. If undefined, the ``condition`` is true. If set to any string other than 'true' or 'TRUE', this task will be ignored.
    * The ``option`` can set additional settings for workflow runner. Here, this option will be sent to our ``task-adapter``.
      The content of this ``option`` depends on the ``adapters``. You can set some runtime resources as default values, such as ``cpus`` or ``mem``.
      In this example, we can use ``setUser: true`` to notify the adapter that ``--user`` must be set when running the docker image.
      This prevents outputing files with root privileges.
    * The ``args`` can have two types: array or string. In this example, we can use the array type and you can see lines 12-18 begins with ``-`` .
      Values leading with the ``-`` will be resolved as argument values in order. This is used when there is a fixed number of known arguments. For a non-fixed number of arguments, use the string type. The string type is a more advanced usage and allows you to fully customized your arguments. Basically, the multi-line mode of the YAML will be used by using ``args: |`` or ``args: >``.  Under the hood, this string is expected as in YAML format and will be resolved as an array. So you can use ``{% for ... %} ... {% endfor %}`` to produce arguments of uncertain number.
    * The ``pathMapping`` filter function transforms your host path to a path inside the container. The Workflow runner will do the volume mapping for you. This is probably the most frequently used filter function.

.. tip::

    * The key orders are not important. That is, the order of ``name``, ``condition``, ``exec``, etc. can be exchange.
    * The list elmenets inside ``args`` may be important. It is the order of the input argument for the ``exec``.
    * We allow array of array here to define your tasks, so that your workflow can have multiple (batch) tasks executed concurrently in one step. If a step contains multiple tasks, you can start the line with ``- - task-template:`` to declare array of array using the YAML format. The workflow runner will wait for all the tasks in a step to finish.
    * Because indentation is important in the YAML format, using text editors like `Sublime Text <https://www.sublimetext.com/>`_, `Visual Studio Code <https://code.visualstudio.com/>`_, or `Notepad++ <https://notepad-plus-plus.org/en>`_ is recommended. They can help you to collapse items for a clear view.


