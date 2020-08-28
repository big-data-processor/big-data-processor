class BDPEventEmitter{
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

class BDPClientAPI {
  // apiEmitter;
  // eventEmitter;
  // _initialized;
  constructor() {
    this._initialized = false;
    this._registerEventListener = (eventId, fn) => {
      this.eventEmitter.on(eventId, fn);
    };
    this._removeEventListener = (eventId, fn) => {
      this.eventEmitter.removeListener(eventId, fn);
    }
    this._registerErrorListener = (eventId, fn) => {
      this.errorEmitter.on(eventId, fn);
    };
    this._removeErrorListener = (eventId, fn) => {
      this.errorEmitter.removeListener(eventId, fn);
    }
    this._newID = function() {
      return new Date().valueOf() + '-' + Math.round(String(Math.random() * 100000));
    }
    this._callBdpApi = async (method, data, ID) => {
      if (!ID) { ID = this._newID(); }
      window.parent.postMessage({call: method, value: data, id: ID, type: 'sent'}, '*');
      return new Promise((resolve, reject) => {
        this.apiEmitter.once(ID, (data) => {
          return data.err ? reject(data.err) : resolve(data.value);
        });
      });
    };
  }
  async initialize(errorListenFn) {
    if (!this.initialized) {
      this.apiEmitter = new BDPEventEmitter();
      this.eventEmitter = new BDPEventEmitter();
      this.errorEmitter = new BDPEventEmitter();
      this.changeEmitter = new BDPEventEmitter();
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
  get initialized() {
    return this._initialized;
  }
  async getAuthToken() {
    return await this._callBdpApi('getAuthToken', {});
  }
  // const authToken = await this._callBdpApi('getAuthToken', {});
  log(data) {
    this._callBdpApi('log', JSON.stringify(data));
  }
  async listFiles() {
    return await this._callBdpApi('listFiles', {});
  }
  async listResults() {
    return await this._callBdpApi('listResults', {});
  }
  async listPackages() {
    return await this._callBdpApi('listPackages', {});
  }
  async openFileLink(fileID) {
    return await this._callBdpApi('openFileLink', {fileID: fileID});
    // window.open('/dataFile/' + fileID + '/info', "", "width=800,height=600"); // Under the sandbox cannot open the window
  }
  async getFileBlob(fileID, subPath, listenerFn, errorListener) {
    const theID = this._newID();
    if (errorListener) { this._registerErrorListener(theID, errorListener); }
    if (listenerFn) { this._registerEventListener(theID, listenerFn);}
    const returnBlob = await this._callBdpApi('getFileBlob', {fileID: fileID, subPath: subPath}, theID);
    if (listenerFn) { this._removeEventListener(theID, listenerFn)};
    if (errorListener) { this._removeErrorListener(theID, errorListener)};
    return returnBlob;
  }
  async getDownloadLink(fileID, subPath, authToken) {
    return await this._callBdpApi('getDownloadLink', {fileID: fileID, subPath: subPath || null, authToken: authToken || ''});
  }
  async getCurrentUserInfo() {
    return this._callBdpApi('getCurrentUserInfo');
  }
  async getCurrentFileInfo() {
    return this._callBdpApi('getCurrentFileInfo');
  }
  async getCurrentResultInfo() {
    return this._callBdpApi('getCurrentResultInfo');
  }
  async getCurrentPackageInfo() {
    return this._callBdpApi('getCurrentPackageInfo');
  }
  async getCurrentProjectInfo() {
    return this._callBdpApi('getCurrentProjectInfo');
  }
  async globFilesInFolder(fileID, globbyExprs) {
    return this._callBdpApi('globFilesInFolder', {fileID: fileID, globbyExprs: globbyExprs});
  }
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
  navigateToProjectList(listType, pageSize, pageIndex) {
    this._callBdpApi('navigateToProjectList', {listType: listType || 'myProjects', pageSize: pageSize || 30, pageIndex: pageIndex || 0});
  }
  async navigateToProjectPage(pageKey, packageID) {
    await this._callBdpApi('navigateToProjectPage', {pageKey: pageKey, packageID: packageID});
  }
  async navigateToFilePage(fileID, pageKey, packageID) {
    await this._callBdpApi('navigateToFilePage', {fileID: fileID, pageKey: pageKey, packageID: packageID});
  }
  async navigateToBdpDataFile(fileID) {
    await this._callBdpApi('navigateToBdpDataFile', {fileID: fileID});
  }
  async navigateToResultPage(resultID, pageKey, packageID) {
    await this._callBdpApi('navigateToResultPage', {resultID: resultID, pageKey: pageKey, packageID: packageID});
  }
  async navigateToBdpResult(resultID) {
    await this._callBdpApi('navigateToBdpResult', {resultID: resultID});
  }
  async openResultLink(resultID) {
    return await this._callBdpApi('openResultLink', {resultID: resultID});
  }
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
  async updateFileInfo(fileID, updateOptions) {
    return await this._callBdpApi('updateFileInfo', {
      fileID: fileID,
      newInfo: {
        name: updateOptions.name || undefined,
        desc: updateOptions.desc || undefined,
        tags: updateOptions.tags || undefined,
        prefix: updateOptions.prefix || undefined,
        suffix: updateOptions.suffix
    }});
  }
  async deleteFile(fileID) {
    return await this._callBdpApi('deleteFile', {fileID: fileID});
  }

  async getTaskArguments(taskIdentifier) {
    return await this._callBdpApi('getTaskArguments', {identifier: taskIdentifier});
  }

  async getTaskInfo(taskIdentifier) {
    return await this._callBdpApi('getTaskInfo', {identifier: taskIdentifier});
  }

  async listTasks(packageID) {
    return await this._callBdpApi('listTasks', {packageID: packageID});
  }
  async listAllTasks() {
    return await this._callBdpApi('listAllTasks');
  }

  async refreshPage() {
    return await this._callBdpApi('refreshPage');
  }
  async toggleFullPage(isFullPage) {
    return await this._callBdpApi('toggleFullPage', {isFullPage: isFullPage});
  }
  async toggleRightSideMenu(isShown) {
    return await this._callBdpApi('toggleRightSideMenu', {isShown: isShown});
  }
  async togglePageList(mode) {
    // mode == 'list' or 'page' or undefined for toggling
    return await this._callBdpApi('togglePageList', {mode: mode});
  }
  async getTaskInputGuide(taskIdentifier) {
    return await this._callBdpApi('getTaskInputGuide', {identifier: taskIdentifier})
  }
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

  watchResultChange(resultListenerFn) {
    this.changeEmitter.on('Result', resultListenerFn);
    return {stop: () => this.changeEmitter.removeListener('Result', resultListenerFn)};
  }
  stopWatchResultChange(resultListenerFn) {this.changeEmitter.removeListener('Result', resultListenerFn);}
  watchFileChange(fileListenerFn) {
    this.changeEmitter.on('DataFile', fileListenerFn);
    return {stop: () => this.changeEmitter.on('DataFile')}
  }
  stopWatchFileChange(fileListenerFn) { this.changeEmitter.removeListener('DataFile', fileListenerFn); }

  watchResultMsgChange(resultMsgListenerFn) {
    this.changeEmitter.on('ResultMsg', resultMsgListenerFn);
    return {stop: () => this.changeEmitter.removeListener('ResultMsg', resultMsgListenerFn)};
  }
  stopWatchResultMsgChange(resultMsgListenerFn) {this.changeEmitter.removeListener('ResultMsg', resultMsgListenerFn);}
  async navigateTo() {
    // Another router.navigate function to view the built-in link instead of the PAGE Link
  }

  async deleteResult(resultID) {
    return await this._callBdpApi('deleteResult', {resultID: resultID});
  }

  /**
   * This api allows users to request all BDP endpoints without letting users to click same-origin sandbox settings.
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
   * Allow storing data to IndexeDB
   * Each Page can use only one DB. Different users/different page types/different project/result/datafile id will have different indexed DB.
   */
  async requestDatabase(version, objectStoreSettings, creatingIndexes) {
    const theID = this._newID();
    const result = await this._callBdpApi('requestDatabase', {version: version, objectStoreSettings: objectStoreSettings, creatingIndexes:creatingIndexes}, theID);
    return result;
  }
  async requestDatabaseRemove() {
    const theID = this._newID();
    const result = await this._callBdpApi('requestDatabaseRemove', {}, theID);
    return result;
  }
  async dataStoreQuery(storeName, query, indexName, direction, iterateFn) {
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
  async dataStoreGet(storeName, key, indexName) {
    const theID = this._newID();
    return await this._callBdpApi('dataStoreGet', {storeName: storeName, key: key, indexName: indexName}, theID);
  }
  async dataStoreAdd(storeName, dataItems, dataKeys) {
    const theID = this._newID();
    const result = await this._callBdpApi('dataStoreAdd', {storeName: storeName, dataItems: dataItems, dataKeys: dataKeys}, theID);
    return result;
  }
  async dataStorePut(storeName, dataItems, dataKeys) {
    const theID = this._newID();
    const result = await this._callBdpApi('dataStorePut', {storeName: storeName, dataItems: dataItems, dataKeys: dataKeys}, theID);
    return result;
  }
  async dataStoreCount(storeName, queryKey) {
    const theID = this._newID();
    const result = await this._callBdpApi('dataStoreCount', {storeName: storeName, queryKeyRange: queryKey || undefined}, theID);
    return result;
  }
  async dataStoreClear(storeName) {
    const theID = this._newID();
    const result = await this._callBdpApi('dataStoreClear', {storeName: storeName}, theID);
    return result;
  }
  async dataStoreRemove(storeName) {
    const theID = this._newID();
    const result = await this._callBdpApi('dataStoreRemove', {storeName: storeName}, theID);
    return result;
  }
  
  /**
   * Low priority
   */
  async requestFileSelectUI() {
    // allow users to
  }

  async requestUploaderUI() {
    // 1. popup a dialog to help users to upload file
    // 2. after uploading files, sendToClient the fileObj
    await this._callBdpApi('requestUploaderUI', {});
  }
};

const BDPClientUtils = {
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

window.BDPClientAPI = BDPClientAPI;
