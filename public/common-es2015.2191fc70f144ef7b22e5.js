(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5m7+":function(n,e,t){"use strict";t.d(e,"a",function(){return c});var a=t("fXoL");let c=(()=>{class n{}return n.\u0275mod=a.Kb({type:n}),n.\u0275inj=a.Jb({factory:function(e){return new(e||n)},providers:[],imports:[[]]}),n})()},"9zvm":function(n,e,t){"use strict";t.d(e,"a",function(){return o});var a=t("fXoL");const c=["preEl"];let o=(()=>{class n{constructor(n){}ngOnInit(){}ngOnChanges(n){if(n.text){const n=this.preEl.nativeElement;setTimeout(()=>n.scrollTop=n.scrollHeight,1)}}}return n.\u0275fac=function(e){return new(e||n)(a.Mb(a.l))},n.\u0275cmp=a.Gb({type:n,selectors:[["chi-terminal"]],viewQuery:function(n,e){if(1&n&&a.Fc(c,!0),2&n){let n;a.vc(n=a.bc())&&(e.preEl=n.first)}},inputs:{text:"text"},features:[a.yb],decls:3,vars:1,consts:[["preEl",""]],template:function(n,e){1&n&&(a.Sb(0,"pre",null,0),a.Lc(2),a.Rb()),2&n&&(a.Ab(2),a.Mc(e.text))},styles:["pre[_ngcontent-%COMP%]{font-size:10px;min-width:640px;max-height:600px;font-family:Consolas,monospace;background-color:rgba(0,0,0,.7);color:#fff;padding:5px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;overflow-wrap:break-word;word-break:break-all}"]}),n})()},QLJ7:function(n,e,t){"use strict";t.d(e,"b",function(){return u}),t.d(e,"a",function(){return d});var a=t("ofXK"),c=t("fXoL");function o(n,e){1&n&&c.Nb(0,"div",9)}function s(n,e){if(1&n&&(c.Sb(0,"span",10),c.Lc(1),c.Rb()),2&n){const n=c.ec().$implicit;c.Ab(1),c.Mc(n.description)}}function i(n,e){if(1&n&&(c.Sb(0,"section",11),c.Nb(1,"ngx-json-viewer",12),c.Rb()),2&n){const n=c.ec().$implicit,e=c.ec();c.Ab(1),c.lc("json",n.value)("expanded",e.expanded)}}const r=function(n){return["segment",n]},l=function(n,e){return{"segment-main":!0,expandable:n,expanded:e}};function g(n,e){if(1&n){const n=c.Tb();c.Sb(0,"section",2),c.Sb(1,"section",3),c.ac("click",function(){c.zc(n);const t=e.$implicit;return c.ec().toggle(t)}),c.Jc(2,o,1,0,"div",4),c.Sb(3,"span",5),c.Lc(4),c.Rb(),c.Sb(5,"span",6),c.Lc(6,": "),c.Rb(),c.Jc(7,s,2,1,"span",7),c.Rb(),c.Jc(8,i,2,2,"section",8),c.Rb()}if(2&n){const n=e.$implicit,t=c.ec();c.lc("ngClass",c.pc(6,r,"segment-type-"+n.type)),c.Ab(1),c.lc("ngClass",c.qc(8,l,t.isExpandable(n),n.expanded)),c.Ab(1),c.lc("ngIf",t.isExpandable(n)),c.Ab(2),c.Mc(n.key),c.Ab(3),c.lc("ngIf",!n.expanded||!t.isExpandable(n)),c.Ab(1),c.lc("ngIf",n.expanded&&t.isExpandable(n))}}let d=(()=>{class n{constructor(){this.expanded=!0,this.cleanOnChange=!0,this.segments=[]}ngOnChanges(){this.cleanOnChange&&(this.segments=[]),"object"==typeof this.json?Object.keys(this.json).forEach(n=>{this.segments.push(this.parseKeyValue(n,this.json[n]))}):this.segments.push(this.parseKeyValue(`(${typeof this.json})`,this.json))}isExpandable(n){return"object"===n.type||"array"===n.type}toggle(n){this.isExpandable(n)&&(n.expanded=!n.expanded)}parseKeyValue(n,e){const t={key:n,value:e,type:void 0,description:""+e,expanded:this.expanded};switch(typeof t.value){case"number":t.type="number";break;case"boolean":t.type="boolean";break;case"function":t.type="function";break;case"string":t.type="string",t.description='"'+t.value+'"';break;case"undefined":t.type="undefined",t.description="undefined";break;case"object":null===t.value?(t.type="null",t.description="null"):Array.isArray(t.value)?(t.type="array",t.description="Array["+t.value.length+"] "+JSON.stringify(t.value)):t.value instanceof Date?t.type="date":(t.type="object",t.description="Object "+JSON.stringify(t.value))}return t}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Gb({type:n,selectors:[["ngx-json-viewer"]],inputs:{expanded:"expanded",cleanOnChange:"cleanOnChange",json:"json"},features:[c.yb],decls:2,vars:1,consts:[[1,"ngx-json-viewer"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"ngClass","click"],["class","toggler",4,"ngIf"],[1,"segment-key"],[1,"segment-separator"],["class","segment-value",4,"ngIf"],["class","children",4,"ngIf"],[1,"toggler"],[1,"segment-value"],[1,"children"],[3,"json","expanded"]],template:function(n,e){1&n&&(c.Sb(0,"section",0),c.Jc(1,g,9,11,"section",1),c.Rb()),2&n&&(c.Ab(1),c.lc("ngForOf",e.segments))},directives:[a.m,a.l,a.n,n],styles:['@charset "UTF-8";\n    .ngx-json-viewer[_ngcontent-%COMP%] {\n      font-family: monospace;\n      font-size: 1em;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      position: relative; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%] {\n        padding: 2px;\n        margin: 1px 1px 1px 12px; }\n        .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%] {\n          word-wrap: break-word; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%] {\n            position: absolute;\n            margin-left: -14px;\n            margin-top: 3px;\n            font-size: .8em;\n            line-height: 1.2em;\n            vertical-align: middle;\n            color: #787878; }\n            .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]::after {\n              display: inline-block;\n              content: "\u25ba";\n              -webkit-transition: -webkit-transform 0.1s ease-in;\n              transition: -webkit-transform 0.1s ease-in;\n              transition: transform 0.1s ease-in;\n              transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-key[_ngcontent-%COMP%] {\n            color: #4E187C; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-separator[_ngcontent-%COMP%] {\n            color: #999; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-value[_ngcontent-%COMP%] {\n            color: #000; }\n        .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%] {\n          margin-left: 12px; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-string[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #FF6B6B; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-number[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #009688; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-boolean[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #b938a4; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-date[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #05668D; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-function[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #fff; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #fff; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        background-color: red; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-key[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        background-color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%] {\n        white-space: nowrap; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%]    > .toggler[_ngcontent-%COMP%]::after {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg); }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%]    > .toggler[_ngcontent-%COMP%] {\n        cursor: pointer; }']}),n})(),u=(()=>{class n{}return n.\u0275mod=c.Kb({type:n}),n.\u0275inj=c.Jb({factory:function(e){return new(e||n)},imports:[[a.c]]}),n})()},l8fv:function(n,e,t){"use strict";t.d(e,"a",function(){return h});var a=t("fXoL"),c=t("2uAV"),o=t("tyNb"),s=t("ofXK"),i=t("Wp6s"),r=t("bTqV");function l(n,e){if(1&n&&(a.Sb(0,"div",14),a.Nb(1,"i",15),a.Rb()),2&n){const n=a.ec(2);a.Ab(1),a.lc("ngClass",n.checkBoxCSS())}}function g(n,e){if(1&n&&(a.Sb(0,"span",16),a.Lc(1),a.Rb()),2&n){const n=e.$implicit;a.Ab(1),a.Nc(" ",n," ")}}function d(n,e){1&n&&(a.Sb(0,"span",17),a.Lc(1,"No description."),a.Rb())}function u(n,e){if(1&n&&(a.Sb(0,"span",18),a.Lc(1),a.Rb()),2&n){const n=a.ec(2);a.Ab(1),a.Mc((null==n.dataFile.desc?null:n.dataFile.desc.length)>60?(null==n.dataFile.desc?null:n.dataFile.desc.slice(0,56))+" ...":n.dataFile.desc)}}function b(n,e){1&n&&(a.Sb(0,"span",26),a.Lc(1,"Read only"),a.Rb())}function f(n,e){if(1&n){const n=a.Tb();a.Qb(0),a.Sb(1,"button",19),a.ac("click",function(){return a.zc(n),a.ec(2).gotoDataFile(!1)}),a.Nb(2,"i",20),a.Rb(),a.Sb(3,"button",21),a.ac("click",function(){return a.zc(n),a.ec(2).gotoDataFile(!0)}),a.Nb(4,"i",22),a.Rb(),a.Sb(5,"span",23),a.Lc(6,"Status: "),a.Nb(7,"i",24),a.Rb(),a.Jc(8,b,2,0,"span",25),a.Pb()}if(2&n){const n=a.ec(2);a.Ab(3),a.lc("disabled",null==n.dataFile?null:n.dataFile.readOnly),a.Ab(4),a.lc("ngClass",n.setStatusCSS(null==n.dataFile?null:n.dataFile.status)),a.Ab(1),a.lc("ngIf",null==n.dataFile?null:n.dataFile.readOnly)}}const p=function(n){return["/dataFile",n,"info"]};function m(n,e){if(1&n){const n=a.Tb();a.Sb(0,"mat-card",1),a.ac("click",function(e){return a.zc(n),a.ec().toggleControls(e)}),a.Sb(1,"mat-card-header"),a.Jc(2,l,2,1,"div",2),a.Sb(3,"div",3),a.Nb(4,"i",4),a.Rb(),a.Sb(5,"mat-card-title"),a.Sb(6,"u",5),a.Lc(7),a.Rb(),a.Sb(8,"b",6),a.Lc(9),a.Rb(),a.Sb(10,"u",5),a.Lc(11),a.Rb(),a.Sb(12,"a",7),a.Nb(13,"span",8),a.Rb(),a.Rb(),a.Rb(),a.Sb(14,"mat-card-content"),a.Jc(15,g,2,1,"span",9),a.Nb(16,"br"),a.Jc(17,d,2,0,"span",10),a.Jc(18,u,2,1,"span",11),a.Nb(19,"br"),a.Rb(),a.Sb(20,"mat-card-actions"),a.Jc(21,f,9,3,"ng-container",12),a.Rb(),a.Sb(22,"mat-card-footer"),a.Sb(23,"small",13),a.Lc(24),a.Rb(),a.Rb(),a.Rb()}if(2&n){const n=a.ec();a.Gc("border",n.dataFile.hidden?"dashed 1px black":"solid 1px black")("cursor","checkBox"===n.role?"pointer":"default"),a.Eb("focus","checkBox && !disabled"==n.role&&n.checked)("blur",n.disabled||"checkBox"==n.role&&!n.checked)("datafile-card","checkBox"===n.role),a.Ab(2),a.lc("ngIf","checkBox"==n.role),a.Ab(2),a.lc("ngClass",n.fileTypeCSS()),a.Ab(3),a.Mc(null==n.dataFile?null:n.dataFile.prefix),a.Ab(2),a.Mc(null==n.dataFile?null:n.dataFile.name),a.Ab(2),a.Mc(null==n.dataFile?null:n.dataFile.suffix),a.Ab(1),a.lc("routerLink",a.pc(21,p,n.dataFile.id)),a.Ab(3),a.lc("ngForOf",null==n.dataFile?null:n.dataFile.tags),a.Ab(2),a.lc("ngIf",!n.dataFile.desc),a.Ab(1),a.lc("ngIf",n.dataFile.desc),a.Ab(3),a.lc("ngIf","checkBox"!==n.role),a.Ab(3),a.Mc(null==n.dataFile||null==n.dataFile.createdAt?null:n.dataFile.createdAt.fromNow())}}let h=(()=>{class n{constructor(n,e){this.infoService=n,this.router=e,this.onFocused=new a.o,this._subs=[]}ngOnInit(){this.mode="normal",this.dataFileCardState="normal",this._subs.push(this.infoService.incomingMessage$.subscribe(n=>{"26"===n.code&&n.attached&&n.attached.id===this.dataFile.id&&this.makeHighlight()}))}setStatusCSS(n){const e={"fa-circle-o-notch":!1,"fa-spin":!1,"fa-hourglass-half":!1,"fa-check":!1,"fa-times":!1};switch(n){case 0:e["fa-circle-o-notch"]=!0,e["fa-spin"]=!0;break;case 1:e["fa-check"]=!0;break;case 2:e["fa-hourglass-half"]=!0;break;case 3:e["fa-trash"]=!0;break;case 4:e["fa-times"]=!0}return e}makeHighlight(){clearTimeout(this.timer),this.dataFileCardState="highlight",setTimeout(()=>this.dataFileCardState="normal",800),console.log("state should changed!")}toggleControls(n){if(!this.disabled)return"checkBox"===this.role?(this.checked=!this.checked,void this.onFocused.emit(this.dataFile)):void this.onFocused.emit(this.dataFile)}fileTypeCSS(){const n={"fa-file":!1,"fa-folder":!1};switch(this.dataFile.format){case"Folder":n["fa-folder"]=!0;break;default:n["fa-file"]=!0}return n}gotoDataFile(n){this.dataFile&&this.router.navigate(["/dataFile",this.dataFile.id,"info"],n?{queryParams:{edit:1}}:{})}checkBoxCSS(){const n={"fa-check-square":!1,"fa-square":!1,"text-success":!1};return this.checked?(n["fa-check-square"]=!0,n["text-success"]=!0):n["fa-square"]=!0,n}ngOnDestroy(){this._subs.forEach(n=>n.unsubscribe()),clearTimeout(this.timer)}}return n.\u0275fac=function(e){return new(e||n)(a.Mb(c.a),a.Mb(o.c))},n.\u0275cmp=a.Gb({type:n,selectors:[["datafile-card"]],inputs:{dataFile:"dataFile",role:"role",checked:"checked",disabled:"disabled"},outputs:{onFocused:"onFocused"},decls:1,vars:1,consts:[["style","width: 100%; min-height: 180px;",3,"focus","blur","border","cursor","datafile-card","click",4,"ngIf"],[2,"width","100%","min-height","180px",3,"click"],["style","position:absolute; top: 2px; right:0px;",4,"ngIf"],["mat-card-avatar",""],["aria-hidden","true",1,"fa","fa-fw","fa-2x","pull-left",3,"ngClass"],[1,"text-muted",2,"white-space","pre"],[2,"word-break","break-all"],["target","_blank",1,"link","ml-3",3,"routerLink"],[1,"fas","fa-external-link-alt"],["class","badge badge-primary","style","margin: 2px;",4,"ngFor","ngForOf"],["style","font-size: 8pt;",4,"ngIf"],["style","font-size: 8pt; text-indent: 24px;line-height: 90%;",4,"ngIf"],[4,"ngIf"],[2,"float","right"],[2,"position","absolute","top","2px","right","0px"],["aria-hidden","true",1,"far","fa-2x","fa-fw",3,"ngClass"],[1,"badge","badge-primary",2,"margin","2px"],[2,"font-size","8pt"],[2,"font-size","8pt","text-indent","24px","line-height","90%"],["mat-button","",3,"click"],[1,"fas","fa-file","fa-lg"],["mat-button","",3,"disabled","click"],[1,"fas","fa-pencil-alt","fa-lg"],[1,"clearfix",2,"position","absolute","bottom","0px","right","0px","font-size","8pt"],[1,"fa","fa-fw",3,"ngClass"],["class","text-muted pull-left","style","font-size:4pt",4,"ngIf"],[1,"text-muted","pull-left",2,"font-size","4pt"]],template:function(n,e){1&n&&a.Jc(0,m,25,23,"mat-card",0),2&n&&a.lc("ngIf",e.dataFile)},directives:[s.n,i.a,i.f,i.c,s.l,i.j,o.f,i.d,s.m,i.b,i.e,r.b],styles:[".focus[_ngcontent-%COMP%]{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:all .3s cubic-bezier(.25,.8,.25,1);opacity:1}.blur[_ngcontent-%COMP%]{opacity:.5}button[_ngcontent-%COMP%]{min-width:.1%}.datafile-card[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);background-color:#fff3cd}"]}),n})()}}]);