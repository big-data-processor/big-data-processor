.. Big Data Processor documentation master file, created by
   sphinx-quickstart on Wed Aug  1 10:37:11 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to Big Data Processor's documentation!
==============================================
Big Data Processor (BDP) is a light-weight, yet complete and scalable workflow platform.
This web workbench not only focus on **workflow portability**, **reproducibility** and **reusiblity** but also **portable data visualizations**.
Most workflow management systems can only help us to execute and monitor workflows. Users have to find their way to explore the results.
Here, with our Page system, users can visualize results interactively right after workflow executions, since package developers can freely develop web interfaces for their specific workflows.

**All on web pages!**

This web workbench provides web interfaces that covers project management, workflow executions, task monitoring, and even portable package building.
Packages of BDP are in a portable format that can be installed on every BDP hosts by just mouse clicks.
Then, these workflows in the packages are ready to run with near-zero configurations!

The coolest part is that we also provides the web proxy functionality. Our Page system can serve containerized web services or even desktop applications such as R/Shiny apps, RStudio, Jupyter Notebookor Matlab IDE and many more!

.. toctree::
    :maxdepth: 1

    Introduction<introduction>
    Installation<installation>

.. toctree::
    :maxdepth: 4
    :caption: Concept

    Full steps to construct a pipeline<tutorials/tutorial-full-step-pipelines>
    Task deployment on Google Cloud Platform<tutorials/tutorial-task-deploy-GCP>
    Non-root MongoDB Installation<tutorials/mongodb-non-root-installation>

.. toctree::
    :maxdepth: 4
    :caption: Quick Start

    Full steps to construct a pipeline<tutorials/tutorial-full-step-pipelines>
    Task deployment on Google Cloud Platform<tutorials/tutorial-task-deploy-GCP>
    Non-root MongoDB Installation<tutorials/mongodb-non-root-installation>
    
.. toctree::
    :maxdepth: 4
    :caption: Basic usages

    Manage projects
    Import files
    Execute tasks
    Collect results
.. For users<web-interface/the-web-interface-user>
    For administrators<web-interface/the-web-interface-admin>
    For pipeline developers<web-interface/the-web-interface-pipeline-dev>

.. toctree::
    :maxdepth: 4
    :caption: Package Constructions

.. Best practice to plan your tasks<pipieline-development/task-best-practice>
    Manage Packages
    Define Tasks<pipieline-development/task-definition>
    Pipe your Tasks into workflows
    Customized Pages for your workflows
    Building package container<pipieline-development/bdp-package-container>
    Create your package list<pipieline-development/create-package-registry>

.. toctree::
    :maxdepth: 4
    :caption: System Administrations

    User managment
    Package settings
    Enable Google 3rd party sign-in<administration/allow-google-sign-in>
    Enable Google reCAPTCHA


.. toctree::
    :maxdepth: 4
    :caption: 

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

