import{$a as A,A as l,Aa as u,Ea as S,L as v,La as w,Ma as k,Oa as T,Pa as E,Q as m,Qa as L,R as g,Sa as b,Ta as d,Ua as O,Va as M,Z as h,_ as p,bb as F,ga as n,ha as o,ia as c,ja as x,sa as C,ta as r,va as y,za as s}from"./chunk-M6XNQP7R.js";var I=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=l({type:e,selectors:[["app-home"]],standalone:!0,features:[s],decls:10,vars:0,consts:[[1,"mb-5"],[1,"text-center"],[1,"d-flex","flex-column","align-items-center"],["routerLink","/pals",1,"w-50","btn","btn-outline-secondary"]],template:function(i,H){i&1&&(n(0,"h1",0),r(1,"Welcome, I am your "),n(2,"b"),r(3,"Palworld Companion"),o(),r(4,","),o(),n(5,"h3",1),r(6,"Get started"),o(),n(7,"div",2)(8,"button",3),r(9," Browse pals "),o()())},dependencies:[d],encapsulation:2});let t=e;return t})();var R=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:I},{path:"pals",loadChildren:()=>import("./chunk-KEGTKXD7.js").then(t=>t.PalsModule)}];var _={providers:[M(R),v(E),F()]};function B(t,e){if(t&1&&(n(0,"li",12)(1,"a",13),r(2),o()()),t&2){let D=e.name,a=e.url;m(),p("routerLink",a),m(),y(" ",D," ")}}var N=()=>({name:"Home",url:"/home"}),z=()=>({name:"Pals",url:"/pals"}),P=(()=>{let e=class e{constructor(a){this.logoUrl=a.getBaseHref()+"assets"}};e.\u0275fac=function(i){return new(i||e)(g(w))},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[s],decls:16,vars:6,consts:[[1,"h-100","d-flex","flex-column"],[1,"text-bg-dark"],[1,"container"],[1,"d-flex","align-items-center"],[1,"px-4","position-relative"],["ngSrc","./assets/img/logo_white.png","alt","Logo","width","48","height","48","priority","",1,"object-fit-contain"],["routerLink","/home",1,"stretched-link","fw-bold","font-monospace","fs-4","text-white","text-decoration-none"],[1,"nav","nav-underline","px-5"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-0","m-0"],[1,"flex-grow-1","overflow-auto","py-5"],["menuItem",""],[1,"nav-item"],["routerLinkActive","active",1,"nav-link","text-white",3,"routerLink"]],template:function(i,H){if(i&1&&(n(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4),c(5,"img",5)(6,"a",6),o(),n(7,"ul",7),x(8,8)(9,8),o()(),c(10,"hr",9),o()(),n(11,"div",10)(12,"div",2),c(13,"router-outlet"),o()()(),h(14,B,3,2,"ng-template",null,11,S)),i&2){let f=C(15);m(8),p("ngTemplateOutlet",f)("ngTemplateOutletContext",u(4,N)),m(),p("ngTemplateOutlet",f)("ngTemplateOutletContext",u(5,z))}},dependencies:[A,k,b,d,O,T]});let t=e;return t})();L(P,_).catch(t=>console.error(t));
