!function(){function e(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4wla":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("zXF6"),i=r("fXoL"),a=function(){var e=function e(){d(this,e)};return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},providers:[n.a],imports:[[]]}),e}()},Xa2L:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return y}));var a=r("fXoL"),s=r("ofXK"),u=r("FKr1"),l=r("8LU1"),c=r("nLfN"),h=r("R1ws");function f(e,t){if(1&e&&(a.cc(),a.Nb(0,"circle",3)),2&e){var r=a.dc();a.Fc("animation-name","mat-progress-spinner-stroke-rotate-"+r._spinnerAnimationLabel)("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),a.Bb("r",r._getCircleRadius())}}function p(e,t){if(1&e&&(a.cc(),a.Nb(0,"circle",3)),2&e){var r=a.dc();a.Fc("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),a.Bb("r",r._getCircleRadius())}}function m(e,t){if(1&e&&(a.cc(),a.Nb(0,"circle",3)),2&e){var r=a.dc();a.Fc("animation-name","mat-progress-spinner-stroke-rotate-"+r._spinnerAnimationLabel)("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),a.Bb("r",r._getCircleRadius())}}function g(e,t){if(1&e&&(a.cc(),a.Nb(0,"circle",3)),2&e){var r=a.dc();a.Fc("stroke-dashoffset",r._getStrokeDashOffset(),"px")("stroke-dasharray",r._getStrokeCircumference(),"px")("stroke-width",r._getCircleStrokeWidth(),"%"),a.Bb("r",r._getCircleRadius())}}var k=".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n",_=Object(u.u)((function e(t){d(this,e),this._elementRef=t}),"primary"),b=new a.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}}),v=function(){var e=function(e){i(r,e);var t=o(r);function r(e,n,i,a,o){var s;d(this,r),(s=t.call(this,e))._elementRef=e,s._document=i,s._diameter=100,s._value=0,s._fallbackAnimation=!1,s.mode="determinate";var u=r._diameters;return s._spinnerAnimationLabel=s._getSpinnerAnimationLabel(),u.has(i.head)||u.set(i.head,new Set([100])),s._fallbackAnimation=n.EDGE||n.TRIDENT,s._noopAnimations="NoopAnimations"===a&&!!o&&!o._forceAnimations,o&&(o.diameter&&(s.diameter=o.diameter),o.strokeWidth&&(s.strokeWidth=o.strokeWidth)),s}return n(r,[{key:"ngOnInit",value:function(){var e=this._elementRef.nativeElement;this._styleRoot=Object(c.c)(e)||this._document.head,this._attachStyleNode(),e.classList.add("mat-progress-spinner-indeterminate".concat(this._fallbackAnimation?"-fallback":"","-animation"))}},{key:"_getCircleRadius",value:function(){return(this.diameter-10)/2}},{key:"_getViewBox",value:function(){var e=2*this._getCircleRadius()+this.strokeWidth;return"0 0 ".concat(e," ").concat(e)}},{key:"_getStrokeCircumference",value:function(){return 2*Math.PI*this._getCircleRadius()}},{key:"_getStrokeDashOffset",value:function(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}},{key:"_getCircleStrokeWidth",value:function(){return this.strokeWidth/this.diameter*100}},{key:"_attachStyleNode",value:function(){var e=this._styleRoot,t=this._diameter,n=r._diameters,i=n.get(e);if(!i||!i.has(t)){var a=this._document.createElement("style");a.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),a.textContent=this._getAnimationText(),e.appendChild(a),i||(i=new Set,n.set(e,i)),i.add(t)}}},{key:"_getAnimationText",value:function(){var e=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*e).replace(/END_VALUE/g,""+.2*e).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}},{key:"_getSpinnerAnimationLabel",value:function(){return this.diameter.toString().replace(".","_")}},{key:"diameter",get:function(){return this._diameter},set:function(e){this._diameter=Object(l.f)(e),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}},{key:"strokeWidth",get:function(){return this._strokeWidth||this.diameter/10},set:function(e){this._strokeWidth=Object(l.f)(e)}},{key:"value",get:function(){return"determinate"===this.mode?this._value:0},set:function(e){this._value=Math.max(0,Math.min(100,Object(l.f)(e)))}}]),r}(_);return e.\u0275fac=function(t){return new(t||e)(a.Mb(a.l),a.Mb(c.a),a.Mb(s.d,8),a.Mb(h.a,8),a.Mb(b))},e.\u0275cmp=a.Gb({type:e,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(a.Bb("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),a.Fc("width",t.diameter,"px")("height",t.diameter,"px"),a.Eb("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[a.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(a.cc(),a.Sb(0,"svg",0),a.Ic(1,f,1,9,"circle",1),a.Ic(2,p,1,7,"circle",2),a.Rb()),2&e&&(a.Fc("width",t.diameter,"px")("height",t.diameter,"px"),a.kc("ngSwitch","indeterminate"===t.mode),a.Bb("viewBox",t._getViewBox()),a.Ab(1),a.kc("ngSwitchCase",!0),a.Ab(1),a.kc("ngSwitchCase",!1))},directives:[s.p,s.q],styles:[k],encapsulation:2,changeDetection:0}),e._diameters=new WeakMap,e}(),y=function(){var e=function(e){i(r,e);var t=o(r);function r(e,n,i,a,o){var s;return d(this,r),(s=t.call(this,e,n,i,a,o)).mode="indeterminate",s}return r}(v);return e.\u0275fac=function(t){return new(t||e)(a.Mb(a.l),a.Mb(c.a),a.Mb(s.d,8),a.Mb(h.a,8),a.Mb(b))},e.\u0275cmp=a.Gb({type:e,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(e,t){2&e&&(a.Fc("width",t.diameter,"px")("height",t.diameter,"px"),a.Eb("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color"},features:[a.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(a.cc(),a.Sb(0,"svg",0),a.Ic(1,m,1,9,"circle",1),a.Ic(2,g,1,7,"circle",2),a.Rb()),2&e&&(a.Fc("width",t.diameter,"px")("height",t.diameter,"px"),a.kc("ngSwitch","indeterminate"===t.mode),a.Bb("viewBox",t._getViewBox()),a.Ab(1),a.kc("ngSwitchCase",!0),a.Ab(1),a.kc("ngSwitchCase",!1))},directives:[s.p,s.q],styles:[k],encapsulation:2,changeDetection:0}),e}(),w=function(){var e=function e(){d(this,e)};return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[u.h,s.c],u.h]}),e}()},zXF6:function(t,r,i){"use strict";i.d(r,"a",(function(){return u}));var a=i("fXoL"),o=i("h2Ed"),s=function(){function e(t,r){d(this,e),this.id=t,this.originalName=r.name,this.size=r.size,this.progress={loaded:0,total:0,percent:0,speed:0,speedHumanized:null},this.file=r,this.done=!1,this.error=!1,this.abort=!1,this.uploading=!1,this.startTime=(new Date).getTime(),this.endTime=0,this.speedAverage=0,this.speedAverageHumanized=null}return n(e,[{key:"setProgres",value:function(e){this.progress.loaded=e.loaded?e.loaded:this.progress.loaded,this.progress.total=e.total?e.total:this.progress.total,this.progress.percent=e.percent?e.percent:this.progress.percent,this.progress.speed=e.speed?e.speed:this.progress.speed,this.progress.speedHumanized=e.speedHumanized?e.speedHumanized:this.progress.speedHumanized}},{key:"setError",value:function(e){this.error=!0,this.done=!1,this.uploading=!1,this.progress={loaded:0,total:0,percent:0,speed:0,speedHumanized:null},this.note=e}},{key:"stop",value:function(){this.uploading&&(this._xhr.abort(),this.setAbort(),console.log(this.file))}},{key:"setAbort",value:function(e){this.abort=!0,this.done=!1,this.uploading=!1,this.progress={loaded:0,total:0,percent:0,speed:0,speedHumanized:null},this.note=e}},{key:"onFinished",value:function(e,t,r){this.endTime=(new Date).getTime(),this.speedAverage=this.size/(this.endTime-this.startTime)*1e3,this.speedAverage=parseInt(this.speedAverage,10),this.speedAverageHumanized=l(this.speedAverage),this.status=e,this.statusText=t,r?(this.response=new o.a(JSON.parse(r)),this.response.success&&this.response.success[0]&&3===this.response.success[0].status&&this.setError()):this.response=void 0,this.done=!0,this.uploading=!1}},{key:"xhr",set:function(e){this._xhr=e}}]),e}(),u=function(){var t=function(){function t(){d(this,t),this.cors=!1,this.withCredentials=!1,this.multiple=!1,this.maxUploads=1,this.data={},this.autoUpload=!0,this.multipart=!0,this.method="POST",this.debug=!1,this.customHeaders={},this.encodeHeaders=!0,this.authTokenPrefix="Bearer",this.authToken=void 0,this.fieldName="file",this.previewUrl=!1,this.calculateSpeed=!1,this.allowedExtensions=[],this._queue=[],this._emitter=new a.o,this._previewEmitter=new a.o}return n(t,[{key:"setOptions",value:function(e){this.url=null!=e.url?e.url:this.url,this.cors=null!=e.cors?e.cors:this.cors,this.withCredentials=null!=e.withCredentials?e.withCredentials:this.withCredentials,this.multiple=null!=e.multiple?e.multiple:this.multiple,this.maxUploads=null!=e.maxUploads?e.maxUploads:this.maxUploads,this.data=null!=e.data?e.data:this.data,this.autoUpload=null!=e.autoUpload?e.autoUpload:this.autoUpload,this.multipart=null!=e.multipart?e.multipart:this.multipart,this.method=null!=e.method?e.method:this.method,this.customHeaders=null!=e.customHeaders?e.customHeaders:this.customHeaders,this.encodeHeaders=null!=e.encodeHeaders?e.encodeHeaders:this.encodeHeaders,this.authTokenPrefix=null!=e.authTokenPrefix?e.authTokenPrefix:this.authTokenPrefix,this.authToken=null!=e.authToken?e.authToken:this.authToken,this.fieldName=null!=e.fieldName?e.fieldName:this.fieldName,this.previewUrl=null!=e.previewUrl?e.previewUrl:this.previewUrl,this.calculateSpeed=null!=e.calculateSpeed?e.calculateSpeed:this.calculateSpeed,this.allowedExtensions=e.allowedExtensions?e.allowedExtensions:[],this.allowedFileSize=e.allowedFileSize?e.allowedFileSize:8e6,this._currentUploadingQueue=[],this._currentUploads=0,this.multiple||(this.maxUploads=1)}},{key:"uploadFilesInQueue",value:function(){var e=this._queue.filter((function(e){return!(e.uploading||e.done||e.error||e.abort)}));e.length>0&&(this._currentUploadingQueue.push.apply(this._currentUploadingQueue,e),this._currentUploads<this.maxUploads&&this.uploadFile(this._currentUploadingQueue.shift()))}},{key:"uploadFile",value:function(e){var t=this;this._currentUploads++;var r=new XMLHttpRequest,n=new FormData;n.append(this.fieldName,e.file,e.file.name),Object.keys(this.data).forEach((function(e){n.append(e,t.data[e])}));var i=(new Date).getTime(),a=0,o=0,s=null;e.xhr=r,e.done=!1,e.abort=!1,e.uploading=!0,e.error=!1,r.upload.onprogress=function(r){if(r.lengthComputable){t.calculateSpeed&&(i=(new Date).getTime()-i,a=r.loaded-a,o=a/i*1e3,o=parseInt(o,10),s=l(o));var n=Math.round(r.loaded/r.total*100);e.setProgres(0===o?{total:r.total,loaded:r.loaded,percent:n}:{total:r.total,loaded:r.loaded,percent:n,speed:o,speedHumanized:s}),t._emitter.emit(e)}},r.upload.onabort=function(r){e.setAbort("Upload aborted"),t._emitter.emit(e)},r.upload.onerror=function(r){e.setError(""),t._emitter.emit(e)},r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(e.onFinished(r.status,r.statusText,r.response),t._emitter.emit(e),t._currentUploads--,t._currentUploads<t.maxUploads&&t._currentUploadingQueue.length>0&&t.uploadFile(t._currentUploadingQueue.shift()))},r.open(this.method,this.url,!0),r.withCredentials=this.withCredentials,this.customHeaders&&Object.keys(this.customHeaders).forEach((function(e){r.setRequestHeader(e,t.customHeaders[e])})),this.authToken&&r.setRequestHeader("Authorization","".concat(this.authTokenPrefix," ").concat(this.authToken)),e.uploading=!0,r.send(n),this._currentUploads<this.maxUploads&&this._currentUploadingQueue.length>0&&this.uploadFile(this._currentUploadingQueue.shift())}},{key:"checkValidExt",value:function(t){if(this.allowedExtensions.indexOf("*")>=0)return!0;var r,n=e(this.allowedExtensions);try{for(n.s();!(r=n.n()).done;){var i=r.value,a=new RegExp(i.replace(/\./g,"\\.")+"$");if(t.match(a))return!0}}catch(o){n.e(o)}finally{n.f()}return!1}},{key:"addFilesToQueue",value:function(e){var t=this;e.forEach((function(e,r){if(t.isFile(e)&&!t.inQueue(e)){e.name.split(".").pop();var n=new s(t.generateRandomIndex(),e);(t.allowedExtensions.length&&!t.checkValidExt(e.name)||e.size>t.allowedFileSize)&&n.setError(),t._queue.push(n)}})),this.previewUrl&&e.forEach((function(e){return t.createFileUrl(e)})),this.autoUpload&&this.uploadFilesInQueue()}},{key:"createFileUrl",value:function(e){var t=this,r=new FileReader;r.addEventListener("load",(function(){return t._previewEmitter.emit(r.result)})),r.readAsDataURL(e)}},{key:"removeFileFromQueue",value:function(e){this._queue.splice(e,1)}},{key:"removeFileByID",value:function(e){var t=this._queue.findIndex((function(t){return t.id===e})),r=this._queue[t];r.uploading&&r.stop(),this._queue.splice(t,1)}},{key:"clearQueue",value:function(){this._queue=[]}},{key:"getQueueSize",value:function(){return this._queue.length}},{key:"inQueue",value:function(e){return!!this._queue.filter((function(t){return t===e})).length}},{key:"isFile",value:function(e){return null!==e&&(e instanceof Blob||e.name&&e.size)}},{key:"generateRandomIndex",value:function(){return Math.random().toString(36).substring(7)}},{key:"currentUploads",get:function(){return this._currentUploads}},{key:"queue",get:function(){return this._queue}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac}),t}();function l(e){if(0===e)return"0 Byte";var t=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,t)).toFixed(2))+" "+["Bytes","KB","MB","GB","TB","PB"][t]+"/s"}}}])}();