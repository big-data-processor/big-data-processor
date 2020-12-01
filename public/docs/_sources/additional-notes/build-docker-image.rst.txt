=======================
Building a Docker Image
=======================


This document explains how to quickly prepare a Docker image from `the biocontainers base image <https://hub.docker.com/r/biocontainers/biocontainers>`_.
The biocontainers base image have a pre-installed conda environments.
The container is recommended to contain only the dependent libraries for your codes to run, so that you do not have to build a new image every time you modify your scripts.
The BDP mounts your codes to the container on the fly.

Let's start by explaining how the ``Dockerfile`` is written.

-------------
1. Base Image
-------------
We use the `biocontainers <https://biocontainers.pro/>`_ as our base image. You may see `their Dockerfile <https://hub.docker.com/r/biocontainers/biocontainers/~/dockerfile/>`_.
The following instruction shows that our package image is based on the ``bioconductors/bioconductions`` image.

.. code-block:: Docker

    FROM biocontainers/biocontainers:latest

The ``biocontainers/biocontainers`` image is built on top of ``ubuntu:16.04``. All modifications can be traced back based on its `dockerfile`.
It creates an account `biodocker` and installed several useful tools such as `conda` for developers to install their dependent packages/libraries.

-----------------------------------------------------------------
2. Install required packages/libraries that needs root privileges
-----------------------------------------------------------------

The following snippet in the `dockerfile` file instructs the Docker to build your image with the instructions.
The `RUN` instruction shows you to install the latest NodeJS version for demonstration.

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
3. Install required packages/libraries that need NOT root privileges
--------------------------------------------------------------------
Because the `biocontainers` image has created a user account ``biodocker``, you can switch to the biodocker account to install the required packages or libraries.
The following snippet showing how to switch the user to `biodocker` (from `root`).

.. code-block:: Docker

    USER biodocker

The followings show four ways to install the required packages:

When the tools are already in `conda`
=====================================
Default conda channels ``r`` and ``bioconda`` were already set in the biocontainers base image, you can directly use these channels.
Or you may need the ``-c`` argument to specify the channel. (e.g. ``conda install -c conda-forge nodejs``)

You may also find other conda packages from the `anaconda website <https://anaconda.org/>`_.

.. code-block:: Docker

    RUN conda install r-base=3.3.2 \
                      samtools=1.4 \
                      bwa=0.7.15 \
                      fastqc=0.11.5 \
                      cutadapt

Although it is optional, but is best to specify the version of these required packages/libraries.

When tools need to be downloaded from internet
==============================================
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

---------------------------
4. Building from Dockerfile
---------------------------
In the directory where the ``Dockerfile`` locates, call ``docker build -t 'your-docker-image-name' .``.
(Don't forget the last ``.`` in your command, that specifies the Dockerfile locations, which is the current working directory ``.``.

.. tip::
    It is recommended to use `gitlab <https://gitlab.com/>`_ to save your scripts as well as the container registry. It is free for personal use.



Volume mapping from host folders to docker containers
=====================================================

The `VOLUME mapping <https://docs.docker.com/engine/reference/run/#volume-shared-filesystems>`_ is **automatically processed** in Big Data Processor.
The Docker Adapter mounts the project folder and the package folder to the container with the paths ``/project`` and ``/pacakge`` folders, respectively.
This means your scripts that editing on the BDP can be accessed in the ``/package/scripts``.



.. seealso::
    To fully understand how to map volumes between hosts and containers, please read the `docker run reference <https://docs.docker.com/engine/reference/run/>`_ (the ``-v`` part).


