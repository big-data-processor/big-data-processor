============================================
The basic structure of the workflow playbook
============================================

--------------------------
The text structure in YAML
--------------------------




----------------------
The Nunjucks templates
----------------------


To define a task in Workflow Playbook, the filter functions are one of the three most important components.


The filter functions are kind of the most complex among the three. 
They are mainly used to define task arguments and batch items for a batch task.
However, you'll find out that it's a very intuitive way to define tasks once you got the basic concept.


The basic concept of filter functions
=====================================
A filter function can help to transform data to another, or it can do something special but not transforming data.
It is used as instructions to process the information that requires by the tool.

Filter functions are mainly used in two places to define a task: **batch-items** and **task arguments**.


We need to generate a list for the **batch-items**. The length of this list is the number of jobs for this batch task.
For each element of a list, the element becomes the ``item`` variable in the ``task-template``. 
Therefore, for a n-length list, there will be n tasks with the ``item`` variable of different values.

* A fixed-content list can be directly specified like ``"{{ ['value1', 'value2', 'value3'] }}"``.
* However, in most cases, you need to get the list items from a file or a folder. 
  You can use filter functions like ``listFromExcel`` or ``listFromFileGlob`` to get the list, respectively.
  It is worth noting that elements of a list can be a sub-list or a dictionary (aka. objects, hashes, key-value pairs).
  You can access data in the ``item`` via ``item[0]`` or ``item['property1'] item.property1`` if it is a sublist or dictionaries.
  In addition, you can define an item in combinations of values (string or number), lists, or dictionaries.

You can also use filter functions to set **task arguments** for the ``task-template.args``.



