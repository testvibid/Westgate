webpackJsonp([72],{1905:function(l,n,e){"use strict";function a(l){return t._57(0,[t._52(402653184,1,{workshopComponent:0}),(l()(),t._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),t._30(2,16384,null,0,I.a,[M.a,t.t,t.V,[2,V.a]],null,null),(l()(),t._55(-1,null,["\n    "])),(l()(),t._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,D.b,D.a)),t._30(5,49152,null,0,G.a,[T.a,[2,V.a],[2,A.a],M.a,t.t,t.V],null,null),t._30(6,212992,null,0,F.a,[G.a,J.a,K.a,N.a],null,null),(l()(),t._55(-1,3,["\n        "])),(l()(),t._31(8,0,null,3,3,"ion-title",[],null,null,null,U.b,U.a)),t._30(9,49152,null,0,W.a,[M.a,t.t,t.V,[2,q.a],[2,G.a]],null,null),(l()(),t._31(10,0,null,0,1,"core-format-text",[],null,null,null,null,null)),t._30(11,540672,null,0,z.a,[t.t,B.a,E.a,H.a,K.a,J.a,L.a,Q.a,S.a,X.a,Y.a,Z.a,[2,A.a],[2,$.a],[2,ll.a],nl.a,N.a],{text:[0,"text"]},null),(l()(),t._55(-1,3,["\n\n        "])),(l()(),t._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),t._30(14,16384,null,1,el.a,[M.a,t.t,t.V,[2,q.a],[2,G.a]],null,null),t._52(603979776,2,{_buttons:1}),(l()(),t._55(-1,null,["\n            "])),(l()(),t._55(-1,null,["\n        "])),(l()(),t._55(-1,3,["\n    "])),(l()(),t._55(-1,null,["\n"])),(l()(),t._55(-1,null,["\n"])),(l()(),t._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,al.b,al.a)),t._30(22,4374528,null,0,$.a,[M.a,J.a,tl.a,t.t,t.V,T.a,ul.a,t.M,[2,V.a],[2,A.a]],null,null),(l()(),t._55(-1,1,["\n    "])),(l()(),t._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,n,e){var a=!0;if("ionRefresh"===n){a=!1!==l.component.workshopComponent.doRefresh(e)&&a}return a},null,null)),t._30(25,212992,null,0,ol.a,[J.a,$.a,t.M,rl.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(l()(),t._55(-1,null,["\n        "])),(l()(),t._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,_l.b,_l.a)),t._30(28,114688,null,0,il.a,[ol.a,M.a],{pullingText:[0,"pullingText"]},null),t._47(131072,dl.a,[K.a,t.j]),(l()(),t._55(-1,null,["\n    "])),(l()(),t._55(-1,1,["\n\n    "])),(l()(),t._31(32,0,null,1,1,"addon-mod-workshop-index",[],null,[[null,"dataRetrieved"]],function(l,n,e){var a=!0;if("dataRetrieved"===n){a=!1!==l.component.updateData(e)&&a}return a},C.c,C.b)),t._30(33,245760,[[1,4]],0,i.a,[t.C,cl.a,[2,$.a],sl.a,fl.a,A.a,pl.a,L.a,J.a,bl.a,hl.a],{module:[0,"module"],courseId:[1,"courseId"],group:[2,"group"]},{dataRetrieved:"dataRetrieved"}),(l()(),t._55(-1,1,["\n"])),(l()(),t._55(-1,null,["\n"]))],function(l,n){var e=n.component;l(n,6,0);l(n,11,0,e.title);l(n,25,0,e.workshopComponent.loaded);l(n,28,0,t._34(1,"",t._56(n,28,0,t._44(n,29).transform("core.pulltorefresh")),""));l(n,33,0,e.module,e.courseId,e.selectedGroup)},function(l,n){l(n,4,0,t._44(n,5)._hidden,t._44(n,5)._sbPadding);l(n,21,0,t._44(n,22).statusbarPadding,t._44(n,22)._hasRefresher);l(n,24,0,"inactive"!==t._44(n,25).state,t._44(n,25)._top);l(n,27,0,t._44(n,28).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var t=e(0),u=e(8),o=e(3),r=e(29),_=e(458),i=e(489),d=this&&this.__decorate||function(l,n,e,a){var t,u=arguments.length,o=u<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(l,n,e,a);else for(var r=l.length-1;r>=0;r--)(t=l[r])&&(o=(u<3?t(o):u>3?t(n,e,o):t(n,e))||o);return u>3&&o&&Object.defineProperty(n,e,o),o},c=this&&this.__metadata||function(l,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(l,n)},s=function(){function l(l){this.module=l.get("module")||{},this.courseId=l.get("courseId"),this.selectedGroup=l.get("group")||0,this.title=this.module.name}return l.prototype.updateData=function(l){this.title=l.name||this.title},d([Object(t._9)(i.a),c("design:type",i.a)],l.prototype,"workshopComponent",void 0),l=d([Object(t.m)({selector:"page-addon-mod-workshop-index",templateUrl:"index.html"}),c("design:paramtypes",[u.t])],l)}(),f=this&&this.__decorate||function(l,n,e,a){var t,u=arguments.length,o=u<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(l,n,e,a);else for(var r=l.length-1;r>=0;r--)(t=l[r])&&(o=(u<3?t(o):u>3?t(n,e,o):t(n,e))||o);return u>3&&o&&Object.defineProperty(n,e,o),o},p=function(){function l(){}return l=f([Object(t.I)({declarations:[s],imports:[r.a,_.a,u.l.forChild(s),o.b.forChild()]})],l)}(),b=e(1365),h=e(1366),m=e(1367),g=e(1368),v=e(1369),R=e(1370),y=e(1371),x=e(1372),j=e(1373),k=e(1376),w=e(1377),O=e(1378),P=e(1379),C=e(1407),I=e(447),M=e(6),V=e(37),D=e(1374),G=e(207),T=e(32),A=e(21),F=e(676),J=e(14),K=e(18),N=e(12),U=e(1375),W=e(350),q=e(253),z=e(41),B=e(1),E=e(4),H=e(10),L=e(2),Q=e(26),S=e(5),X=e(16),Y=e(9),Z=e(17),$=e(25),ll=e(34),nl=e(36),el=e(448),al=e(178),tl=e(31),ul=e(104),ol=e(140),rl=e(38),_l=e(195),il=e(146),dl=e(27),cl=e(151),sl=e(168),fl=e(68),pl=e(181),bl=e(184),hl=e(299),ml=e(63),gl=t._29({encapsulation:2,styles:[],data:{}}),vl=t._27("page-addon-mod-workshop-index",s,function(l){return t._57(0,[(l()(),t._31(0,0,null,null,1,"page-addon-mod-workshop-index",[],null,null,null,a,gl)),t._30(1,49152,null,0,s,[ml.a],null,null)],null,null)},{},{},[]),Rl=e(7),yl=e(22),xl=e(346),jl=e(347),kl=e(349),wl=e(348),Ol=e(446),Pl=e(675),Cl=e(103),Il=e(24),Ml=e(67),Vl=e(254);e.d(n,"AddonModWorkshopIndexPageModuleNgFactory",function(){return Dl});var Dl=t._28(p,[],function(l){return t._40([t._41(512,t.o,t._21,[[8,[b.a,h.a,m.a,g.a,v.a,R.a,y.a,x.a,j.a,k.a,w.a,O.a,P.a,C.a,vl]],[3,t.o],t.K]),t._41(4608,Rl.m,Rl.l,[t.G,[2,Rl.v]]),t._41(4608,yl.x,yl.x,[]),t._41(4608,yl.d,yl.d,[]),t._41(4608,xl.b,xl.a,[]),t._41(4608,jl.a,jl.b,[]),t._41(4608,kl.b,kl.a,[]),t._41(4608,wl.b,wl.a,[]),t._41(4608,K.a,K.a,[Ol.a,xl.b,jl.a,kl.b,wl.b,K.b,K.c]),t._41(512,r.a,r.a,[]),t._41(512,Rl.b,Rl.b,[]),t._41(512,yl.v,yl.v,[]),t._41(512,yl.i,yl.i,[]),t._41(512,yl.s,yl.s,[]),t._41(512,Pl.a,Pl.a,[]),t._41(512,o.b,o.b,[]),t._41(512,Cl.a,Cl.a,[]),t._41(512,Il.a,Il.a,[]),t._41(512,Ml.a,Ml.a,[]),t._41(512,_.a,_.a,[]),t._41(512,Pl.b,Pl.b,[]),t._41(512,p,p,[]),t._41(256,K.c,void 0,[]),t._41(256,K.b,void 0,[]),t._41(256,Vl.a,s,[])])})}});