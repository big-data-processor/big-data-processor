===========
Quick Start
===========


.. note::
    **TL;DR**
    
    Use the following commands to start the server with default configurations.
    Then, open your browser and open `http://localhost:8080 <http://localhost:8080>`_ .

    .. code-block:: shell

        git clone https://github.com/big-data-processor/big-data-processor.git
        cd big-data-processor
        npm install
        npm start

----------------
1. Prerequisites
----------------

Big Data Processor (BDP) requires `NodeJS <https://nodejs.org/en/>`_ and `Docker <https://www.docker.com/get-docker>`_ to automate many chores.
Please follow their guidelines to install these two prerequisites. 


.. note::
    This platform also requires the `MongoDB <https://www.mongodb.com/>`_ database.
    To ease the setup process, the server can initiate one MongoDB instance via Docker automatically if you do not have one.
    You may skip the mongoDB installations and setups.

Please make sure that the `PATH` environmental variables have been set for ``node`` or ``docker``, so you could use commands like ``node -v`` or ``docker -v`` to check versions.
Please also make sure that the docker daemon process is running.

Installing both NodeJS as well as Docker requires root privileges. But the remaining steps do NOT require the elevated privileges.

.. important::
    For Linux users, be sure to add your account into docker user group. So you can use the command `docker run ...` without `sudo`.
    Due to `security issues <https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface>`_, 
    you might consider to create an account without the `sudo` prvilege that is specifically used to start the BDP server.

---------------
2. Installation
---------------

Download the compressed zip file from here and decompress it to a folder named ``big-data-processor``. Or download the code via ``git clone`` such as.

.. code-block:: shell

    git clone https://github.com/big-data-processor/big-data-processor.git



In the following, we reference this folder as `big-data-processor`.
The file contents should be seen as the following.

::

    big-data-processor
    ├──configs
    |  ├──server-config-template.yaml
    ├──public
    |  └──...
    ├──big-data-processor.js
    ├──big-data-processor.js.map
    ├──paakage.json
    └──package-lock.json


Use a command line terminal and change directory (cd) to this ``big-data-processor`` folder and type ``npm install``. The ``npm install`` will install all the required dependent packages.
This will take you a few minutes to install. After ``npm install``, you will see a ``node_modules`` folder created and all dependent 

.. code-block:: shell

    cd ./bio-data-processor # Change directory path to this ``big-data-processor`` path.
    npm install


.. _configure-server:

----------------
3. Configuration
----------------
**For a quicker taste of Bio-Data Processor, proceed to the** :ref:`next step <start-server>`.

Copy or rename the file ``./configs/server-config-template.yaml`` to ``./configs/server-config.yaml``.
You can configure server settings in the file ``./configs/server-config.yaml``.
The most important configurations are the database settings ``mongoDB``.

BDP server will try to connect to the MongoDB based on the settings in that config file.
Don't worry, if you haven't any MongoDB installed, BDP server will automatically set up one MongoDB through Docker.
You can change the ``mongoDB.db_name``, ``mongoDB.mongoUser``, ``mongoDB.mongoPwd`` for your desired database name, username, and password, respectively.
In addition, you need also the ``containerName`` and ``dockerVolumeName`` to set a Docker container name for MongoDB and a volume name for Docker to create storage Volume.

.. note::
    **Some notes about Docker**
    The Docker container name and the volume name should be unique, since you could have multiple Docker volumes and containers. 
    If the database connection failed, BDP firstly tries to initiate the container name if it existed. 
    If failed, it tries to create a volume with the specified ``dockerVolumeName`` and create the container for MongoDB.
    
    You could use the command ``docker ps`` or ``docker ps -a`` to see the initiated containers that are running or non-running.
    As for the volume, use the command ``docker volume ls`` to view the created volumes. 
    To further inspect Docker instances, please see `docker inspect <https://docs.docker.com/engine/reference/commandline/inspect/>`_.
    The default ``containerName`` is ``bdp-mongo`` and the default ``dockerVolumeName`` is ``bdp-mongo-data``.

.. danger::
    Please be careful if you want to remove the Docker volume, such as the commands ``docker volume rm <volume-name>`` or ``docker volume prune``. You may remove the actual database storage. The default ``<volume-name>`` for this quick-start is ``bdp-mongo-data``.

.. note::
    **Data backup and restore**
    You can use `volumerize <https://github.com/blacklabelops/volumerize>`_. or other software to backup your data in a Docker volume.
    Below is a quick way to get a tarball from your MongoDB files.

    **To backup database in the Docker volume**
    In case you would like to backup the data in the Docker volume. The default volume name is ``bdp-mongo-data`` in the ``./configs/server-config.yaml``.
    After **stopping the container that uses the volume,** The following commands can ``tar`` (compress) all the database files in your desired folder ``<your-host-folder>`` on your computer.

    .. code-block:: shell

        docker run --rm -v bdp-mongo-data:/data -v <your-host-folder>:/backup busybox tar cvf /backup/backup.tar /data

    **To restore database files to the Docker volume**
    You may use the following command to restore the tarball to a new and empty Docker volume.
 
    .. code-block:: shell

        docker volume create bdp-mongo-data2
        docker run --rm -v <your-host-folder>:/backup -v bdp-mongo-data2:/data -w="/data" busybox tar xvf /backup/backup.tar --strip 1

    We store the information of Bio-Data Processor in the mongoDB database while the actual data files store in your filesystem. They are separated but associated. Bio-Data Processor uses database id as the filename. Therefore, we need the database to manage all data files.



If you already had a mongoDB instance, you firstly configure your MongoDB with proper privileges. Secondly, you specify the ``db_name``, ``mongoUser``, ``mongoPwd``, ``mongoHost`` and these indicate database name, the username, password and the mongoDB location, respectively. The ``containerName`` and ``dockerVolumeName`` will be ignored.

.. seealso::
    The server configureations  


.. _start-server:

----------------------------------
4. Start Bio-Data Processor server
----------------------------------


Use the the following command in the ``bio-data-processor`` folder.

.. code-block:: shell

    node bioData-processor

.. tip::
    You do NOT need root privileges to start the Bio-Data Processor. We do NOT recommend to run with root privileges. If you need to use port number smaller than 1024 in linux operation system, you could allow ``node`` to use smaller port number by ``setcap``. The ``setcap`` command may look like this (in CentOS7):

    .. code-block:: shell

         setcap 'cap_net_bind_service=+ep' `which node`


---------------------------------------------------------
5. Register the first account as the system administrator
---------------------------------------------------------

Open your web browser and goto the `http://localhost:8080 <http://localhost:8080>`_.

This is the default settings. You can change the domain name and the server port by modifying the ``serverConfig.site_domain`` and ``serverConfig.port`` values in the ``./configs/server-config.yaml`` file.

Register the first account and this is the only account that can manage other users. All additional users require administrator's approval.
Remember to change your role (auth for Bio-Data Processor) to ``9. Bio-Data Prcoessor admin`` so that you can have additional privileges to install packages, manage tasks, view the result histories and see the system error logs.

.. seealso::
    The user guide for Bio-Data Processor


