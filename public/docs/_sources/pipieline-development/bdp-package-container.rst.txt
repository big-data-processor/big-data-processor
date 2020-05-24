===============================================
Build a package container of Bio-Data Processor
===============================================

.. attention:: 
    | **Targeted readers**: pipeline developers.

------------
Introduction
------------
This document explains how tasks/pipeline(s) are packaged into a docker image for Bio-Data Processor. We provided a starter template that allows you to easily pack all your code into a docker image. You may need basic knowledge of unix-based command line, basic knowledge of Docker, or how command line tools are used, but i think this is not mandatory. I wrote this document for developers to easily do packaging. Then, the package can be easily shipped to the Bio-Data Processor and ready to use.

Let's start explaining how the ``Dockerfile`` is written.


Bring your development environment close to the production environment
======================================================================
It is recommended to wrap your own scripts inside a container. Thus, you can test and develop your scripts in this container. Once it is successful, it nearly guarantees that this container can be deployed everywhere of production environments. No need to install all the required libraries or packages again!

-------------
1. Base Image
-------------
We use the `biocontainers <https://biocontainers.pro/>`_ as our base image. You may see `their Dockerfile <https://hub.docker.com/r/biocontainers/biocontainers/~/dockerfile/>`_.
The following instruction shows that our package image is based on the ``bioconductors/bioconductions`` image.

.. code-block:: Docker

    FROM biocontainers/biocontainers:latest

The ``biocontainers/biocontainers`` image is built on top of ``ubuntu:16.04``. All modifications can be traced back based on its `dockerfile`.
It creates an account `biodocker` and installed several useful tools such as `conda` for developers to install their dependent packages/libraries.

-----------
2. Metadata
-----------
Just as the biocontainers recommended but it is optional.

.. code-block:: Docker

    LABEL base.image="biocontainers:latest" \
      version="1" \
      software="bdp-template" \
      software.version="1.0.0" \
      description="This is a template for building Bio-Data Processor Packages with docker." \
      website="https://github.com/bcgsc/bdp-package-template" \
      documentation="https://github.com/bcgsc/bdp-package-template" \
      license="https://github.com/bcgsc/bdp-package-template" \
      tags="bdp-package-template"
      maintainer="Chi Yang <chiyang1118@gmail.com>"

-----------------------------------------------------------------
3. Install required packages/libraries that needs root privileges
-----------------------------------------------------------------
**[The installation of `nodejs` is required. for our docker-wrapper to work.]**
The following snippet in the `dockerfile` file instructs the Docker to build your image with the instructions.
The `RUN` instruction shows you to install the latest NodeJS version. Using the latest NodeJS is preferred for using the ``bdp-docker-wrapper``, which is a wrapper function to wrap all your tasks.

You may also install other packages/scripts that require root privileges.

.. seealso::
    The dockerfile reference: https://docs.docker.com/engine/reference/builder/

.. code-block:: Docker

    USER root
    ENV NODE_PATH=/usr/lib/node_modules
    RUN apt-get update && \
        curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
        apt-get install -y nodejs && \
        apt-get clean && \
        apt-get purge --auto-remove -y curl

.. tip::
    You can see the commands after the `RUN` instructions as if you are using the Linux operation system.
    Instead of using multiple RUN instructions, using ``&& \`` to organize multiple commands into multi-lines. This will reduce the layers of cached images.
    use ``'\'`` to split one long line of a command into multi-lines.

--------------------------------------------------------------------
4. Install required packages/libraries that need NOT root privileges
--------------------------------------------------------------------
**[Optional, you need to setup the depedent libraries/packages for your code/library to work]**
Because the `biocontainers` image has created a user account ``biodocker``, we take this user as our file owner. It's best to execute scripts without root privileges unless it's necessary.
The following snippet showing how to switch the user to `biodocker` (from `root`).

.. code-block:: Docker

    USER biodocker

The followings show four ways to install the required packages:

When the tools are already in `conda`
=====================================

Because the ``Biocontainers`` image has already set default conda channels ``r`` and ``bioconda``, you can directly use these channels.
Or you may need the ``-c`` argument to specify the channel. (e.g. ``conda install -c conda-forge nodejs``)

You may also find other conda packages from the `anaconda website <https://anaconda.org/>`_.

.. code-block:: Docker

    RUN conda install r-base=3.3.2 \
                      samtools=1.4 \
                      bwa=0.7.15 \
                      fastqc=0.11.5 \
                      cutadapt

Although it is optional, but is best to specify the version of these required packages/libraries.

When the tools need to be downloaded from internet
==================================================
You can use ``curl`` or ``wget`` to retrieve contents from internet.
Remember to clean unneeded files that do not need after installation.

.. code-block:: docker

    RUN mkdir -p /tmp/trim_galore && \
        cd /tmp/trim_galore && \
        wget http://www.bioinformatics.babraham.ac.uk/projects/trim_galore/trim_galore_v0.4.3.zip && \
        unzip /tmp/trim_galore/trim_galore_v0.4.3.zip && \
        mv trim_galore /home/biodocker/bin/trim_galore && \
        rm -rf /tmp/trim_galore

Build from the source code
==========================
The following code block demonstrates an example to download the compressed source code. You need to decompress the file(s) and then build the executable from source codes. You may keep only the binary executable files. You might want to set the file to be executable by setting ``chmod 755 your-executable-file``. Remember to remove all unneeded files.

.. code-block:: docker

    RUN cd /tmp && wget http://search.cpan.org/CPAN/authors/id/T/TI/TIMB/DBI-1.636.tar.gz && \
        tar zxvf DBI-1.636.tar.gz && \
        cd /tmp/DBI-1.636 && \
        perl Makefile.PL && \
        make && \
        make test && \
        make install && \
        rm -rf /tmp/DBI-1.636 && \
        rm -f /tmp/DBI-1.636.tar.gz

Copy the scripts or files from other third party library
========================================================
You may arrange files into your own file structures. It is possible to directly copy files to the package container. Putting your files inside `/home/biodocker/` directory since this is the default home directory.

.. code-block:: docker

    COPY --chown=biodocker:biodocker ["./scripts-inside-container", "/home/biodocker/scripts/"]

More information about the `COPY instructions can be found <https://docs.docker.com/engine/reference/builder/#copy>`_.

Install packages via package manager(s) that do not need the root privilege
===========================================================================

If your scripts require ``npm`` packages and a `package.json` is provided in the folder `/home/biodocker/scripts`, you may need to run ``npm install`` inside that folder.
In fact, you may install required packages/libraries as if you are using a linux system. For example, use ``pip install`` to install python packages may be suitable for your needs.

.. code-block:: docker

    RUN cd /home/biodocker/scripts && \
        npm install && \
        npm cache clean

--------------------------------------------------------------------------
5. The `bdp-package` folder is required and contains the following folders
--------------------------------------------------------------------------
**[Required, Don't change]**
During package installation, this ``bdp-package`` folder will be copied to the host.
There are five sub-folders in the ``./bdp-package``

* **client**: All client-side scripts (mainly for interactive data visualization, haven't implemented yet :p)
* **configs**: If you need some post-installing configurations, files in the `bdp-package/configs` can be accessed through `/config/configs` at run-time. The contents of this folder are firstly copied to the BDP host and might be modified by BDP to different configurations, e.g. the cpu cores, memory size or other task configurations, etc. Then, the modified configurations can be accessed during run-time via `/config/configs` folder.
* **db**: All database-related files can be put here. The main required bdp-package.json can be automatically created online. You can simply download from BDP once your tasks are defined on BDP.
* **scripts**: All external scripts which can be directly called from your Bio-Data Process host. You may write your task-index.yaml and task-templates for your tasks. Our `task-portal.js` will magically understand your tasks so that tasks can be executed through BDP web pages.
* **data**: Additional data can be put here. The future plan is to include some demo/testing datasets in this folder for the demonstration purpose (not yet implemented).

.. code-block:: docker

    COPY --chown=biodocker:biodocker ["./bdp-package", "/home/biodocker/bdp-package"]

---------------------
6. The docker-wrapper
---------------------
**[Required, Don't change]**

The `docker-wrapper.js` and `bdp-tasks.yaml` are required. You do NOT change the `docker-wrapper.js` which will be executed everytime this package container is initiated. Then, it guards valid actions taht are defined in `bdp-tasks.yaml`. Invalid actions will be rejected and the process will be stopped.

Please fill the task definitions in the bdp-tasks.yaml. This file is always located in the home directory `/home/biodocker`. **Only the tasks with the valid action names can be performed**. The required information includes the **executable path**, **the scripts** and **all required arguments**.



.. code-block:: docker

    # Copy the `docker-wrapper.js` and `bdp-tasks.yaml` into the home directory.
    COPY --chown=biodocker:biodocker ["./docker-wrapper.js", "./bdp-tasks.yaml", "/home/biodocker/"]


.. seealso:: Configuring the ``bdp-tasks.yaml`` file.



---------------------------
7. Switch back to root user
---------------------------
**[Required, Don't change]**

The ``docker-wrapper`` needs the root privilege to change the user id and group id of the user ``biodocker`` to the external host user's ``uid`` and ``gid``.

It is relatively safe that all the tasks inside the image will be executed by this ``biodocker`` user.
This prevents the file owner issues for the output files. Despite that the user is switched to ``root``, the task will be performed on behave of the user ``biodocker``.

.. code-block:: docker
    
    USER root

------------------------------------------------------------------
8. Setting the ENTRYPOINT
------------------------------------------------------------------
**[Required, Don't change]**
Once this docker package container is initiated, the user id and group id will be set as the external host user to prevent producing files of root owner. This is done by ``docker-wrapper``.
The ``docker-wrapper.js`` will automatically execute the ``node /home/biodocker/docker-wrapper.js`` and do the aforementioned user/group id changing.
Also, it will check whether the task name has been specified. If not, the process will be terminated.

.. code-block:: docker

    ENTRYPOINT ["node", "/home/biodocker/docker-wrapper.js"]

---------------------------
9. Building from Dockerfile
---------------------------
In the directory where the ``Dockerfile`` locates, call ``docker build -t 'your-docker-image-name' .``. (Don't forget the last ``.`` in your command, that specifies the Dockerfile locations, which is the current working directory ``.``.

.. tip::
    It is recommended to use `gitlab <https://gitlab.com/>`_ to save your scripts as well as the container registry. It is free for personal use.


-----------------------
10. Testing your script
-----------------------

In order to test whether your tasks can work as expected, You may comment the ``ENTRYPOINT`` line (see below) and then call ``docker run --rm -it your-docker-image-name``.
This will let you log-in to that docker container as if you are using the linux operating system, since the base image is biocontainers which base image is ubuntu 16.04.

.. code-block:: docker

    # Comment the ENTRYPOINT so that you can log in to the linux.
    #ENTRYPOINT ["node", "/home/biodocker/docker-wrapper.js"]

Volume mapping from host folders to docker containers
=====================================================

The `VOLUME mapping <https://docs.docker.com/engine/reference/run/#volume-shared-filesystems>`_ is **automatically processed** in Bio-Data Processor.
Based on the biocontainers, the ``/data`` and ``/config`` folders can be mapped to external volumes.
The ``/data`` in Bio-Data Processor will be automatically mapped as the ``Project folder``,
while the ``/config`` folder is the ``Package folder``.
This means you may access ``/config/configs`` to find some configuration files inside docker container at run time.

.. seealso::
    To fully understand how to map volumes between hosts and containers, please read the `docker run reference <https://docs.docker.com/engine/reference/run/>`_ (the ``-v`` part).

.. tip::
    A more convenient way is to map folders that contain your scripts to a path inside container as the follows:

    .. code-block:: shell

        docker run -v your-script-folder-path:/home/biodocker/scripts -it --rm your-docker-image-name

    In this way, you can directly edit your scripts on your host and instantly test them inside container using the interactive tty mode (the ``-it`` option in the ``docker run`` command).
