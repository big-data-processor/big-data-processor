============
Installation
============

Big Data Processor is a cross-platform, web-based workbench. You can host the server on operation systems of Linux, MacOS, or Windows.

.. note::
    **TL;DR**

    1. Install `NodeJS <https://nodejs.org>`_ , `Git <https://git-scm.com/>`_ and `Docker <https://www.docker.com/>`_ .
    2. Use the following commands to start the server with default configurations.

        .. code-block:: shell

            git clone https://github.com/big-data-processor/big-data-processor.git
            cd big-data-processor
            npm install
            
    3. Copy the ``./configs/server-config-template.yaml`` to ``./configs/server-config.yaml``.

        .. code-block:: shell

            cp ./configs/server-config-template.yaml ./configs/server-config.yaml
    4. Configure this ``server-config.yaml`` file.
    5. Start the server via the following command.

        .. code-block:: shell

            npm start
    6. Open your browser and open `http://localhost:8080 <http://localhost:8080>`_  (the web address depends on your configuration).
    7. Register the first account as the system root and you are good to go.

----------------
1. Prerequisites
----------------

Big Data Processor (BDP) requires `NodeJS <https://nodejs.org/en/>`_ and `MongoDB <https://www.mongodb.com/>`_ to work.

We encourage you also install and setup the `Docker <https://www.docker.com/get-docker>`_, since the server can help you to automatically create and set up a containerzied mongoDB instance.

To further ease the installation and update processes, we recommended you to install the `Git <https://git-scm.com/>`_, which is a version controling tool.

Please make sure that you can directly use commands like ``node -v`` or ``docker -v`` to check the installed versions.
Please also make sure that the docker daemon process is running.

Installing both NodeJS as well as Docker requires root privileges. But the remaining steps do NOT require the elevated privileges.

.. important::
    For Linux users, be sure to add your account into docker user group so that you can directly use the command ``docker run ...`` without ``sudo``.
    Due to `security issues <https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface>`_, 
    you might want to create an account without the sudo prvilege. Use this non-root account to start the BDP server.

---------------
2. Installation
---------------

2.1 Get the released files
--------------------------

Use either of the followings.
A) Download the released zip file from `our release page <https://github.com/big-data-processor/big-data-processor/releases>`_ and unzip the compressed file.
B) Download the code via ``git clone`` if you have `Git <https://git-scm.com/>`_ installed, such as

.. code-block:: shell

    git clone https://github.com/big-data-processor/big-data-processor.git

2.2 The file structure
----------------------

This downloaded folder is referenced as `big-data-processor`.
The file contents of this folder should be seen as the following.

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

2.3 Install dependencies
------------------------

Change directory to this ``big-data-processor`` folder.

Then, use the command, ``npm install``, to install all the required dependent packages.

This will take you a few minutes to install. After ``npm install``, you will see the newly created ``node_modules`` folder.

.. code-block:: shell

    # Change directory path to the git cloned or uncompressed ``big-data-processor`` folder.
    cd ./big-data-processor
    npm install


.. _configure-server:

----------------
3. Configuration
----------------
**(For a quicker taste of Big Data Processor, you may proceed to the** :ref:`next step <start-server>`).

3.1 The configuration file
--------------------------

The configuration file path should be ``./configs/server-config.yaml``.

If not existed, you may copy the file ``./configs/server-config-template.yaml`` to ``./configs/server-config.yaml``.

If you do NOT have the ``./configs/server-config.yaml`` file, the server will automatically created the file by copying contents from ``./configs/server-config-template.yaml``.


You may want to configure the config file ``./configs/server-config.yaml`` although the default settings can be directly used.
The most important configurations are the database settings for ``mongoDB`` and the file path settings.


3.2 Configure the mongo database connection
-------------------------------------------

BDP server will try to connect to the MongoDB based on the settings in that config file.

The database configurations are located in the ``mongoDB`` field in the config file.

    .. code-block:: yaml

        mongoDB:
            db_name: bdpDB # change to a preferred database name
            mongoUser: bdpDBuser # change to a preferred username
            mongoPwd: your_bdp_db_password # change to a preferred password
            mongoHost: localhost
            mongoPort: 27017
            containerName: bdp-mongo # If failed to connect to database with above settings, the server tries to start or initiate a mongoDB instance through docker
            dockerVolumeName: bdp-mongo-data # the docker volume name for the MongoDB container instance storages

If you already had a mongoDB instance, you configure the ``db_name``, ``mongoUser``, ``mongoPwd``, ``mongoHost``, ``mongoProt`` to connect to the mongoDB instance.
The ``containerName`` and ``dockerVolumeName`` will be ignored if the above settings make BDP server connect to your databases.

Don't worry, if you haven't any MongoDB installed, BDP server will automatically set up one MongoDB through Docker.
Before starting the server, you can change the ``db_name``, ``mongoUser``, ``mongoPwd`` for your desired database name, username, and password, respectively.
In addition, you also need the ``containerName`` and ``dockerVolumeName`` to set a Docker container name for MongoDB and a volume name for Docker to create storage Volume.

.. note::
    **Some notes about Docker**

    The Docker container name and the volume name should be unique, since you may have multiple Docker volumes and containers. 
    If the database connection failed, BDP firstly tries to initiate the container name if it existed. 
    If failed, it tries to create a volume with the specified ``dockerVolumeName`` and create the container for MongoDB.
    
    You could use the command ``docker ps`` or ``docker ps -a`` to see the initiated containers that are running or not.
    As for the docker volume, use the command ``docker volume ls`` to view the created volumes. 
    To further inspect Docker instances, please see `docker inspect <https://docs.docker.com/engine/reference/commandline/inspect/>`_.
    The default ``containerName`` is ``bdp-mongo`` and the default ``dockerVolumeName`` is ``bdp-mongo-data``. You can change to your preferences.

.. danger::
    **Avode removing your database storage**

    Please be careful if you want to remove the Docker volume, such as the commands ``docker volume rm <volume-name>`` or ``docker volume prune``.
    You will remove the actual database storage.

.. note::
    **To backup database in the Docker volume**

    You can use `volumerize <https://github.com/blacklabelops/volumerize>`_. or other software to backup your data in a Docker volume.
    In case you would like to backup the data in the Docker volume. The default volume name is ``bdp-mongo-data`` in the ``./configs/server-config.yaml``.
    After **stopping the container that uses the volume,** The following commands can compress all the database files in your desired folder on your computer.

    Before you use the following command,
    be sure to change ``<your-host-folder>`` to your desired path. Also, change ``bdp-mongo-data`` to your settings if you have changed it.

    .. code-block:: shell

        docker run --rm -v bdp-mongo-data:/data -v <your-host-folder>:/backup busybox tar cvf /backup/backup.tar /data

.. note::
    **To restore database files to the Docker volume**

    You may use the following command to restore the tarball to a new and empty Docker volume.
 
    .. code-block:: shell

        docker volume create bdp-mongo-data2
        docker run --rm -v <your-host-folder>:/backup -v bdp-mongo-data2:/data -w="/data" busybox tar xvf /backup/backup.tar --strip 1

    We store the information of BDP in the mongoDB database while the actual data files store in your filesystem.
    They are separated but associated. BDP uses database id as the filename. Therefore, we need the database to manage all data files.
    It's important to note that the file paths are not yet portable (but will be!).

.. seealso::
    The server configureations  

3.3 Configure file locations
----------------------------

The default file locations are all located inside the current working directory, namely the `big-data-processor` folder.
You can configure the ``system.dataFilePath``, ``system.scriptFolder``, ``system.uploadFolder``, ``system.packageFolder``, and ``system.taskLogFolder`` to your desired locations.

.. warning::
    **Currently, please do NOT change these folder locations once after starting the server.**
    
    Changing the ``system.dataFilePath`` or ``system.packageFolder`` results in multiple locations of project and packages.
    Newer projects and packages will be located in the newer locations, while older projects and packages remain in their original locations.
    Changing these paths may lead to unexpected errors.
    As for ``system.taskLogFolder``, the result logs may be missing unless you move the original ``taskLogFolder`` into the new ``taskLogFolder``. 
    The BDP system will try to find task logs for their corresponding results.
    
    In futher releases, the server will help you to migrate these files.

3.4 Configure additional information
------------------------------------

There are other miscellaneous configurations in the ``./configs/server-config.yaml`` file. These additional settings can be changed and taken effect by restarting the server.

1. You can configure the BDP system to use secure HTTPS, instead of the default insecure HTTP protocol. By giving the ``https.credentialkey`` and the ``https.certificate`` file paths, the server will automatically host the HTTPS service.

2. The server can send verification email for user registrations if you provide the ``email.smtpConfig`` information.

3. BDP allows the reCaptcha option to prevent robot registrations if you provide the ``reCaptcha.reCaptchaSecret`` and ``reCaptcha.reCaptchaSiteKey``.

4. The third-party oAuth login (currently, only the Google oAuth login is available) option will be available if you provide the ``GoogleAuth.clientID`` and ``GoogleAuth.clientSecret``.

Please see the System Administration for detailed information.

.. _start-server:

----------------------------------
4. Start Big Data Processor server
----------------------------------


Use the the following command in the ``big-data-processor`` folder.

.. code-block:: shell

    npm start

.. tip::
    You do NOT need root privileges to start the BDP. We do NOT recommend to run BDP with root privileges.
    If you need to use port number smaller than 1024 in the Linux operation system, please allow ``node`` to use smaller port number by ``setcap``.
    The ``setcap`` command may look like this (in CentOS7):

    .. code-block:: shell

         setcap 'cap_net_bind_service=+ep' `which node`


------------------------------------------------
5. Register the first account as the system root
------------------------------------------------

Open your web browser and goto the `http://localhost:8080 <http://localhost:8080>`_ (the web address depends on your configurations).

This is the default settings. You can change the domain name and the server port by modifying the ``serverConfig.site_domain`` and ``serverConfig.port`` values in the ``./configs/server-config.yaml`` file.

Register the first account as the system root and this is currently the only account that can manage other users.
All additional users require the account approval from system root.

.. seealso::
    You can start using BDP by installing the first demo package, 
    Please see the Getting Started session.


