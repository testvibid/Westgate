webpackJsonp([110],{1881:function(l,n,u){"use strict";function a(l){return o._42(0,[(l()(),o._16(0,0,null,null,9,"a",[["class","item item-block"],["ion-item",""],["text-wrap",""]],[[2,"core-nav-item-selected",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.loadChapter(l.context.$implicit.id)&&a}return a},g.b,g.a)),o._15(1,1097728,null,3,k.a,[K.a,x.a,o.p,o.K,[2,y.a]],null,null),o._37(335544320,2,{contentLabel:0}),o._37(603979776,3,{_buttons:1}),o._37(603979776,4,{_icons:1}),o._15(5,16384,null,0,w.a,[],null,null),(l()(),o._40(-1,2,["\n                "])),(l()(),o._16(7,0,null,2,1,"p",[],[[1,"padding-left",0]],null,null,null,null)),(l()(),o._40(8,null,["",""])),(l()(),o._40(-1,2,["\n            "]))],null,function(l,n){l(n,0,0,n.component.selected==n.context.$implicit.id);l(n,7,0,1==n.context.$implicit.level||null);l(n,8,0,n.context.$implicit.title)})}function t(l){return o._42(0,[(l()(),o._16(0,0,null,null,25,"ion-header",[],null,null,null,null,null)),o._15(1,16384,null,0,C.a,[x.a,o.p,o.K,[2,M.a]],null,null),(l()(),o._40(-1,null,["\n    "])),(l()(),o._16(3,0,null,null,21,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,P.b,P.a)),o._15(4,49152,null,0,$.a,[F.a,[2,M.a],[2,O.a],x.a,o.p,o.K],null,null),o._15(5,212992,null,0,j.a,[$.a,B.a,T.a,A.a],null,null),(l()(),o._40(-1,3,["\n        "])),(l()(),o._16(7,0,null,3,3,"ion-title",[],null,null,null,D.b,D.a)),o._15(8,49152,null,0,J.a,[x.a,o.p,o.K,[2,L.a],[2,$.a]],null,null),(l()(),o._40(9,0,["",""])),o._32(131072,N.a,[T.a,o.i]),(l()(),o._40(-1,3,["\n        "])),(l()(),o._16(12,0,null,2,11,"ion-buttons",[["end",""]],null,null,null,null,null)),o._15(13,16384,null,1,R.a,[x.a,o.p,o.K,[2,L.a],[2,$.a]],null,null),o._37(603979776,1,{_buttons:1}),(l()(),o._40(-1,null,["\n            "])),(l()(),o._16(16,0,null,null,6,"button",[["icon-only",""],["ion-button",""]],[[1,"aria-label",0]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.closeModal()&&a}return a},W.b,W.a)),o._15(17,1097728,[[1,4]],0,q.a,[[8,""],x.a,o.p,o.K],null,null),o._32(131072,N.a,[T.a,o.i]),(l()(),o._40(-1,0,["\n                "])),(l()(),o._16(20,0,null,0,1,"ion-icon",[["name","close"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o._15(21,147456,null,0,z.a,[x.a,o.p,o.K],{name:[0,"name"]},null),(l()(),o._40(-1,0,["\n            "])),(l()(),o._40(-1,null,["\n        "])),(l()(),o._40(-1,3,["\n    "])),(l()(),o._40(-1,null,["\n"])),(l()(),o._40(-1,null,["\n"])),(l()(),o._16(27,0,null,null,12,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,E.b,E.a)),o._15(28,4374528,null,0,G.a,[x.a,B.a,H.a,o.p,o.K,F.a,I.a,o.D,[2,M.a],[2,O.a]],null,null),(l()(),o._40(-1,1,["\n    "])),(l()(),o._16(30,0,null,1,8,"nav",[],null,null,null,null,null)),(l()(),o._40(-1,null,["\n        "])),(l()(),o._16(32,0,null,null,5,"ion-list",[],null,null,null,null,null)),o._15(33,16384,null,0,Q.a,[x.a,o.p,o.K,B.a,S.l,H.a],null,null),(l()(),o._40(-1,null,["\n            "])),(l()(),o._11(16777216,null,null,1,null,a)),o._15(36,802816,null,0,U.j,[o.W,o.T,o.v],{ngForOf:[0,"ngForOf"]},null),(l()(),o._40(-1,null,["\n        "])),(l()(),o._40(-1,null,["\n    "])),(l()(),o._40(-1,1,["\n"])),(l()(),o._40(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,5,0);l(n,21,0,"close");l(n,36,0,u.chapters)},function(l,n){l(n,3,0,o._29(n,4)._hidden,o._29(n,4)._sbPadding);l(n,9,0,o._41(n,9,0,o._29(n,10).transform("addon.mod_book.toc")));l(n,16,0,o._41(n,16,0,o._29(n,18).transform("core.close")));l(n,20,0,o._29(n,21)._hidden);l(n,27,0,o._29(n,28).statusbarPadding,o._29(n,28)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(1),_=(u(0),u(9),u(4)),e=u(30),i=function(){function l(l,n){this.viewCtrl=n,this.chapters=l.get("chapters")||[],this.selected=l.get("selected")}return l.prototype.loadChapter=function(l){this.viewCtrl.dismiss(l)},l.prototype.closeModal=function(){this.viewCtrl.dismiss()},l}(),c=function(){return function(){}}(),r=u(1365),s=u(1366),d=u(1367),b=u(1368),p=u(1369),f=u(1370),m=u(1371),h=u(1372),v=u(1373),g=u(31),k=u(21),K=u(20),x=u(7),y=u(29),w=u(34),C=u(447),M=u(38),P=u(1374),$=u(207),F=u(33),O=u(22),j=u(676),B=u(15),T=u(19),A=u(13),D=u(1375),J=u(350),L=u(253),N=u(28),R=u(448),W=u(47),q=u(44),z=u(46),E=u(178),G=u(26),H=u(32),I=u(105),Q=u(88),S=u(39),U=u(8),V=u(64),X=o._14({encapsulation:2,styles:[],data:{}}),Y=o._12("page-addon-mod-book-toc",i,function(l){return o._42(0,[(l()(),o._16(0,0,null,null,1,"page-addon-mod-book-toc",[],null,null,null,t,X)),o._15(1,49152,null,0,i,[V.a,M.a],null,null)],null,null)},{},{},[]),Z=u(23),ll=u(346),nl=u(347),ul=u(349),al=u(348),tl=u(446),ol=u(675),_l=u(254);u.d(n,"AddonModBookTocPageModuleNgFactory",function(){return el});var el=o._13(c,[],function(l){return o._25([o._26(512,o.n,o._6,[[8,[r.a,s.a,d.a,b.a,p.a,f.a,m.a,h.a,v.a,Y]],[3,o.n],o.B]),o._26(4608,U.m,U.l,[o.x,[2,U.v]]),o._26(4608,Z.x,Z.x,[]),o._26(4608,Z.d,Z.d,[]),o._26(4608,ll.b,ll.a,[]),o._26(4608,nl.a,nl.b,[]),o._26(4608,ul.b,ul.a,[]),o._26(4608,al.b,al.a,[]),o._26(4608,T.a,T.a,[tl.a,ll.b,nl.a,ul.b,al.b,T.b,T.c]),o._26(512,e.a,e.a,[]),o._26(512,U.b,U.b,[]),o._26(512,Z.v,Z.v,[]),o._26(512,Z.i,Z.i,[]),o._26(512,Z.s,Z.s,[]),o._26(512,ol.a,ol.a,[]),o._26(512,ol.b,ol.b,[]),o._26(512,_.a,_.a,[]),o._26(512,c,c,[]),o._26(256,_l.a,i,[]),o._26(256,T.c,void 0,[]),o._26(256,T.b,void 0,[])])})}});