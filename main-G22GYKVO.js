import{A as E,B as d,C as f,D as b,F as L,d as l,g as x,h as m,j as h,k as p,n as o,o as n,p as c,q as g,r as C,s as i,t as y,u as s,v as u,w as k,x as S,y as T,z as w}from"./chunk-C7T436A3.js";var M=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-home"]],standalone:!0,features:[s],decls:10,vars:0,consts:[[1,"mb-5"],[1,"text-center"],[1,"d-flex","flex-column","align-items-center"],["routerLink","/pals",1,"w-50","btn","btn-outline-secondary"]],template:function(r,P){r&1&&(o(0,"h1",0),i(1,"Welcome, I am your "),o(2,"b"),i(3,"Palworld Companion"),n(),i(4,","),n(),o(5,"h3",1),i(6,"Get started"),n(),o(7,"div",2)(8,"button",3),i(9," Browse pals "),n()())},dependencies:[d],encapsulation:2});let t=e;return t})();var O=[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",component:M},{path:"pals",loadChildren:()=>import("./chunk-E22E7AAS.js").then(t=>t.PalsModule)}];var A={providers:[b(O),x(T)]};function D(t,e){if(t&1&&(o(0,"li",12)(1,"a",13),i(2),n()()),t&2){let R=e.name,a=e.url;m(),p("routerLink",a),m(),y(" ",R," ")}}var H=()=>({name:"Home",url:"/home"}),I=()=>({name:"Pals",url:"/pals"}),F=(()=>{let e=class e{constructor(){this.RouterLinkActive=f}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[s],decls:17,vars:6,consts:[[1,"h-100","d-flex","flex-column"],[1,"text-bg-dark","mb-5"],[1,"container"],[1,"d-flex","align-items-center"],[1,"py-3","px-4","position-relative"],["routerLink","/home",1,"stretched-link","fw-bold","font-monospace","fs-4","text-white","text-decoration-none"],[1,"vr"],[1,"nav","nav-underline","ps-5"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-0","m-0"],[1,"flex-grow-1","overflow-auto"],["menuItem",""],[1,"nav-item"],["routerLinkActive","active",1,"nav-link","text-white",3,"routerLink"]],template:function(r,P){if(r&1&&(o(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),i(6," PWC "),n()(),c(7,"div",6),o(8,"ul",7),g(9,8)(10,8),n()(),c(11,"hr",9),n()(),o(12,"div",10)(13,"div",2),c(14,"router-outlet"),n()()(),h(15,D,3,2,"ng-template",null,11,k)),r&2){let v=C(16);m(9),p("ngTemplateOutlet",v)("ngTemplateOutletContext",u(4,H)),m(),p("ngTemplateOutlet",v)("ngTemplateOutletContext",u(5,I))}},dependencies:[L,S,E,d,f]});let t=e;return t})();w(F,A).catch(t=>console.error(t));
