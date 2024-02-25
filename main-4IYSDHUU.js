import{$,A as D,B as r,C as o,D as m,Da as X,E as j,Ea as Y,F as h,Fa as Z,G as x,Ga as ee,H as g,Ha as te,I as O,J as A,Ja as y,Ka as k,M as N,N as l,O as _,P as B,T as v,U as I,W as E,X as F,Y as R,aa as H,ba as z,da as G,ea as U,fa as W,ha as q,i as u,ia as S,ja as J,k as b,ka as K,l as C,o as T,q as c,r as d,ra as f,t as P,ta as Q,u as w,v as L,y as M,z as V}from"./chunk-FTMQSHBK.js";var ie=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-home"]],standalone:!0,features:[v],decls:10,vars:0,consts:[[1,"mb-5"],[1,"text-center"],[1,"d-flex","flex-column","align-items-center"],["routerLink","/pals",1,"w-50","btn","btn-outline-secondary"]],template:function(i,a){i&1&&(r(0,"h1",0),l(1,"Welcome, I am your "),r(2,"b"),l(3,"Palworld Companion"),o(),l(4,","),o(),r(5,"h3",1),l(6,"Get started"),o(),r(7,"div",2)(8,"button",3),l(9," Browse pals "),o()())},dependencies:[S],encapsulation:2});let t=e;return t})();var oe=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:ie},{path:"pals",loadChildren:()=>import("./chunk-GNLBT56J.js").then(t=>t.PalsModule)}];var re={providers:[K(oe),T(U),Q(),T(f)]};function se(t,e){if(t&1){let p=h();r(0,"button",21),x("click",function(){let a=b(p).$implicit,s=g();return C(s.changeLanguage(a))}),l(1),o()}if(t&2){let p=e.$implicit,n=g();L("active",p===n.languageService.current),c(),_(p)}}function de(t,e){if(t&1){let p=h();r(0,"button",21),x("click",function(){let a=b(p).$implicit,s=g();return C(s.changeVersion(a))}),l(1),o()}if(t&2){let p=e.$implicit,n=g();L("active",n.palworldVersionService.current===p),c(),_(p)}}function ue(t,e){if(t&1){let p=h();r(0,"li",22)(1,"a",23),x("click",function(){b(p);let i=g();return C(i.isMenuCollapsed=!0)}),l(2),o()()}if(t&2){let p=e.name,n=e.url;c(),w("routerLink",n),c(),B(" ",p," ")}}var ge=()=>({name:"Home",url:"/home"}),ve=()=>({name:"Pals",url:"/pals"}),fe=["*"],ae=(()=>{let e=class e{constructor(n,i){this.palworldVersionService=n,this.languageService=i,this.isMenuCollapsed=!0}changeVersion(n){this.palworldVersionService.changeVersion(n),window.location.reload()}changeLanguage(n){this.languageService.changeLanguage(n),window.location.reload()}};e.\u0275fac=function(i){return new(i||e)(d(y),d(k))},e.\u0275cmp=u({type:e,selectors:[["app-layout"]],standalone:!0,features:[v],ngContentSelectors:fe,decls:38,vars:13,consts:[[1,"h-100","d-flex","flex-column"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-lg"],["routerLink","/home",1,"navbar-brand"],["ngSrc","./assets/img/logo_white.png","alt","Logo","width","48","height","48","priority","",1,"object-fit-contain"],["type","button","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],[1,"collapse","navbar-collapse",3,"ngbCollapse"],[1,"navbar-nav","flex-grow-1","justify-content-center"],[1,"flex-grow-1"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"vr","mx-lg-2","text-white"],["ngbDropdown","",1,"nav-item"],["id","palworld-languages-dropdown","ngbDropdownToggle","",1,"btn","btn-link","nav-link"],["ngbDropdownMenu","palworld-languages-dropdown"],[1,"dropdown-header"],["id","palworld-versions-dropdown","ngbDropdownToggle","",1,"btn","btn-link","nav-link"],["ngbDropdownMenu","palworld-versions-dropdown"],[1,"flex-grow-1","overflow-auto","py-5"],[1,"container"],["menuItem",""],["ngbDropdownItem","",3,"click"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link","text-white",3,"routerLink","click"],["ngbDropdownItem","",3,"active"]],template:function(i,a){if(i&1&&(O(),r(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),m(4,"img",4),o(),r(5,"button",5),x("click",function(){return a.isMenuCollapsed=!a.isMenuCollapsed}),m(6,"span",6),o(),r(7,"div",7)(8,"ul",8),m(9,"div",9),j(10,10)(11,10),m(12,"div",9)(13,"div",11),r(14,"div",12)(15,"button",13),l(16),E(17,"async"),o(),r(18,"div",14)(19,"div",15),l(20,"Select version"),o(),V(21,se,2,3,"button",24,M),o()(),m(23,"div",11),r(24,"div",12)(25,"button",16),l(26),E(27,"async"),o(),r(28,"div",17)(29,"div",15),l(30,"Select version"),o(),V(31,de,2,3,"button",24,M),o()()()()()(),r(33,"div",18)(34,"div",19),A(35),o()()(),P(36,ue,3,2,"ng-template",null,20,R)),i&2){let s=N(37);c(7),w("ngbCollapse",a.isMenuCollapsed),c(3),w("ngTemplateOutlet",s)("ngTemplateOutletContext",I(11,ge)),c(),w("ngTemplateOutlet",s)("ngTemplateOutletContext",I(12,ve)),c(5),_(F(17,7,a.languageService.current$)),c(5),D(a.languageService.all),c(5),_(F(27,9,a.palworldVersionService.current$)),c(5),D(a.palworldVersionService.all)}},dependencies:[f,H,z,X,Z,ee,Y,S,J,te,G],encapsulation:2});let t=e;return t})();var le=(()=>{let e=class e{constructor(n,i,a){this.logoUrl=n.getBaseHref()+"assets",i.useDefaultVersion().subscribe()}};e.\u0275fac=function(i){return new(i||e)(d($),d(y),d(k))},e.\u0275cmp=u({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:2,vars:0,template:function(i,a){i&1&&(r(0,"app-layout"),m(1,"router-outlet"),o())},dependencies:[f,q,ae]});let t=e;return t})();W(le,re).catch(t=>console.error(t));