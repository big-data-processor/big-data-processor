============
Introduction
============

Towards the next generation of the web workbench for data scientists
====================================================================

Big Data Processor (BDP) is a light-weight, yet complete and scalable workflow platform.
This web workbench mainly focuses on the workflow **portability**, **reproducibility** and **reusiblity**.
It is generic so that workflow builders can freely design their workflows into portable packages.

Portable and customizable web interface for workflows
=====================================================

Most workflow management systems mainly help us to execute and monitor workflows.
After that, users offten have to find their way to explore results.
Here, with BDP, workflow builders are allowed to freely develop web pages for their workflows 
both to provide guidances for workflow executions and to provide interactive data visualizations.
With these customized web pages, 
users can therefore visualize results interactively right after workflow executions.

Sometimes, a workflow may not be fully automated.
Some steps may require additional checks to decide parameters for the following analysis.
For this kind of semi-automatic workflows, a traditional solution is to construct a web services for each workflow.
Now, developers can have another choise.
With BDP, developers need NOT build another web application.
Instead, developers can freely develop web pages to communicate to BDP server without worrying about the backend server scripts.
We provide a javascript library so that developers do not have to handle HTTP request and response events by themselves.

Our goal is to make **all on web pages!**
=========================================

This web workbench provides web interfaces that covers project management, workflow executions, task monitoring, and package building.
Packages of BDP are in a portable format that can be installed on every BDP hosts by just mouse clicks.
Then, these workflows in the packages are ready to run with near-zero configurations!

The coolest part is that our Page system also provides the web proxy functionality.
Our Page system can not only serve the above mentioned customized web pages, but can also serve containerized web services or even desktop applications, such as R/Shiny apps, RStudio, Jupyter Notebook or Matlab IDE and many more!