webpackJsonp([49],{1925:function(e,n,t){"use strict";function l(e){return i._57(0,[(e()(),i._31(0,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,S.b,S.a)),i._30(1,4374528,null,0,C.a,[D.a,w.a,H.a,i.t,i.V,L.a,T.a,i.M,[2,M.a],[2,V.a]],null,null),(e()(),i._55(-1,1,["\n    "])),(e()(),i._31(3,0,null,1,9,"div",[["class","core-bglogo"]],null,null,null,null,null)),(e()(),i._55(-1,null,["\n        "])),(e()(),i._31(5,0,null,null,6,"div",[["class","core-logo"]],null,null,null,null,null)),(e()(),i._55(-1,null,["\n            "])),(e()(),i._31(7,0,null,null,0,"img",[["src","assets/img/splash_logo.png"]],null,null,null,null,null)),(e()(),i._55(-1,null,["\n            "])),(e()(),i._31(9,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,x.b,x.a)),i._30(10,114688,null,0,N.a,[D.a,i.t,i.V],null,null),(e()(),i._55(-1,null,["\n        "])),(e()(),i._55(-1,null,["\n    "])),(e()(),i._55(-1,1,["\n"])),(e()(),i._55(-1,null,["\n"]))],function(e,n){e(n,10,0)},function(e,n){e(n,0,0,i._44(n,1).statusbarPadding,i._44(n,1)._hasRefresher);e(n,9,0,i._44(n,10)._paused)})}Object.defineProperty(n,"__esModule",{value:!0});var i=t(0),a=t(8),o=t(705),r=t(9),u=t(156),s=t(1),c=t(39),d=t(129),f=this&&this.__decorate||function(e,n,t,l){var i,a=arguments.length,o=a<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,l);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(a<3?i(o):a>3?i(n,t,o):i(n,t))||o);return a>3&&o&&Object.defineProperty(n,t,o),o},p=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},g=function(){function e(e,n,t,l,i,a){this.navCtrl=e,this.appProvider=n,this.initDelegate=t,this.sitesProvider=l,this.loginHelper=i,this.splashScreen=a}return e.prototype.ionViewDidLoad=function(){var e=this;this.initDelegate.ready().then(function(){var n=e.appProvider.getRedirect();return n.siteId&&n.page&&(e.appProvider.storeRedirect("","",""),Date.now()-n.timemodified<2e4)?n.siteId!=c.a.NO_SITE_ID?e.sitesProvider.loadSite(n.siteId,n.page,n.params).then(function(t){if(t)return e.loginHelper.goToSiteInitialPage(e.navCtrl,n.page,n.params,{animate:!1})}).catch(function(){return e.loadPage()}):e.navCtrl.setRoot(n.page,n.params,{animate:!1}):e.loadPage()}).then(function(){setTimeout(function(){e.splashScreen.hide()},100)})},e.prototype.loadPage=function(){var e=this;return this.sitesProvider.isLoggedIn()?this.loginHelper.isSiteLoggedOut()?this.sitesProvider.logout().then(function(){return e.loadPage()}):this.loginHelper.goToSiteInitialPage():this.sitesProvider.hasSites().then(function(n){return n?e.navCtrl.setRoot("CoreLoginSitesPage"):e.loginHelper.goToAddSite(!0)})},e=f([Object(i.m)({selector:"page-core-login-init",templateUrl:"init.html"}),p("design:paramtypes",[a.s,r.a,u.a,s.a,d.a,o.a])],e)}(),_=this&&this.__decorate||function(e,n,t,l){var i,a=arguments.length,o=a<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,l);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(a<3?i(o):a>3?i(n,t,o):i(n,t))||o);return a>3&&o&&Object.defineProperty(n,t,o),o},h=function(){function e(){}return e=_([Object(i.I)({declarations:[g],imports:[a.l.forChild(g)]})],e)}(),v=t(1365),P=t(1366),b=t(1367),m=t(1368),y=t(1369),R=t(1370),O=t(1371),j=t(1372),I=t(1373),S=t(178),C=t(25),D=t(6),w=t(14),H=t(31),L=t(32),T=t(104),M=t(37),V=t(21),x=t(117),N=t(97),k=i._29({encapsulation:2,styles:[],data:{}}),A=i._27("page-core-login-init",g,function(e){return i._57(0,[(e()(),i._31(0,0,null,null,1,"page-core-login-init",[],null,null,null,l,k)),i._30(1,49152,null,0,g,[V.a,r.a,u.a,s.a,d.a,o.a],null,null)],null,null)},{},{},[]),E=t(7),F=t(22),G=t(675),J=t(254);t.d(n,"CoreLoginInitPageModuleNgFactory",function(){return K});var K=i._28(h,[],function(e){return i._40([i._41(512,i.o,i._21,[[8,[v.a,P.a,b.a,m.a,y.a,R.a,O.a,j.a,I.a,A]],[3,i.o],i.K]),i._41(4608,E.m,E.l,[i.G,[2,E.v]]),i._41(4608,F.x,F.x,[]),i._41(4608,F.d,F.d,[]),i._41(512,E.b,E.b,[]),i._41(512,F.v,F.v,[]),i._41(512,F.i,F.i,[]),i._41(512,F.s,F.s,[]),i._41(512,G.a,G.a,[]),i._41(512,G.b,G.b,[]),i._41(512,h,h,[]),i._41(256,J.a,g,[])])})}});