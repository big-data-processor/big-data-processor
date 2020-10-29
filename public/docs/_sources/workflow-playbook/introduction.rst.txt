=================================
Introduction of Workflow Playbook
=================================

Originally, we developed the Workflow Playbook for bioinforamticians. The goal is to simplify task definitions and make the definitions concise and intuitive.
This task definition language can be used for general purposes and is not limited to the field of bioinformatics.


Essential/minimal elements to define a task
===========================================
Most bioinformatics tools were executed via command line interface. Bioinformatics pipelines/workflows can be constructed by specifying these commands in desired orders.
In addition, certain steps may contain batch tasks that take different sets of arguments to run the same tool. A batch task contains multiple jobs to execute. For example, we may have a task that maps sequencing data to a refernece genome. Say, ten input sequencing files are needed to map a reference genome. Then, there will be ten jobs for this task. For each job, it is a single command to execute.

To simplify the definition, we consider only essential elements that form a command. A typical command contains 1) **executable**; 2) **arguments**; and 3) **container image**; 
We will focus on the first 2 elements first, for example:

.. code-block:: shell

    perl -Mbigum=bpi -wle print 'bpi(2000)'

The above command calculates pi to the 2000 digit accuracy. Here, the **executable** is the ``perl`` and the **arguments** contain four values in order: ``-Mbigum=bpi``, ``-wle``, ``print`` and ``'bpi(2000)'``. 

Some other workflow languages may consider the ``-Mbigum=`` as a prefix or an option. The ``bpi`` is then considered as the actural argument value.
In this way, multiple argument patterns may be formed. This is a nice feature, but we want to keep it simple and trying to reduce the complexity to learn.
Here, in Workflow Playbook, even if there is a leading option such as ``--output``, or ``-o`` for the following output path, it is just another argument. In this example, since the ``-Mbigum=`` and ``bgi`` do not have space to separate them, it is considered as one argument.

But how do we separate them especially when the ``bpi`` is the actural input value? We do not want the ``-Mbigum=`` as part of the input.
We got our solution: using template to define a task. The core of writing Workflow Playbook is to define task templates and executing it by resolving these templates.
In this case, we can set something like ``-Mbigum={{ argv[0] }}`` and the ``argv[0]`` specifies that the ``bpi`` comes from the first argument of the whole workflow.

What about the runtime environments? cpu, memory, job scheduler, etc. They are important too. But a portable pipeline should be made platform-agnostic.
It is the users' effort to specify these runtime parameters. Here, we consider it as inputs to run the Workflow Playbook.

Before we go into details about the template and the runtime environments, there is an additional essential element of a task: the **container image** path.

.. note::
    The **environment variables** can also be set in workflow playbook. But it is relatively less used in bioinforamtics tools.
    The environment variables can be defined in a task template and expose them as normal input variables for users to input. 

Tool/Library Dependencies within the container
==============================================
Container technologies, such as Docker or Singularity, are now getting popular. A containerized tool carries its own good runtime environments.
We need not worry about instaling the dependencies to use these containerized tool. Biocontainers produces many containerized bioinformatics tools/libraries.
In addition, multi-package biocontainers can also be built using a `web tool <http://biocontainers.pro/multi-package-containers/>`_, Not mentioning that wrapping tools inside containers is kinda easy.

With the container technology, bioinformatists can build portable tools more easily than before, This is why we consider the container image name as an additional element but it is optional. It is strongly adviced to use containerized tools for a portable pipeline.

Runtime environment: parallel or sequential task execution?
===========================================================
Developers won't be able to know the end users' runtime environments. If developers simply write a for-loop in scripts, it will be executed one by one.
This is fine on a single PC. When execute the task on the cloud or on a high-performance computing clusters, execute task in sequential becomes inefficient.
In another scenario, if workflow developers uses pbs/sge job scripts to define their workflows, it forces users to run on the HPC environments. This isn't a good portable workflow.
Therefore, workflow developers should focus only on the task essentials without worrying about the runtime environments. Runtime should be taken care by the workflow runner, here, in our solution, Workflow Player. We used task-adapters to handle this for you. The most important part is that the adapter can be easily customized to fit many kinds of runtime environments. A base adapter factory class can be extended to different use cases. In fact, we see the adapters as part of portable workflows. namely, ``a protable workflow = Workflow Playbook + (customized) Task Adapters + (custom filter functions)``. Don't worry, we are planning to implement many generalized adapters for everyone to use.

Expose output files/folders as arguments
========================================

To further simplify the task configurations, workflow developers need not define inputs/outputs in workflow playbook.
Only the three elements should be focused: ``executable``, ``arguments``, and ``container image``.
The information of inputs/outputs can be specified via the arguments.
The Workflow Playbook sees the output and input paths as file paths and is not aware of their differences.
They are only arguments.



In-place file structure
=======================

A task may take one input folder as an arguments and output files in this input folder.
Namely, the task outputs files into its input folders.
Some workflow systems consider input data to be read-only. Therefore, to achieve this output-to-input-folder behavior, staging inputs to outputs may be required to prevent writing conflicts.


The writing conflicts occur which multiple processes write to the same file at the same time. 
Usually, the first process will have privilege to write and lock the file. Other process cannot write the files and this causes the writing conflicts.
Since our Workflow Playbook does not aware of inputs/outputs, we didn't avoid the writing conflicts through playbook.
We consider that, for most cases, the writing conflicts can be avoid by giving different output file names if output files are in the same folder.
In addition, if a job is running inside a container, paths such as ``/tmp`` and ``/home/biodocker`` are independent among multiple jobs. Given the same tmp file name inside ``/tmp`` won't cause the write conflict.

This is a trade-off here. Workflow systems handle the inputs/outputs to prevent the writing conflicts but might require additional step to copy/move files.
This may take additional time especially when the file sizes are large.
In addition, bioinformatics pipelines may keep one single folder and all files are organized in a specific order.
By repetively using this folder as an input argument, output files are generated somewhere inside this folder.
In this case that the output folder is the input folder, we leave the issue of the write-conflict prevention to developers.
If avoiding the writing conflicts in development stage, workflow system won't need this staging file procedure.
