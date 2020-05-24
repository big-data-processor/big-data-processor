===========================================================
Guideline to plan tasks into packages on Bio-Data Processor
===========================================================

.. attention::
  **Targeted readers**: pipeline developers

Bio-Data Processor is a **light-weight**, yet **complete** and
**scalable** platform for bio-data processing. Instead of supporting
every circumstances to execute tasks, we set a few rules for your
scripts/programs to easily integrate into Bio-Data processor.

---------------------
Four mandatory points
---------------------

1. Do expose all output paths as input arguments.
=================================================

All output files/folders have to be specified through arguments when executing your script/program. Namely, Your scripts/programs should accepts arguments of all output file/folder paths. In this way, Bio-Data Processor can then understand which arguments are the task outputs and can track these output file/folder as data file records.

.. tip:: A task may generate many output files. In this case, we can plan to generate a single output folder for this task, and all output files with any complex folder structure can then be organized in this folder.

.. tip:: Intermediate outputs are recommended to be generated inside an output folder. When this output folder is set as an argument, users can directly examine these intermediate outputs on Bio-Data Processor.

.. warning:: Bio-Data Processor does not tightly control the file outputs to maintain light weighted. Developers are suggested to know where the output files are (see :ref:`the third suggested point below <dangerOutput>`). If the outputs are created in the ``current working directory``, we provided web interface for you to set the ``cwd`` property for that task. The default ``cwd`` is the ``$ProjectFolder`` that specifies the project folder path.

2. For input/output files, accepts the absolute full path(s) as arguments.
==========================================================================

Although Bio-Data Processor can set working directory when performing a task, it is recommended for a task to accept absolute paths as input/output file arguments. Bio-Data Processor keeps its own file structures and all file names. 

.. tip:: If a task **only accepts the output file/folder that is relative to the current working directory** (e.g. output prefix), you may consider setting the task current working directory as the ``$ProjectFolder`` on the Bio-Data Processor and setting the argument to use only the output file/folder name only instead of the full path.

.. tip:: If a (batch) task **needs many input files**, try to plan the task that takes a single input folder as an argument that contains all the input files. 

3. Make sure to follow symbolic link of a folder
================================================

If your task accepts a single folder as an input argument, be sure to follow the symbolic link (soft link) when this folder is a soft-link to see underlying files.

4. Receive SIGTERM or SIGINT signal for gracefully stop processes
=================================================================

This is usually the default behavior for a script/program to stop. If your scripts/programs intercept these two signals, please make sure your task will stop itself gracefully, e.g. removing all intermediate files or stop all child processes.

----------------------
Three suggested points
----------------------

1. Wrap your tasks running inside a docker container.
=====================================================

Although Bio-Data Processor can execute commands directly using host resources, we strongly encourage you to plan all your tasks running inside a bio-container (a docker container that based on bio-container). In this way, these tasks are cross-platformed and users need not worry about the task running environments.

.. seealso:: We provide a way for you to encapsulate your tasks/pipelines into a package container of Bio-Data Processor.


.. tip:: Many adapters are developed to perform your tasks on different environments. (e.g. a server with a cluster architecture with SGE/PBS, cloud computing (Google Cloud/Microsoft Azure/Amazon web service, etc.), with CWL or WDL, or simply on a single workstation.)

.. tip:: If you plan tasks that are performed directly on the host, make sure you do use cross-platform language and all required environments are well-set on the host. We strongly recommend to do this only when testing or development purposes.


2. Do NOT handle batch tasks by yourself
========================================

Some tasks may process a bunch of files with same arguments. This is called a batch task. Most of the time, batch tasks are considered as independent tasks and can be executed parallel. If you hard-coded the ``for-loop`` inside your script, these tasks can only be executed one by one. Bio-Data Processor provides a way for you to configure this kind of batch tasks. You may loop over some kinds of lists, e.g. file globs, list from csv or excel files. Developers should focus on building each task unit and need NOT worry about the parallel task executions, since there may be different kinds of task parallelism or no parallel environments at run time.

Bio-Data Processor applied different kinds of adapters to handle the task parallelisms for you. For each task, developers configure ONE single task definition and the task can then be deployed on different run-time environments, e.g. a local workstation, High-Performance computing (HPC) clusters, cloud computings.

.. seealso:: Please click here to see how to define a batch task on Bio-Data Processor.


.. _dangerOutput:

3. Be careful when outputting files in input folders
====================================================

Usually, we do NOT recommended writing files in input folders, since the file writing conflicts may occur. That is, multiple process may write data into the same file. Usually, the OS will lock the file for the first process, and other process will not have permissions to write data. Hence, the task will fail. 

Bio-Data Processor allows writing files into input folders because the output details are not tightly controled. We preserve the most flexible circumstances to run a task. However, be sure to create unique files under the input folders.

.. tip:: Please write output or temp files in the output files. If the intermediate temp files are not so important, you may consider to write temp files into the ``/tmp/`` folder. Each task is independent in a docker container. Namely, the ``/tmp`` is not shared among different processes. In this way, you can write the temp file using the same name.