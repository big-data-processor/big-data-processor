/**
 * @class BdpEventEmitter
 * @description An internal functions to process Events in Browsers.
 */

class BdpEventEmitter{
  constructor(){
    this.events = {};
  }
  _getEventListByName(eventName){
    if(typeof this.events[eventName] === 'undefined'){
      this.events[eventName] = new Set();
    }
    return this.events[eventName]
  }
  on(eventName, fn){
    this._getEventListByName(eventName).add(fn);
  }
  once(eventName, fn){
    const self = this;
    const onceFn = function(...args){
      self.removeListener(eventName, onceFn);
      fn.apply(self, args);
    };
    this.on(eventName, onceFn);
  }
  emit(eventName, ...args){
    this._getEventListByName(eventName).forEach(function(fn){
      fn.apply(this,args);
    }.bind(this));
  }
  removeListener(eventName, fn){
    this._getEventListByName(eventName).delete(fn);
  }
}

/**
 * @typedef User
 * @property {string} id The id of the user
 * @property {string} name The name of the user
 * @property {object} auths The authentication levels of this user
 * @property {number} auths.base The system authentication levels of this user
 * @property {number} auths.bdp The authentication levels of this user for Big Data Processor
 * 
 */

 /**
 * @typedef ProjectPrivilege
 * @property {boolean} canView
 * @property {boolean} canRun
 * @property {boolean} canEdit
 * @property {boolean} canDelete
 * @property {boolean} canDeleteResult
 * @property {boolean} canEditResult
 * @property {boolean} canAddFile
 * @property {boolean} canEditFile
 * @property {boolean} canDeleteFile
 * @property {boolean} canSetMember
 * @property {boolean} isOwner
 * @property {boolean} isManager
 * @property {boolean} isRunner
 * @property {boolean} isViewer
 */


/**
 * @typedef Project
 * @property {string} id
 * @property {string} name
 * @property {string} desc
 * @property {moment} createdAt
 * @property {moment} updatedAt
 * @property {number} dataFileNumber
 * @property {number} resultNumber
 * @property {DataFile[]} dataFiles
 * @property {Result[]} results
 * @property {Package[]} packages
 * @property {ProjectPrivilege} privilege
 * @property {User} owner
 * @property {User[]} managers
 * @property {User[]} runners
 * @property {User[]} viewers
 */

/**
 * @typedef DataFile The metadata of a DataFile record
 * @property {string} id The id of the DataFile record
 * @property {string} name
 * @property {string} prefix
 * @property {string} suffix
 * @property {string} desc
 * @property {string} format
 * @property {string[]} tags
 * @property {number} status displays the status of a DataFile record. (0: format checking; 1: ready; 2: locked; 3: deleting; 4: failed or no file)
 * @property {string} parent The DataFile id of the parent folder (if any)
 * @property {boolean} readonly
 * @property {boolean} hidden (true if the DataFile record is generated via execute Tasks.)
 * @property {moment} createdAt
 * @property {moment} updatedAt
 * @property {path} path The underlying file path on the host.
 * @property {path} realPath The actual absolute path on the host if the `DataFile.path` is a symbolic link.
 * @property {User} owner the owner of this DataFile.
 * 
 */

/**
 * @typedef Result The metadata of a Result record
 * @property {string} id The id of the Result record
 * @property {string} name
 * @property {string} prefix
 * @property {string} suffix
 * @property {string} desc
 * @property {TaskType} type The type of the corresponding Task.
 * @property {number} status the status of the Result (0: queued; 1: running; 2: success; 3: failed; 4: deleting)
 * @property {number[]} timer A four elements array containing timestamps of 1) Task submitted; 2) Task start; 3) Task End; 4) Result deleting.
 * @property {Task} task
 * @property {DataFile[]} inFiles
 * @property {DataFile[]} outFiles
 * @property {string} stdOut
 * @property {string} stdErr
 * @property {moment} createdAt
 * @property {moment} updatedAt
 * @property {Array.<string[]>} children 
 * @property {string} parent The Result id of the workflow which contains this Result. null if this Result does not belong to any workflow Result.
 * @property {ArgumentValue[]} arguments User specified argument values.
 */


/**
 * @enum ArgumentType
 */
const ArgumentType = {
  /** @type {string}
   * @description Indicates a static argument that cannot be viewed and changed by users. */
  STATIC: 'static',
  /** @type {string}
   *  @description Indicates a text argument which can be changed by users.  */
  VALUE: 'value',
  /** @type {string[]}
   *  @description Indicates a list-typed argument.*/
  LIST: 'list',
  /** @type {path}
   *  @description Indicates an argument for input file paths */
  INFILE: 'inFile',
  /** @type {path}
   *  @description Indicates an argument for output file paths */
  OUTFILE: 'outFile'
}

/**
 * @enum TaskType
 */
const TaskType = {
  /** @type {string}
   * @description A standard Task that can be executed sololy or inside of a workflow */
  STANDARD: 'standard',
  /** @type {string}
   * @description A child Task that can be executed inside a workflow. Users cannot directly choose this child-typed Task to execute. */
  CHILD: 'child',
  /** @type {string}
   * @description A workflow Task contains multiple steps constituted of standard or child Tasks. */
  WORKFLOW: 'workflow',
  /** @type {string}
   * @description A system Task can only be executed by system administrators */
  SYSTEM: 'system',
}

/**
 * @typedef ArgumentValue
 * @property {ArgumentType} type The allowed types are static | value | list | inFile | outFile
 * @property {string | string[]} value The argument value. 
 */

/**
 * @typedef ArgumentInput A lot like the `Argument` except that it does not contain outFile (outFile typed argument will be null)
 * @property {string} name
 * @property {string} desc
 * @property {ArgumentType} type The allowed types are static | value | list | inFile. No outFile, since 
 * @property {string | string[]} default The value for `ArgumentType.STATIC` and the default value for `ArgumentType.VALUE`. For `ArgumentType.LIST, the default select option(s) are stored in a string array.`
 * @property {string[]} list For `ArgumentType.LIST` only. Options in this lists can be selected by users. 
 * @property {boolean} multiple For `ArgumentType.LIST` only. The `multiple` property indicates whether a user can select multiple options.
 * @property {string[]} tags For `ArgumentType.INFILE` only. 
 * @property {'or' | 'and' | 'all'} tagMatchRule For `ArgumentType.INFILE` only. Used to specify valid input DataFile records for users to select.
 * @property {string} format For `ArgumentType.INFILE` only.
 * @property {DataFile} candidates For `ArgumentType.INFILE` only. The valid DataFile records to select.
 */

/**
 * @typedef ArgumentInputGuide
 * @property {ArgumentInput[]} inputs Contains Task Arguments. The outFile typed Argument will be `null`. An extra `candidate` property displays valid DataFile to select for the `inFile` typed Argument.
 * @property {Argument[]} outputs Contains an array of outFile arguments. 
 */


/**
 * @typedef Argument
 * @property {string} name
 * @property {string} desc
 * @property {ArgumentType} type The allowed types are static | value | list | inFile | outFile
 * @property {string | string[]} default The value for `ArgumentType.STATIC` and the default value for `ArgumentType.VALUE`. For `ArgumentType.LIST, the default select option(s) are stored in a string array.`
 * @property {string[]} list For `ArgumentType.LIST` only. Options in this lists can be selected by users. 
 * @property {boolean} multiple For `ArgumentType.LIST` only. The `multiple` property indicates whether a user can select multiple options.
 * @property {string[]} tags For `ArgumentType.INFILE` or `ArgumentType.OUTFILE` only. 
 * @property {'or' | 'and' | 'all'} tagMatchRule For `ArgumentType.INFILE` only. Used to specify valid input DataFile records for users to select.
 * @property {string} format For `ArgumentType.INFILE` or `ArgumentType.OUTFILE` only.
 */

/**
 * @typedef Task
 * @property {string} id
 * @property {string} name
 * @property {string} key
 * @property {string} desc
 * @property {TaskType} type
 * @property {string} package The belonged package id
 * @property {Array.<string[]>} mapper (valid in Workflow-typed Task)
 * @property {string[]} stepNames (valid in Workflow-typed Task)
 * @property {Argument[]} arguments
 * @property {Object} proxy
 * @property {string} proxy.protocol
 * @property {boolean} proxy.pathRewrite
 * @property {number} proxy.port
 * @property {string} proxy.entryPath
 */

/**
 * @typedef PackagePrivilege
 * @property {boolean} canView
 * @property {boolean} canRun
 * @property {boolean} canEdit
 * @property {boolean} canDelete
 * @property {boolean} canSetMember
 * @property {boolean} isOwner
 * @property {boolean} isManager
 * @property {boolean} isRunner
 * @property {boolean} isViewer
 */


/**
 * @typedef Package
 * @property {string} id
 * @property {string} name
 * @property {string} version
 * @property {string} desc
 * @property {string} author
 * @property {string} email
 * @property {string} img
 * @property {string} thumbnail
 * @property {string[]} scope
 * @property {string[]} allowedFormats
 * @property {string} sheetID
 * @property {string} sheetName
 * @property {PackagePrivilege} privilege
 * @property {User} owner
 * @property {User[]} managers
 * @property {User[]} runners
 * @property {User[]} viewers
 * @property {moment} createdAt
 * @property {moment} updatedAt
 */



/**
 * @author Chi Yang <chiyang1118@gmail.com>
 * @class BdpPageAPI
 * @license
 * MIT Licensed
 * Copyright (c) 2020 Chi Yang(楊崎) <chiyang1118@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * @description This is the main API class. To use this class, you need to include this js file in your html and then use 
 * ```
 * (async () => {
 *   const pageAPI = new BdpPageAPI();
 *   await pageAPI.initialize();
 *    
 *   // pageAPI is ready!
 * 
 * })().catch(console.log);
 * ```
 */

class BdpPageAPI {
  /**
   * @constructor
   * @description The constructor prepares several internal functions: the event listener handling, id generation and the main `_callBdpApi function`
   */

   
  constructor() {
    this._initialized = false;

    /**
     * @function BdpPageAPI~_registerEventListener
     * @param {string} eventId
     * @param {function} fn
     * @description An **internal** function to register event listener by the eventId and a function.
     */
    this._registerEventListener = (eventId, fn) => {
      this.eventEmitter.on(eventId, fn);
    };

    /**
     * @function BdpPageAPI~_removeEventListener
     * @param {string} eventId
     * @param {function} fn
     * @description An **internal** function to remove event listener by the eventId and a function.
     */
    this._removeEventListener = (eventId, fn) => {
      this.eventEmitter.removeListener(eventId, fn);
    }

    /**
     * @function BdpPageAPI~_registerErrorListener
     * @param {string} eventId
     * @param {function} fn
     * @description An **internal** function to register error listener by the eventId and a function.
     */
    this._registerErrorListener = (eventId, fn) => {
      this.errorEmitter.on(eventId, fn);
    };

    /**
     * @function BdpPageAPI~_removeErrorListener
     * @param {string} eventId
     * @param {function} fn
     * @description An **internal** function to register error listener by the eventId and a function.
     */
    this._removeErrorListener = (eventId, fn) => {
      this.errorEmitter.removeListener(eventId, fn);
    }

    /**
     * @function BdpPageAPI~_newID
     * @description An **internal** function to generate eventId which is concatenated from `new Date().valueOf() + '-' + Math.round(String(Math.random() * 100000))`
     * @return {string} An id string that is used as an eventId.
     */
    this._newID = function() {
      return new Date().valueOf() + '-' + Math.round(String(Math.random() * 100000));
    }

    /**
     * @async
     * @function BdpPageAPI~_callBdpApi
     * @param {string} method The api function to call
     * @param {object} data the event data to emit
     * @param {string=} ID the event id to emit
     * @description The **internal** core function to make communications between BDP client and the Page insdie the sandbox environement.
     * Under the hood, this function calls the `window.parent.postMessage` to BDP client which is outside the sandbox.
     * @return {string} An id string that is used as an eventId.
     */
    this._callBdpApi = async (method, data, ID) => {
      if (!ID) { ID = this._newID(); }
      window.parent.postMessage({call: method, value: data, id: ID, type: 'sent'}, '*');
      return new Promise((resolve, reject) => this.apiEmitter.once(ID, (data) => data.err ? reject(data.err) : resolve(data.value)));
    };
  }

  /**
   * @async
   * @function BdpPageAPI#initialize
   * @param {function} errorListenFn A global error listener can be set. This function will be called whenever error events happen.
   * @description The initialization process established four types of Event emitter: 
   * 
   * 1. **api emitter** sends request to BDP-client and recieve responses from BDP-client.
   * 2. **event emitter** listens events like file uploading/downloading events 
   * 3. **error emitter** listens error events from BDP-client.
   * 4. **change emitter** listens changes of data on BDP in real-time.
   * 
   * Then, this function tries to make handshakes to test if the api emitter is functional and returns nothing.
   */

  async initialize(errorListenFn) {
    if (!this.initialized) {
      this.apiEmitter = new BdpEventEmitter();
      this.eventEmitter = new BdpEventEmitter();
      this.errorEmitter = new BdpEventEmitter();
      this.changeEmitter = new BdpEventEmitter();
      const handler = (event) => {
        const eventData = event.data;
        if (typeof eventData == 'object' && eventData.type) {
          if (eventData.type === 'event') {
            this.eventEmitter.emit(eventData.id, eventData.value);
          } else if (eventData.type === 'error') {
            this.errorEmitter.emit(eventData.id, eventData.value);
          } else if (eventData.type === 'change') {
            this.changeEmitter.emit(eventData.value.target, eventData.value);
          } else {
            eventData.type = 'received';
            this.apiEmitter.emit(eventData.id, eventData);
          }
        }
      }
      window.addEventListener('message', handler, false);
      if (errorListenFn) {
        this.listenErrors(errorListenFn);
      }
    }
    await this._callBdpApi('handshake');
    this._initialized = true;
  }

  /**
  * @member {boolean} BdpPageAPI#initialized
  * @description A flag to indicate if the Page API instance is initialized.
  */
  get initialized() {
    return this._initialized;
  }

  /**
   * @async
   * @function BdpPageAPI#getAuthToken
   * @return {string} the authentication token
   * @description This function is used to retrieve the auth token. This token lasts one day and then expired.
   * For some API calls, this auth token allows users to bypass the login check.
   */
  async getAuthToken() {
    return await this._callBdpApi('getAuthToken', {});
  }
  
  /**
   * @function BdpPageAPI#log
   * @param {*} data 
   * @description This function logs whatever the data parameter is. Only logs to the BDP client (your browser).
   */

  log(data) {
    this._callBdpApi('log', JSON.stringify(data));
  }

  /**
   * @async
   * @function BdpPageAPI#listFiles
   * @returns {DataFile[]} Array of DataFile records in the current Project.
   * @description List DataFile records in the current Project.
   */
  async listFiles() {
    return await this._callBdpApi('listFiles', {});
  }

  /**
   * @async
   * @function BdpPageAPI#listResults
   * @returns {Result[]} Array of DataFile records in the current Project.
   * @description List DataFile records in the current Project.
   */
  async listResults() {
    return await this._callBdpApi('listResults', {});
  }

  /**
   * @async
   * @function BdpPageAPI#listPackages
   * @returns {Package[]} The packages that were selected for the current Project.
   * @description List selected Packages in the current Project.
   */
  async listPackages() {
    return await this._callBdpApi('listPackages', {});
  }

  /**
   * @async
   * @function BdpPageAPI#getCurrentUserInfo
   * @returns {User} The current user information
   * @description Retrieve the current user information
   */
  async getCurrentUserInfo() {
    return this._callBdpApi('getCurrentUserInfo');
  }

  /**
   * @async
   * @function BdpPageAPI#getCurrentFileInfo
   * @returns {DataFile} The information of current DataFile record
   * @description Retrieve the current DataFile information. Only works in File Pages since users have selected a DataFile record.
   */
  async getCurrentFileInfo() {
    return this._callBdpApi('getCurrentFileInfo');
  }

  /**
   * @async
   * @function BdpPageAPI#getCurrentResultInfo
   * @returns {Result} The information of current Result record
   * @description Retrieve the current Result information. Only works in Result Pages since users have selected a Result record.
   */
  async getCurrentResultInfo() {
    return this._callBdpApi('getCurrentResultInfo');
  }

  /**
   * @async
   * @function BdpPageAPI#getCurrentPackageInfo
   * @returns {Package} The information of the current Package record
   * @description Retrieve the current Package that contains this customized Page.
   */
  async getCurrentPackageInfo() {
    return this._callBdpApi('getCurrentPackageInfo');
  }

  /**
   * @async
   * @function BdpPageAPI#getCurrentProjectInfo
   * @returns {Project} The information of the current Project
   * @description Retrieve the current Project that a user has selected
   */
  async getCurrentProjectInfo() {
    return this._callBdpApi('getCurrentProjectInfo');
  }

  /**
   * @async
   * @function BdpPageAPI#openFileLink
   * @param {string} fileID the DataFile ID to display
   * @description Open a new window to display the DataFile record.
   */
  async openFileLink(fileID) {
    return await this._callBdpApi('openFileLink', {fileID: fileID});
    // window.open('/dataFile/' + fileID + '/info', "", "width=800,height=600"); // Under the sandbox cannot open the window
  }

  /**
   * @async
   * @function BdpPageAPI#openResultLink
   * @param {string} resultID the Result ID to display
   * @description Open a new window to display the Result record.
   */
  async openResultLink(resultID) {
    return await this._callBdpApi('openResultLink', {resultID: resultID});
  }

  /**
   * @async
   * @function BdpPageAPI#navigateToProjectList
   * @param {'myProjects' | 'sharedProjects' | 'publicProjects'} listType The allowed type of the Project list
   * @param {number} pageSize (Optional) setting the number of Project records per page (default: 30)
   * @param {number} pageIndex (Optional) setting the page index (page number - 1); start with 0. (default: 0)
   * @description Navigate to the project list page of BDP-client. This will leave the current Page.
   */
  async navigateToProjectList(listType, pageSize, pageIndex) {
    await this._callBdpApi('navigateToProjectList', {listType: listType || 'myProjects', pageSize: pageSize || 30, pageIndex: pageIndex || 0});
  }

  /**
   * @async
   * @function BdpPageAPI#navigateToProjectPage
   * @param {string} pageKey The page key to indicate which of the customized Project Pages will be displayed.
   * @param {string} packageID (Optional) The package ID to indicate the Package that contains the Page.
   * @description Navigate to a Project Page. This will leave the current Page.
   */
  async navigateToProjectPage(pageKey, packageID) {
    await this._callBdpApi('navigateToProjectPage', {pageKey: pageKey, packageID: packageID});
  }

  /**
   * @async
   * @function BdpPageAPI#navigateToFilePage
   * @param {string} fileID The ID of the DataFile record to view
   * @param {string} pageKey The page key to indicate which of the customized File Pages will be displayed.
   * @param {string} packageID (Optional) The package ID to indicate the Package that contains the Page.
   * @description Navigate to a File Page. This will leave the current Page.
   */
  async navigateToFilePage(fileID, pageKey, packageID) {
    await this._callBdpApi('navigateToFilePage', {fileID: fileID, pageKey: pageKey, packageID: packageID});
  }

  /**
   * @async
   * @function BdpPageAPI#navigateToResultPage
   * @param {string} resultID The ID of the Result record to view
   * @param {string} pageKey The page key to indicate which of the customized Result Pages will be displayed.
   * @param {string} packageID (Optional) The package ID to indicate the Package that contains the Page.
   * @description Navigate to a Result Page. This will leave the current Page.
   */
  async navigateToResultPage(resultID, pageKey, packageID) {
    await this._callBdpApi('navigateToResultPage', {resultID: resultID, pageKey: pageKey, packageID: packageID});
  }

  /**
   * @async
   * @function BdpPageAPI#navigateToBdpDataFile
   * @param {string} fileID The ID of the DataFile record to view
   * @description Navigate to view the DataFile record. Similar to the `BdpPageAPI.openFileLink` function except that it does not open a new window. This will leave the current Page.
   */
  async navigateToBdpDataFile(fileID) {
    await this._callBdpApi('navigateToBdpDataFile', {fileID: fileID});
  }
  
  /**
   * @async
   * @function BdpPageAPI#navigateToBdpResult
   * @param {string} result The ID of the Result record to view
   * @description Navigate to view the Result record. Similar to the `BdpPageAPI.openResultLink` function except that it does not open a new window. This will leave the current Page.
   */
  async navigateToBdpResult(resultID) {
    await this._callBdpApi('navigateToBdpResult', {resultID: resultID});
  }
  
  /**
   * @async
   * @function BdpPageAPI#createFolder
   * @param {string} name The name for the newly created DataFile record
   * @param {string} desc The description for the newly created DataFile record
   * @param {string} prefix The name prefix for the newly created DataFile record
   * @param {string} suffix The name suffix for the newly created DataFile record
   * @param {string[]} tags  The file tags for the newly created DataFile record
   * @param {string} folderId (Optional) The parent DataFile id that corresponds to a folder. Created folder will be inside this folder.
   * @param {boolean} keepFileName (Optional) Works when `folderId` is set. This `keepFileName` indicates whether to use the DataFile name as the actual folder name. If false, BDP system will use the `DataFile id` as its folder name.
   * @return {DataFile} The created DataFile record.
   * @description Create an empty folder and return the corresponding DataFile record.
   */
  async createFolder(name, desc, prefix, suffix, tags, folderId, keepFileName) {
    return await this._callBdpApi('createFolder', {
      name: name,
      desc: desc,
      prefix: prefix,
      suffix: suffix,
      tags: Array.isArray(tags) ? tags : [],
      folderId, folderId,
      keepFileName: keepFileName
    });
  }

  /**
   * @async
   * @function BdpPageAPI#getFileBlob
   * @param {string} fileID The DataFile id for downloading the file content (in blob format)
   * @param {string} subPath (optional) only works if the DataFile record with the specified `fileID` is a Folder.
   * @param {function} listenerFn (optional) A callback function will be called everytime the downloading progress updates. You can use this function to update the downloading progress.
   * @param {function} errorListener (optional) A callback function will be called when there are errors. You may write error handler to notify users about the downloading errors.
   * @return {Blob} 
   * @description Use this function to automatically download the file content in the `Blob` type.
   */
  async getFileBlob(fileID, subPath, listenerFn, errorListener) {
    const theID = this._newID();
    if (errorListener) { this._registerErrorListener(theID, errorListener); }
    if (listenerFn) { this._registerEventListener(theID, listenerFn);}
    const returnBlob = await this._callBdpApi('getFileBlob', {fileID: fileID, subPath: subPath}, theID);
    if (listenerFn) { this._removeEventListener(theID, listenerFn)};
    if (errorListener) { this._removeErrorListener(theID, errorListener)};
    return returnBlob;
  }

  /**
   * @async
   * @function BdpPageAPI#getDownloadLink
   * @param {string} fileID The DataFile id that a download link for the corresponding DataFile can be generated
   * @param {string} subPath (optional) only works if the DataFile record with the specified `fileID` is a Folder.
   * @param {string} authToken The authentication token from `BdpPageAPI.getAuthToken()`
   * @return {link} The path link to directly access the file without logins.
   * @description Get a direct link to access the file of the DataFile record.
   */
  async getDownloadLink(fileID, subPath, authToken) {
    return await this._callBdpApi('getDownloadLink', {fileID: fileID, subPath: subPath || null, authToken: authToken || ''});
  }
  
  /**
   * @async
   * @function BdpPageAPI#globFilesInFolder
   * @param {string} fileID The ID of the DataFile which format must be Folder.
   * @param {string[]} globbyExprs Array of globby expressions to find valid file paths.
   * @return {path[]} Valid file paths that relative to the Folder that corresponds to the DataFile.
   * @description Get a list of valid file paths located inside a folder that corresponds to the DataFile. Under the hood, we use the npm package, <a href='https://www.npmjs.com/package/globby' target=_blank>globby</a>, to use the globby expressions.
   */
  async globFilesInFolder(fileID, globbyExprs) {
    return this._callBdpApi('globFilesInFolder', {fileID: fileID, globbyExprs: globbyExprs});
  }

  /**
   * @async
   * @function BdpPageAPI#importFileFromPath
   * @param {string} path The absolute file path on the server
   * @param {boolean} makeSymbolicLink true, if creating a symbolic links instead of copying files.
   * @param {object} options Additional import options
   * @param {string} options.name The name for the newly created DataFile. Leave it undefined if you want to use the original file/folder name.
   * @param {string} options.prefix The name prefix for the newly created DataFile
   * @param {string} options.suffix The name suffix for the newly created DataFile
   * @param {string} options.desc The description for the newly created DataFile
   * @param {string} options.tags The tags for the newly created DataFile
   * @param {string} options.folder (Optional) The parent DataFile id that corresponds to a folder. Imported file/folder will be inside this folder.
   * @param {boolean} options.keepFileName (Optional) Works when `options.folder` is set. This `options.keepFileName` indicates whether to preserve the original file/folder name. If false, BDP system will use the `DataFile id`.`DataFile.format` as its filename.
   * @return {DataFile} After successfully importing the file/folder, a created DataFolder is returned.
   * @description Import files that already on the server (the same machine that BDP is hosted on). This function can only be executed by at least the level of `Power User`.
   */
  async importFileFromPath(path, makeSymbolicLink, options) {
    return this._callBdpApi('importFileFromPath', {
      path: path,
      makeSymbolicLink: makeSymbolicLink ? true : false,
      options: {
        name: options.name,
        prefix: options.prefix,
        suffix: options.suffix,
        desc: options.desc,
        tags: options.tags,
        folder: options.folder,
        keepFileName: options.keepFileName ? true : false
      }
    });
  }

  /**
   * @async
   * @function BdpPageAPI#uploadFiles
   * @param {FileList | Blob[]} files The FileList object or an array of Blob objects.
   * @param {boolean} makeSymbolicLink true, if creating a symbolic links instead of copying files.
   * @param {object} options Additional import options
   * @param {string} options.name The name for the newly created DataFile. Leave it undefined if you want to use the original file/folder name.
   * @param {string} options.prefix The name prefix for the newly created DataFile
   * @param {string} options.suffix The name suffix for the newly created DataFile
   * @param {string} options.desc The description for the newly created DataFile
   * @param {string} options.tags The tags for the newly created DataFile
   * @param {string} options.folder (Optional) The parent DataFile id that corresponds to a folder. Imported file/folder will be inside this folder.
   * @param {boolean} options.keepFileName (Optional) Works when `options.folder` is set. This `options.keepFileName` indicates whether to preserve the original file/folder name. If false, BDP system will use the `DataFile id`.`DataFile.format` as its filename.
   * @param {function} listenerFn (optional) A callback function will be called everytime the downloading progress updates. You can use this function to update the downloading progress.
   * @param {function} errorListener (optional) A callback function will be called when there are errors. You may write error handler to notify users about the downloading errors.
   * @return {DataFile[]} After successfully importing the files/folders, newly created DataFolders are returned.
   * @description Upload files from FileList or from an array of Blob objects. If you use the `<input type='file'></input>` HTML element, this input DOM element has a `files` property that stores the FileList object. You can just use the FileList object as the first argument.
   */
  async uploadFiles(files, options, listenerFn, errorListenerFn) {
    const theID = this._newID();
    if (listenerFn) { this._registerEventListener(theID, listenerFn); }
    if (errorListenerFn) { this._registerErrorListener(theID, errorListenerFn); }
    const returnData = await this._callBdpApi('uploadFiles', {files: files, options: {
      name: options.name,
      prefix: options.prefix,
      suffix: options.suffix,
      desc: options.desc,
      format: options.format,
      tags: options.tags,
      folderID: options.folderID,
      keepFileName: options.keepFileName
    }}, theID);
    if (listenerFn) { this._removeEventListener(theID, listenerFn)};
    if (errorListenerFn) { this._removeErrorListener(theID, errorListenerFn)};
    return returnData;
  }

  /**
   * @async
   * @function BdpPageAPI#uploadFileBlob
   * @param {Blob} fileBlob The Blob object to upload
   * @param {string} name The desired name for the created DataFile record.
   * @param {object} options Additional import options
   * @param {string} options.prefix The name prefix for the newly created DataFile
   * @param {string} options.suffix The name suffix for the newly created DataFile
   * @param {string} options.desc The description for the newly created DataFile
   * @param {string} options.tags The tags for the newly created DataFile
   * @param {string} options.format The format for the uploaded file.
   * @param {string} options.folder (Optional) The parent DataFile id that corresponds to a folder. Imported file/folder will be inside this folder.
   * @param {boolean} options.keepFileName (Optional) Works when `options.folder` is set. This `options.keepFileName` indicates whether to preserve the original file/folder name. If false, BDP system will use the `DataFile id`.`DataFile.format` as its filename.
   * @param {function} listenerFn (optional) A callback function will be called everytime the downloading progress updates. You can use this function to update the downloading progress.
   * @param {function} errorListener (optional) A callback function will be called when there are errors. You may write error handler to notify users about the downloading errors.
   * @return {DataFile[]} After successfully importing the files/folders, newly created DataFolders are returned.
   * @description Upload a Blob object to create a DataFile record.
   */
  async uploadFileBlob(fileBlob, name, options, listenerFn, errorListener) {
    const theID = this._newID();
    if (listenerFn) { this._registerEventListener(theID, listenerFn); }
    if (errorListener) { this._registerErrorListener(theID, errorListener); }
    const returnFileInfo =  await this._callBdpApi('uploadFileBlob', {
      fileBlob: fileBlob,
      name: name,
      prefix: options.prefix,
      suffix: options.suffix,
      desc: options.desc,
      tags: options.tags,
      format: options.format,
      folderID: options.folderID,
      keepFileName: options.keepFileName ? true : false
    }, theID);
    if (listenerFn) { this._removeEventListener(theID, listenerFn)};
    if (errorListener) { this._removeErrorListener(theID, errorListener)};
    return returnFileInfo[0];
  }

  /**
   * @async
   * @function BdpPageAPI#updateFileInfo
   * @param {string} fileID The ID of the DataFile to be updated.
   * @param {object} updateOptions updated information. Properties of a DataFile record remain unchanged if not specified in updateOptions.
   * @param {string} updateOptions.name (Optional) The updated name for the DataFile record.
   * @param {string} updateOptions.prefix (Optional) The updated name prefix for the DataFile record.
   * @param {string} updateOptions.suffix (Optional) The updated name suffix for the DataFile record
   * @param {string} updateOptions.desc (Optional) The updated description for the DataFile record
   * @param {string[]} updateOptions.tags The updated tags for the DataFile
   * @return {DataFile} The updated DataFile record.
   * @description Update the metadat of the DataFile record. Currently, you cannot change the format of a DataFile.
   */
  async updateFileInfo(fileID, updateOptions) {
    return await this._callBdpApi('updateFileInfo', {
      fileID: fileID,
      newInfo: {
        name: updateOptions.name || undefined,
        desc: updateOptions.desc || undefined,
        tags: Array.isArray(updateOptions.tags) ? updateOptions.tags : undefined,
        prefix: updateOptions.prefix || undefined,
        suffix: updateOptions.suffix
    }});
  }

  /**
   * @async
   * @function BdpPageAPI#deleteFile
   * @param {string} fileID The ID of the DataFile to be deleted.
   * @return {DataFile} The deleted DataFile record.
   * @description Delete a DataFile record. This function signals the server to delete the DataFile record and the underlying files or folders. 
   * The record may still be existed before the server actually deletes the file/folder.
   */
  async deleteFile(fileID) {
    return await this._callBdpApi('deleteFile', {fileID: fileID});
  }

  /**
   * @async
   * @function BdpPageAPI#getTaskArguments
   * @param {string} taskIdentifier The task identifier may be task-key or task ID. Using task key is preferred.
   * @param {string} packageID (Optional) The ID of the Package which contains the Task. Leave it blank to use the Package where the current viewing Page locates in.
   * @return {Argument[]} The argument settings for the task
   * @description Get the argument settings by task key (or task id) and package id. 
   */
  async getTaskArguments(taskIdentifier, packageID) {
    return await this._callBdpApi('getTaskArguments', {identifier: taskIdentifier, packageID: packageID});
  }

  /**
   * @async
   * @function BdpPageAPI#getTaskInfo
   * @param {string} taskIdentifier The task identifier may be task-key or task ID. Using task key is preferred.
   * @param {string} packageID (Optional) The ID of the Package which contains the Task. Leave it blank to use the Package where the current viewing Page locates in.
   * @return {Task} The Task record
   * @description Get the Task information by task key (or task id) and package id. 
   */
  async getTaskInfo(taskIdentifier, packageID) {
    return await this._callBdpApi('getTaskInfo', {identifier: taskIdentifier, packageID: packageID});
  }

  /**
   * @async
   * @function BdpPageAPI#listTasks
   * @param {string} packageID (Optional) The ID of the Package which Tasks you want to list. Leave it blank to use the Package where the current viewing Page locates in.
   * @param {boolean} only (Optional) Setting `true` to list only the Tasks in the specified Package. Setting `false` will also list additinoal Tasks which Package name is in the scope of the specified Package.
   * @return {Task[]} The Tasks of the specified Package. If the `only` parameter is set to `false`, additional Tasks from Packages, which names are set in the scope of the specified Package, are also included.
   * @description Get the Task information by the Package id. 
   */
  async listTasks(packageID, only) {
    return await this._callBdpApi('listTasks', {packageID: packageID});
  }

  /**
   * @async
   * @function BdpPageAPI#listAllTasks
   * @return {Task[]} The Tasks of the specified Package. Note: additional Tasks from Packages, which names are set in the scope of the specified Package, are also included.
   * @description List all related Tasks from Packages that are selected in the current project. 
   */
  async listAllTasks() {
    return await this._callBdpApi('listAllTasks');
  }

  /**
   * @async
   * @function BdpPageAPI#getTaskInputGuide
   * @param {string} taskIdentifier The task identifier may be task-key or task ID. Using task key is preferred.
   * @param {string} packageID (Optional) The ID of the Package which contains the Task. Leave it blank to use the Package where the current viewing Page locates in.
   * @return {ArgumentInputGuide} The reference to guide user inputs.
   * @description Providing a reference to generate Task arguments for users to specify before executing Tasks.
   */
  async getTaskInputGuide(taskIdentifier, packageID) {
    return await this._callBdpApi('getTaskInputGuide', {identifier: taskIdentifier, packageID: packageID})
  }

    /**
   * @async
   * @function BdpPageAPI#executeTask
   * @param {string} taskIdentifier The task identifier may be task-key or task ID. Using task key is preferred.
   * @param {string} packageID The ID of the Package which contains the Task. Leave it blank to use the Package where the current viewing Page locates in.
   * @param {object} resultInfo
   * @param {string} resultInfo.name
   * @param {string} resultInfo.desc
   * @param {string} resultInfo.prefix
   * @param {string} resultInfo.suffix
   * @param {Array.<string | string[]>} inputs The input arguments for the Task.
   * * For `ArgumentType.STATIC` and `ArgumentType.OUTFILE`, use the `null` value.
   * * For `ArgumentType.INFILE`, use the DataFile ID.
   * * For `ArgumentType.VALUE`, directly specify the text value.
   * * For `ArgumentType.LIST`, use an array of strings. For single selection list, the array contains one element and only the first element is considered.
   * @param {Array.<{name: string, desc: string, prefix: string, suffix: string }>} outputs The desired information for the output DataFile records.
   * The length of the array equals to the number of outFile arguments. You may get the outputs information from the `ArgumentInputGuide.outputs` of the function `BdpPageAPI.getTaskInputGuide()`.
   * @return {Result} The newly generated Result record which corresponds to the executed Task.
   * @description Execute a Task and generate a Result record on Page.
   */
  async executeTask(taskIdentifier, packageID, resultInfo, argInputs, outputs, errorListenerFn) {
    const theID = this._newID();
    if (errorListenerFn) { this._registerErrorListener(theID, errorListenerFn); }
    const returnResult = await this._callBdpApi('executeTask', {
      identifier: taskIdentifier,
      packageID: packageID,
      resultInfo: {
        name: resultInfo.name,
        desc: resultInfo.desc,
        prefix: resultInfo.prefix,
        suffix: resultInfo.suffix
      },
      inputs: argInputs,
      outputs: outputs
    }, theID);
    if (errorListenerFn) { this._removeErrorListener(theID, errorListenerFn); }
    return returnResult;
  }

  /**
   * @async
   * @function BdpPageAPI#updateResultInfo
   * @param {string} resultID The ID of the Result to be updated.
   * @param {object} updateOptions updated information. Properties of a Result record remain unchanged if not specified in updateOptions.
   * @param {string} updateOptions.name (Optional) The updated name for the Result record.
   * @param {string} updateOptions.prefix (Optional) The updated name suffix for the Result record.
   * @param {string} updateOptions.suffix (Optional) The updated name suffix for the the Result record
   * @param {string} updateOptions.desc (Optional) The updated description for the Result record
   * @return {Result} The updated Result record.
   * @description Update the metadata of a Result record.
   */
  async updateResultInfo(resultID, updateOptions) {
    return await this._callBdpApi('updateResultInfo', {
      resultID: resultID,
      newInfo: {
        name: updateOptions.name || undefined,
        desc: updateOptions.desc || undefined,
        prefix: updateOptions.prefix || undefined,
        suffix: updateOptions.suffix
    }});
  }

  /**
   * @async
   * @function BdpPageAPI#stopResult
   * @param {string} resultID The ID of the Result to be stopped.
   * @return {Result} The Result record to be stopped.
   * @description The Result may not be stopped rightway. The running task will be stopped gracefully and the status of the Result is then changed.
   */
  async stopResult(resultID) {
    return await this._callBdpApi('stopResult', {resultID: resultID});
  }

  /**
   * @async
   * @function BdpPageAPI#deleteResult
   * @param {string} resultID The ID of the Result to be deleted.
   * @return {Result} The deleted Result record.
   * @description Delete the Result record. The output DataFile records in this Result will also be deleted.
   */
  async deleteResult(resultID) {
    return await this._callBdpApi('deleteResult', {resultID: resultID});
  }

  /**
   * @async
   * @function BdpPageAPI#refreshPage
   * @description The current Page will be refreshed. Any un-saved state will be lost.
   */
  async refreshPage() {
    return await this._callBdpApi('refreshPage');
  }

  /**
   * @async
   * @function BdpPageAPI#toggleFullPage
   * @param {boolean} isFullPage (Optional) If providing a truthy value, the Page will go full page. If the `false` is provided, the full page would be turned off.
   *  If undefined, this function just toggles the full page mode.
   * @description Toggle the full page mode.
   */
  async toggleFullPage(isFullPage) {
    return await this._callBdpApi('toggleFullPage', {isFullPage: isFullPage});
  }

  /**
   * @async
   * @function BdpPageAPI#toggleRightSideMenu
   * @param {boolean} isShown (Optional) If providing a truthy value, the right-side menu shows. If the `false` is provided, the right-side menu would be hidden.
   *  If undefined, this function just toggles the right-side menu.
   * @description Toggle the right-side menu.
   */
  async toggleRightSideMenu(isShown) {
    return await this._callBdpApi('toggleRightSideMenu', {isShown: isShown});
  }

  /**
   * @async
   * @function BdpPageAPI#togglePageList
   * @param {'list' | 'page'} mode (Optional) Set to `list` to display the Page list for users to select and switch to different Pages.
   * Setting to 'page' or false will close the Page list. If undefined, this function toggles the Page list.
   * @description Toggle the Page list.
   */
  async togglePageList(mode) {
    // mode == 'list' or 'page' or undefined for toggling
    return await this._callBdpApi('togglePageList', {mode: mode});
  }

  /**
   * @function BdpPageAPI#watchResultChange
   * @param {function} resultListenerFn A customized function that will be called when there is any change of Result record on the server.
   * @return {object} a listening object that has only one property `stop`. This `stop` is a function. You can call this function to remove (un-register) the listener function (`resultListenerFn`).
   * @description Register a listener function for Result changes. Whenever there is a listenable Result changes on the server, the registered functions will be called.
   * You can use this function to get notified and make some updates on your Page.
   */
  watchResultChange(resultListenerFn) {
    this.changeEmitter.on('Result', resultListenerFn);
    return {stop: () => this.changeEmitter.removeListener('Result', resultListenerFn)};
  }

  /**
   * @function BdpPageAPI#stopWatchResultChange
   * @param {function} resultListenerFn The registered function to be removed.
   * @description Remove the registered listener function for Result changes.
   */
  stopWatchResultChange(resultListenerFn) {this.changeEmitter.removeListener('Result', resultListenerFn);}

  /**
   * @function BdpPageAPI#watchFileChange
   * @param {function} fileListenerFn A customized function to be be called when there is any change of DataFile record on the server
   * @return {object} a listening object that has only one property `stop`. This `stop` is a function. You can call this function to remove (un-register) the listener function (`fileListenerFn`).
   * @description Register a listener function for DataFile changes. Only the DataFiles that are owned by you or shared with you can be listen.
   * Whenever there is a listenable DataFile changes on the server, the registered functions will be called.
   * You can use this function to get notified and make some updates on your Page.
   */
  watchFileChange(fileListenerFn) {
    this.changeEmitter.on('DataFile', fileListenerFn);
    return {stop: () => this.changeEmitter.on('DataFile')}
  }

  /**
   * @function BdpPageAPI#stopWatchFileChange
   * @param {function} resultListenerFn The registered function to be removed
   * @description Remove the registered listener function for DataFile changes.
   */
  stopWatchFileChange(fileListenerFn) { this.changeEmitter.removeListener('DataFile', fileListenerFn); }

  /**
   * @function BdpPageAPI#watchResultMsgChange
   * @param {function} resultListenerFn A listener function to be called when receiving Result messages.
   * @description Register a listener function to listen Result messages.
   * Only the related Results in the Projects that are owned by you or shared with you can be listened.
   * Result messages are standard outputs and standard errors generated by running Tasks.
   */
  watchResultMsgChange(resultMsgListenerFn) {
    this.changeEmitter.on('ResultMsg', resultMsgListenerFn);
    return {stop: () => this.changeEmitter.removeListener('ResultMsg', resultMsgListenerFn)};
  }

  /**
   * @function BdpPageAPI#stopWatchResultMsgChange
   * @param {function} resultMsgListenerFn The registered function to be removed
   * @description Remove the registered listener function for Result messages.
   */
  stopWatchResultMsgChange(resultMsgListenerFn) {this.changeEmitter.removeListener('ResultMsg', resultMsgListenerFn);}


  /**
   * @async
   * @function BdpPageAPI#requestHttp
   * @param {string} path The relative URL string begins with `/`. It must be relative to the current host.
   * @param {string} method The HTTP method. Can be any valid HTTP method, such as 'get', 'post', 'patch', 'delete', 'put', 'head', etc.
   * @param {object} httpOptions The http options. Under the hood, we used the angular HTTP client.
   * You may find details <a href='https://angular.io/guide/http' target=_blank>here</a>
   * @param {object} httpOptions.headers
   * @param {object} httpOptions.queryParams an object containing key-value mappings where the key is the query parameter and the value is the parameter value.
   * @param {object} httpOptions.requestBody The post/put/patch request body.
   * @param {boolean} httpOptions.reportProgress set to true to track progress events.
   * @param {'arraybuffer' | 'blob' | 'json' | 'text'} httpOptions.responseType specifies the response type. Can only be one of `arraybuffer`, `blob`, `josn`, `text`.Argument 
   * @param {'body' | 'events' | 'response'} httpOptions.observe if this parameter is set to `events`, the `progressHandler` gets called when there are progress events.
   * @param {function} progressHandler a handler function to be called when `httpOptions.reportProgress` is true for allowing progress events.
   * Or, the `httpOptions.observe` is set to `events`, this `progressHandler` also gets called.
   * @param {function} errorListenerFn an error listner function to be called when there are errors during the http request.
   * @description A low level API to make requests to BDP server.
   */
  async requestHttp(path, method, httpOptions, progressHandler, errorListenerFn) {
    const theID = this._newID();
    const isReportingProgress = httpOptions.reportProgress && typeof progressHandler === 'function';
    if (errorListenerFn) { this._registerErrorListener(theID, errorListenerFn); }
    if (isReportingProgress) { this._registerEventListener(theID, progressHandler);}
    const responseData = await this._callBdpApi('requestHttp', {path: path, method: method, httpOptions: {
        headers: httpOptions.headers
      , queryParams: httpOptions.queryParams
      , requestBody: httpOptions.requestBody
      , reportProgress: httpOptions.reportProgress
      , responseType: httpOptions.responseType
      , observe: httpOptions.observe
    }}, theID);
    if (errorListenerFn) { this._removeErrorListener(theID, errorListenerFn); }
    if (isReportingProgress) { this._removeEventListener(theID, progressHandler);}
    return responseData;
  }

  /**
   * @async
   * @function BdpPageAPI#requestDatabase
   * @param {string} version the database version
   * @param {object} objectStoreSettings The detailed content is `{[key: string]: {keyPath: string, autoIncrement: boolean}}`.
   * @param {object} creatingIndexes The detailed content is `{[key: string]: {indexName: string, keyPath: string, objectParameters?: {unique: boolean, multiEntry: boolean, locale: string}}}`
   * @return {string} returns `ok` if successfully created the indexedDB.
   * @description Requesting the indexedDB database. IndexedDB is one of the web storage techniques. It allows you to persistently store data inside a browser.
   * The database of indexedDB is under BDP-client's control and each Page for each User can have one indexedDB. Developers can have multiple collections in the database.
   * We used the npm package, <a href='https://www.npmjs.com/package/idb' target=_blank>idb</a>, to handle the indexedDB.
   */
  async requestDatabase(version, objectStoreSettings, creatingIndexes) {
    return await this._callBdpApi('requestDatabase', {version: version, objectStoreSettings: objectStoreSettings, creatingIndexes:creatingIndexes});
  }

  /**
   * @async
   * @function BdpPageAPI#requestDatabaseRemove
   * @return {string} returns `ok` if successfully deleted the indexedDB.
   * @description Removing the requested indexedDB database.
   */
  async requestDatabaseRemove() {
    return await this._callBdpApi('requestDatabaseRemove', {});
  }

  /**
   * @async
   * @function BdpPageAPI#dataStoreQuery
   * @param {string} storeName the name of the data store in the indexedDB
   * @param {function} iterateFn A function to be called to receive each of the queried data records.
   * @param {string | IDBKeyRange} query (Optional)
   * @param {string} indexName (Optional)
   * @param {'next' | 'nextunique' | 'prev' | 'prevunique'} direction (Optional)
   * @return {string} returns `ok` if successfully queried data in the indexedDB.
   * @description Query data in a dataStore. The `iterateFn` will be called with each of the resulting data records.
   */
  async dataStoreQuery(storeName, iterateFn, query, indexName, direction) {
    const theID = this._newID();
    if (typeof direction === 'function') {
      iterateFn = direction;
      direction = 'next';
    }
    if (!iterateFn || typeof iterateFn !== 'function') { return; }
    this._registerEventListener(theID, iterateFn);
    const result = await this._callBdpApi('dataStoreQuery', {storeName: storeName, query: query, indexName: indexName, direction: direction}, theID);
    this._removeEventListener(theID, iterateFn);
    return result;
  }

  /**
   * @async
   * @function BdpPageAPI#dataStoreGet
   * @param {string} storeName the name of the data store in the indexedDB
   * @param {string} key (optional)
   * @param {string} indexName (optional)
   * @param {'next' | 'nextunique' | 'prev' | 'prevunique'} direction (Optional)
   * @return {object[]} returns the query results.
   * @description A simplified version of `BdpPageAPI.dataStoreQuery`. This function will directly return the query results.
   * Be careful with retruning very large datasets. If both `indexName` and `key` are unset, all data in the data store will be retrieved.
   * If only the `key` is unset, all values from the indexName, which defines a specific keyPath (like a column), are returned.
   */
  async dataStoreGet(storeName, key, indexName) {
    return await this._callBdpApi('dataStoreGet', {storeName: storeName, key: key, indexName: indexName});
  }

  /**
   * @async
   * @function BdpPageAPI#dataStoreAdd
   * @param {string} storeName the name of the data store in the indexedDB
   * @param {object[]} dataItems the data records to be added
   * @param {string[]} dataKeys (optional) the keys array for the data records (in the same order)
   * @return {string} returns `ok` if successfully inserting data in the indexedDB.
   * @description Inserting data records to the data store in the indexedDB.
   */
  async dataStoreAdd(storeName, dataItems, dataKeys) {
    return await this._callBdpApi('dataStoreAdd', {storeName: storeName, dataItems: dataItems, dataKeys: dataKeys});
  }

  /**
   * @async
   * @function BdpPageAPI#dataStorePut
   * @param {string} storeName the name of the data store in the indexedDB
   * @param {object[]} dataItems the data records to be added
   * @param {string[]} dataKeys (optional) the keys array for the data records (in the same order)
   * @return {string} returns `ok` if successfully updating or inserting data in the indexedDB.
   * @description Similar to `BdpPageAPI#dataStoreAdd`, this function performs the update or insert method.
   * Data records of the same key are updated.
   */
  async dataStorePut(storeName, dataItems, dataKeys) {
    return await this._callBdpApi('dataStorePut', {storeName: storeName, dataItems: dataItems, dataKeys: dataKeys});
  }

  /**
   * @async
   * @function BdpPageAPI#dataStoreCount
   * @param {string} storeName the name of the data store in the indexedDB
   * @param {string | IDBKeyRange} queryKey (Optional) the queryKeyRange specify the desired query key condition.
   * @return {number} The number of records in the specified data store.
   * @description Counting the record numbers of a data store in the indexedDB.
   */
  async dataStoreCount(storeName, queryKey) {
    return await this._callBdpApi('dataStoreCount', {storeName: storeName, queryKeyRange: queryKey || undefined});
  }

  /**
   * @async
   * @function BdpPageAPI#dataStoreClear
   * @param {string} storeName the name of the data store in the indexedDB
   * @return {string} returns `ok` if successfully clearing data
   * @description Clearing data records in a data store in the indexedDB. The data store exists and becomes empty.
   */
  async dataStoreClear(storeName) {
    return await this._callBdpApi('dataStoreClear', {storeName: storeName});
  }

  /**
   * @async
   * @function BdpPageAPI#dataStoreRemove
   * @param {string} storeName the name of the data store in the indexedDB
   * @return {string} returns `ok` if successfully removing the data store.
   * @description Removing a data store in the indexedDB. The data store is removed and not existed.
   */
  async dataStoreRemove(storeName) {
    return await this._callBdpApi('dataStoreRemove', {storeName: storeName});
  }
  
  /*
  async requestFileSelectUI() {
    // allow users to
  }

  async requestUploaderUI() {
    // 1. popup a dialog to help users to upload file
    // 2. after uploading files, sendToClient the fileObj
    await this._callBdpApi('requestUploaderUI', {});
  }
  */
};

/**
 * @typedef BdpPageUtils
 * @type {object}
 * @property {function} sleep an async function to sleep `n` seconds if you call `await BDPPageUtils.sleep(n);`
 * @property {function} readFileBlob an async function to parse the blob object. The first argument is the Blob object and the second is one of `'arrayBuffer' | 'binaryString' | 'text'`.
 * The results are the parsed blob content.
 */

const BdpPageUtils = {
  sleep: (sec) => new Promise((resolve) => setTimeout(() => resolve(), 1000*sec)),
  readFileBlob: (blob, type) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('loadend', e => resolve(e.target['result']));
      reader.addEventListener('error', e => reject(e));
      switch (type) {
        case 'arrayBuffer':
          reader.readAsArrayBuffer(blob);
        break;
        case 'binaryString':
          reader.readAsBinaryString(blob);
        break;
        default:
          reader.readAsText(blob);
        break;
      }
    });
  }
}

window.BdpPageAPI = BdpPageAPI;
window.BdpPageUtils = BdpPageUtils;
