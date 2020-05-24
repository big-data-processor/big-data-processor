=============================
MongoDB Non-Root Installation
=============================

.. attention:: 
    | **Targeted readers**: BDP users.

------------
Introduction
------------
This document shows how to install MongoDB without root privilege.

--------------------------------
1. Download Pre-compiled MongoDB
--------------------------------
Please download the `community version of MongoDB <https://www.mongodb.com/download-center#community>`_.
In this tutorial we used MongoDB 4.0.1 community version for RHEL 7 Linux 64-bit x64.

.. code-block:: shell

    cd ~
    wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.0.1.tgz

--------------------------------
2. Untar the tarball file
--------------------------------

.. code-block:: shell

    tar xvzf mongodb-linux-x86_64-rhel70-4.0.1.tgz
    cd mongodb-linux-x86_64-rhel70-4.0.1
    export PATH=$PATH:~/mongodb-linux-x86_64-rhel70-4.0.1/bin

-------------------------------
3. Create username and password
-------------------------------

The details of this session can be found in `<https://docs.mongodb.com/manual/tutorial/enable-authentication/>`_

Start MongoDB without access control

.. code-block:: shell

    mkdir ~/mongodb-bdp
    mongod --port 27017 --dbpath ~/mongodb-bdp/ &

Connect to the instance

.. code-block:: shell

    mongo --port 27017


Create the user administrator.

.. code-block:: shell

    use bdp
    db.createUser(
    {
        user: "bdp",
        pwd: "bdp123",
        roles: [ { role: "readWrite", db: "bdp" } ]
    }
    )
    exit

Re-start the MongoDB instance with access control.¶

.. code-block:: shell

    ps auxwww | grep mongod | grep 27017 | awk '{print $2}' | xargs kill
    mongod --auth --port 27017 --dbpath ~/mongodb-bdp &

Test the connection and authentication as the user administrator.

.. code-block:: shell

    mongo --port 27017 -u "bdp" -p "bdp123" --authenticationDatabase "admin"
 