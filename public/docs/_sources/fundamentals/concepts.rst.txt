========
Concepts
========

In this section, we introduce several basic concepts and terms in the Big Data Processor (BDP) system.

User Roles
==========

We categorized user roles into 1) users, 2) developers, and 3) administrators.

- **Plain users**, including normal users and power users, can create Project, execute Tasks, and manage DataFile and Result records.
- **Developers**, including task builders and task managers, can operate what a plain user can do. Additionally, a developer can construct Packages by defining Tasks and workflows.
- **Administrators** can manage user privileges and do all the above mentioned actions. An administrator can see and edit all projects and packages with full privileges.

BDP provides basic user privileges for the above user roles. Please see the administration sections.


User Operation Scheme
=======================

.. 
   image:: ../images/BDP_system_operation_scheme.png
   :width: 600
   As shown in the above figure of operating scheme,

A Project contains DataFiles and Results, 
while Task definitions and customized Pages are stored in a Package.
Projects are created by plain users and Packages are created by developers. 

A basic data cycle (highlighted in the blue color) may start by creating a project with selected packages.
Users can then upload files to this project and these files become DataFile records.
After tagging appropriate file tags to DataFile records, users can execute tasks that belong to the selected packages.
Once after task parameters are set, the task is executing and all the provenance of a task is stored as a Result record. 

Almost everything related to a task execution is recorded in a Result.
You may see the Result records as histories.
A Result records task status, parameters including input/output files, 
the runtime configurations, standard output/error, the task commands, the running time and all related information.
After task executions, new DataFile records may be created in the Project and these DataFiles may be used as inputs of another task.
In this way, a workflow can be executed manually or automatically.

In fact, a workflow-typed Task can be easily constructed by piping Tasks.
We provide web interfaces that allow developers to construct workflows from Tasks by just mouse clicks and drag-and-drops.
If users execute the workflow-typed Task, the Result records the progress and all sub-Tasks of the workflow as children Results.


Task Definition Language
========================
To further ease the task definitions on web, we developed a new task definition language, the Workflow Playbook.
The workflow playbook is a concise task configuration format for fast and portable workflow constructions.
It is written in the `YAML <http://yaml.org/>`__ format and is inspired by the `Ansible Playbook <https://docs.ansible.com/ansible/latest/user_guide/playbooks.html>`_.
With the templating concept, we can simplify the workflow definitions. It is desinged to be human-readable format.

Compared to the `Common Workflow Language (CWL) <https://www.commonwl.org/>`_, workflow playbook is more concise and easy to write.
The CWL is also written in the YAML format and provides detailed configurations to define tasks and workflows. 
We believe that the workflow definitions can be more concise through templating, instead of verbose configurations.
Besides, we can easily write for-loops or do if-else conditions via templating while the CWL currently hasn't supprted them.

We expect this concise format is easy enough for non-expert people to understand and write without learning additional domain-specific languages.
In addition, this workflow playbook is seamlessly integrated on the Big Data Processor so that we can write the worklfow playbook directly on the web page.


.. seealso::
    For further information of task definition language, please see the :doc:`the introduction of Workflow Playbook<../workflow-playbook/introduction>`.





Portable workflow execution
===========================
We recommended that developers apply the container techniques to make workflow protable.
Each task in a workflow is encouraged to be executed through a container, such as Docker or Singularity container.
A container carries its good runtime environemnts.
The dependent libraries or the required tools can be pre-installed inside the container image,
so that tasks are guaranteed to be executed successfully inside the well-defined container environment.
This makes tasks portable.

When executing the containerized tasks, the defualt behaviors of BDP will mount two folders to the container.
The Project and Package folders on the host will be mounted to ``/project`` and ``/package`` inside the container.
With our Workflow Playbook, developers will NOT worry about the actural file locations, since these loactions are specified by users at the moment of task execution.


We also recommended that containers contain only the required environments such as libraries or tools, 
and the Package folder which contains task scripts are mounted right before task executions.
BDP provides web interface to allow developers to edit task script files. In this way, 
developers can edit their scripts and execute them directly without updating container images.


