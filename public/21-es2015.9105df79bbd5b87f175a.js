(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"7UCR":function(e,s,t){"use strict";t.r(s),t.d(s,"UserModule",(function(){return ge}));var i=t("3Pt+"),r=t("ofXK"),n=t("jCJ1"),c=t("bTqV"),a=t("NFeN"),o=t("qFsG"),b=t("tyNb"),h=t("fXoL"),l=t("flj8"),u=t("2uAV"),d=t("YiK1"),f=t("kmnG");function m(e,s){if(1&e&&(h.Tb(0,"li",33),h.Kc(1),h.Sb()),2&e){const e=s.$implicit;h.Ab(1),h.Lc(e)}}function g(e,s){if(1&e&&(h.Tb(0,"div"),h.Ic(1,m,2,1,"li",32),h.Sb()),2&e){const e=h.fc(2);h.Ab(1),h.mc("ngForOf",e.formValidator.email.errMsgs)}}function p(e,s){if(1&e&&(h.Tb(0,"li",33),h.Kc(1),h.Sb()),2&e){const e=s.$implicit;h.Ab(1),h.Lc(e)}}function S(e,s){if(1&e&&(h.Tb(0,"div"),h.Ic(1,p,2,1,"li",32),h.Sb()),2&e){const e=h.fc(2);h.Ab(1),h.mc("ngForOf",e.formValidator.passwd.errMsgs)}}function v(e,s){1&e&&(h.Tb(0,"span",37),h.Kc(1,"Please click the above button."),h.Sb())}function w(e,s){if(1&e){const e=h.Ub();h.Tb(0,"div",34),h.Tb(1,"re-captcha",35),h.bc("resolved",(function(s){return h.Ac(e),h.fc(2).handleCorrectCaptcha(s)})),h.Sb(),h.Ic(2,v,2,0,"span",36),h.Sb()}if(2&e){const e=h.fc(2);h.Ab(1),h.mc("siteKey",e.reCaptchaSiteKey),h.Ab(1),h.mc("ngIf",e.isChecking&&!e._viewControls.isRecaptchaClicked)}}function C(e,s){if(1&e){const e=h.Ub();h.Tb(0,"form",10,11),h.bc("ngSubmit",(function(){return h.Ac(e),h.fc().onSubmit()})),h.Tb(2,"div",12),h.Tb(3,"label",13),h.Kc(4,"Email"),h.Sb(),h.Tb(5,"div",14),h.Tb(6,"mat-form-field",15),h.Tb(7,"input",16,17),h.bc("ngModelChange",(function(s){return h.Ac(e),h.fc().theUser.email=s}))("keyup",(function(){return h.Ac(e),h.fc().formValidator.email.presetErrs=[]})),h.Sb(),h.Sb(),h.Ic(9,g,2,1,"div",9),h.Sb(),h.Sb(),h.Tb(10,"div",12),h.Tb(11,"label",18),h.Kc(12,"Password"),h.Sb(),h.Tb(13,"div",14),h.Tb(14,"mat-form-field",15),h.Tb(15,"input",19,17),h.bc("ngModelChange",(function(s){return h.Ac(e),h.fc().theUser.passwd=s}))("keyup",(function(){return h.Ac(e),h.fc().formValidator.passwd.presetErrs=[]})),h.Sb(),h.Sb(),h.Ic(17,S,2,1,"div",9),h.Sb(),h.Sb(),h.Ic(18,w,3,2,"div",20),h.Tb(19,"div",21),h.Tb(20,"div",22),h.Tb(21,"button",23),h.Kc(22,"Sign In"),h.Sb(),h.Sb(),h.Tb(23,"div",22),h.Tb(24,"button",24),h.bc("click",(function(){return h.Ac(e),h.fc().resetForm()})),h.Kc(25,"Reset"),h.Sb(),h.Sb(),h.Sb(),h.Ob(26,"div",25),h.Tb(27,"div",26),h.Tb(28,"span",27),h.Kc(29,"or"),h.Sb(),h.Sb(),h.Tb(30,"div",28),h.Tb(31,"button",29),h.bc("click",(function(s){return h.Ac(e),h.fc().gotoAuth(s,"Google")})),h.Ob(32,"span",30),h.Kc(33," Google "),h.Sb(),h.Sb(),h.Ob(34,"div",31),h.Sb()}if(2&e){const e=h.fc();h.Ab(2),h.mc("ngClass",e.validEmail()),h.Ab(5),h.mc("ngModel",e.theUser.email),h.Ab(2),h.mc("ngIf",e.isChecking),h.Ab(1),h.mc("ngClass",e.validPasswd()),h.Ab(5),h.mc("ngModel",e.theUser.passwd),h.Ab(2),h.mc("ngIf",e.isChecking&&e.isPasswdChecking),h.Ab(1),h.mc("ngIf",e.reCaptchaSiteKey),h.Ab(13),h.mc("disabled",!e.googleClientID)}}function T(e,s){1&e&&(h.Tb(0,"div"),h.Tb(1,"h3"),h.Kc(2,"We are now signing you in..."),h.Sb(),h.Sb())}const I=function(){return["/home"]};let k=(()=>{class e{constructor(e,s,t,i){this.userService=e,this.router=s,this.infoService=t,this.systemService=i,this._subs=[],this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]}},this.isSubmitted=!1,this.theUser={email:"",passwd:""},this.isChecking=!1,this.cssSuccess={"has-success":!0,"has-error":!1},this.cssError={"has-success":!1,"has-error":!0},this.cssHidden={"has-success":!1,"has-error":!1},this._viewControls={isRecaptchaClicked:!1}}ngOnInit(){this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.userService.isSignedIn&&(this.router.navigate(["/project/list"]),console.log("ToDo: will navigate to user information.")),this._subs.push(this.userService.currentUser$.subscribe(e=>{e.isLoggedIn&&this.router.navigate(["/project/list"])})),this._subs.push(this.systemService.sysInfo$.subscribe(e=>{e&&(this.reCaptchaSiteKey=e.reCaptchaSiteKey,this.googleClientID=e.googleClientID)}))}validEmail(){const e=this.formValidator.email,s=new RegExp('^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs);let t={};return s.test(this.theUser.email)||e.errMsgs.push("Please check your email format."),t=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}validPasswd(){const e=this.formValidator.passwd,s=this.theUser.passwd&&this.theUser.passwd.length?this.theUser.passwd.length:0;let t={};return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),(s<8||s>64)&&e.errMsgs.push("This password must be between 8 and 64 characters"),0===s&&e.errMsgs.push("Cannot be empty"),t=this.isChecking&&this.isPasswdChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}handleCorrectCaptcha(e){this.recaptchaResponse=e}onSubmit(){this.isChecking=!1,this.isPasswdChecking=!1,(this.validEmail()||this.validPasswd())&&(this.isChecking=!0,this.isPasswdChecking=!0,this._viewControls.isRecaptchaClicked=!!this.recaptchaResponse,0===this.formValidator.email.errMsgs.length&&0===this.formValidator.passwd.errMsgs.length&&(this.reCaptchaSiteKey&&this.recaptchaResponse||!this.reCaptchaSiteKey)?(this._subs.push(this.userService.signIn(this.theUser.email,this.theUser.passwd,this.recaptchaResponse).subscribe(e=>{e.isError?(this.formValidator.email.presetErrs=[],this.formValidator.passwd.presetErrs=[],this.isSubmitted=!1,setTimeout(()=>this.reCaptchaComponent&&this.reCaptchaComponent.reset(),0),this.isPasswdChecking=!1,this.theUser.passwd=""):(console.log("Sign in Successfully"),this.infoService.addMessage("11"),this.router.navigate([this.userService.redirectUrl?this.userService.redirectUrl:"/project/list"]))})),this.isSubmitted=!0):this.reCaptchaComponent&&this.reCaptchaComponent.reset&&this.reCaptchaComponent.reset())}gotoAuth(e,s){e.preventDefault(),e.stopImmediatePropagation(),this.userService.oAuthSign(s)}resetForm(){return this.theUser={email:"",passwd:""},this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]}},this.isChecking=!1,this.reCaptchaComponent&&this.reCaptchaComponent.reset()}ngOnDestroy(){this._subs.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(s){return new(s||e)(h.Nb(l.a),h.Nb(b.c),h.Nb(u.a),h.Nb(d.a))},e.\u0275cmp=h.Hb({type:e,selectors:[["user-login"]],viewQuery:function(e,s){var t;1&e&&h.Qc(n.a,!0),2&e&&h.wc(t=h.cc())&&(s.reCaptchaComponent=t.first)},decls:17,vars:4,consts:[[1,"container-fluid"],["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"bdp-main-container"],[1,"chi-header"],["class","form col-md-12 center-block",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"form","col-md-12","center-block",3,"ngSubmit"],["userForm","ngForm"],[1,"form-group","row",3,"ngClass"],["for","email",1,"col-sm-2","control-label"],[1,"col-sm-10"],[2,"width","100%"],["matInput","","type","text","name","email","placeholder","What's your email address?",3,"ngModel","ngModelChange","keyup"],["email","ngModel"],["for","passwd",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd","placeholder","Choose a password",3,"ngModel","ngModelChange","keyup"],["class","form-group row","style","padding-left: 10px;",4,"ngIf"],[1,"form-group","row"],[1,"col-sm-2"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","reset",3,"click"],[1,"clearfix"],[1,"my-3",2,"margin","10px","border-top","1px solid #8e95a5","text-align","center","height","0px","margin","10px"],[2,"position","relative","bottom","10px","background","rgba(255, 255, 255, 0.5)","padding","0 12px"],[1,"row",2,"padding","10px"],[1,"btn","btn-danger","col-sm-3","col-xs-6","pull-left","text-center",2,"height","40px",3,"disabled","click"],[1,"fab","fa-google"],[1,"text-center",2,"font-size","12pt"],["class","help-block text-danger",4,"ngFor","ngForOf"],[1,"help-block","text-danger"],[1,"form-group","row",2,"padding-left","10px"],["size","normal",3,"siteKey","resolved"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(e,s){1&e&&(h.Tb(0,"div",0),h.Tb(1,"nav",1),h.Tb(2,"ol",2),h.Tb(3,"li",3),h.Tb(4,"a",4),h.Kc(5,"Home"),h.Sb(),h.Sb(),h.Tb(6,"li",5),h.Kc(7,"Sign in"),h.Sb(),h.Sb(),h.Sb(),h.Tb(8,"div",6),h.Tb(9,"h3",7),h.Kc(10,"Sign In"),h.Sb(),h.Ob(11,"br"),h.Ob(12,"br"),h.Ob(13,"br"),h.Ic(14,C,35,8,"form",8),h.Ic(15,T,3,0,"div",9),h.Ob(16,"hr"),h.Sb(),h.Sb()),2&e&&(h.Ab(4),h.mc("routerLink",h.pc(3,I)),h.Ab(10),h.mc("ngIf",!s.isSubmitted),h.Ab(1),h.mc("ngIf",s.isSubmitted))},directives:[b.f,r.n,i.o,i.j,i.k,r.l,f.b,o.a,i.b,i.i,i.l,c.b,r.m,n.a],encapsulation:2}),e})();function A(e,s){if(1&e&&(h.Tb(0,"li",37),h.Kc(1),h.Sb()),2&e){const e=s.$implicit;h.Ab(1),h.Lc(e)}}function y(e,s){if(1&e&&(h.Tb(0,"div"),h.Ic(1,A,2,1,"li",36),h.Sb()),2&e){const e=h.fc(2);h.Ab(1),h.mc("ngForOf",e.formValidator.email.errMsgs)}}function K(e,s){if(1&e&&(h.Tb(0,"li",37),h.Kc(1),h.Sb()),2&e){const e=s.$implicit;h.Ab(1),h.Lc(e)}}function E(e,s){if(1&e&&(h.Tb(0,"div"),h.Ic(1,K,2,1,"li",36),h.Sb()),2&e){const e=h.fc(2);h.Ab(1),h.mc("ngForOf",e.formValidator.passwd.errMsgs)}}function M(e,s){if(1&e&&(h.Tb(0,"li",37),h.Kc(1),h.Sb()),2&e){const e=s.$implicit;h.Ab(1),h.Lc(e)}}function x(e,s){if(1&e&&(h.Tb(0,"div"),h.Ic(1,M,2,1,"li",36),h.Sb()),2&e){const e=h.fc(2);h.Ab(1),h.mc("ngForOf",e.formValidator.passwd2.errMsgs)}}function U(e,s){if(1&e){const e=h.Ub();h.Tb(0,"re-captcha",38),h.bc("resolved",(function(s){return h.Ac(e),h.fc(2).handleCorrectCaptcha(s)})),h.Sb()}if(2&e){const e=h.fc(2);h.mc("siteKey",e.reCaptchaSiteKey)}}function O(e,s){1&e&&(h.Tb(0,"span",37),h.Kc(1,"Please click the above button."),h.Sb())}function V(e,s){if(1&e){const e=h.Ub();h.Tb(0,"form",12,13),h.bc("ngSubmit",(function(){return h.Ac(e),h.fc().onSubmit()})),h.Tb(2,"div",14),h.Tb(3,"label",15),h.Kc(4,"Email"),h.Sb(),h.Tb(5,"div",16),h.Tb(6,"mat-form-field",17),h.Tb(7,"input",18,19),h.bc("ngModelChange",(function(s){return h.Ac(e),h.fc().theUser.email=s}))("keyup",(function(){return h.Ac(e),h.fc().formValidator.email.presetErrs=[]})),h.Sb(),h.Sb(),h.Ic(9,y,2,1,"div",11),h.Sb(),h.Sb(),h.Tb(10,"div",14),h.Tb(11,"label",20),h.Kc(12,"Password"),h.Sb(),h.Tb(13,"div",16),h.Tb(14,"mat-form-field",17),h.Tb(15,"input",21,19),h.bc("ngModelChange",(function(s){return h.Ac(e),h.fc().theUser.passwd=s}))("keyup",(function(){return h.Ac(e),h.fc().formValidator.passwd.presetErrs=[]})),h.Sb(),h.Sb(),h.Ic(17,E,2,1,"div",11),h.Sb(),h.Sb(),h.Tb(18,"div",14),h.Tb(19,"label",22),h.Kc(20,"Re-type password"),h.Sb(),h.Tb(21,"div",16),h.Tb(22,"mat-form-field",17),h.Tb(23,"input",23),h.bc("ngModelChange",(function(s){return h.Ac(e),h.fc().theUser.passwd2=s}))("keyup",(function(){return h.Ac(e),h.fc().formValidator.passwd2.presetErrs=[]})),h.Sb(),h.Sb(),h.Ic(24,x,2,1,"div",11),h.Sb(),h.Sb(),h.Tb(25,"div",24),h.Ic(26,U,1,1,"re-captcha",25),h.Ic(27,O,2,0,"span",10),h.Sb(),h.Tb(28,"div",24),h.Tb(29,"div",26),h.Tb(30,"button",27),h.Kc(31,"Register"),h.Sb(),h.Sb(),h.Tb(32,"div",26),h.Tb(33,"button",28),h.bc("click",(function(){return h.Ac(e),h.fc().resetForm()})),h.Kc(34,"Reset"),h.Sb(),h.Sb(),h.Sb(),h.Ob(35,"div",29),h.Tb(36,"div",30),h.Tb(37,"span",31),h.Kc(38,"or"),h.Sb(),h.Sb(),h.Tb(39,"div",32),h.Tb(40,"button",33),h.bc("click",(function(s){return h.Ac(e),h.fc().gotoAuth(s,"Google")})),h.Ob(41,"span",34),h.Kc(42," Google "),h.Sb(),h.Sb(),h.Ob(43,"div",35),h.Sb()}if(2&e){const e=h.fc();h.Ab(2),h.mc("ngClass",e.validEmail()),h.Ab(5),h.mc("ngModel",e.theUser.email),h.Ab(2),h.mc("ngIf",e.isChecking),h.Ab(1),h.mc("ngClass",e.validPasswd()),h.Ab(5),h.mc("ngModel",e.theUser.passwd),h.Ab(2),h.mc("ngIf",e.isChecking),h.Ab(1),h.mc("ngClass",e.validPasswd2()),h.Ab(5),h.mc("ngModel",e.theUser.passwd2),h.Ab(1),h.mc("ngIf",e.isChecking),h.Ab(2),h.mc("ngIf",e.reCaptchaSiteKey),h.Ab(1),h.mc("ngIf",e.isChecking&&!e._viewControls.isRecaptchaClicked&&e.reCaptchaSiteKey),h.Ab(13),h.mc("disabled",!e.googleClientID)}}function N(e,s){if(1&e&&(h.Tb(0,"h3"),h.Ob(1,"i",39),h.Kc(2,"Sending registration information"),h.Sb()),2&e){const e=h.fc();h.Eb("text-danger",e.hasErrors.length>0),h.Ab(1),h.mc("ngClass",e.sendInfoCss())}}function _(e,s){1&e&&(h.Tb(0,"h3",37),h.Ob(1,"i",40),h.Kc(2,"Some errors have occurred."),h.Sb())}function R(e,s){if(1&e&&(h.Tb(0,"li",37),h.Ob(1,"i",42),h.Kc(2),h.Sb()),2&e){const e=s.$implicit;h.Ab(2),h.Lc(e)}}function P(e,s){if(1&e){const e=h.Ub();h.Tb(0,"h4"),h.Kc(1," Please check the followings and "),h.Tb(2,"a",41),h.bc("click",(function(){h.Ac(e);const s=h.fc();return s.isSubmitted=!s.isSubmitted})),h.Kc(3,"click here"),h.Sb(),h.Kc(4," to try again. "),h.Ob(5,"br"),h.Tb(6,"ul"),h.Ic(7,R,3,1,"li",36),h.Sb(),h.Sb()}if(2&e){const e=h.fc();h.Ab(7),h.mc("ngForOf",e.hasErrors)}}function L(e,s){1&e&&(h.Tb(0,"div"),h.Tb(1,"h3",43),h.Ob(2,"i",44),h.Kc(3," You have succssfully signed up! "),h.Ob(4,"br"),h.Kc(5," An email with an activation code was sent to your email address. If the email does not appear in your inbox in 5-10 minutes, please check your spam folder. "),h.Sb(),h.Ob(6,"hr"),h.Tb(7,"h3"),h.Kc(8,"You may now proceed to the followings. "),h.Sb(),h.Tb(9,"h4"),h.Tb(10,"ul"),h.Tb(11,"li"),h.Kc(12," Haven't recieved the email? "),h.Tb(13,"button"),h.Kc(14,"Click here"),h.Sb(),h.Kc(15," to resend the verification email. "),h.Sb(),h.Tb(16,"li"),h.Kc(17," Update your information. "),h.Sb(),h.Tb(18,"li"),h.Kc(19," Create a new project and upload your files. "),h.Sb(),h.Sb(),h.Sb(),h.Sb())}const F=function(){return["/home"]};function H(e,s){if(1&e&&(h.Tb(0,"h3",3),h.Ob(1,"i",4),h.Kc(2),h.Sb()),2&e){const e=h.fc();h.mc("ngClass",e.headerCss()),h.Ab(1),h.mc("ngClass",e.setCssClass()),h.Ab(1),h.Mc(" ",e.heading,"")}}const D=function(){return["/account/signIn"]};function j(e,s){1&e&&(h.Tb(0,"li"),h.Tb(1,"a",5),h.Kc(2,"Sign in to resend the verification email."),h.Sb(),h.Sb()),2&e&&(h.Ab(1),h.mc("routerLink",h.pc(1,D)))}function $(e,s){1&e&&(h.Tb(0,"li"),h.Tb(1,"a",5),h.Kc(2,"Sign in"),h.Sb(),h.Sb()),2&e&&(h.Ab(1),h.mc("routerLink",h.pc(1,D)))}function G(e,s){if(1&e&&(h.Tb(0,"div"),h.Ic(1,j,3,2,"li",2),h.Ic(2,$,3,2,"li",2),h.Sb()),2&e){const e=h.fc();h.Ab(1),h.mc("ngIf",!e.isVerified),h.Ab(1),h.mc("ngIf",e.isVerified)}}const z=function(){return["/project/list"]};function q(e,s){1&e&&(h.Tb(0,"li"),h.Tb(1,"a",5),h.Kc(2,"View my projects"),h.Sb(),h.Sb()),2&e&&(h.Ab(1),h.mc("routerLink",h.pc(1,z)))}const J=function(){return["/account/profile"]};function Q(e,s){1&e&&(h.Tb(0,"li"),h.Tb(1,"a",5),h.Kc(2,"Resend the verification email"),h.Sb(),h.Sb()),2&e&&(h.Ab(1),h.mc("routerLink",h.pc(1,J)))}function W(e,s){if(1&e&&(h.Tb(0,"div"),h.Ic(1,q,3,2,"li",2),h.Ic(2,Q,3,2,"li",2),h.Sb()),2&e){const e=h.fc();h.Ab(1),h.mc("ngIf",e.isVerified),h.Ab(1),h.mc("ngIf",!e.isVerified)}}function Y(e,s){1&e&&h.Ob(0,"h3")}function Z(e,s){if(1&e){const e=h.Ub();h.Tb(0,"span"),h.Kc(1),h.Tb(2,"button",16),h.Tb(3,"i",17),h.bc("click",(function(){return h.Ac(e),h.fc(2)._viewControls.isEditName=!0})),h.Sb(),h.Sb(),h.Sb()}if(2&e){const e=h.fc(2);h.Ab(1),h.Mc("",e.currentUser.name?e.currentUser.name:"unnamed"," ")}}function X(e,s){if(1&e){const e=h.Ub();h.Tb(0,"div"),h.Tb(1,"mat-form-field"),h.Tb(2,"input",18),h.bc("ngModelChange",(function(s){return h.Ac(e),h.fc(2)._viewControls.newName=s}))("keyup.enter",(function(){return h.Ac(e),h.fc(2).rename()})),h.Sb(),h.Sb(),h.Tb(3,"button",19),h.bc("click",(function(){return h.Ac(e),h.fc(2).rename()})),h.Ob(4,"i",20),h.Sb(),h.Tb(5,"button",21),h.bc("click",(function(){h.Ac(e);const s=h.fc(2);return s._viewControls.newName=s.currentUser.name,s._viewControls.isEditName=!1})),h.Ob(6,"i",22),h.Sb(),h.Sb()}if(2&e){const e=h.fc(2);h.Ab(2),h.mc("ngModel",e._viewControls.newName)}}function B(e,s){if(1&e){const e=h.Ub();h.Tb(0,"a",24),h.bc("click",(function(){return h.Ac(e),h.fc(3).reVerify()})),h.Kc(1,"Re-send"),h.Sb()}}function ee(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Sending ... "),h.Ob(2,"i",25),h.Sb())}function se(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Verification email sent."),h.Sb())}function te(e,s){if(1&e&&(h.Tb(0,"span"),h.Kc(1," Waiting for email verification "),h.Ob(2,"br"),h.Kc(3," (Haven't recieved your verification email? "),h.Ic(4,B,2,0,"a",23),h.Ic(5,ee,3,0,"span",13),h.Ic(6,se,2,0,"span",13),h.Kc(7," ) "),h.Sb()),2&e){const e=h.fc(2);h.Ab(4),h.mc("ngIf",e._viewControls.showResendEmail),h.Ab(1),h.mc("ngIf",!e._viewControls.mailSent&&!e._viewControls.showResendEmail),h.Ab(1),h.mc("ngIf",e._viewControls.mailSent)}}function ie(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Guest user (account inactive)"),h.Sb())}function re(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Normal user"),h.Sb())}function ne(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Root"),h.Sb())}function ce(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Guest user (account inactive)"),h.Sb())}function ae(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Normal user"),h.Sb())}function oe(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Power user"),h.Sb())}function be(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Task builder"),h.Sb())}function he(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Task manager"),h.Sb())}function le(e,s){1&e&&(h.Tb(0,"span"),h.Kc(1,"Administrator"),h.Sb())}function ue(e,s){if(1&e&&(h.Tb(0,"div",9),h.Tb(1,"div",10),h.Tb(2,"div",11),h.Tb(3,"strong"),h.Kc(4,"Name"),h.Sb(),h.Sb(),h.Tb(5,"div",12),h.Ic(6,Z,4,1,"span",13),h.Ic(7,X,7,1,"div",13),h.Sb(),h.Sb(),h.Ob(8,"br"),h.Tb(9,"div",10),h.Tb(10,"div",11),h.Tb(11,"strong"),h.Kc(12,"E-mail"),h.Sb(),h.Sb(),h.Tb(13,"div",12),h.Kc(14),h.Sb(),h.Sb(),h.Ob(15,"br"),h.Tb(16,"div",10),h.Tb(17,"div",11),h.Tb(18,"strong"),h.Kc(19,"System Role"),h.Sb(),h.Sb(),h.Tb(20,"div",14),h.Ic(21,te,8,3,"span",15),h.Ic(22,ie,2,0,"span",15),h.Ic(23,re,2,0,"span",15),h.Ic(24,ne,2,0,"span",15),h.Sb(),h.Sb(),h.Ob(25,"br"),h.Tb(26,"div",10),h.Tb(27,"div",11),h.Tb(28,"strong"),h.Kc(29,"Platform Role"),h.Sb(),h.Sb(),h.Tb(30,"div",14),h.Ic(31,ce,2,0,"span",15),h.Ic(32,ae,2,0,"span",15),h.Ic(33,oe,2,0,"span",15),h.Ic(34,be,2,0,"span",15),h.Ic(35,he,2,0,"span",15),h.Ic(36,le,2,0,"span",15),h.Sb(),h.Sb(),h.Sb()),2&e){const e=h.fc();h.Ab(6),h.mc("ngIf",!e._viewControls.isEditName),h.Ab(1),h.mc("ngIf",e._viewControls.isEditName),h.Ab(7),h.Mc(" ",null==e.currentUser?null:e.currentUser.email," "),h.Ab(6),h.mc("ngSwitch",e.currentUser.auths.base),h.Ab(1),h.mc("ngSwitchCase",0),h.Ab(1),h.mc("ngSwitchCase",1),h.Ab(1),h.mc("ngSwitchCase",2),h.Ab(1),h.mc("ngSwitchCase",9),h.Ab(6),h.mc("ngSwitch",e.currentUser.auths.bdp),h.Ab(1),h.mc("ngSwitchCase",1),h.Ab(1),h.mc("ngSwitchCase",2),h.Ab(1),h.mc("ngSwitchCase",3),h.Ab(1),h.mc("ngSwitchCase",7),h.Ab(1),h.mc("ngSwitchCase",8),h.Ab(1),h.mc("ngSwitchCase",9)}}const de=function(){return["/home"]},fe=function(){return["/account","profile"]},me=b.g.forChild([{path:"",pathMatch:"full",redirectTo:"signIn"},{path:"register",component:(()=>{class e{constructor(e,s,t,i){this.userService=e,this.infoService=s,this.router=t,this.systemService=i,this._subs=[],this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.theUser={email:"",passwd:"",passwd2:""},this.isChecking=!1,this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]},passwd2:{errMsgs:[],presetErrs:[]}},this.cssSuccess={"has-success":!0,"has-error":!1},this.cssError={"has-success":!1,"has-error":!0},this.cssHidden={"has-success":!1,"has-error":!1},this.isSubmitted=!1,this.isSuccess=!1,this.hasErrors=[],this._viewControls={isRecaptchaClicked:!1},this._subs.push(this.userService.currentUser$.subscribe(e=>e.isLoggedIn?this.router.navigate(["/project/list"]):""))}ngOnInit(){this.systemService.sysInfo$.subscribe(e=>{e&&(this.reCaptchaSiteKey=e.reCaptchaSiteKey,this.googleClientID=e.googleClientID)})}validEmail(){const e=this.formValidator.email,s=new RegExp('^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs);let t={};return s.test(this.theUser.email)||e.errMsgs.push("Please check your email format."),t=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}validPasswd(){const e=this.formValidator.passwd,s=this.theUser.passwd&&this.theUser.passwd.length?this.theUser.passwd.length:0;let t={};return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),(s<8||s>64)&&e.errMsgs.push("This password must be between 8 and 64 characters"),t=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,t}validPasswd2(){const e=this.formValidator.passwd2;let s={};return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),this.theUser.passwd!==this.theUser.passwd2&&e.errMsgs.push("Password does not match."),this.theUser.passwd2&&0!==this.theUser.passwd2.length||e.errMsgs.push("Cannot be empty"),s=this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden,s}handleCorrectCaptcha(e){this.recaptchaResponse=e}onSubmit(){this.isChecking=!1,(this.validEmail()||this.validPasswd()||this.validPasswd2())&&(this.isChecking=!0,this._viewControls.isRecaptchaClicked=!!this.recaptchaResponse,0===this.formValidator.email.errMsgs.length&&0===this.formValidator.passwd.errMsgs.length&&0===this.formValidator.passwd2.errMsgs.length&&(this.reCaptchaSiteKey&&this.recaptchaResponse||!this.reCaptchaSiteKey)?(this._subs.push(this.userService.register(this.theUser.email,this.theUser.passwd,this.recaptchaResponse).subscribe(e=>{if(e.isError){const s=this.formValidator.email;s.presetErrs=[];const t=this.formValidator.passwd;t.presetErrs=[],this.formValidator.passwd2.presetErrs=[],this.isSuccess=!0,this.isSubmitted=!1,setTimeout(()=>{this.reCaptchaComponent&&this.reCaptchaComponent.reset()},0);for(let i=0;i<e.errors.length;i++){const r=e.errors[i];"1"===r.code&&s.presetErrs.push(r.name),"3"===r.code&&t.presetErrs.push(r.name),this.hasErrors.push(r.name)}}else this.isSuccess=!0,this.infoService.addMessage("7"),this.router.navigate(["/project/list"])},(function(e){this.isSuccess=!1,this.hasErrors.push("Connection error: Please try again latter."),this.hasErrors.push("If this message keeps showing, please contact the web admin.")}))),this.isSubmitted=!0,this.formValidator.email.presetErrs=[],this.formValidator.passwd.presetErrs=[],this.formValidator.passwd2.presetErrs=[],this.hasErrors=[]):this.reCaptchaComponent&&this.reCaptchaComponent.reset())}resetForm(){this.theUser={email:"",passwd:"",passwd2:""},this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]},passwd2:{errMsgs:[],presetErrs:[]}},this.isChecking=!1,this.reCaptchaComponent&&this.reCaptchaComponent.reset()}gotoAuth(e,s){e.preventDefault(),e.stopImmediatePropagation(),this.userService.oAuthSign(s)}sendInfoCss(){let e={"fa-circle-o-notch":!0,"fa-spin":!0,"fa-times":!1,"fa-check":!1};return this.isSuccess&&(e={"fa-circle-o-notch":!1,"fa-spin":!1,"fa-times":!1,"fa-check":!0}),this.hasErrors.length>0&&(e={"fa-circle-o-notch":!1,"fa-spin":!1,"fa-times":!0,"fa-check":!1}),e}statusCss(e){let s;switch(e){case 1:s={"text-danger":!1,"text-warning":!0};break;case 2:s={"text-danger":!0,"text-warning":!1};break;default:s={"text-danger":!1,"text-warning":!1}}return s}get diagnostic(){return JSON.stringify(this.formValidator)}ngOnDestroy(){this._subs.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(s){return new(s||e)(h.Nb(l.a),h.Nb(u.a),h.Nb(b.c),h.Nb(d.a))},e.\u0275cmp=h.Hb({type:e,selectors:[["user-register"]],viewQuery:function(e,s){var t;1&e&&h.Qc(n.a,!0),2&e&&h.wc(t=h.cc())&&(s.reCaptchaComponent=t.first)},decls:20,vars:8,consts:[["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"bdp-main-container"],[1,"chi-header"],["class","form col-md-12 center-block",3,"ngSubmit",4,"ngIf"],[3,"hidden"],[3,"text-danger",4,"ngIf"],["class","text-danger",4,"ngIf"],[4,"ngIf"],[1,"form","col-md-12","center-block",3,"ngSubmit"],["userForm","ngForm"],[1,"form-group","row",3,"ngClass"],["for","email",1,"col-sm-2","control-label"],[1,"col-sm-10"],[2,"width","100%"],["matInput","","type","text","name","email","placeholder","What's your email address?",3,"ngModel","ngModelChange","keyup"],["email","ngModel"],["for","passwd",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd","placeholder","Choose a password",3,"ngModel","ngModelChange","keyup"],["for","passwd2",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd2","placeholder","Confirm your passowrd",3,"ngModel","ngModelChange","keyup"],[1,"form-group","row"],[3,"siteKey","resolved",4,"ngIf"],[1,"col-sm-2"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","reset",3,"click"],[1,"clearfix"],[1,"my-2",2,"margin","10px","border-top","1px solid #8e95a5","text-align","center","height","0px","margin","10px"],[2,"position","relative","bottom","10px","background","rgba(255, 255, 255, 0.5)","padding","0 12px"],[1,"row"],["type","button",1,"btn","btn-danger","col-sm-3","col-xs-6","pull-left","text-center",2,"height","40px",3,"disabled","click"],[1,"fab","fa-google"],[1,"text-center",2,"font-size","12pt"],["class","text-danger",4,"ngFor","ngForOf"],[1,"text-danger"],[3,"siteKey","resolved"],[1,"fa","fa-fw",3,"ngClass"],["aria-hidden","true",1,"fa","fa-exclamation-triangle"],[1,"link",3,"click"],["aria-hidden","true",1,"fa","fa-times","fa-fw"],[1,"text-success"],["aria-hidden","true",1,"fa","fa-check","fa-fw"]],template:function(e,s){1&e&&(h.Tb(0,"nav",0),h.Tb(1,"ol",1),h.Tb(2,"li",2),h.Tb(3,"a",3),h.Kc(4,"Home"),h.Sb(),h.Sb(),h.Tb(5,"li",4),h.Kc(6,"Registration"),h.Sb(),h.Sb(),h.Sb(),h.Tb(7,"div",5),h.Tb(8,"h3",6),h.Kc(9,"Registration"),h.Sb(),h.Ob(10,"br"),h.Ob(11,"br"),h.Ob(12,"br"),h.Ic(13,V,44,12,"form",7),h.Tb(14,"div",8),h.Ic(15,N,3,3,"h3",9),h.Ic(16,_,3,0,"h3",10),h.Ic(17,P,8,1,"h4",11),h.Ic(18,L,20,0,"div",11),h.Ob(19,"hr"),h.Sb(),h.Sb()),2&e&&(h.Ab(3),h.mc("routerLink",h.pc(7,F)),h.Ab(10),h.mc("ngIf",!s.isSubmitted),h.Ab(1),h.mc("hidden",!s.isSubmitted),h.Ab(1),h.mc("ngIf",0===s.hasErrors.length&&!s.isSuccess),h.Ab(1),h.mc("ngIf",0!==s.hasErrors.length),h.Ab(1),h.mc("ngIf",0!==s.hasErrors.length),h.Ab(1),h.mc("ngIf",s.isSuccess&&0===s.hasErrors.length))},directives:[b.f,r.n,i.o,i.j,i.k,r.l,f.b,o.a,i.b,i.i,i.l,c.b,r.m,n.a],encapsulation:2}),e})()},{path:"email-verifying",component:(()=>{class e{constructor(e,s,t,i,r){this.route=e,this.router=s,this.infoService=t,this.systemService=i,this.userService=r,this.hasCode=!1,this.heading="",this.status=void 0,this.isVerified=!1}ngOnInit(){this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.sub=this.route.queryParamMap.subscribe(e=>{let s;switch(void 0!==e.get("code")?(s=e.get("code"),this.hasCode=!0,this.status=this.infoService.addMessage(s)):(this.hasCode=!1,this.status=void 0,this.router.navigate(["/home"])),s){case"a004":this.heading="The verification token is invalid.",this.isVerified=!1;break;case"a005":this.heading="This verification token is expired.",this.isVerified=!1;break;case"a006":this.heading="The email is verified.",this.isVerified=!0;break;case"a008":this.heading="This email is already verified.",this.isVerified=!0;break;default:this.heading="Resending your verification email."}})}setCssClass(){const e={"fa-exclamation-triangle":!1,"fa-times":!1,"fa-check":!1,"fa-info-circle":!1};if(void 0!==this.status)switch(this.status.type){case"warning":e["fa-exclamation-triangle"]=!0;break;case"error":e["fa-times"]=!0;break;case"info":e["fa-info-circle"]=!0;break;case"success":e["fa-check"]=!0}return e}headerCss(){let e={"text-warning":!1,"text-danger":!1,"text-success":!1};if(void 0!==this.status)switch(this.status.type){case"warning":e={"text-warning":!0,"text-danger":!1,"text-success":!1};break;case"error":e={"text-warning":!1,"text-danger":!0,"text-success":!1};break;case"success":e={"text-warning":!1,"text-danger":!1,"text-success":!0}}return e}reVerify(){this.userService.emailResend().subscribe(e=>{})}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return e.\u0275fac=function(s){return new(s||e)(h.Nb(b.a),h.Nb(b.c),h.Nb(u.a),h.Nb(d.a),h.Nb(l.a))},e.\u0275cmp=h.Hb({type:e,selectors:[["email-verify"]],decls:10,vars:4,consts:[[1,"bdp-main-container"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],["aria-hidden","true",1,"fas","fa-fw",3,"ngClass"],[3,"routerLink"]],template:function(e,s){1&e&&(h.Tb(0,"div",0),h.Tb(1,"h1"),h.Kc(2,"Email verification"),h.Sb(),h.Ic(3,H,3,3,"h3",1),h.Tb(4,"h4"),h.Kc(5,"You may proceed the follow actions."),h.Sb(),h.Tb(6,"ul"),h.Ic(7,G,3,2,"div",2),h.Ic(8,W,3,2,"div",2),h.Sb(),h.Ic(9,Y,1,0,"h3",2),h.Sb()),2&e&&(h.Ab(3),h.mc("ngIf",s.hasCode),h.Ab(4),h.mc("ngIf",!s.userService.isSignedIn),h.Ab(1),h.mc("ngIf",s.userService.isSignedIn),h.Ab(1),h.mc("ngIf",!s.hasCode))},directives:[r.n,r.l,b.f],encapsulation:2}),e})()},{path:"signIn",component:k},{path:"forgot-password",component:(()=>{class e{constructor(e){this.userService=e}ngOnInit(){}ngOnDestroy(){}}return e.\u0275fac=function(s){return new(s||e)(h.Nb(l.a))},e.\u0275cmp=h.Hb({type:e,selectors:[["forgot-passwd"]],decls:3,vars:0,consts:[[1,"container-fluid"]],template:function(e,s){1&e&&(h.Tb(0,"div",0),h.Tb(1,"h1"),h.Kc(2,"Forgot your passowrd?"),h.Sb(),h.Sb())},encapsulation:2}),e})()},{path:"profile",component:(()=>{class e{constructor(e,s,t){this.userService=e,this.router=s,this.systemService=t,this._subs=[]}ngOnInit(){this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this._viewControls={isEditName:!1,showResendEmail:!0,mailSent:!1,newName:""},this._subs.push(this.userService.currentUser$.subscribe(e=>{this.currentUser=e,this._viewControls.newName=this.currentUser.name,e.isLoggedIn||this.router.navigate(["/account/signIn"])}))}reVerify(){this._viewControls.showResendEmail=!1,this._subs.push(this.userService.emailResend().subscribe(e=>{e.isError||e.success&&e.success.resend&&(this._viewControls.mailSent=!0)}))}rename(){const e=this._viewControls.newName;this._viewControls.isEditName=!1;const s=this.currentUser.name;this.currentUser.name=e;const t=this.userService.rename(e).subscribe(e=>{t.unsubscribe(),e.isError&&(this.currentUser.name=s)})}ngOnDestroy(){this._subs.forEach(e=>e.unsubscribe())}}return e.\u0275fac=function(s){return new(s||e)(h.Nb(l.a),h.Nb(b.c),h.Nb(d.a))},e.\u0275cmp=h.Hb({type:e,selectors:[["user-profile"]],decls:16,vars:7,consts:[[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["target","_blank",3,"routerLink"],[1,"fas","fa-external-link-alt","ml-3"],[1,"bdp-main-container"],[1,"chi-header"],["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-3"],[1,"col-md-9"],[4,"ngIf"],[1,"col-md-9",3,"ngSwitch"],[4,"ngSwitchCase"],["mat-icon-button",""],[1,"fas","fa-pencil-alt","fa-fw","fa-lg",3,"click"],["matInput","","type","text","maxlength","60","length","60",3,"ngModel","ngModelChange","keyup.enter"],["mat-icon-button","","color","primary",3,"click"],[1,"fas","fa-save","fa-fw","mx-2","fa-lg"],["mat-icon-button","",3,"click"],[1,"fas","fa-times","fa-fw","mx-2","fa-lg"],["class","link","style","text-decoration: underline;",3,"click",4,"ngIf"],[1,"link",2,"text-decoration","underline",3,"click"],[1,"fa","fa-circle-o-notch","fa-spin","fa-fw"]],template:function(e,s){1&e&&(h.Tb(0,"ol",0),h.Tb(1,"li",1),h.Tb(2,"a",2),h.Kc(3,"Home"),h.Sb(),h.Sb(),h.Tb(4,"li",3),h.Tb(5,"a",2),h.Kc(6,"User Profile"),h.Sb(),h.Tb(7,"a",4),h.Ob(8,"i",5),h.Sb(),h.Sb(),h.Sb(),h.Tb(9,"div",6),h.Tb(10,"h3",7),h.Kc(11,"User Profile"),h.Sb(),h.Ob(12,"br"),h.Ob(13,"br"),h.Ob(14,"br"),h.Ic(15,ue,37,15,"div",8),h.Sb()),2&e&&(h.Ab(2),h.mc("routerLink",h.pc(4,de)),h.Ab(3),h.mc("routerLink",h.pc(5,fe)),h.Ab(2),h.mc("routerLink",h.pc(6,fe)),h.Ab(8),h.mc("ngIf",s.currentUser&&s.currentUser.auths))},directives:[b.f,r.n,r.p,r.q,c.b,f.b,o.a,i.b,i.e,i.i,i.l],encapsulation:2}),e})()}]);let ge=(()=>{class e{}return e.\u0275mod=h.Lb({type:e}),e.\u0275inj=h.Kb({factory:function(s){return new(s||e)},providers:[],imports:[[r.c,i.d,n.b,c.c,o.b,a.b,me]]}),e})()}}]);