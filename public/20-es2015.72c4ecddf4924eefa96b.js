(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7UCR":function(e,s,t){"use strict";t.r(s),t.d(s,"UserModule",function(){return fe});var i=t("3Pt+"),r=t("ofXK"),n=t("jCJ1"),c=t("bTqV"),a=t("NFeN"),o=t("qFsG"),b=t("tyNb"),l=t("fXoL"),h=t("flj8"),d=t("2uAV"),u=t("YiK1"),p=t("kmnG");function g(e,s){if(1&e&&(l.Sb(0,"li",33),l.Lc(1),l.Rb()),2&e){const e=s.$implicit;l.Ab(1),l.Mc(e)}}function f(e,s){if(1&e&&(l.Sb(0,"div"),l.Jc(1,g,2,1,"li",32),l.Rb()),2&e){const e=l.ec(2);l.Ab(1),l.lc("ngForOf",e.formValidator.email.errMsgs)}}function m(e,s){if(1&e&&(l.Sb(0,"li",33),l.Lc(1),l.Rb()),2&e){const e=s.$implicit;l.Ab(1),l.Mc(e)}}function S(e,s){if(1&e&&(l.Sb(0,"div"),l.Jc(1,m,2,1,"li",32),l.Rb()),2&e){const e=l.ec(2);l.Ab(1),l.lc("ngForOf",e.formValidator.passwd.errMsgs)}}function v(e,s){1&e&&(l.Sb(0,"span",37),l.Lc(1,"Please click the above button."),l.Rb())}function w(e,s){if(1&e){const e=l.Tb();l.Sb(0,"div",34),l.Sb(1,"re-captcha",35),l.ac("resolved",function(s){return l.zc(e),l.ec(2).handleCorrectCaptcha(s)}),l.Rb(),l.Jc(2,v,2,0,"span",36),l.Rb()}if(2&e){const e=l.ec(2);l.Ab(1),l.lc("siteKey",e.reCaptchaSiteKey),l.Ab(1),l.lc("ngIf",e.isChecking&&!e._viewControls.isRecaptchaClicked)}}function R(e,s){if(1&e){const e=l.Tb();l.Sb(0,"form",10,11),l.ac("ngSubmit",function(){return l.zc(e),l.ec().onSubmit()}),l.Sb(2,"div",12),l.Sb(3,"label",13),l.Lc(4,"Email"),l.Rb(),l.Sb(5,"div",14),l.Sb(6,"mat-form-field",15),l.Sb(7,"input",16,17),l.ac("ngModelChange",function(s){return l.zc(e),l.ec().theUser.email=s})("keyup",function(){return l.zc(e),l.ec().formValidator.email.presetErrs=[]}),l.Rb(),l.Rb(),l.Jc(9,f,2,1,"div",9),l.Rb(),l.Rb(),l.Sb(10,"div",12),l.Sb(11,"label",18),l.Lc(12,"Password"),l.Rb(),l.Sb(13,"div",14),l.Sb(14,"mat-form-field",15),l.Sb(15,"input",19,17),l.ac("ngModelChange",function(s){return l.zc(e),l.ec().theUser.passwd=s})("keyup",function(){return l.zc(e),l.ec().formValidator.passwd.presetErrs=[]}),l.Rb(),l.Rb(),l.Jc(17,S,2,1,"div",9),l.Rb(),l.Rb(),l.Jc(18,w,3,2,"div",20),l.Sb(19,"div",21),l.Sb(20,"div",22),l.Sb(21,"button",23),l.Lc(22,"Sign In"),l.Rb(),l.Rb(),l.Sb(23,"div",22),l.Sb(24,"button",24),l.ac("click",function(){return l.zc(e),l.ec().resetForm()}),l.Lc(25,"Reset"),l.Rb(),l.Rb(),l.Rb(),l.Nb(26,"div",25),l.Sb(27,"div",26),l.Sb(28,"span",27),l.Lc(29,"or"),l.Rb(),l.Rb(),l.Sb(30,"div",28),l.Sb(31,"button",29),l.ac("click",function(s){return l.zc(e),l.ec().gotoAuth(s,"Google")}),l.Nb(32,"span",30),l.Lc(33," Google "),l.Rb(),l.Rb(),l.Nb(34,"div",31),l.Rb()}if(2&e){const e=l.ec();l.Ab(2),l.lc("ngClass",e.validEmail()),l.Ab(5),l.lc("ngModel",e.theUser.email),l.Ab(2),l.lc("ngIf",e.isChecking),l.Ab(1),l.lc("ngClass",e.validPasswd()),l.Ab(5),l.lc("ngModel",e.theUser.passwd),l.Ab(2),l.lc("ngIf",e.isChecking&&e.isPasswdChecking),l.Ab(1),l.lc("ngIf",e.reCaptchaSiteKey),l.Ab(13),l.lc("disabled",!e.googleClientID)}}function C(e,s){1&e&&(l.Sb(0,"div"),l.Sb(1,"h3"),l.Lc(2,"We are now signing you in..."),l.Rb(),l.Rb())}const y=function(){return["/home"]};let k=(()=>{class e{constructor(e,s,t,i){this.userService=e,this.router=s,this.infoService=t,this.systemService=i,this._subs=[],this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]}},this.isSubmitted=!1,this.theUser={email:"",passwd:""},this.isChecking=!1,this.cssSuccess={"has-success":!0,"has-error":!1},this.cssError={"has-success":!1,"has-error":!0},this.cssHidden={"has-success":!1,"has-error":!1},this._viewControls={isRecaptchaClicked:!1}}ngOnInit(){this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.userService.isSignedIn&&(this.router.navigate(["/project/list"]),console.log("ToDo: will navigate to user information.")),this._subs.push(this.userService.currentUser$.subscribe(e=>{e.isLoggedIn&&this.router.navigate(["/project/list"])})),this._subs.push(this.systemService.sysInfo$.subscribe(e=>{e&&(this.reCaptchaSiteKey=e.reCaptchaSiteKey,this.googleClientID=e.googleClientID)}))}validEmail(){const e=this.formValidator.email,s=new RegExp('^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs);let t={};return s.test(this.theUser.email)||e.errMsgs.push("Please check your email format."),t=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}validPasswd(){const e=this.formValidator.passwd,s=this.theUser.passwd&&this.theUser.passwd.length?this.theUser.passwd.length:0;let t={};return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),(s<8||s>64)&&e.errMsgs.push("This password must be between 8 and 64 characters"),0===s&&e.errMsgs.push("Cannot be empty"),t=this.isChecking&&this.isPasswdChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}handleCorrectCaptcha(e){this.recaptchaResponse=e}onSubmit(){this.isChecking=!1,this.isPasswdChecking=!1,(this.validEmail()||this.validPasswd())&&(this.isChecking=!0,this.isPasswdChecking=!0,this._viewControls.isRecaptchaClicked=!!this.recaptchaResponse,0===this.formValidator.email.errMsgs.length&&0===this.formValidator.passwd.errMsgs.length&&(this.reCaptchaSiteKey&&this.recaptchaResponse||!this.reCaptchaSiteKey)?(this._subs.push(this.userService.signIn(this.theUser.email,this.theUser.passwd,this.recaptchaResponse).subscribe(e=>{e.isError?(this.formValidator.email.presetErrs=[],this.formValidator.passwd.presetErrs=[],this.isSubmitted=!1,setTimeout(()=>this.reCaptchaComponent&&this.reCaptchaComponent.reset(),0),this.isPasswdChecking=!1,this.theUser.passwd=""):(console.log("Sign in Successfully"),this.infoService.addMessage("11"),this.router.navigate([this.userService.redirectUrl?this.userService.redirectUrl:"/project/list"]))})),this.isSubmitted=!0):this.reCaptchaComponent&&this.reCaptchaComponent.reset&&this.reCaptchaComponent.reset())}gotoAuth(e,s){e.preventDefault(),e.stopImmediatePropagation(),this.userService.oAuthSign(s)}resetForm(){return this.theUser={email:"",passwd:""},this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]}},this.isChecking=!1,this.reCaptchaComponent&&this.reCaptchaComponent.reset()}ngOnDestroy(){this._subs.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(s){return new(s||e)(l.Mb(h.a),l.Mb(b.c),l.Mb(d.a),l.Mb(u.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["user-login"]],viewQuery:function(e,s){if(1&e&&l.Qc(n.a,!0),2&e){let e;l.vc(e=l.bc())&&(s.reCaptchaComponent=e.first)}},decls:17,vars:4,consts:[[1,"container-fluid"],["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"bdp-main-container"],[1,"chi-header"],["class","form col-md-12 center-block",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"form","col-md-12","center-block",3,"ngSubmit"],["userForm","ngForm"],[1,"form-group","row",3,"ngClass"],["for","email",1,"col-sm-2","control-label"],[1,"col-sm-10"],[2,"width","100%"],["matInput","","type","text","name","email","placeholder","What's your email address?",3,"ngModel","ngModelChange","keyup"],["email","ngModel"],["for","passwd",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd","placeholder","Choose a password",3,"ngModel","ngModelChange","keyup"],["class","form-group row","style","padding-left: 10px;",4,"ngIf"],[1,"form-group","row"],[1,"col-sm-2"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","reset",3,"click"],[1,"clearfix"],[1,"my-3",2,"margin","10px","border-top","1px solid #8e95a5","text-align","center","height","0px","margin","10px"],[2,"position","relative","bottom","10px","background","rgba(255, 255, 255, 0.5)","padding","0 12px"],[1,"row",2,"padding","10px"],[1,"btn","btn-danger","col-sm-3","col-xs-6","pull-left","text-center",2,"height","40px",3,"disabled","click"],[1,"fab","fa-google"],[1,"text-center",2,"font-size","12pt"],["class","help-block text-danger",4,"ngFor","ngForOf"],[1,"help-block","text-danger"],[1,"form-group","row",2,"padding-left","10px"],["size","normal",3,"siteKey","resolved"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(e,s){1&e&&(l.Sb(0,"div",0),l.Sb(1,"nav",1),l.Sb(2,"ol",2),l.Sb(3,"li",3),l.Sb(4,"a",4),l.Lc(5,"Home"),l.Rb(),l.Rb(),l.Sb(6,"li",5),l.Lc(7,"Sign in"),l.Rb(),l.Rb(),l.Rb(),l.Sb(8,"div",6),l.Sb(9,"h3",7),l.Lc(10,"Sign In"),l.Rb(),l.Nb(11,"br"),l.Nb(12,"br"),l.Nb(13,"br"),l.Jc(14,R,35,8,"form",8),l.Jc(15,C,3,0,"div",9),l.Nb(16,"hr"),l.Rb(),l.Rb()),2&e&&(l.Ab(4),l.lc("routerLink",l.oc(3,y)),l.Ab(10),l.lc("ngIf",!s.isSubmitted),l.Ab(1),l.lc("ngIf",s.isSubmitted))},directives:[b.f,r.n,i.o,i.j,i.k,r.l,p.b,o.a,i.b,i.i,i.l,c.b,r.m,n.a],encapsulation:2}),e})();function M(e,s){if(1&e&&(l.Sb(0,"li",37),l.Lc(1),l.Rb()),2&e){const e=s.$implicit;l.Ab(1),l.Mc(e)}}function A(e,s){if(1&e&&(l.Sb(0,"div"),l.Jc(1,M,2,1,"li",36),l.Rb()),2&e){const e=l.ec(2);l.Ab(1),l.lc("ngForOf",e.formValidator.email.errMsgs)}}function L(e,s){if(1&e&&(l.Sb(0,"li",37),l.Lc(1),l.Rb()),2&e){const e=s.$implicit;l.Ab(1),l.Mc(e)}}function I(e,s){if(1&e&&(l.Sb(0,"div"),l.Jc(1,L,2,1,"li",36),l.Rb()),2&e){const e=l.ec(2);l.Ab(1),l.lc("ngForOf",e.formValidator.passwd.errMsgs)}}function x(e,s){if(1&e&&(l.Sb(0,"li",37),l.Lc(1),l.Rb()),2&e){const e=s.$implicit;l.Ab(1),l.Mc(e)}}function E(e,s){if(1&e&&(l.Sb(0,"div"),l.Jc(1,x,2,1,"li",36),l.Rb()),2&e){const e=l.ec(2);l.Ab(1),l.lc("ngForOf",e.formValidator.passwd2.errMsgs)}}function N(e,s){if(1&e){const e=l.Tb();l.Sb(0,"re-captcha",38),l.ac("resolved",function(s){return l.zc(e),l.ec(2).handleCorrectCaptcha(s)}),l.Rb()}if(2&e){const e=l.ec(2);l.lc("siteKey",e.reCaptchaSiteKey)}}function U(e,s){1&e&&(l.Sb(0,"span",37),l.Lc(1,"Please click the above button."),l.Rb())}function J(e,s){if(1&e){const e=l.Tb();l.Sb(0,"form",12,13),l.ac("ngSubmit",function(){return l.zc(e),l.ec().onSubmit()}),l.Sb(2,"div",14),l.Sb(3,"label",15),l.Lc(4,"Email"),l.Rb(),l.Sb(5,"div",16),l.Sb(6,"mat-form-field",17),l.Sb(7,"input",18,19),l.ac("ngModelChange",function(s){return l.zc(e),l.ec().theUser.email=s})("keyup",function(){return l.zc(e),l.ec().formValidator.email.presetErrs=[]}),l.Rb(),l.Rb(),l.Jc(9,A,2,1,"div",11),l.Rb(),l.Rb(),l.Sb(10,"div",14),l.Sb(11,"label",20),l.Lc(12,"Password"),l.Rb(),l.Sb(13,"div",16),l.Sb(14,"mat-form-field",17),l.Sb(15,"input",21,19),l.ac("ngModelChange",function(s){return l.zc(e),l.ec().theUser.passwd=s})("keyup",function(){return l.zc(e),l.ec().formValidator.passwd.presetErrs=[]}),l.Rb(),l.Rb(),l.Jc(17,I,2,1,"div",11),l.Rb(),l.Rb(),l.Sb(18,"div",14),l.Sb(19,"label",22),l.Lc(20,"Re-type password"),l.Rb(),l.Sb(21,"div",16),l.Sb(22,"mat-form-field",17),l.Sb(23,"input",23),l.ac("ngModelChange",function(s){return l.zc(e),l.ec().theUser.passwd2=s})("keyup",function(){return l.zc(e),l.ec().formValidator.passwd2.presetErrs=[]}),l.Rb(),l.Rb(),l.Jc(24,E,2,1,"div",11),l.Rb(),l.Rb(),l.Sb(25,"div",24),l.Jc(26,N,1,1,"re-captcha",25),l.Jc(27,U,2,0,"span",10),l.Rb(),l.Sb(28,"div",24),l.Sb(29,"div",26),l.Sb(30,"button",27),l.Lc(31,"Register"),l.Rb(),l.Rb(),l.Sb(32,"div",26),l.Sb(33,"button",28),l.ac("click",function(){return l.zc(e),l.ec().resetForm()}),l.Lc(34,"Reset"),l.Rb(),l.Rb(),l.Rb(),l.Nb(35,"div",29),l.Sb(36,"div",30),l.Sb(37,"span",31),l.Lc(38,"or"),l.Rb(),l.Rb(),l.Sb(39,"div",32),l.Sb(40,"button",33),l.ac("click",function(s){return l.zc(e),l.ec().gotoAuth(s,"Google")}),l.Nb(41,"span",34),l.Lc(42," Google "),l.Rb(),l.Rb(),l.Nb(43,"div",35),l.Rb()}if(2&e){const e=l.ec();l.Ab(2),l.lc("ngClass",e.validEmail()),l.Ab(5),l.lc("ngModel",e.theUser.email),l.Ab(2),l.lc("ngIf",e.isChecking),l.Ab(1),l.lc("ngClass",e.validPasswd()),l.Ab(5),l.lc("ngModel",e.theUser.passwd),l.Ab(2),l.lc("ngIf",e.isChecking),l.Ab(1),l.lc("ngClass",e.validPasswd2()),l.Ab(5),l.lc("ngModel",e.theUser.passwd2),l.Ab(1),l.lc("ngIf",e.isChecking),l.Ab(2),l.lc("ngIf",e.reCaptchaSiteKey),l.Ab(1),l.lc("ngIf",e.isChecking&&!e._viewControls.isRecaptchaClicked&&e.reCaptchaSiteKey),l.Ab(13),l.lc("disabled",!e.googleClientID)}}function V(e,s){if(1&e&&(l.Sb(0,"h3"),l.Nb(1,"i",39),l.Lc(2,"Sending registration information"),l.Rb()),2&e){const e=l.ec();l.Eb("text-danger",e.hasErrors.length>0),l.Ab(1),l.lc("ngClass",e.sendInfoCss())}}function O(e,s){1&e&&(l.Sb(0,"h3",37),l.Nb(1,"i",40),l.Lc(2,"Some errors have occurred."),l.Rb())}function j(e,s){if(1&e&&(l.Sb(0,"li",37),l.Nb(1,"i",42),l.Lc(2),l.Rb()),2&e){const e=s.$implicit;l.Ab(2),l.Mc(e)}}function z(e,s){if(1&e){const e=l.Tb();l.Sb(0,"h4"),l.Lc(1," Please check the followings and "),l.Sb(2,"a",41),l.ac("click",function(){l.zc(e);const s=l.ec();return s.isSubmitted=!s.isSubmitted}),l.Lc(3,"click here"),l.Rb(),l.Lc(4," to try again. "),l.Nb(5,"br"),l.Sb(6,"ul"),l.Jc(7,j,3,1,"li",36),l.Rb(),l.Rb()}if(2&e){const e=l.ec();l.Ab(7),l.lc("ngForOf",e.hasErrors)}}function _(e,s){1&e&&(l.Sb(0,"div"),l.Sb(1,"h3",43),l.Nb(2,"i",44),l.Lc(3," You have succssfully signed up! "),l.Nb(4,"br"),l.Lc(5," An email with an activation code was sent to your email address. If the email does not appear in your inbox in 5-10 minutes, please check your spam folder. "),l.Rb(),l.Nb(6,"hr"),l.Sb(7,"h3"),l.Lc(8,"You may now proceed to the followings. "),l.Rb(),l.Sb(9,"h4"),l.Sb(10,"ul"),l.Sb(11,"li"),l.Lc(12," Haven't recieved the email? "),l.Sb(13,"button"),l.Lc(14,"Click here"),l.Rb(),l.Lc(15," to resend the verification email. "),l.Rb(),l.Sb(16,"li"),l.Lc(17," Update your information. "),l.Rb(),l.Sb(18,"li"),l.Lc(19," Create a new project and upload your files. "),l.Rb(),l.Rb(),l.Rb(),l.Rb())}const P=function(){return["/home"]};function K(e,s){if(1&e&&(l.Sb(0,"h3",3),l.Nb(1,"i",4),l.Lc(2),l.Rb()),2&e){const e=l.ec();l.lc("ngClass",e.headerCss()),l.Ab(1),l.lc("ngClass",e.setCssClass()),l.Ab(1),l.Nc(" ",e.heading,"")}}const F=function(){return["/account/signIn"]};function T(e,s){1&e&&(l.Sb(0,"li"),l.Sb(1,"a",5),l.Lc(2,"Sign in to resend the verification email."),l.Rb(),l.Rb()),2&e&&(l.Ab(1),l.lc("routerLink",l.oc(1,F)))}function G(e,s){1&e&&(l.Sb(0,"li"),l.Sb(1,"a",5),l.Lc(2,"Sign in"),l.Rb(),l.Rb()),2&e&&(l.Ab(1),l.lc("routerLink",l.oc(1,F)))}function $(e,s){if(1&e&&(l.Sb(0,"div"),l.Jc(1,T,3,2,"li",2),l.Jc(2,G,3,2,"li",2),l.Rb()),2&e){const e=l.ec();l.Ab(1),l.lc("ngIf",!e.isVerified),l.Ab(1),l.lc("ngIf",e.isVerified)}}const D=function(){return["/project/list"]};function q(e,s){1&e&&(l.Sb(0,"li"),l.Sb(1,"a",5),l.Lc(2,"View my projects"),l.Rb(),l.Rb()),2&e&&(l.Ab(1),l.lc("routerLink",l.oc(1,D)))}const H=function(){return["/account/profile"]};function W(e,s){1&e&&(l.Sb(0,"li"),l.Sb(1,"a",5),l.Lc(2,"Resend the verification email"),l.Rb(),l.Rb()),2&e&&(l.Ab(1),l.lc("routerLink",l.oc(1,H)))}function B(e,s){if(1&e&&(l.Sb(0,"div"),l.Jc(1,q,3,2,"li",2),l.Jc(2,W,3,2,"li",2),l.Rb()),2&e){const e=l.ec();l.Ab(1),l.lc("ngIf",e.isVerified),l.Ab(1),l.lc("ngIf",!e.isVerified)}}function X(e,s){1&e&&l.Nb(0,"h3")}function Q(e,s){if(1&e){const e=l.Tb();l.Sb(0,"span"),l.Lc(1),l.Sb(2,"button",16),l.Sb(3,"i",17),l.ac("click",function(){return l.zc(e),l.ec(2)._viewControls.isEditName=!0}),l.Rb(),l.Rb(),l.Rb()}if(2&e){const e=l.ec(2);l.Ab(1),l.Nc("",e.currentUser.name?e.currentUser.name:"unnamed"," ")}}function Y(e,s){if(1&e){const e=l.Tb();l.Sb(0,"div"),l.Sb(1,"mat-form-field"),l.Sb(2,"input",18),l.ac("ngModelChange",function(s){return l.zc(e),l.ec(2)._viewControls.newName=s})("keyup.enter",function(){return l.zc(e),l.ec(2).rename()}),l.Rb(),l.Rb(),l.Sb(3,"button",19),l.ac("click",function(){return l.zc(e),l.ec(2).rename()}),l.Nb(4,"i",20),l.Rb(),l.Sb(5,"button",21),l.ac("click",function(){l.zc(e);const s=l.ec(2);return s._viewControls.newName=s.currentUser.name,s._viewControls.isEditName=!1}),l.Nb(6,"i",22),l.Rb(),l.Rb()}if(2&e){const e=l.ec(2);l.Ab(2),l.lc("ngModel",e._viewControls.newName)}}function Z(e,s){if(1&e){const e=l.Tb();l.Sb(0,"a",24),l.ac("click",function(){return l.zc(e),l.ec(3).reVerify()}),l.Lc(1,"Re-send"),l.Rb()}}function ee(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Sending ... "),l.Nb(2,"i",25),l.Rb())}function se(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Verification email sent."),l.Rb())}function te(e,s){if(1&e&&(l.Sb(0,"span"),l.Lc(1," Waiting for email verification "),l.Nb(2,"br"),l.Lc(3," (Haven't recieved your verification email? "),l.Jc(4,Z,2,0,"a",23),l.Jc(5,ee,3,0,"span",13),l.Jc(6,se,2,0,"span",13),l.Lc(7," ) "),l.Rb()),2&e){const e=l.ec(2);l.Ab(4),l.lc("ngIf",e._viewControls.showResendEmail),l.Ab(1),l.lc("ngIf",!e._viewControls.mailSent&&!e._viewControls.showResendEmail),l.Ab(1),l.lc("ngIf",e._viewControls.mailSent)}}function ie(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Guest user (account inactive)"),l.Rb())}function re(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Normal user"),l.Rb())}function ne(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Root"),l.Rb())}function ce(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Guest user (account inactive)"),l.Rb())}function ae(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Normal user"),l.Rb())}function oe(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Power user"),l.Rb())}function be(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Task builder"),l.Rb())}function le(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Task manager"),l.Rb())}function he(e,s){1&e&&(l.Sb(0,"span"),l.Lc(1,"Administrator"),l.Rb())}function de(e,s){if(1&e&&(l.Sb(0,"div",9),l.Sb(1,"div",10),l.Sb(2,"div",11),l.Sb(3,"strong"),l.Lc(4,"Name"),l.Rb(),l.Rb(),l.Sb(5,"div",12),l.Jc(6,Q,4,1,"span",13),l.Jc(7,Y,7,1,"div",13),l.Rb(),l.Rb(),l.Nb(8,"br"),l.Sb(9,"div",10),l.Sb(10,"div",11),l.Sb(11,"strong"),l.Lc(12,"E-mail"),l.Rb(),l.Rb(),l.Sb(13,"div",12),l.Lc(14),l.Rb(),l.Rb(),l.Nb(15,"br"),l.Sb(16,"div",10),l.Sb(17,"div",11),l.Sb(18,"strong"),l.Lc(19,"System Role"),l.Rb(),l.Rb(),l.Sb(20,"div",14),l.Jc(21,te,8,3,"span",15),l.Jc(22,ie,2,0,"span",15),l.Jc(23,re,2,0,"span",15),l.Jc(24,ne,2,0,"span",15),l.Rb(),l.Rb(),l.Nb(25,"br"),l.Sb(26,"div",10),l.Sb(27,"div",11),l.Sb(28,"strong"),l.Lc(29,"Platform Role"),l.Rb(),l.Rb(),l.Sb(30,"div",14),l.Jc(31,ce,2,0,"span",15),l.Jc(32,ae,2,0,"span",15),l.Jc(33,oe,2,0,"span",15),l.Jc(34,be,2,0,"span",15),l.Jc(35,le,2,0,"span",15),l.Jc(36,he,2,0,"span",15),l.Rb(),l.Rb(),l.Rb()),2&e){const e=l.ec();l.Ab(6),l.lc("ngIf",!e._viewControls.isEditName),l.Ab(1),l.lc("ngIf",e._viewControls.isEditName),l.Ab(7),l.Nc(" ",null==e.currentUser?null:e.currentUser.email," "),l.Ab(6),l.lc("ngSwitch",e.currentUser.auths.base),l.Ab(1),l.lc("ngSwitchCase",0),l.Ab(1),l.lc("ngSwitchCase",1),l.Ab(1),l.lc("ngSwitchCase",2),l.Ab(1),l.lc("ngSwitchCase",9),l.Ab(6),l.lc("ngSwitch",e.currentUser.auths.bdp),l.Ab(1),l.lc("ngSwitchCase",1),l.Ab(1),l.lc("ngSwitchCase",2),l.Ab(1),l.lc("ngSwitchCase",3),l.Ab(1),l.lc("ngSwitchCase",7),l.Ab(1),l.lc("ngSwitchCase",8),l.Ab(1),l.lc("ngSwitchCase",9)}}const ue=function(){return["/home"]},pe=function(){return["/account","profile"]},ge=b.g.forChild([{path:"",pathMatch:"full",redirectTo:"signIn"},{path:"register",component:(()=>{class e{constructor(e,s,t,i){this.userService=e,this.infoService=s,this.router=t,this.systemService=i,this._subs=[],this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.theUser={email:"",passwd:"",passwd2:""},this.isChecking=!1,this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]},passwd2:{errMsgs:[],presetErrs:[]}},this.cssSuccess={"has-success":!0,"has-error":!1},this.cssError={"has-success":!1,"has-error":!0},this.cssHidden={"has-success":!1,"has-error":!1},this.isSubmitted=!1,this.isSuccess=!1,this.hasErrors=[],this._viewControls={isRecaptchaClicked:!1},this._subs.push(this.userService.currentUser$.subscribe(e=>e.isLoggedIn?this.router.navigate(["/project/list"]):""))}ngOnInit(){this.systemService.sysInfo$.subscribe(e=>{e&&(this.reCaptchaSiteKey=e.reCaptchaSiteKey,this.googleClientID=e.googleClientID)})}validEmail(){const e=this.formValidator.email,s=new RegExp('^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs);let t={};return s.test(this.theUser.email)||e.errMsgs.push("Please check your email format."),t=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}validPasswd(){const e=this.formValidator.passwd,s=this.theUser.passwd&&this.theUser.passwd.length?this.theUser.passwd.length:0;let t={};return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),(s<8||s>64)&&e.errMsgs.push("This password must be between 8 and 64 characters"),t=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}validPasswd2(){const e=this.formValidator.passwd2;let s={};return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),this.theUser.passwd!==this.theUser.passwd2&&e.errMsgs.push("Password does not match."),this.theUser.passwd2&&0!==this.theUser.passwd2.length||e.errMsgs.push("Cannot be empty"),s=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,s}handleCorrectCaptcha(e){this.recaptchaResponse=e}onSubmit(){this.isChecking=!1,(this.validEmail()||this.validPasswd()||this.validPasswd2())&&(this.isChecking=!0,this._viewControls.isRecaptchaClicked=!!this.recaptchaResponse,0===this.formValidator.email.errMsgs.length&&0===this.formValidator.passwd.errMsgs.length&&0===this.formValidator.passwd2.errMsgs.length&&(this.reCaptchaSiteKey&&this.recaptchaResponse||!this.reCaptchaSiteKey)?(this._subs.push(this.userService.register(this.theUser.email,this.theUser.passwd,this.recaptchaResponse).subscribe(e=>{if(e.isError){const s=this.formValidator.email;s.presetErrs=[];const t=this.formValidator.passwd;t.presetErrs=[],this.formValidator.passwd2.presetErrs=[],this.isSuccess=!0,this.isSubmitted=!1,setTimeout(()=>{this.reCaptchaComponent&&this.reCaptchaComponent.reset()},0);for(let i=0;i<e.errors.length;i++){const r=e.errors[i];"1"===r.code&&s.presetErrs.push(r.name),"3"===r.code&&t.presetErrs.push(r.name),this.hasErrors.push(r.name)}}else this.isSuccess=!0,this.infoService.addMessage("7"),this.router.navigate(["/project/list"])},function(e){this.isSuccess=!1,this.hasErrors.push("Connection error: Please try again latter."),this.hasErrors.push("If this message keeps showing, please contact the web admin.")})),this.isSubmitted=!0,this.formValidator.email.presetErrs=[],this.formValidator.passwd.presetErrs=[],this.formValidator.passwd2.presetErrs=[],this.hasErrors=[]):this.reCaptchaComponent&&this.reCaptchaComponent.reset())}resetForm(){this.theUser={email:"",passwd:"",passwd2:""},this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]},passwd2:{errMsgs:[],presetErrs:[]}},this.isChecking=!1,this.reCaptchaComponent&&this.reCaptchaComponent.reset()}gotoAuth(e,s){e.preventDefault(),e.stopImmediatePropagation(),this.userService.oAuthSign(s)}sendInfoCss(){let e={"fa-circle-o-notch":!0,"fa-spin":!0,"fa-times":!1,"fa-check":!1};return this.isSuccess&&(e={"fa-circle-o-notch":!1,"fa-spin":!1,"fa-times":!1,"fa-check":!0}),this.hasErrors.length>0&&(e={"fa-circle-o-notch":!1,"fa-spin":!1,"fa-times":!0,"fa-check":!1}),e}statusCss(e){let s;switch(e){case 1:s={"text-danger":!1,"text-warning":!0};break;case 2:s={"text-danger":!0,"text-warning":!1};break;default:s={"text-danger":!1,"text-warning":!1}}return s}get diagnostic(){return JSON.stringify(this.formValidator)}ngOnDestroy(){this._subs.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(s){return new(s||e)(l.Mb(h.a),l.Mb(d.a),l.Mb(b.c),l.Mb(u.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["user-register"]],viewQuery:function(e,s){if(1&e&&l.Qc(n.a,!0),2&e){let e;l.vc(e=l.bc())&&(s.reCaptchaComponent=e.first)}},decls:20,vars:8,consts:[["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"bdp-main-container"],[1,"chi-header"],["class","form col-md-12 center-block",3,"ngSubmit",4,"ngIf"],[3,"hidden"],[3,"text-danger",4,"ngIf"],["class","text-danger",4,"ngIf"],[4,"ngIf"],[1,"form","col-md-12","center-block",3,"ngSubmit"],["userForm","ngForm"],[1,"form-group","row",3,"ngClass"],["for","email",1,"col-sm-2","control-label"],[1,"col-sm-10"],[2,"width","100%"],["matInput","","type","text","name","email","placeholder","What's your email address?",3,"ngModel","ngModelChange","keyup"],["email","ngModel"],["for","passwd",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd","placeholder","Choose a password",3,"ngModel","ngModelChange","keyup"],["for","passwd2",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd2","placeholder","Confirm your passowrd",3,"ngModel","ngModelChange","keyup"],[1,"form-group","row"],[3,"siteKey","resolved",4,"ngIf"],[1,"col-sm-2"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","reset",3,"click"],[1,"clearfix"],[1,"my-2",2,"margin","10px","border-top","1px solid #8e95a5","text-align","center","height","0px","margin","10px"],[2,"position","relative","bottom","10px","background","rgba(255, 255, 255, 0.5)","padding","0 12px"],[1,"row"],["type","button",1,"btn","btn-danger","col-sm-3","col-xs-6","pull-left","text-center",2,"height","40px",3,"disabled","click"],[1,"fab","fa-google"],[1,"text-center",2,"font-size","12pt"],["class","text-danger",4,"ngFor","ngForOf"],[1,"text-danger"],[3,"siteKey","resolved"],[1,"fa","fa-fw",3,"ngClass"],["aria-hidden","true",1,"fa","fa-exclamation-triangle"],[1,"link",3,"click"],["aria-hidden","true",1,"fa","fa-times","fa-fw"],[1,"text-success"],["aria-hidden","true",1,"fa","fa-check","fa-fw"]],template:function(e,s){1&e&&(l.Sb(0,"nav",0),l.Sb(1,"ol",1),l.Sb(2,"li",2),l.Sb(3,"a",3),l.Lc(4,"Home"),l.Rb(),l.Rb(),l.Sb(5,"li",4),l.Lc(6,"Registration"),l.Rb(),l.Rb(),l.Rb(),l.Sb(7,"div",5),l.Sb(8,"h3",6),l.Lc(9,"Registration"),l.Rb(),l.Nb(10,"br"),l.Nb(11,"br"),l.Nb(12,"br"),l.Jc(13,J,44,12,"form",7),l.Sb(14,"div",8),l.Jc(15,V,3,3,"h3",9),l.Jc(16,O,3,0,"h3",10),l.Jc(17,z,8,1,"h4",11),l.Jc(18,_,20,0,"div",11),l.Nb(19,"hr"),l.Rb(),l.Rb()),2&e&&(l.Ab(3),l.lc("routerLink",l.oc(7,P)),l.Ab(10),l.lc("ngIf",!s.isSubmitted),l.Ab(1),l.lc("hidden",!s.isSubmitted),l.Ab(1),l.lc("ngIf",0===s.hasErrors.length&&!s.isSuccess),l.Ab(1),l.lc("ngIf",0!==s.hasErrors.length),l.Ab(1),l.lc("ngIf",0!==s.hasErrors.length),l.Ab(1),l.lc("ngIf",s.isSuccess&&0===s.hasErrors.length))},directives:[b.f,r.n,i.o,i.j,i.k,r.l,p.b,o.a,i.b,i.i,i.l,c.b,r.m,n.a],encapsulation:2}),e})()},{path:"email-verifying",component:(()=>{class e{constructor(e,s,t,i,r){this.route=e,this.router=s,this.infoService=t,this.systemService=i,this.userService=r,this.hasCode=!1,this.heading="",this.status=void 0,this.isVerified=!1}ngOnInit(){this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.sub=this.route.queryParamMap.subscribe(e=>{let s;switch(void 0!==e.get("code")?(s=e.get("code"),this.hasCode=!0,this.status=this.infoService.addMessage(s)):(this.hasCode=!1,this.status=void 0,this.router.navigate(["/home"])),s){case"a004":this.heading="The verification token is invalid.",this.isVerified=!1;break;case"a005":this.heading="This verification token is expired.",this.isVerified=!1;break;case"a006":this.heading="The email is verified.",this.isVerified=!0;break;case"a008":this.heading="This email is already verified.",this.isVerified=!0;break;default:this.heading="Resending your verification email."}})}setCssClass(){const e={"fa-exclamation-triangle":!1,"fa-times":!1,"fa-check":!1,"fa-info-circle":!1};if(void 0!==this.status)switch(this.status.type){case"warning":e["fa-exclamation-triangle"]=!0;break;case"error":e["fa-times"]=!0;break;case"info":e["fa-info-circle"]=!0;break;case"success":e["fa-check"]=!0}return e}headerCss(){let e={"text-warning":!1,"text-danger":!1,"text-success":!1};if(void 0!==this.status)switch(this.status.type){case"warning":e={"text-warning":!0,"text-danger":!1,"text-success":!1};break;case"error":e={"text-warning":!1,"text-danger":!0,"text-success":!1};break;case"success":e={"text-warning":!1,"text-danger":!1,"text-success":!0}}return e}reVerify(){this.userService.emailResend().subscribe(e=>{})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return e.\u0275fac=function(s){return new(s||e)(l.Mb(b.a),l.Mb(b.c),l.Mb(d.a),l.Mb(u.a),l.Mb(h.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["email-verify"]],decls:10,vars:4,consts:[[1,"bdp-main-container"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],["aria-hidden","true",1,"fas","fa-fw",3,"ngClass"],[3,"routerLink"]],template:function(e,s){1&e&&(l.Sb(0,"div",0),l.Sb(1,"h1"),l.Lc(2,"Email verification"),l.Rb(),l.Jc(3,K,3,3,"h3",1),l.Sb(4,"h4"),l.Lc(5,"You may proceed the follow actions."),l.Rb(),l.Sb(6,"ul"),l.Jc(7,$,3,2,"div",2),l.Jc(8,B,3,2,"div",2),l.Rb(),l.Jc(9,X,1,0,"h3",2),l.Rb()),2&e&&(l.Ab(3),l.lc("ngIf",s.hasCode),l.Ab(4),l.lc("ngIf",!s.userService.isSignedIn),l.Ab(1),l.lc("ngIf",s.userService.isSignedIn),l.Ab(1),l.lc("ngIf",!s.hasCode))},directives:[r.n,r.l,b.f],encapsulation:2}),e})()},{path:"signIn",component:k},{path:"forgot-password",component:(()=>{class e{constructor(e){this.userService=e}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(s){return new(s||e)(l.Mb(h.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["forgot-passwd"]],decls:3,vars:0,consts:[[1,"container-fluid"]],template:function(e,s){1&e&&(l.Sb(0,"div",0),l.Sb(1,"h1"),l.Lc(2,"Forgot your passowrd?"),l.Rb(),l.Rb())},encapsulation:2}),e})()},{path:"profile",component:(()=>{class e{constructor(e,s,t){this.userService=e,this.router=s,this.systemService=t,this._subs=[]}ngOnInit(){this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this._viewControls={isEditName:!1,showResendEmail:!0,mailSent:!1,newName:""},this._subs.push(this.userService.currentUser$.subscribe(e=>{this.currentUser=e,this._viewControls.newName=this.currentUser.name,e.isLoggedIn||this.router.navigate(["/account/signIn"])}))}reVerify(){this._viewControls.showResendEmail=!1,this._subs.push(this.userService.emailResend().subscribe(e=>{e.isError||e.success&&e.success.resend&&(this._viewControls.mailSent=!0)}))}rename(){const e=this._viewControls.newName;this._viewControls.isEditName=!1;const s=this.currentUser.name;this.currentUser.name=e;const t=this.userService.rename(e).subscribe(e=>{t.unsubscribe(),e.isError&&(this.currentUser.name=s)})}ngOnDestroy(){this._subs.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(s){return new(s||e)(l.Mb(h.a),l.Mb(b.c),l.Mb(u.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["user-profile"]],decls:16,vars:7,consts:[[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["target","_blank",3,"routerLink"],[1,"fas","fa-external-link-alt","ml-3"],[1,"bdp-main-container"],[1,"chi-header"],["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-3"],[1,"col-md-9"],[4,"ngIf"],[1,"col-md-9",3,"ngSwitch"],[4,"ngSwitchCase"],["mat-icon-button",""],[1,"fas","fa-pencil-alt","fa-fw","fa-lg",3,"click"],["matInput","","type","text","maxlength","60","length","60",3,"ngModel","ngModelChange","keyup.enter"],["mat-icon-button","","color","primary",3,"click"],[1,"fas","fa-save","fa-fw","mx-2","fa-lg"],["mat-icon-button","",3,"click"],[1,"fas","fa-times","fa-fw","mx-2","fa-lg"],["class","link","style","text-decoration: underline;",3,"click",4,"ngIf"],[1,"link",2,"text-decoration","underline",3,"click"],[1,"fa","fa-circle-o-notch","fa-spin","fa-fw"]],template:function(e,s){1&e&&(l.Sb(0,"ol",0),l.Sb(1,"li",1),l.Sb(2,"a",2),l.Lc(3,"Home"),l.Rb(),l.Rb(),l.Sb(4,"li",3),l.Sb(5,"a",2),l.Lc(6,"User Profile"),l.Rb(),l.Sb(7,"a",4),l.Nb(8,"i",5),l.Rb(),l.Rb(),l.Rb(),l.Sb(9,"div",6),l.Sb(10,"h3",7),l.Lc(11,"User Profile"),l.Rb(),l.Nb(12,"br"),l.Nb(13,"br"),l.Nb(14,"br"),l.Jc(15,de,37,15,"div",8),l.Rb()),2&e&&(l.Ab(2),l.lc("routerLink",l.oc(4,ue)),l.Ab(3),l.lc("routerLink",l.oc(5,pe)),l.Ab(2),l.lc("routerLink",l.oc(6,pe)),l.Ab(8),l.lc("ngIf",s.currentUser&&s.currentUser.auths))},directives:[b.f,r.n,r.p,r.q,c.b,p.b,o.a,i.b,i.e,i.i,i.l],encapsulation:2}),e})()}]);let fe=(()=>{class e{}return e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({factory:function(s){return new(s||e)},providers:[],imports:[[r.c,i.d,n.b,c.c,o.b,a.b,ge]]}),e})()},jCJ1:function(e,s,t){"use strict";t.d(s,"a",function(){return f}),t.d(s,"b",function(){return S});var i=t("mrSG"),r=t("fXoL"),n=t("ofXK"),c=t("LRne"),a=t("2Vo4");t("XNiG"),t("3Pt+");const o=new r.r("recaptcha-language"),b=new r.r("recaptcha-base-url"),l=new r.r("recaptcha-nonce-tag"),h=new r.r("recaptcha-settings"),d=new r.r("recaptcha-v3-site-key");let u=(()=>{let e=p=class{constructor(e,s,t,i,r){this.platformId=e,this.language=s,this.baseUrl=t,this.nonce=i,this.v3SiteKey=r,this.init(),this.ready=Object(n.x)(this.platformId)?p.ready.asObservable():Object(c.a)()}init(){if(!p.ready&&Object(n.x)(this.platformId)){const e=new a.a(null);p.ready=e,function(s,t,i,r,n){window.ng2recaptchaloaded=()=>{(s=>{e.next(s)})(grecaptcha)};const c=document.createElement("script");c.innerHTML="",c.src=`${r||"https://www.google.com/recaptcha/api.js"}?render=${s}&onload=ng2recaptchaloaded${i}`,n&&(c.nonce=n),c.async=!0,c.defer=!0,document.head.appendChild(c)}(this.v3SiteKey||"explicit",0,this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}};return e.\u0275fac=function(s){return new(s||e)(r.Wb(r.C),r.Wb(o,8),r.Wb(b,8),r.Wb(l,8),r.Wb(d,8))},e.\u0275prov=r.Ib({token:e,factory:function(s){return e.\u0275fac(s)}}),e.ready=null,e=p=Object(i.c)([Object(i.e)(0,Object(r.q)(r.C)),Object(i.e)(1,Object(r.B)()),Object(i.e)(1,Object(r.q)(o)),Object(i.e)(2,Object(r.B)()),Object(i.e)(2,Object(r.q)(b)),Object(i.e)(3,Object(r.B)()),Object(i.e)(3,Object(r.q)(l)),Object(i.e)(4,Object(r.B)()),Object(i.e)(4,Object(r.q)(d))],e),e})();var p;let g=0,f=(()=>{let e=class{constructor(e,s,t,i){this.elementRef=e,this.loader=s,this.zone=t,this.id="ngrecaptcha-"+g++,this.resolved=new r.o,i&&(this.siteKey=i.siteKey,this.theme=i.theme,this.type=i.type,this.size=i.size,this.badge=i.badge)}ngAfterViewInit(){this.subscription=this.loader.ready.subscribe(e=>{null!=e&&e.render instanceof Function&&(this.grecaptcha=e,this.renderRecaptcha())})}ngOnDestroy(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}execute(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}reset(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}expired(){this.resolved.emit(null)}captchaResponseCallback(e){this.resolved.emit(e)}grecaptchaReset(){null!=this.widget&&this.zone.runOutsideAngular(()=>this.grecaptcha.reset(this.widget))}renderRecaptcha(){this.widget=this.grecaptcha.render(this.elementRef.nativeElement,{badge:this.badge,callback:e=>{this.zone.run(()=>this.captchaResponseCallback(e))},"expired-callback":()=>{this.zone.run(()=>this.expired())},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type}),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}};return e.\u0275fac=function(s){return new(s||e)(r.Mb(r.l),r.Mb(u),r.Mb(r.A),r.Mb(h,8))},e.\u0275cmp=r.Gb({type:e,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(e,s){2&e&&r.Bb("id",s.id)},inputs:{id:"id",siteKey:"siteKey",theme:"theme",type:"type",size:"size",badge:"badge",tabIndex:"tabIndex"},outputs:{resolved:"resolved"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(e,s){},encapsulation:2}),e=Object(i.c)([Object(i.e)(3,Object(r.B)()),Object(i.e)(3,Object(r.q)(h))],e),e})(),m=(()=>{let e=class{};return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(s){return new(s||e)}}),e})(),S=(()=>{let e=v=class{static forRoot(){return v}};return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(s){return new(s||e)},providers:[u],imports:[[m]]}),e})();var v}}]);