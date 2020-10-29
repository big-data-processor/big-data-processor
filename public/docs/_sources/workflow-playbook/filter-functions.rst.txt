================
Filter Functions
================


-------------------------------------
Filter functions in Workflow Playbook
-------------------------------------
A filter function transforms value(s) into another. The values from a filter function can be piped into another function.
Each value that is left-hand side of the pipe ``|`` is considered as the first argument of the filter function.

.. code-block:: text

    "{{ firstArg | filterFunc(sencondArg, thirdArg) | anotherFilterFunc(...) }}"

By piping with these filter functions, we can perform multiple value transformations as well as special functions in one single line.
This is originally designed for web templates (`the Nunjucks template <https://mozilla.github.io/nunjucks/templating.html>`_). We adopted it here to describe a task.
So, the built-in filter functions are all available. 
In addition, we also provide many special filter functions that are commonly used to define tasks in a workflow.


File system related
===================

pathMapping
-----------
This is the most used filter function when defining file/folder paths. It specifies that the argument value is a file path.
Under the hood, this filter function converts your host file path(s) into the in-container path(s).



- **Input**: A host file/folder path or an array (list) of host paths.
- **Options**: The reference folder path, if missing, the project folder would be used.
- **Output**: The in-container file/folder path or an array (list) of the in-container paths.
- **Usage**: ``"{{ var.hostPath | pathMapping }}"``

.. code-block:: yaml

    - var:
        hostPath: "argv[0]" # The first argument, argv[0], is a host path
      task-template:
        name: 'list-files'
        image: 'ubuntu:latest'
        exec: 'ls'
        args:
        - "{{ var.hostPath | pathMapping }}" # <-- This converts a host path into an in-container path.

.. note::

    Other workflow management systems handle the file paths for you. This prevents the multiple writing events of a file.
    Usually, a file being writing is locked. Additional writing access by other process will be blocked. This is the so-called writing conflicts.
    This is an important feature but adding additional complexity to handle file structure. 

    We use the concept of the in-place file system. Developers should avoid the file writing conflicts, for example, by outputing different file names, or by using the ``/tmp`` or other paths that is inside a container and separated from host paths. Basically, we only mount a project folder, and all content inside this folder can be accessed.


ensureDir
---------
This filter function creates a folder on the host if the folder is not existed. It's like ``mkdir -p``.
Some tools require pre-existed folder as outputs. You need to create the folder before running the tool.
Usaully, you may use a command like: ``mkdir -p /some/folder/path``. But, this either adds another step to create folder or force the command to be ``/bin/bash -c "mkdir -p /some/folder/path && ..."``. 

If the folder path is already existed on the file system, this filter function does nothing and return exactly the same path.

- **Input**: A host folder path
- **Option**: None
- **Output**: The same host folder path.
- **Usage**: ``"{{ var.hostPath | ensureDir | pathMapping }}"``

.. code-block:: yaml

    - var:
        hostPath: "argv[0]" # The first argument, argv[0], is a host path
      task-template:
        name: 'list-files'
        image: 'ubuntu:latest'
        exec: 'ls'
        args:
        - "{{ var.hostPath | ensureDir | pathMapping }}"

The ``ensureDir`` creates the host folder if not existed and return the same path for the next filter function, ``pathMapping``.
So the final result is the in-container path that is created.


emptyDir
--------
Sometimes you need to empty a folder for later use. Use this ``emptyDir``. It returns exactly the same path you provided, just like the above ``ensureDir`` filter function.

- **Input**: A host folder path
- **Options**: None
- **Output**: The same host folder path.
- **Usage**: ``"{{ var.hostPath | ensureDir | emptyDir | pathMapping }}"``

.. code-block:: yaml

    - var:
        hostPath: "argv[0]" # The first argument, argv[0], is a host folder path
      task-template:
        name: 'list-no-files'
        image: 'ubuntu:latest'
        exec: 'ls'
        args:
        - "{{ var.hostPath | ensureDir | emptyDir | pathMapping }}"

You might want to ensure that the folder is existed and then empty it. At the last, you can use ``pathMapping`` to get the in-container path.


listFromFileGlob
----------------
A commonly used filter function is to get a list of matched files using globbing expression.
This filter function takes an array of globbing expressions. That is, you can use multiple match rules to select the desired paths.

- **Input**: A host folder path
- **Options**: 
    - A list of globbing expressions to specify desired path pattern.
- **Output**: A list of valid paths.
- **Usage**: ``"{{ var.hostPath | listFromFileGlob(['*.fastq.gz', '*.fq.gz', '!*_R1.fastq.gz']) }}"``


.. code-block:: yaml

    - var:
        fastqFolder: "argv[0]" # The first argument, argv[0], is a host folder path that containing fastq.gz files
      batch-items: "{{ var.fastqFolder | listFromFileGlob(['*.fastq.gz', '*.fq.gz', '!*_R1.fastq.gz']) }}" 
      task-template:
        name: 'unzip-sequence'
        image: 'ubuntu:latest'
        exec: 'gunzip'
        args:
        - "{{ item | pathMapping }}" # The item here represents each of the wanted gz file paths.

.. seealso:

    Under the hood, i use the ``globby`` node package to do the functionality.
    Please see the description of this package for a more advanced usage.
    https://github.com/sindresorhus/globby


listFromExcel
-------------
This function retrieves a list/table from a specific sheet of an Excel file.
The tabular data can be organized as a list of objects or a list of sublists (aka. array of array).

- **Input**: An Excel file (xlsx) path on the host
- **Options**:
    - sheet name
    - a boolean value indicates the first row is a header
    - return type: 'array' or 'object'; the 'object' type only effective when there is a header.

- **Output**: A list of objects or arrays from the tabular dataset.
- **Usage**: ``"{{ var['excel'] | listFromExcel('sheetname', true, 'object') }}"``

Assume we have an Excel file with a sheet and the sheet named ``sheetname``.
Here is an example of the tabular table of this sheet.

+-------------------+-------------------+------------------------+
| File Path A       |  File Path B      | Merged File Path       |
+===================+===================+========================+
| /path/A/fastq1.gz | /path/B/fastq1.gz | /path/merged/fastq1.gz |
+-------------------+-------------------+------------------------+
| /path/A/fastq2.gz | /path/B/fastq2.gz | /path/merged/fastq2.gz |
+-------------------+-------------------+------------------------+

Then, we can use the ``listFromExcel`` filter function to transform a given excel file path into its content.

.. code-block:: yaml

    - var:
        excelFilePath: "{{ argv[0] }}"
      batch-items: "{{ var['excelFilePath'] | listFromExcel('sheetname', true, 'object') }}"
      task-template:
        name: "list-from-excel"
        image: "ubuntu:latest"
        exec: "/bin/sh"
        args:
        - "-c"
        - "cat {{ item['File Path A'] | pathMapping }} {{ item['File Path B'] | pathMapping }} > {{ item['Merged File Path'] | pathMapping}}"
        option:
          setUser: true

In the above example, the table data have a header and we parsed the data into a list of objects (see below). For each row, the two fastq.gz files of ``File Path A`` and ``File Path B`` will be merged into one fastq.gz file of ``Merged File Path``.

.. code-block:: json

    [
        {
            "File Path A":      "/path/A/fastq1.gz",
            "File Path B":      "/path/B/fastq1.gz",
            "Merged File Path": "/path/merged/fastq1.gz"
        },
        {
            "File Path A":      "/path/A/fastq2.gz",
            "File Path B":      "/path/B/fastq2.gz",
            "Merged File Path": "/path/merged/fastq2.gz"
        }
    ]

The above ``batch-items`` triggers an iteration over each object of the list. For each of the object, we can access it as the preserved variable: ``item``.
Therefore, we can use ``item['File Path A']`` to retrieve the actual value: ``/path/A/fastq1.gz``. Note that because the key ``File Path A`` of the object contains blanks (or dashes), we cannot use ``item.File Path A`` to retrive the value. 

listFromCSV
-----------
This function applies the same library of the above ``listFromExcel`` to parse the Excel file but it accpets a csv (comma-separated values) file.
This function retrieves a list/table from a specific sheet of an Excel file.
The tabular data can be organized as a list of objects or a list of sublists (aka. array of array).

- **Input**: An Excel file (xlsx) path on the host
- **Options**:
    - a boolean indicator to specify whether the first row is a header
    - return type: 'array' or 'object'; the 'object' type only effective when there is a header.
- **Output**: A list of objects or arrays from the tabular dataset.
- **Usage**: ``"{{ var['excel'] | listFromCSV( true, 'object') }}"``


Assume we have a csv file with the following content:

.. code-block:: text

    File Path A,File PathB, Merged File Path
    /path/A/fastq1.gz,/path/B/fastq1.gz,/path/merged/fastq1.gz
    /path/A/fastq2.gz,/path/B/fastq2.gz,/path/merged/fastq2.gz

Then, we can use the ``listFromCSV`` filter function to transform a given excel file path into its content.

.. code-block:: yaml

    - var:
        csvFilePath: "{{ argv[0] }}"
      batch-items: "{{ var.csvFilePath | listFromCSV( true, 'object') }}"
      task-template:
        name: "list-from-csv"
        image: "ubuntu:latest"
        exec: "/bin/sh"
        args:
        - "-c"
        - "cat {{ item['File Path A'] | pathMapping }} {{ item['File Path B'] | pathMapping }} > {{ item['Merged File Path'] | pathMapping}}"
        option:
          setUser: true

listFromText
------------
This is a more generalized version of listFromCSV. You can specify the separator to parse a plain-text file.

- **Input**: The file path of a plain-text with multiple lines
- **Options**:
    - the separater character
    - a boolean indicator to specify whether the first row is a header
    - return type: 'array' or 'object'; the 'object' type only effective when there is a header.
- **Output**: A list of objects or arrays from the tabular dataset.
- **Usage**: ``"{{ var['excel'] | listFromText( true, 'object') }}"``

Assume we have a tab-delimited file with the following content:

.. code-block:: text

    File Path A\tFile PathB\tMerged File Path
    /path/A/fastq1.gz\t/path/B/fastq1.gz\t/path/merged/fastq1.gz
    /path/A/fastq2.gz\t/path/B/fastq2.gz\t/path/merged/fastq2.gz

Then, we can use the ``listFromText`` filter function to transform a given text file path into its content.

.. code-block:: yaml

    - var:
        txtFilePath: "{{ argv[0] }}"
      batch-items: "{{ var.txtFilePath | listFromText('\t', true, 'object') }}"
      task-template:
        name: "list-from-csv"
        image: "ubuntu:latest"
        exec: "/bin/sh"
        args:
        - "-c"
        - "cat {{ item['File Path A'] | pathMapping }} {{ item['File Path B'] | pathMapping }} > {{ item['Merged File Path'] | pathMapping}}"
        option:
          setUser: true

httpGET
-------
It fetches remote file via http or https. 


fileStats
---------


String processing related
=========================



------------------------------------------------------
Built-in filter functions in Nunjucks template engines
------------------------------------------------------
The Nunjucks template engine has defined a set of built-in filter functions.




-----------------------------------------------
Ported filter functions from the lodash library
-----------------------------------------------

The original built-in filter functions in the Nunjucks template engines may not be enough to specify task arguments.
Hence, we ported the whole lodash library into the default filter functions of Workflow Playbook.
With the lodash library, 


---------------------------------
How to customize filter functions
---------------------------------


