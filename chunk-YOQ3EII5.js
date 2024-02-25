import{$ as I,A as f,Aa as C,B as Se,Ba as Le,C as v,Ca as M,D as V,Da as Oe,E as ce,F as d,Fa as Ge,G as Q,Ga as De,H as N,Ha as ze,I as R,Ia as $e,J as s,Ja as p,K as r,Ka as Ae,L as x,La as qe,M as me,Ma as He,N as E,Na as Ue,O as w,P as m,S as X,T as q,Ta as We,U as pe,Ua as A,V as c,Va as ae,W as B,X as b,Y as Z,Z as Pe,_ as ke,a as ge,aa as H,b as L,ba as U,c as K,ca as de,d as O,da as ue,e as he,ea as fe,f as xe,fa as Te,g as ve,ga as Ee,h as _e,i as G,ia as Ve,j as D,k as be,ka as Ne,l as Y,la as ee,m as se,n as y,o as Ce,oa as Re,p as P,pa as $,q as k,r as z,ra as te,s as ye,sa as Fe,t as we,u as T,ua as Be,va as ie,w as J,wa as je,x as l,xa as S,y as _,ya as ne,z as Ie,za as Me}from"./chunk-XE3EGHTB.js";var oe=(()=>{let i=class i{get elements$(){return this.elementsSubject||(this.elementsSubject=new L(1),he([this.palworldVersionService.current$,this.languageService.current$]).pipe(D(([e,a])=>this.palElementsLocalizationService.getPalElementsTexts(a,e)),O(e=>this.elementsSubject.next(e))).subscribe()),this.elementsSubject}constructor(e,a,o){this.palworldVersionService=e,this.languageService=a,this.palElementsLocalizationService=o}element(e){return this.elements$.pipe(O(a=>a[e]))}};i.\u0275fac=function(a){return new(a||i)(T(A),T(ae),T(je))},i.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var re=(()=>{let i=class i{constructor(e,a,o){this.palworldVersionService=e,this.palsApi=a,this.sanitizer=o,this.cache={}}getIcon(e,a){return Object.keys(this.cache).includes(e)||(this.cache[e]={}),Object.keys(this.cache[e]).includes(a)||(this.cache[e][a]=new L(1),this.palsApi.getIcon(e,a,this.palworldVersionService.current).pipe(O(o=>o.data),ve(o=>(console.error(`Could not load icon of size ${a} for ${e}`,o),K(void 0)))).subscribe(o=>{if(o){let g=URL.createObjectURL(o);this.cache[e][a].next(this.sanitizer.bypassSecurityTrustUrl(g))}})),this.cache[e][a]}};i.\u0275fac=function(a){return new(a||i)(T(A),T(ie),T(Re))},i.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();function dt(t,i){if(t&1&&x(0,"img",2),t&2){let n=m();X("alt","",n.name," icon"),v("src",n.icon,J)}}function ut(t,i){t&1&&(s(0,"div",12),c(1,"?"),r())}function ft(t,i){if(t&1&&(s(0,"span"),c(1),de(2,"lowercase"),r()),t&2){let n=m();l(),B(ue(2,1,n.paldexIndex.suffix))}}function gt(t,i){t&1&&(s(0,"span"),c(1,", "),r())}function ht(t,i){if(t&1&&(s(0,"span",13),c(1),de(2,"lowercase"),r()),t&2){let n=m().$implicit;l(),B(ue(2,1,n.suffix))}}function xt(t,i){if(t&1&&(f(0,gt,2,0,"span"),s(1,"span"),c(2),r(),f(3,ht,3,3,"span",6)),t&2){let n=i.$implicit,e=i.$index;d(0,e>0?0:-1),l(2),B(n.index),l(),d(3,n.suffix?3:-1)}}function vt(t,i){if(t&1&&(s(0,"span",13)(1,"span"),c(2," ("),r(),N(3,xt,4,3,null,null,Q),s(5,"span"),c(6,")"),r()()),t&2){let n=m();l(3),R(n.variantsPaldexIndexes)}}function _t(t,i){if(t&1&&(s(0,"span"),c(1),r()),t&2){let n=m();l(),b("/",n.elementNames[n.elements[1]],"")}}function bt(t,i){t&1&&x(0,"i",14)}var Xe=()=>({"width.px":24,"height.px":24,fill:"#6c757d"});function Ct(t,i){t&1&&x(0,"svg-icon",9),t&2&&v("svgStyle",H(1,Xe))}function yt(t,i){t&1&&x(0,"svg-icon",10),t&2&&v("svgStyle",H(1,Xe))}function wt(t,i){if(t&1&&c(0),t&2){let n=m();b(" ",n.rarityRange[0]," ")}}function It(t,i){if(t&1&&c(0),t&2){let n=m();Z(" ",n.rarityRange[0]," - ",n.rarityRange[1]," ")}}var Ze=(()=>{let i=class i{get tribe(){return this._tribe}set tribe(e){this._tribe=e,this.update(e)}constructor(e,a){this.localizationService=e,this.palIconsService=a,this.elementNames={},this._tribe=null,this.name="",this.paldexIndex=null,this.variantsPaldexIndexes=[],this.elements=null,this.rarityRange=[0,0],this.hasNocturnalVariant=!1,this.hasBossVariant=!1,this.hasGymBossVariant=!1,this.localizationService.elements$.subscribe(o=>this.elementNames=o)}update(e){let a=e.pals[0],o=e.pals.filter(u=>u.identity.paldexIndex>0).map(u=>({index:u.identity.paldexIndex,suffix:u.identity.paldexIndexSuffix})),g=e.pals.map(u=>u.statistics.rarity).filter(u=>u>0);this.name=e.localizedName??e.name,this.paldexIndex=o.find(u=>!u.suffix)??o[0]??{suffix:"?"},this.variantsPaldexIndexes=o.filter(u=>u!=this.paldexIndex),this.elements=[a.element1,a.element2],this.rarityRange=[Math.min(...g),Math.max(...g)],this.hasNocturnalVariant=e.pals.some(u=>u.isNocturnal),this.hasBossVariant=e.pals.some(u=>u.isBoss),this.hasGymBossVariant=e.pals.some(u=>u.isGymBoss),this.palIconsService.getIcon(e.name,ne.Small).subscribe(u=>this.icon=u)}};i.\u0275fac=function(a){return new(a||i)(_(oe),_(re))},i.\u0275cmp=y({type:i,selectors:[["app-pal-nav-list-item"]],inputs:{tribe:"tribe"},standalone:!0,features:[I],decls:27,vars:11,consts:[[1,"d-flex","align-items-center","gap-3"],[1,"border","border-secondary-subtle","border-2","position-relative",2,"width","64px","height","64px"],["width","100%","height","100%",3,"src","alt"],[1,"d-flex","flex-column"],[1,"d-flex","gap-2","align-items-center"],[1,"fs-6"],["class","text-muted"],[1,"fs-4"],["class","bi bi-moon-fill fs-5 text-secondary","ngbTooltip","Nocturnal"],["src","./assets/icons/chess-queen.svg","ngbTooltip","BOSS",3,"svgStyle"],["src","./assets/icons/tower.svg","ngbTooltip","GYM",3,"svgStyle"],["ngbTooltip","Rarity",1,"bi","bi-star-fill","text-secondary"],[1,"w-100","h-100","d-flex","align-items-center","justify-content-center","fs-2","fw-bold"],[1,"text-muted"],["ngbTooltip","Nocturnal",1,"bi","bi-moon-fill","fs-5","text-secondary"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"div",1),f(2,dt,1,2,"img",2)(3,ut,2,0),r(),s(4,"div",3)(5,"div",4)(6,"div")(7,"span",5),c(8,"No."),r(),s(9,"span"),c(10),r(),f(11,ft,3,3,"span")(12,vt,7,0,"span",6),r(),s(13,"div")(14,"span",7),c(15),r()(),s(16,"div")(17,"span"),c(18),r(),f(19,_t,2,1,"span"),r(),f(20,bt,1,0,"i",8)(21,Ct,1,2,"svg-icon",9)(22,yt,1,2,"svg-icon",10),r(),s(23,"div"),x(24,"i",11),f(25,wt,1,1)(26,It,1,2),r()()()),a&2&&(l(2),d(2,o.icon?2:3),l(8),B(o.paldexIndex.index),l(),d(11,o.paldexIndex.suffix?11:-1),l(),d(12,o.variantsPaldexIndexes.length>0?12:-1),l(3),b(" ",o.name,""),l(3),B(o.elementNames[o.elements[0]]),l(),d(19,o.elements[1]?19:-1),l(),d(20,o.hasNocturnalVariant?20:-1),l(),d(21,o.hasBossVariant?21:-1),l(),d(22,o.hasGymBossVariant?22:-1),l(3),d(25,o.rarityRange[0]===o.rarityRange[1]?25:26))},dependencies:[M,Ne,Oe,We],encapsulation:2});let t=i;return t})();function et(t,i){return this.value}function St(t,i){if(t&1){let n=E();s(0,"div",1)(1,"input",2),w("change",function(a){let g=P(n).$implicit,u=m(2),j;return k(u.check(g.value,(j=a.target)==null?null:j.checked))}),r(),s(2,"label",3),c(3),r()()}if(t&2){let n=i.$implicit,e=m(2);l(),q("id","",e.label,"-",n.value,"-check"),v("disabled",e.isDisabled)("checked",e.isChecked(n.value)),l(),V("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),q("for","",e.label,"-",n.value,"-check"),l(),b(" ",n.label," ")}}function Pt(t,i){if(t&1&&(s(0,"label"),c(1),r(),N(2,St,4,13,"div",4,et,!0)),t&2){let n=m();ce("col-",n.labelCols," col-form-label"),V("text-secondary",n.value==null)("text-primary",n.value!=null),l(),b(" ",n.label," "),l(),R(n.values)}}function kt(t,i){if(t&1){let n=E();s(0,"input",2),w("change",function(a){let g=P(n).$implicit,u=m(2),j;return k(u.check(g.value,(j=a.target)==null?null:j.checked))}),r(),s(1,"label",6),c(2),r()}if(t&2){let n=i.$implicit,e=m(2);q("id","",e.label,"-",n.value,"-check"),v("disabled",e.isDisabled)("checked",e.isChecked(n.value)),l(),V("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),q("for","",e.label,"-",n.value,"-check"),l(),b(" ",n.label," ")}}function Tt(t,i){if(t&1&&(s(0,"div",5)(1,"span"),c(2),r(),N(3,kt,3,13,null,null,et,!0),r()),t&2){let n=m();l(),ce("col-",n.labelCols," input-group-text"),V("text-secondary",n.value==null)("text-primary",n.value!=null)("border-primary",n.value!=null),l(),b(" ",n.label," "),l(),R(n.values)}}var tt=(()=>{let i=class i{constructor(){this.label="",this.values=[],this.labelCols=1,this.skin="buttons",this.multiple=!1,this.isDisabled=!1,this.value=void 0,this.onChange=()=>{},this.onTouched=()=>{}}writeValue(e){this.value=e,this.onChange(this.value),this.onTouched(this.value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.isDisabled=e}isChecked(e){return this.multiple?this.value?.includes(e):this.value===e}check(e,a){if(this.multiple){if(a&&(!this.value||!this.value.includes(e)))this.value=[...this.value??[],e];else if(!a&&this.value&&this.value.includes(e)){let o=this.value.filter(g=>g!=e);this.value=o.length==0?void 0:o}}else this.value=a?e:void 0;this.onChange(this.value),this.onTouched(this.value)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=y({type:i,selectors:[["app-radio-row-control"]],inputs:{label:"label",values:"values",labelCols:[se.HasDecoratorInputTransform,"labelCols","labelCols",Ee],skin:"skin",multiple:[se.HasDecoratorInputTransform,"multiple","multiple",Te]},standalone:!0,features:[ke([{provide:Ge,useExisting:we(()=>i),multi:!0}]),Ie,I],decls:3,vars:1,consts:[[1,"row","mb-3"],[1,"col"],["type","checkbox","autocomplete","off",1,"btn-check",3,"id","disabled","checked","change"],[1,"w-100","btn","btn-outline-secondary","text-truncate","text-capitalize",3,"for"],["class","col"],[1,"input-group","justify-content-center"],[1,"btn","text-truncate","text-capitalize",3,"for"]],template:function(a,o){if(a&1&&(s(0,"div",0),f(1,Pt,4,8)(2,Tt,5,10),r()),a&2){let g;l(),d(1,(g=o.skin)==="buttons"?1:g==="input-group"?2:-1)}},styles:["[_nghost-%COMP%]{display:contents}"]});let t=i;return t})();function Et(t,i){if(t&1){let n=E();s(0,"button",8),w("click",function(){P(n);let a=m();return k(a.clear())}),c(1,"Clear filters"),r()}}var at=(()=>{let i=class i{constructor(e,a,o){this.router=a,this.activatedRoute=o,this.filtersChange=new Y,this.elementTypes=[],this.rarities=[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10}],this.ternary=[{label:"yes",value:!0},{label:"no",value:!1}],this.form=new $e({sizes:new p(void 0,{nonNullable:!0}),elementTypes:new p(void 0,{nonNullable:!0}),hasNocturnalVariant:new p(void 0,{nonNullable:!0}),hasEdibleVariant:new p(void 0,{nonNullable:!0}),hasPredatorVariant:new p(void 0,{nonNullable:!0}),hasBossVariant:new p(void 0,{nonNullable:!0}),hasGymBossVariant:new p(void 0,{nonNullable:!0}),rarity:new p(void 0,{nonNullable:!0}),minKindling:new p(void 0,{nonNullable:!0}),maxKindling:new p(void 0,{nonNullable:!0}),minWatering:new p(void 0,{nonNullable:!0}),maxWatering:new p(void 0,{nonNullable:!0}),minPlanting:new p(void 0,{nonNullable:!0}),maxPlanting:new p(void 0,{nonNullable:!0}),minGeneratingElectricity:new p(void 0,{nonNullable:!0}),maxGeneratingElectricity:new p(void 0,{nonNullable:!0}),minHandwork:new p(void 0,{nonNullable:!0}),maxHandwork:new p(void 0,{nonNullable:!0}),minGathering:new p(void 0,{nonNullable:!0}),maxGathering:new p(void 0,{nonNullable:!0}),minLumbering:new p(void 0,{nonNullable:!0}),maxLumbering:new p(void 0,{nonNullable:!0}),minMining:new p(void 0,{nonNullable:!0}),maxMining:new p(void 0,{nonNullable:!0}),minOilExtraction:new p(void 0,{nonNullable:!0}),maxOilExtraction:new p(void 0,{nonNullable:!0}),minMedicineProduction:new p(void 0,{nonNullable:!0}),maxMedicineProduction:new p(void 0,{nonNullable:!0}),minCooling:new p(void 0,{nonNullable:!0}),maxCooling:new p(void 0,{nonNullable:!0}),minTransporting:new p(void 0,{nonNullable:!0}),maxTransporting:new p(void 0,{nonNullable:!0}),minFarming:new p(void 0,{nonNullable:!0}),maxFarming:new p(void 0,{nonNullable:!0})}),e.elements$.subscribe(g=>{this.elementTypes=Object.entries(g).filter(([u,j])=>u!==S.Unknown).map(([u,j])=>({label:j,value:u}))})}ngOnInit(){this.form.valueChanges.subscribe(e=>{this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:e,queryParamsHandling:"merge"}),this.filtersChange.emit(new Me({sizes:e.sizes,elements:e.elementTypes,hasNocturnalVariant:e.hasNocturnalVariant,hasPredatorVariant:e.hasPredatorVariant,hasEdibleVariant:e.hasEdibleVariant,hasBossVariant:e.hasBossVariant,hasGymBossVariant:e.hasGymBossVariant,rarity:new C({fromInclusive:e.rarity,toInclusive:e.rarity}),workSuitability:new Le({kindling:new C({fromInclusive:e.minKindling,toInclusive:e.maxKindling}),watering:new C({fromInclusive:e.minWatering,toInclusive:e.maxWatering}),planting:new C({fromInclusive:e.minPlanting,toInclusive:e.maxPlanting}),generatingElectricity:new C({fromInclusive:e.minGeneratingElectricity,toInclusive:e.maxGeneratingElectricity}),handwork:new C({fromInclusive:e.minHandwork,toInclusive:e.maxHandwork}),gathering:new C({fromInclusive:e.minGathering,toInclusive:e.maxGathering}),lumbering:new C({fromInclusive:e.minLumbering,toInclusive:e.maxLumbering}),mining:new C({fromInclusive:e.minMining,toInclusive:e.maxMining}),oilExtraction:new C({fromInclusive:e.minOilExtraction,toInclusive:e.maxOilExtraction}),medicineProduction:new C({fromInclusive:e.minMedicineProduction,toInclusive:e.maxMedicineProduction}),cooling:new C({fromInclusive:e.minCooling,toInclusive:e.maxCooling}),transporting:new C({fromInclusive:e.minTransporting,toInclusive:e.maxTransporting}),farming:new C({fromInclusive:e.minFarming,toInclusive:e.maxFarming})})}))}),this.activatedRoute.queryParams.pipe(G()).subscribe(e=>{let a=[{key:"sizes",formatter:it},{key:"elementTypes",formatter:it},{key:"rarity",formatter:h},{key:"hasNocturnalVariant",formatter:W},{key:"hasEdibleVariant",formatter:W},{key:"hasPredatorVariant",formatter:W},{key:"hasBossVariant",formatter:W},{key:"hasGymBossVariant",formatter:W},{key:"minKindling",formatter:h},{key:"maxKindling",formatter:h},{key:"minWatering",formatter:h},{key:"maxWatering",formatter:h},{key:"minPlanting",formatter:h},{key:"maxPlanting",formatter:h},{key:"minGeneratingElectricity",formatter:h},{key:"maxGeneratingElectricity",formatter:h},{key:"minHandwork",formatter:h},{key:"maxHandwork",formatter:h},{key:"minGathering",formatter:h},{key:"maxGathering",formatter:h},{key:"minLumbering",formatter:h},{key:"maxLumbering",formatter:h},{key:"minMining",formatter:h},{key:"maxMining",formatter:h},{key:"minOilExtraction",formatter:h},{key:"maxOilExtraction",formatter:h},{key:"minMedicineProduction",formatter:h},{key:"maxMedicineProduction",formatter:h},{key:"minCooling",formatter:h},{key:"maxCooling",formatter:h},{key:"minTransporting",formatter:h},{key:"maxTransporting",formatter:h},{key:"minFarming",formatter:h},{key:"maxFarming",formatter:h}];for(let o of a){let g=e[o.key];if(g){let u=o.formatter(g);this.form.get(o.key)?.patchValue(u),this.form.markAsDirty()}}})}clear(){this.form.reset(),this.form.markAsPristine()}};i.\u0275fac=function(a){return new(a||i)(_(oe),_(te),_($))},i.\u0275cmp=y({type:i,selectors:[["app-browse-pals-filters"]],outputs:{filtersChange:"filtersChange"},standalone:!0,features:[I],decls:9,vars:11,consts:[[3,"formGroup"],["label","Elements","multiple","",3,"formControl","values"],["label","Rarity",3,"formControl","values"],[1,"row"],[1,"col"],["skin","input-group","label","Nocturnal",3,"formControl","labelCols","values"],["skin","input-group","label","GYM","labelCols","4",3,"formControl","values"],["class","btn btn-outline-secondary"],[1,"btn","btn-outline-secondary",3,"click"]],template:function(a,o){a&1&&(s(0,"form",0),x(1,"app-radio-row-control",1)(2,"app-radio-row-control",2),s(3,"div",3)(4,"div",4),x(5,"app-radio-row-control",5),r(),s(6,"div",4),x(7,"app-radio-row-control",6),r()(),f(8,Et,2,0,"button",7),r()),a&2&&(v("formGroup",o.form),l(),v("formControl",o.form.controls.elementTypes)("values",o.elementTypes),l(),v("formControl",o.form.controls.rarity)("values",o.rarities),l(3),v("formControl",o.form.controls.hasNocturnalVariant)("labelCols",4)("values",o.ternary),l(2),v("formControl",o.form.controls.hasGymBossVariant)("values",o.ternary),l(),d(8,o.form.dirty?8:-1))},dependencies:[M,Ue,Ae,De,ze,qe,He,tt],encapsulation:2});let t=i;return t})(),W=t=>Array.isArray(t)?!!t[0]:!!t,h=t=>Array.isArray(t)?Number(t[0]):Number(t),it=t=>Array.isArray(t)?t:[t];function Vt(t,i){if(t&1){let n=E();s(0,"a",5),w("click",function(){let o=P(n).$index,g=m(2);return k(g.goToPage(o+1))}),c(1),r()}if(t&2){let n=i.$index,e=m(2);V("active",n+1==e.page),Se("aria-label","Page "+(n+1)),l(),b(" ",n+1," ")}}var Nt=()=>[];function Rt(t,i){if(t&1&&N(0,Vt,2,4,"a",6,Q),t&2){let n=m();R(H(0,Nt).constructor(n.total))}}function Ft(t,i){if(t&1&&(s(0,"li",7),c(1),r()),t&2){let n=m();l(),Z("",n.page,"/",n.total,"")}}var ot=(()=>{let i=class i{get page(){return this._page}set page(e){this._page=e,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:e},queryParamsHandling:"merge"})}constructor(e,a){this.router=e,this.activatedRoute=a,this._page=1,this.total=1,this.pageChange=new Y}ngOnInit(){this.activatedRoute.queryParams.pipe(G()).subscribe(e=>{let a=e.page;a&&this.goToPage(a)})}nextPage(){this.goToPage(this._page+1)}goToPage(e){this.pageChange.emit(e)}previousPage(){this.goToPage(this._page-1)}};i.\u0275fac=function(a){return new(a||i)(_(te),_($))},i.\u0275cmp=y({type:i,selectors:[["app-browse-pals-pagination"]],inputs:{page:"page",total:"total"},outputs:{pageChange:"pageChange"},standalone:!0,features:[I],decls:12,vars:5,consts:[[1,"pagination","align-items-center","justify-content-center"],[1,"page-item"],["role","button","aria-label","Previous",1,"page-link","user-select-none",3,"click"],["aria-hidden","true"],["role","button","aria-label","Next",1,"page-link","user-select-none",3,"click"],["role","button",1,"page-link",3,"click"],["class","page-link","role","button",3,"active"],[1,"page-link"]],template:function(a,o){a&1&&(s(0,"nav")(1,"ul",0)(2,"li",1)(3,"a",2),w("click",function(){return o.previousPage()}),s(4,"span",3),c(5,"\xAB"),r()()(),f(6,Rt,2,1)(7,Ft,2,2),s(8,"li",1)(9,"a",4),w("click",function(){return o.nextPage()}),s(10,"span",3),c(11,"\xBB"),r()()()()()),a&2&&(l(2),V("disabled",o.page<=1),l(4),d(6,o.total<=20?6:7),l(2),V("disabled",o.page>=o.total))},encapsulation:2});let t=i;return t})();var le=(()=>{let i=class i{constructor(e,a,o){this.languageService=e,this.palworldVersionService=a,this.palsApi=o,this.cache={}}searchTribes(e){return this.searchTribesInternal(e.filters,e.pagination).pipe(be(a=>{for(let o of a.results)Object.keys(this.cache).includes(o.name)||(this.cache[o.name]=new L(1)),this.cache[o.name].next(o)}))}getTribe(e){return Object.keys(this.cache).includes(e)||(this.cache[e]=new L(1),this.palsApi.getTribe(e,this.languageService.current,this.palworldVersionService.current).subscribe(a=>this.cache[e].next(a))),this.cache[e]}searchTribesInternal(e,a){return this.palsApi.searchTribes(e?.sizes,e?.elements,e?.hasNocturnalVariant,e?.hasEdibleVariant,e?.hasPredatorVariant,e?.hasBossVariant,e?.hasGymBossVariant,e?.rarity?.fromInclusive,e?.rarity?.toInclusive,e?.workSuitability?.kindling?.fromInclusive,e?.workSuitability?.kindling?.toInclusive,e?.workSuitability?.watering?.fromInclusive,e?.workSuitability?.watering?.toInclusive,e?.workSuitability?.planting?.fromInclusive,e?.workSuitability?.planting?.toInclusive,e?.workSuitability?.generatingElectricity?.fromInclusive,e?.workSuitability?.generatingElectricity?.toInclusive,e?.workSuitability?.handwork?.fromInclusive,e?.workSuitability?.handwork?.toInclusive,e?.workSuitability?.gathering?.fromInclusive,e?.workSuitability?.gathering?.toInclusive,e?.workSuitability?.lumbering?.fromInclusive,e?.workSuitability?.lumbering?.toInclusive,e?.workSuitability?.mining?.fromInclusive,e?.workSuitability?.mining?.toInclusive,e?.workSuitability?.oilExtraction?.fromInclusive,e?.workSuitability?.oilExtraction?.toInclusive,e?.workSuitability?.medicineProduction?.fromInclusive,e?.workSuitability?.medicineProduction?.toInclusive,e?.workSuitability?.cooling?.fromInclusive,e?.workSuitability?.cooling?.toInclusive,e?.workSuitability?.transporting?.fromInclusive,e?.workSuitability?.transporting?.toInclusive,e?.workSuitability?.farming?.fromInclusive,e?.workSuitability?.farming?.toInclusive,a.pageNumber,a.pageSize,this.languageService.current,this.palworldVersionService.current)}};i.\u0275fac=function(a){return new(a||i)(T(ae),T(A),T(ie))},i.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var Bt=(t,i)=>i.name;function jt(t,i){if(t&1&&c(0),t&2){let n=m(3);Pe(" ",n.currentPageRange[0],"..",n.currentPageRange[1]," / ",n.result.pagination.totalCount," results ")}}function Mt(t,i){if(t&1&&c(0),t&2){let n=m(3);b(" ",n.result.results.length," results ")}}function Lt(t,i){if(t&1&&f(0,jt,1,3)(1,Mt,1,1),t&2){let n=m(2);d(0,n.result.results.length<n.result.pagination.totalCount?0:1)}}var Ot=t=>["..","view",t];function Gt(t,i){if(t&1&&(s(0,"a",6),x(1,"app-pal-nav-list-item",7),r()),t&2){let n=i.$implicit;v("routerLink",U(2,Ot,n.name)),l(),v("tribe",n)}}function Dt(t,i){if(t&1){let n=E();s(0,"app-browse-pals-pagination",8),w("pageChange",function(a){P(n);let o=m(2);return k(o.goToPage(a))}),r()}if(t&2){let n=m(2);v("page",n.result.pagination.pageNumber)("total",n.result.pagination.totalPages)}}function zt(t,i){if(t&1){let n=E();s(0,"div",0)(1,"h5"),c(2,"Filters"),r(),s(3,"div",1)(4,"app-browse-pals-filters",2),w("filtersChange",function(a){P(n);let o=m();return o.onFiltersChange(a),k(o.refresh())}),r()()(),s(5,"div",3),f(6,Lt,2,1),r(),s(7,"div",4),N(8,Gt,2,4,"a",9,Bt),r(),f(10,Dt,1,2,"app-browse-pals-pagination",5)}if(t&2){let n=m();l(6),d(6,n.result?6:-1),l(2),R(n.result.results),l(2),d(10,n.result.pagination.totalPages>1?10:-1)}}var lt=(()=>{let i=class i{constructor(e){this.palsService=e,this.currentPageRange=[0,0],this.searchRequest={pagination:{pageNumber:1,pageSize:10}},this.searchRequestSubject=new ge}ngOnInit(){this.searchRequestSubject.pipe(_e(250),D(e=>this.palsService.searchTribes(e))).subscribe(e=>{this.result=e,this.currentPageRange=[(e.pagination.pageNumber-1)*e.pagination.pageSize+1,Math.min(e.pagination.pageNumber*e.pagination.pageSize,e.pagination.totalCount)]}),this.refresh()}refresh(){this.searchRequestSubject.next(this.searchRequest)}goToPage(e){this.searchRequest.pagination.pageNumber==e||this.result?.pagination&&(e<1||e>this.result.pagination.totalPages)||(this.searchRequest.pagination.pageNumber=e,this.refresh())}onFiltersChange(e){this.searchRequest.filters=e,this.searchRequest.pagination.pageNumber=1}};i.\u0275fac=function(a){return new(a||i)(_(le))},i.\u0275cmp=y({type:i,selectors:[["app-browse-pals-page"]],standalone:!0,features:[I],decls:3,vars:1,consts:[[1,"mb-4"],[1,"ps-2"],[3,"filtersChange"],[1,"mb-2"],[1,"list-group","list-group-flush"],[3,"page","total"],[1,"list-group-item","list-group-item-action",3,"routerLink"],[3,"tribe"],[3,"page","total","pageChange"],["class","list-group-item list-group-item-action",3,"routerLink"]],template:function(a,o){a&1&&(s(0,"h1"),c(1,"Pals"),r(),f(2,zt,11,2)),a&2&&(l(2),d(2,o.result?2:-1))},dependencies:[M,Fe,Ze,at,ot],encapsulation:2});let t=i;return t})();function $t(t,i){if(t&1&&x(0,"img",0),t&2){let n=m();X("alt","",n.element," icon"),v("ngSrc",n.iconSrc)}}function At(t,i){t&1&&(s(0,"span",1),c(1,"?"),r())}var st=(()=>{let i=class i{constructor(){this.element=null}get iconSrc(){switch(this.element){case S.Unknown:return;case S.Dark:return"./assets/icons/element_dark.png";case S.Dragon:return"./assets/icons/element_dragon.png";case S.Earth:return"./assets/icons/element_earth.png";case S.Electricity:return"./assets/icons/element_electricity.png";case S.Fire:return"./assets/icons/element_fire.png";case S.Ice:return"./assets/icons/element_ice.png";case S.Leaf:return"./assets/icons/element_leaf.png";case S.Normal:return"./assets/icons/element_normal.png";case S.Water:return"./assets/icons/element_water.png"}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=y({type:i,selectors:[["app-pal-element-icon"]],inputs:{element:"element"},standalone:!0,features:[I],decls:2,vars:1,consts:[["width","24","height","24",3,"ngSrc","alt"],[1,"fw-semibold"]],template:function(a,o){a&1&&f(0,$t,1,2,"img",0)(1,At,2,0),a&2&&d(0,o.iconSrc?0:1)},dependencies:[ee],styles:["[_nghost-%COMP%]{display:contents}"]});let t=i;return t})();var qt=(t,i)=>i.identity.name;function Ht(t,i){if(t&1&&(s(0,"span"),c(1),r()),t&2){let n=m(2);l(),B(n.paldexSuffix)}}function Ut(t,i){if(t&1&&x(0,"app-pal-element-icon",18),t&2){let n=m(3);v("element",n.elements[1])}}function Wt(t,i){if(t&1&&(s(0,"div",17),x(1,"app-pal-element-icon",18),f(2,Ut,1,1,"app-pal-element-icon",18),r()),t&2){let n=m(2);l(),v("element",n.elements[0]),l(),d(2,n.elements[1]?2:-1)}}var ct=t=>({pal:t});function Kt(t,i){if(t&1){let n=E();s(0,"li",19)(1,"a",20),w("click",function(){let o=P(n).$implicit,g=m(2);return k(g.selectVariant(o))}),me(2,16),r()()}if(t&2){let n=i.$implicit,e=m(2),a=pe(3);l(),V("active",n.identity.name==(e.selectedVariant==null||e.selectedVariant.identity==null?null:e.selectedVariant.identity.name)),l(),v("ngTemplateOutlet",a)("ngTemplateOutletContext",U(4,ct,n))}}function Yt(t,i){if(t&1&&(s(0,"div",3)(1,"div",4),x(2,"img",5)(3,"hr",6),s(4,"div",7)(5,"div",8)(6,"span"),c(7),r(),f(8,Ht,2,1,"span"),r(),x(9,"div",9),s(10,"div",10),c(11),r(),x(12,"div",11),f(13,Wt,3,2,"div",12),r()(),s(14,"div",13)(15,"div",14),N(16,Kt,3,6,"li",21,qt),r(),s(18,"div",15),me(19,16),r()()()),t&2){let n=m(),e=pe(5);l(2),v("src",n.icon,J),l(5),B(n.paldexIndex),l(),d(8,n.paldexSuffix?8:-1),l(3),b(" ",n.paldexName," "),l(2),d(13,n.elements?13:-1),l(3),R(n.tribe.pals),l(3),v("ngTemplateOutlet",e)("ngTemplateOutletContext",U(7,ct,n.selectedVariant))}}function Jt(t,i){t&1&&(s(0,"div",22)(1,"div",23)(2,"span",24),c(3,"Loading..."),r()()())}function Qt(t,i){t&1&&x(0,"img",26)}function Xt(t,i){t&1&&x(0,"img",27)}function Zt(t,i){t&1&&x(0,"img",28)}function ei(t,i){if(t&1&&(s(0,"div",25),f(1,Qt,1,0,"img",26)(2,Xt,1,0)(3,Zt,1,0),r()),t&2){let n=i.pal;l(),d(1,n.isGymBoss?1:n.isBoss?2:3)}}function ti(t,i){t&1&&(x(0,"img",32),s(1,"span",33),c(2,"GYM BOSS"),r())}function ii(t,i){t&1&&(s(0,"div",34),x(1,"img",35),r(),s(2,"span",33),c(3,"BOSS"),r())}function ni(t,i){t&1&&(s(0,"div",34),x(1,"img",36),r())}function ai(t,i){if(t&1&&(s(0,"div",29)(1,"div",30)(2,"div",11),c(3),r(),s(4,"div",31),f(5,ti,3,0)(6,ii,4,0)(7,ni,2,0),r()()()),t&2){let n=i.pal;l(3),b(" ",n.identity.localizedDescription," "),l(2),d(5,n.isGymBoss?5:n.isBoss?6:7)}}var mt=(()=>{let i=class i{constructor(e,a,o){this.activatedRoute=e,this.palsService=a,this.palIconsService=o}ngOnInit(){this.activatedRoute.paramMap.pipe(D(e=>{let a=e.get("pal");return a?xe([this.palsService.getTribe(a).pipe(G()),this.palIconsService.getIcon(a,ne.Medium).pipe(G())]):K([void 0,void 0])}),O(([e,a])=>{this.load(e,a)})).subscribe()}selectVariant(e){this.selectedVariant=e}load(e,a){this.tribe=e,this.icon=a,this.selectedVariant=this.tribe?.pals[0];let o=e?.pals.filter(g=>!g.isBoss&&!g.isGymBoss)[0];this.paldexName=o?.identity.localizedName??o?.identity.name,this.paldexIndex=o?.identity.paldexIndex,this.paldexSuffix=o?.identity.paldexIndexSuffix,this.elements=o?[o.element1,o.element2]:void 0}};i.\u0275fac=function(a){return new(a||i)(_($),_(le),_(re))},i.\u0275cmp=y({type:i,selectors:[["app-view-pal-page"]],standalone:!0,features:[I],decls:6,vars:1,consts:[["class","w-100 d-flex align-items-stretch gap-2"],["variantTab",""],["variantIdentity",""],[1,"w-100","d-flex","align-items-stretch","gap-2"],[1,"border","rounded-2","d-flex","flex-column"],["alt","Pal icon",3,"src"],[1,"m-0","p-0"],[1,"d-flex","fs-3"],[1,"px-2","d-flex","align-items-center","justify-content-center"],[1,"vr"],[1,"px-2","d-flex","align-items-center","text-truncate"],[1,"flex-grow-1"],["class","px-2 d-flex align-items-center"],[1,"flex-grow-1","d-flex","flex-column"],[1,"nav","nav-tabs"],[1,"p-4","flex-grow-1","border","rounded-2","border-top-0","rounded-top-0"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"px-2","d-flex","align-items-center"],[3,"element"],[1,"nav-item"],["role","button",1,"nav-link",3,"click"],["class","nav-item"],[1,"w-100","h-100","d-flex","align-items-center","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],[1,"position-relative",2,"width","24px","height","24px"],["ngSrc","./assets/icons/pal_tower.png","alt","Tower boss icon","width","24","height","24"],["ngSrc","./assets/icons/pal_boss.png","alt","Boss icon","width","30","height","24"],["ngSrc","./assets/icons/pal.png","alt","Regular pal icon","width","21","height","24"],[1,"h-100","d-flex","flex-column","gap-2"],[1,"d-flex","gap-2"],[1,"d-flex","gap-2","flex-column","align-items-center","justify-content-center",2,"width","64px"],["ngSrc","./assets/icons/pal_tower.png","alt","Tower boss icon","width","64","height","64"],[1,"badge","text-bg-secondary"],[1,"d-flex","align-items-center","justify-content-center",2,"width","64px","height","64px"],["ngSrc","./assets/icons/pal_boss.png","alt","Boss icon","width","40","height","32"],["ngSrc","./assets/icons/pal.png","alt","Regular pal icon","width","56","height","64"]],template:function(a,o){a&1&&f(0,Yt,20,9,"div",0)(1,Jt,4,0)(2,ei,4,1,"ng-template",null,1,fe)(4,ai,8,2,"ng-template",null,2,fe),a&2&&d(0,o.tribe?0:1)},dependencies:[Ve,st,ee],encapsulation:2});let t=i;return t})();var oi=[{path:"",pathMatch:"full",redirectTo:"browse"},{path:"browse",component:lt},{path:"view/:pal",component:mt}],an=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=Ce({type:i}),i.\u0275inj=ye({providers:[Be(oi)],imports:[M]});let t=i;return t})();export{an as PalsModule};
