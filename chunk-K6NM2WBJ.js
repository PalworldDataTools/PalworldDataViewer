import{$ as S,A as f,Aa as w,B as Ie,Ba as Le,C as h,Ca as M,D as E,Da as Oe,E as de,F as u,Fa as Ge,G as Z,Ga as $e,H as V,Ha as De,I as N,Ia as ze,J as s,Ja as p,K as l,Ka as Ae,L as x,La as qe,M as ee,Ma as He,N as R,Na as We,O as y,P as m,S as z,T as W,Ta as Ue,U as te,Ua as H,V as c,Va as le,W as B,X as b,Y as A,Z as ke,_ as Pe,a as fe,aa as U,b as L,ba as K,c as J,ca as ue,d as O,da as ge,e as he,ea as ie,f as xe,fa as Te,g as _e,ga as Ee,h as ve,i as G,ia as Ve,j as $,k as be,ka as Ne,l as Q,la as ne,m as pe,n as C,o as we,oa as Re,p as k,pa as q,q as P,r as D,ra as ae,s as Ce,sa as Fe,t as ye,u as T,ua as Be,va as oe,w as X,wa as je,x as r,xa as I,y as v,ya as re,z as Se,za as Me}from"./chunk-XE3EGHTB.js";var se=(()=>{let i=class i{get elements$(){return this.elementsSubject||(this.elementsSubject=new L(1),he([this.palworldVersionService.current$,this.languageService.current$]).pipe($(([e,a])=>this.palElementsLocalizationService.getPalElementsTexts(a,e)),O(e=>this.elementsSubject.next(e))).subscribe()),this.elementsSubject}constructor(e,a,o){this.palworldVersionService=e,this.languageService=a,this.palElementsLocalizationService=o}element(e){return this.elements$.pipe(O(a=>a[e]))}};i.\u0275fac=function(a){return new(a||i)(T(H),T(le),T(je))},i.\u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var ce=(()=>{let i=class i{constructor(e,a,o){this.palworldVersionService=e,this.palsApi=a,this.sanitizer=o,this.cache={}}getIcon(e,a){return Object.keys(this.cache).includes(e)||(this.cache[e]={}),Object.keys(this.cache[e]).includes(a)||(this.cache[e][a]=new L(1),this.palsApi.getIcon(e,a,this.palworldVersionService.current).pipe(O(o=>o.data),_e(o=>(console.error(`Could not load icon of size ${a} for ${e}`,o),J(void 0)))).subscribe(o=>{if(o){let g=URL.createObjectURL(o);this.cache[e][a].next(this.sanitizer.bypassSecurityTrustUrl(g))}})),this.cache[e][a]}};i.\u0275fac=function(a){return new(a||i)(T(H),T(oe),T(Re))},i.\u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();function dt(t,i){if(t&1&&x(0,"img",2),t&2){let n=m();z("alt","",n.name," icon"),h("src",n.icon,X)}}function ut(t,i){t&1&&(s(0,"div",12),c(1,"?"),l())}function gt(t,i){if(t&1&&(s(0,"span"),c(1),ue(2,"lowercase"),l()),t&2){let n=m();r(),B(ge(2,1,n.paldexIndex.suffix))}}function ft(t,i){t&1&&(s(0,"span"),c(1,", "),l())}function ht(t,i){if(t&1&&(s(0,"span",13),c(1),ue(2,"lowercase"),l()),t&2){let n=m().$implicit;r(),B(ge(2,1,n.suffix))}}function xt(t,i){if(t&1&&(f(0,ft,2,0,"span"),s(1,"span"),c(2),l(),f(3,ht,3,3,"span",6)),t&2){let n=i.$implicit,e=i.$index;u(0,e>0?0:-1),r(2),B(n.index),r(),u(3,n.suffix?3:-1)}}function _t(t,i){if(t&1&&(s(0,"span",13)(1,"span"),c(2," ("),l(),V(3,xt,4,3,null,null,Z),s(5,"span"),c(6,")"),l()()),t&2){let n=m();r(3),N(n.variantsPaldexIndexes)}}function vt(t,i){if(t&1&&(s(0,"span"),c(1),l()),t&2){let n=m();r(),b("/",n.elementNames[n.elements[1]],"")}}function bt(t,i){t&1&&x(0,"i",14)}var Xe=()=>({"width.px":24,"height.px":24,fill:"#6c757d"});function wt(t,i){t&1&&x(0,"svg-icon",9),t&2&&h("svgStyle",U(1,Xe))}function Ct(t,i){t&1&&x(0,"svg-icon",10),t&2&&h("svgStyle",U(1,Xe))}function yt(t,i){if(t&1&&c(0),t&2){let n=m();b(" ",n.rarityRange[0]," ")}}function St(t,i){if(t&1&&c(0),t&2){let n=m();A(" ",n.rarityRange[0]," - ",n.rarityRange[1]," ")}}var Ze=(()=>{let i=class i{get tribe(){return this._tribe}set tribe(e){this._tribe=e,this.update(e)}constructor(e,a){this.localizationService=e,this.palIconsService=a,this.elementNames={},this._tribe=null,this.name="",this.paldexIndex=null,this.variantsPaldexIndexes=[],this.elements=null,this.rarityRange=[0,0],this.hasNocturnalVariant=!1,this.hasBossVariant=!1,this.hasGymBossVariant=!1,this.localizationService.elements$.subscribe(o=>this.elementNames=o)}update(e){let a=e.pals[0],o=e.pals.filter(d=>d.identity.paldexIndex>0).map(d=>({index:d.identity.paldexIndex,suffix:d.identity.paldexIndexSuffix})),g=e.pals.map(d=>d.statistics.rarity).filter(d=>d>0);this.name=e.localizedName??e.name,this.paldexIndex=o.find(d=>!d.suffix)??o[0]??{suffix:"?"},this.variantsPaldexIndexes=o.filter(d=>d!=this.paldexIndex),this.elements=[a.element1,a.element2],this.rarityRange=[Math.min(...g),Math.max(...g)],this.hasNocturnalVariant=e.pals.some(d=>d.isNocturnal),this.hasBossVariant=e.pals.some(d=>d.isBoss),this.hasGymBossVariant=e.pals.some(d=>d.isGymBoss),this.palIconsService.getIcon(e.name,re.Small).subscribe(d=>this.icon=d)}};i.\u0275fac=function(a){return new(a||i)(v(se),v(ce))},i.\u0275cmp=C({type:i,selectors:[["app-pal-nav-list-item"]],inputs:{tribe:"tribe"},standalone:!0,features:[S],decls:27,vars:11,consts:[[1,"d-flex","align-items-center","gap-3"],[1,"border","border-secondary-subtle","border-2","position-relative",2,"width","64px","height","64px"],["width","100%","height","100%",3,"src","alt"],[1,"d-flex","flex-column"],[1,"d-flex","gap-2","align-items-center"],[1,"fs-6"],["class","text-muted"],[1,"fs-4"],["class","bi bi-moon-fill fs-5 text-secondary","ngbTooltip","Nocturnal"],["src","./assets/icons/chess-queen.svg","ngbTooltip","BOSS",3,"svgStyle"],["src","./assets/icons/tower.svg","ngbTooltip","GYM",3,"svgStyle"],["ngbTooltip","Rarity",1,"bi","bi-star-fill","text-secondary"],[1,"w-100","h-100","d-flex","align-items-center","justify-content-center","fs-2","fw-bold"],[1,"text-muted"],["ngbTooltip","Nocturnal",1,"bi","bi-moon-fill","fs-5","text-secondary"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"div",1),f(2,dt,1,2,"img",2)(3,ut,2,0),l(),s(4,"div",3)(5,"div",4)(6,"div")(7,"span",5),c(8,"No."),l(),s(9,"span"),c(10),l(),f(11,gt,3,3,"span")(12,_t,7,0,"span",6),l(),s(13,"div")(14,"span",7),c(15),l()(),s(16,"div")(17,"span"),c(18),l(),f(19,vt,2,1,"span"),l(),f(20,bt,1,0,"i",8)(21,wt,1,2,"svg-icon",9)(22,Ct,1,2,"svg-icon",10),l(),s(23,"div"),x(24,"i",11),f(25,yt,1,1)(26,St,1,2),l()()()),a&2&&(r(2),u(2,o.icon?2:3),r(8),B(o.paldexIndex.index),r(),u(11,o.paldexIndex.suffix?11:-1),r(),u(12,o.variantsPaldexIndexes.length>0?12:-1),r(3),b(" ",o.name,""),r(3),B(o.elementNames[o.elements[0]]),r(),u(19,o.elements[1]?19:-1),r(),u(20,o.hasNocturnalVariant?20:-1),r(),u(21,o.hasBossVariant?21:-1),r(),u(22,o.hasGymBossVariant?22:-1),r(3),u(25,o.rarityRange[0]===o.rarityRange[1]?25:26))},dependencies:[M,Ne,Oe,Ue],encapsulation:2});let t=i;return t})();function et(t,i){return this.value}function It(t,i){if(t&1){let n=R();s(0,"div",1)(1,"input",2),y("change",function(a){let g=k(n).$implicit,d=m(2),j;return P(d.check(g.value,(j=a.target)==null?null:j.checked))}),l(),s(2,"label",3),c(3),l()()}if(t&2){let n=i.$implicit,e=m(2);r(),W("id","",e.label,"-",n.value,"-check"),h("disabled",e.isDisabled)("checked",e.isChecked(n.value)),r(),E("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),W("for","",e.label,"-",n.value,"-check"),r(),b(" ",n.label," ")}}function kt(t,i){if(t&1&&(s(0,"label"),c(1),l(),V(2,It,4,13,"div",4,et,!0)),t&2){let n=m();de("col-",n.labelCols," col-form-label"),E("text-secondary",n.value==null)("text-primary",n.value!=null),r(),b(" ",n.label," "),r(),N(n.values)}}function Pt(t,i){if(t&1){let n=R();s(0,"input",2),y("change",function(a){let g=k(n).$implicit,d=m(2),j;return P(d.check(g.value,(j=a.target)==null?null:j.checked))}),l(),s(1,"label",6),c(2),l()}if(t&2){let n=i.$implicit,e=m(2);W("id","",e.label,"-",n.value,"-check"),h("disabled",e.isDisabled)("checked",e.isChecked(n.value)),r(),E("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),W("for","",e.label,"-",n.value,"-check"),r(),b(" ",n.label," ")}}function Tt(t,i){if(t&1&&(s(0,"div",5)(1,"span"),c(2),l(),V(3,Pt,3,13,null,null,et,!0),l()),t&2){let n=m();r(),de("col-",n.labelCols," input-group-text"),E("text-secondary",n.value==null)("text-primary",n.value!=null)("border-primary",n.value!=null),r(),b(" ",n.label," "),r(),N(n.values)}}var tt=(()=>{let i=class i{constructor(){this.label="",this.values=[],this.labelCols=1,this.skin="buttons",this.multiple=!1,this.isDisabled=!1,this.value=void 0,this.onChange=()=>{},this.onTouched=()=>{}}writeValue(e){this.value=e,this.onChange(this.value),this.onTouched(this.value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.isDisabled=e}isChecked(e){return this.multiple?this.value?.includes(e):this.value===e}check(e,a){if(this.multiple){if(a&&(!this.value||!this.value.includes(e)))this.value=[...this.value??[],e];else if(!a&&this.value&&this.value.includes(e)){let o=this.value.filter(g=>g!=e);this.value=o.length==0?void 0:o}}else this.value=a?e:void 0;this.onChange(this.value),this.onTouched(this.value)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=C({type:i,selectors:[["app-radio-row-control"]],inputs:{label:"label",values:"values",labelCols:[pe.HasDecoratorInputTransform,"labelCols","labelCols",Ee],skin:"skin",multiple:[pe.HasDecoratorInputTransform,"multiple","multiple",Te]},standalone:!0,features:[Pe([{provide:Ge,useExisting:ye(()=>i),multi:!0}]),Se,S],decls:3,vars:1,consts:[[1,"row","mb-3"],[1,"col"],["type","checkbox","autocomplete","off",1,"btn-check",3,"id","disabled","checked","change"],[1,"w-100","btn","btn-outline-secondary","text-truncate","text-capitalize",3,"for"],["class","col"],[1,"input-group","justify-content-center"],[1,"btn","text-truncate","text-capitalize",3,"for"]],template:function(a,o){if(a&1&&(s(0,"div",0),f(1,kt,4,8)(2,Tt,5,10),l()),a&2){let g;r(),u(1,(g=o.skin)==="buttons"?1:g==="input-group"?2:-1)}},styles:["[_nghost-%COMP%]{display:contents}"]});let t=i;return t})();function Et(t,i){if(t&1){let n=R();s(0,"button",8),y("click",function(){k(n);let a=m();return P(a.clear())}),c(1,"Clear filters"),l()}}var at=(()=>{let i=class i{constructor(e,a,o){this.router=a,this.activatedRoute=o,this.filtersChange=new Q,this.elementTypes=[],this.rarities=[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10}],this.ternary=[{label:"yes",value:!0},{label:"no",value:!1}],this.form=new ze({sizes:new p(void 0,{nonNullable:!0}),elementTypes:new p(void 0,{nonNullable:!0}),hasNocturnalVariant:new p(void 0,{nonNullable:!0}),hasEdibleVariant:new p(void 0,{nonNullable:!0}),hasPredatorVariant:new p(void 0,{nonNullable:!0}),hasBossVariant:new p(void 0,{nonNullable:!0}),hasGymBossVariant:new p(void 0,{nonNullable:!0}),rarity:new p(void 0,{nonNullable:!0}),minKindling:new p(void 0,{nonNullable:!0}),maxKindling:new p(void 0,{nonNullable:!0}),minWatering:new p(void 0,{nonNullable:!0}),maxWatering:new p(void 0,{nonNullable:!0}),minPlanting:new p(void 0,{nonNullable:!0}),maxPlanting:new p(void 0,{nonNullable:!0}),minGeneratingElectricity:new p(void 0,{nonNullable:!0}),maxGeneratingElectricity:new p(void 0,{nonNullable:!0}),minHandwork:new p(void 0,{nonNullable:!0}),maxHandwork:new p(void 0,{nonNullable:!0}),minGathering:new p(void 0,{nonNullable:!0}),maxGathering:new p(void 0,{nonNullable:!0}),minLumbering:new p(void 0,{nonNullable:!0}),maxLumbering:new p(void 0,{nonNullable:!0}),minMining:new p(void 0,{nonNullable:!0}),maxMining:new p(void 0,{nonNullable:!0}),minOilExtraction:new p(void 0,{nonNullable:!0}),maxOilExtraction:new p(void 0,{nonNullable:!0}),minMedicineProduction:new p(void 0,{nonNullable:!0}),maxMedicineProduction:new p(void 0,{nonNullable:!0}),minCooling:new p(void 0,{nonNullable:!0}),maxCooling:new p(void 0,{nonNullable:!0}),minTransporting:new p(void 0,{nonNullable:!0}),maxTransporting:new p(void 0,{nonNullable:!0}),minFarming:new p(void 0,{nonNullable:!0}),maxFarming:new p(void 0,{nonNullable:!0})}),e.elements$.subscribe(g=>{this.elementTypes=Object.entries(g).filter(([d,j])=>d!==I.Unknown).map(([d,j])=>({label:j,value:d}))})}ngOnInit(){this.form.valueChanges.subscribe(e=>{this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:e,queryParamsHandling:"merge"}),this.filtersChange.emit(new Me({sizes:e.sizes,elements:e.elementTypes,hasNocturnalVariant:e.hasNocturnalVariant,hasPredatorVariant:e.hasPredatorVariant,hasEdibleVariant:e.hasEdibleVariant,hasBossVariant:e.hasBossVariant,hasGymBossVariant:e.hasGymBossVariant,rarity:new w({fromInclusive:e.rarity,toInclusive:e.rarity}),workSuitability:new Le({kindling:new w({fromInclusive:e.minKindling,toInclusive:e.maxKindling}),watering:new w({fromInclusive:e.minWatering,toInclusive:e.maxWatering}),planting:new w({fromInclusive:e.minPlanting,toInclusive:e.maxPlanting}),generatingElectricity:new w({fromInclusive:e.minGeneratingElectricity,toInclusive:e.maxGeneratingElectricity}),handwork:new w({fromInclusive:e.minHandwork,toInclusive:e.maxHandwork}),gathering:new w({fromInclusive:e.minGathering,toInclusive:e.maxGathering}),lumbering:new w({fromInclusive:e.minLumbering,toInclusive:e.maxLumbering}),mining:new w({fromInclusive:e.minMining,toInclusive:e.maxMining}),oilExtraction:new w({fromInclusive:e.minOilExtraction,toInclusive:e.maxOilExtraction}),medicineProduction:new w({fromInclusive:e.minMedicineProduction,toInclusive:e.maxMedicineProduction}),cooling:new w({fromInclusive:e.minCooling,toInclusive:e.maxCooling}),transporting:new w({fromInclusive:e.minTransporting,toInclusive:e.maxTransporting}),farming:new w({fromInclusive:e.minFarming,toInclusive:e.maxFarming})})}))}),this.activatedRoute.queryParams.pipe(G()).subscribe(e=>{let a=[{key:"sizes",formatter:it},{key:"elementTypes",formatter:it},{key:"rarity",formatter:_},{key:"hasNocturnalVariant",formatter:Y},{key:"hasEdibleVariant",formatter:Y},{key:"hasPredatorVariant",formatter:Y},{key:"hasBossVariant",formatter:Y},{key:"hasGymBossVariant",formatter:Y},{key:"minKindling",formatter:_},{key:"maxKindling",formatter:_},{key:"minWatering",formatter:_},{key:"maxWatering",formatter:_},{key:"minPlanting",formatter:_},{key:"maxPlanting",formatter:_},{key:"minGeneratingElectricity",formatter:_},{key:"maxGeneratingElectricity",formatter:_},{key:"minHandwork",formatter:_},{key:"maxHandwork",formatter:_},{key:"minGathering",formatter:_},{key:"maxGathering",formatter:_},{key:"minLumbering",formatter:_},{key:"maxLumbering",formatter:_},{key:"minMining",formatter:_},{key:"maxMining",formatter:_},{key:"minOilExtraction",formatter:_},{key:"maxOilExtraction",formatter:_},{key:"minMedicineProduction",formatter:_},{key:"maxMedicineProduction",formatter:_},{key:"minCooling",formatter:_},{key:"maxCooling",formatter:_},{key:"minTransporting",formatter:_},{key:"maxTransporting",formatter:_},{key:"minFarming",formatter:_},{key:"maxFarming",formatter:_}];for(let o of a){let g=e[o.key];if(g){let d=o.formatter(g);this.form.get(o.key)?.patchValue(d),this.form.markAsDirty()}}})}clear(){this.form.reset(),this.form.markAsPristine()}};i.\u0275fac=function(a){return new(a||i)(v(se),v(ae),v(q))},i.\u0275cmp=C({type:i,selectors:[["app-browse-pals-filters"]],outputs:{filtersChange:"filtersChange"},standalone:!0,features:[S],decls:9,vars:11,consts:[[3,"formGroup"],["label","Elements","multiple","",3,"formControl","values"],["label","Rarity",3,"formControl","values"],[1,"row"],[1,"col"],["skin","input-group","label","Nocturnal",3,"formControl","labelCols","values"],["skin","input-group","label","GYM","labelCols","4",3,"formControl","values"],["class","btn btn-outline-secondary"],[1,"btn","btn-outline-secondary",3,"click"]],template:function(a,o){a&1&&(s(0,"form",0),x(1,"app-radio-row-control",1)(2,"app-radio-row-control",2),s(3,"div",3)(4,"div",4),x(5,"app-radio-row-control",5),l(),s(6,"div",4),x(7,"app-radio-row-control",6),l()(),f(8,Et,2,0,"button",7),l()),a&2&&(h("formGroup",o.form),r(),h("formControl",o.form.controls.elementTypes)("values",o.elementTypes),r(),h("formControl",o.form.controls.rarity)("values",o.rarities),r(3),h("formControl",o.form.controls.hasNocturnalVariant)("labelCols",4)("values",o.ternary),r(2),h("formControl",o.form.controls.hasGymBossVariant)("values",o.ternary),r(),u(8,o.form.dirty?8:-1))},dependencies:[M,We,Ae,$e,De,qe,He,tt],encapsulation:2});let t=i;return t})(),Y=t=>Array.isArray(t)?!!t[0]:!!t,_=t=>Array.isArray(t)?Number(t[0]):Number(t),it=t=>Array.isArray(t)?t:[t];function Vt(t,i){if(t&1){let n=R();s(0,"a",5),y("click",function(){let o=k(n).$index,g=m(2);return P(g.goToPage(o+1))}),c(1),l()}if(t&2){let n=i.$index,e=m(2);E("active",n+1==e.page),Ie("aria-label","Page "+(n+1)),r(),b(" ",n+1," ")}}var Nt=()=>[];function Rt(t,i){if(t&1&&V(0,Vt,2,4,"a",6,Z),t&2){let n=m();N(U(0,Nt).constructor(n.total))}}function Ft(t,i){if(t&1&&(s(0,"li",7),c(1),l()),t&2){let n=m();r(),A("",n.page,"/",n.total,"")}}var ot=(()=>{let i=class i{get page(){return this._page}set page(e){this._page=e,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:e},queryParamsHandling:"merge"})}constructor(e,a){this.router=e,this.activatedRoute=a,this._page=1,this.total=1,this.pageChange=new Q}ngOnInit(){this.activatedRoute.queryParams.pipe(G()).subscribe(e=>{let a=e.page;a&&this.goToPage(a)})}nextPage(){this.goToPage(this._page+1)}goToPage(e){this.pageChange.emit(e)}previousPage(){this.goToPage(this._page-1)}};i.\u0275fac=function(a){return new(a||i)(v(ae),v(q))},i.\u0275cmp=C({type:i,selectors:[["app-browse-pals-pagination"]],inputs:{page:"page",total:"total"},outputs:{pageChange:"pageChange"},standalone:!0,features:[S],decls:12,vars:5,consts:[[1,"pagination","align-items-center","justify-content-center"],[1,"page-item"],["role","button","aria-label","Previous",1,"page-link","user-select-none",3,"click"],["aria-hidden","true"],["role","button","aria-label","Next",1,"page-link","user-select-none",3,"click"],["role","button",1,"page-link",3,"click"],["class","page-link","role","button",3,"active"],[1,"page-link"]],template:function(a,o){a&1&&(s(0,"nav")(1,"ul",0)(2,"li",1)(3,"a",2),y("click",function(){return o.previousPage()}),s(4,"span",3),c(5,"\xAB"),l()()(),f(6,Rt,2,1)(7,Ft,2,2),s(8,"li",1)(9,"a",4),y("click",function(){return o.nextPage()}),s(10,"span",3),c(11,"\xBB"),l()()()()()),a&2&&(r(2),E("disabled",o.page<=1),r(4),u(6,o.total<=20?6:7),r(2),E("disabled",o.page>=o.total))},encapsulation:2});let t=i;return t})();var me=(()=>{let i=class i{constructor(e,a,o){this.languageService=e,this.palworldVersionService=a,this.palsApi=o,this.cache={}}searchTribes(e){return this.searchTribesInternal(e.filters,e.pagination).pipe(be(a=>{for(let o of a.results)Object.keys(this.cache).includes(o.name)||(this.cache[o.name]=new L(1)),this.cache[o.name].next(o)}))}getTribe(e){return Object.keys(this.cache).includes(e)||(this.cache[e]=new L(1),this.palsApi.getTribe(e,this.languageService.current,this.palworldVersionService.current).subscribe(a=>this.cache[e].next(a))),this.cache[e]}searchTribesInternal(e,a){return this.palsApi.searchTribes(e?.sizes,e?.elements,e?.hasNocturnalVariant,e?.hasEdibleVariant,e?.hasPredatorVariant,e?.hasBossVariant,e?.hasGymBossVariant,e?.rarity?.fromInclusive,e?.rarity?.toInclusive,e?.workSuitability?.kindling?.fromInclusive,e?.workSuitability?.kindling?.toInclusive,e?.workSuitability?.watering?.fromInclusive,e?.workSuitability?.watering?.toInclusive,e?.workSuitability?.planting?.fromInclusive,e?.workSuitability?.planting?.toInclusive,e?.workSuitability?.generatingElectricity?.fromInclusive,e?.workSuitability?.generatingElectricity?.toInclusive,e?.workSuitability?.handwork?.fromInclusive,e?.workSuitability?.handwork?.toInclusive,e?.workSuitability?.gathering?.fromInclusive,e?.workSuitability?.gathering?.toInclusive,e?.workSuitability?.lumbering?.fromInclusive,e?.workSuitability?.lumbering?.toInclusive,e?.workSuitability?.mining?.fromInclusive,e?.workSuitability?.mining?.toInclusive,e?.workSuitability?.oilExtraction?.fromInclusive,e?.workSuitability?.oilExtraction?.toInclusive,e?.workSuitability?.medicineProduction?.fromInclusive,e?.workSuitability?.medicineProduction?.toInclusive,e?.workSuitability?.cooling?.fromInclusive,e?.workSuitability?.cooling?.toInclusive,e?.workSuitability?.transporting?.fromInclusive,e?.workSuitability?.transporting?.toInclusive,e?.workSuitability?.farming?.fromInclusive,e?.workSuitability?.farming?.toInclusive,a.pageNumber,a.pageSize,this.languageService.current,this.palworldVersionService.current)}};i.\u0275fac=function(a){return new(a||i)(T(le),T(H),T(oe))},i.\u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();var Bt=(t,i)=>i.name;function jt(t,i){if(t&1&&c(0),t&2){let n=m(3);ke(" ",n.currentPageRange[0],"..",n.currentPageRange[1]," / ",n.result.pagination.totalCount," results ")}}function Mt(t,i){if(t&1&&c(0),t&2){let n=m(3);b(" ",n.result.results.length," results ")}}function Lt(t,i){if(t&1&&f(0,jt,1,3)(1,Mt,1,1),t&2){let n=m(2);u(0,n.result.results.length<n.result.pagination.totalCount?0:1)}}var Ot=t=>["..","view",t];function Gt(t,i){if(t&1&&(s(0,"a",6),x(1,"app-pal-nav-list-item",7),l()),t&2){let n=i.$implicit;h("routerLink",K(2,Ot,n.name)),r(),h("tribe",n)}}function $t(t,i){if(t&1){let n=R();s(0,"app-browse-pals-pagination",8),y("pageChange",function(a){k(n);let o=m(2);return P(o.goToPage(a))}),l()}if(t&2){let n=m(2);h("page",n.result.pagination.pageNumber)("total",n.result.pagination.totalPages)}}function Dt(t,i){if(t&1){let n=R();s(0,"div",0)(1,"h5"),c(2,"Filters"),l(),s(3,"div",1)(4,"app-browse-pals-filters",2),y("filtersChange",function(a){k(n);let o=m();return o.onFiltersChange(a),P(o.refresh())}),l()()(),s(5,"div",3),f(6,Lt,2,1),l(),s(7,"div",4),V(8,Gt,2,4,"a",9,Bt),l(),f(10,$t,1,2,"app-browse-pals-pagination",5)}if(t&2){let n=m();r(6),u(6,n.result?6:-1),r(2),N(n.result.results),r(2),u(10,n.result.pagination.totalPages>1?10:-1)}}var lt=(()=>{let i=class i{constructor(e){this.palsService=e,this.currentPageRange=[0,0],this.searchRequest={pagination:{pageNumber:1,pageSize:10}},this.searchRequestSubject=new fe}ngOnInit(){this.searchRequestSubject.pipe(ve(250),$(e=>this.palsService.searchTribes(e))).subscribe(e=>{this.result=e,this.currentPageRange=[(e.pagination.pageNumber-1)*e.pagination.pageSize+1,Math.min(e.pagination.pageNumber*e.pagination.pageSize,e.pagination.totalCount)]}),this.refresh()}refresh(){this.searchRequestSubject.next(this.searchRequest)}goToPage(e){this.searchRequest.pagination.pageNumber==e||this.result?.pagination&&(e<1||e>this.result.pagination.totalPages)||(this.searchRequest.pagination.pageNumber=e,this.refresh())}onFiltersChange(e){this.searchRequest.filters=e,this.searchRequest.pagination.pageNumber=1}};i.\u0275fac=function(a){return new(a||i)(v(me))},i.\u0275cmp=C({type:i,selectors:[["app-browse-pals-page"]],standalone:!0,features:[S],decls:3,vars:1,consts:[[1,"mb-4"],[1,"ps-2"],[3,"filtersChange"],[1,"mb-2"],[1,"list-group","list-group-flush"],[3,"page","total"],[1,"list-group-item","list-group-item-action",3,"routerLink"],[3,"tribe"],[3,"page","total","pageChange"],["class","list-group-item list-group-item-action",3,"routerLink"]],template:function(a,o){a&1&&(s(0,"h1"),c(1,"Pals"),l(),f(2,Dt,11,2)),a&2&&(r(2),u(2,o.result?2:-1))},dependencies:[M,Fe,Ze,at,ot],encapsulation:2});let t=i;return t})();function zt(t,i){if(t&1&&x(0,"img",0),t&2){let n=m();z("alt","",n.element," icon"),h("ngSrc",n.iconSrc)}}function At(t,i){t&1&&(s(0,"span",1),c(1,"?"),l())}var st=(()=>{let i=class i{constructor(){this.element=null}get iconSrc(){switch(this.element){case I.Unknown:return;case I.Dark:return"./assets/icons/element_dark.png";case I.Dragon:return"./assets/icons/element_dragon.png";case I.Earth:return"./assets/icons/element_earth.png";case I.Electricity:return"./assets/icons/element_electricity.png";case I.Fire:return"./assets/icons/element_fire.png";case I.Ice:return"./assets/icons/element_ice.png";case I.Leaf:return"./assets/icons/element_leaf.png";case I.Normal:return"./assets/icons/element_normal.png";case I.Water:return"./assets/icons/element_water.png"}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=C({type:i,selectors:[["app-pal-element-icon"]],inputs:{element:"element"},standalone:!0,features:[S],decls:2,vars:1,consts:[["width","24","height","24",3,"ngSrc","alt"],[1,"fw-semibold"]],template:function(a,o){a&1&&f(0,zt,1,2,"img",0)(1,At,2,0),a&2&&u(0,o.iconSrc?0:1)},dependencies:[ne],styles:["[_nghost-%COMP%]{display:contents}"]});let t=i;return t})();var qt=(t,i)=>i.identity.name;function Ht(t,i){if(t&1&&(s(0,"span"),c(1),l()),t&2){let n=m(2);r(),B(n.paldexSuffix)}}function Wt(t,i){if(t&1&&x(0,"app-pal-element-icon",20),t&2){let n=m(3);h("element",n.elements[1])}}function Ut(t,i){if(t&1&&(s(0,"div",19),x(1,"app-pal-element-icon",20),f(2,Wt,1,1,"app-pal-element-icon",20),l()),t&2){let n=m(2);r(),h("element",n.elements[0]),r(),u(2,n.elements[1]?2:-1)}}var ct=t=>({pal:t});function Kt(t,i){if(t&1){let n=R();s(0,"li",21)(1,"a",22),y("click",function(){let o=k(n).$implicit,g=m(2);return P(g.selectVariant(o))}),ee(2,17),l()()}if(t&2){let n=i.$implicit,e=m(2),a=te(3);r(),E("active",n.identity.name==(e.selectedVariant==null||e.selectedVariant.identity==null?null:e.selectedVariant.identity.name)),r(),h("ngTemplateOutlet",a)("ngTemplateOutletContext",K(4,ct,n))}}var Yt=(t,i)=>i.name;function Jt(t,i){if(t&1&&ee(0,17),t&2){let n=i.$implicit;m(3);let e=te(7);h("ngTemplateOutlet",e)("ngTemplateOutletContext",n)}}function Qt(t,i){if(t&1&&(s(0,"div",23)(1,"div",24)(2,"h4"),c(3,"Work"),l(),s(4,"div",25),V(5,Jt,1,2,"ng-container",17,Yt),l()()()),t&2){let n=m(2);r(5),N(n.workSuitabilities)}}function Xt(t,i){if(t&1&&(s(0,"div",4)(1,"div",5),x(2,"img",6)(3,"hr",7),s(4,"div",8)(5,"div",9)(6,"span"),c(7),l(),f(8,Ht,2,1,"span"),l(),x(9,"div",10),s(10,"div",11),c(11),l(),x(12,"div",12),f(13,Ut,3,2,"div",13),l()(),s(14,"div",14)(15,"div",15),V(16,Kt,3,6,"li",26,qt),l(),s(18,"div",16),ee(19,17),l()(),f(20,Qt,7,0,"div",18),l()),t&2){let n=m(),e=te(5);r(2),h("src",n.icon,X),r(5),B(n.paldexIndex),r(),u(8,n.paldexSuffix?8:-1),r(3),b(" ",n.paldexName," "),r(2),u(13,n.elements?13:-1),r(3),N(n.tribe.pals),r(3),h("ngTemplateOutlet",e)("ngTemplateOutletContext",K(8,ct,n.selectedVariant)),r(),u(20,n.workSuitabilities&&n.workSuitabilities.length>0?20:-1)}}function Zt(t,i){t&1&&(s(0,"div",27)(1,"div",28)(2,"span",29),c(3,"Loading..."),l()()())}function ei(t,i){t&1&&x(0,"img",31)}function ti(t,i){t&1&&x(0,"img",32)}function ii(t,i){t&1&&x(0,"img",33)}function ni(t,i){if(t&1&&(s(0,"div",30),f(1,ei,1,0,"img",31)(2,ti,1,0)(3,ii,1,0),l()),t&2){let n=i.pal;r(),u(1,n.isGymBoss?1:n.isBoss?2:3)}}function ai(t,i){t&1&&(x(0,"img",37),s(1,"span",38),c(2,"GYM BOSS"),l())}function oi(t,i){t&1&&(s(0,"div",39),x(1,"img",40),l(),s(2,"span",38),c(3,"BOSS"),l())}function ri(t,i){t&1&&(s(0,"div",39),x(1,"img",41),l())}function li(t,i){if(t&1&&(s(0,"div",34)(1,"div",35)(2,"div",12),c(3),l(),s(4,"div",36),f(5,ai,3,0)(6,oi,4,0)(7,ri,2,0),l()()()),t&2){let n=i.pal;r(3),b(" ",n.identity.localizedDescription," "),r(2),u(5,n.isGymBoss?5:n.isBoss?6:7)}}function si(t,i){if(t&1&&(s(0,"div",42)(1,"div",43),x(2,"img",44),s(3,"div",45),c(4),l()()()),t&2){let n=i.icon,e=i.name,a=i.level;r(),E("grayscale",a===0),r(),z("alt","",e," icon"),h("ngSrc",n),r(2),A("",e," Lv.",a,"")}}var mt=(()=>{let i=class i{constructor(e,a,o){this.activatedRoute=e,this.palsService=a,this.palIconsService=o}ngOnInit(){this.activatedRoute.paramMap.pipe($(e=>{let a=e.get("pal");return a?xe([this.palsService.getTribe(a).pipe(G()),this.palIconsService.getIcon(a,re.Medium).pipe(G())]):J([void 0,void 0])}),O(([e,a])=>{this.load(e,a)})).subscribe()}selectVariant(e){this.selectedVariant=e}load(e,a){this.tribe=e,this.icon=a,this.selectedVariant=this.tribe?.pals[0];let o=e?.pals.filter(g=>!g.isBoss&&!g.isGymBoss)[0];this.paldexName=o?.identity.localizedName??o?.identity.name,this.paldexIndex=o?.identity.paldexIndex,this.paldexSuffix=o?.identity.paldexIndexSuffix,this.elements=o?[o.element1,o.element2]:void 0,this.workSuitabilities=o?[{icon:"./assets/icons/work_kindling.png",name:"Kindling",level:o.workSuitability.kindling},{icon:"./assets/icons/work_watering.png",name:"Watering",level:o.workSuitability.watering},{icon:"./assets/icons/work_planting.png",name:"Planting",level:o.workSuitability.planting},{icon:"./assets/icons/work_generating_electricity.png",name:"Generating Electricity",level:o.workSuitability.generatingElectricity},{icon:"./assets/icons/work_handwork.png",name:"Handwork",level:o.workSuitability.handwork},{icon:"./assets/icons/work_gathering.png",name:"Gathering",level:o.workSuitability.gathering},{icon:"./assets/icons/work_lumbering.png",name:"Lumbering",level:o.workSuitability.lumbering},{icon:"./assets/icons/work_mining.png",name:"Mining",level:o.workSuitability.mining},{icon:"./assets/icons/work_oil_extraction.png",name:"Oil Extraction",level:o.workSuitability.oilExtraction},{icon:"./assets/icons/work_medicine_production.png",name:"Medicine Production",level:o.workSuitability.medicineProduction},{icon:"./assets/icons/work_cooling.png",name:"Cooling",level:o.workSuitability.cooling},{icon:"./assets/icons/work_transporting.png",name:"Transporting",level:o.workSuitability.transporting},{icon:"./assets/icons/work_farming.png",name:"Farming",level:o.workSuitability.farming}].filter(g=>g.level>0).sort((g,d)=>d.level-g.level):void 0}};i.\u0275fac=function(a){return new(a||i)(v(q),v(me),v(ce))},i.\u0275cmp=C({type:i,selectors:[["app-view-pal-page"]],standalone:!0,features:[S],decls:8,vars:1,consts:[["class","row g-4"],["variantTab",""],["variantIdentity",""],["workSuitability",""],[1,"row","g-4"],[1,"col-lg-2","p-0","border","rounded-2","d-flex","flex-column"],["alt","Pal icon",3,"src"],[1,"m-0","p-0"],[1,"d-flex","fs-3"],[1,"px-2","d-flex","align-items-center","justify-content-center"],[1,"vr"],[1,"px-2","d-flex","align-items-center","text-truncate"],[1,"flex-grow-1"],["class","px-2 d-flex align-items-center"],[1,"col-lg","d-flex","flex-column"],[1,"nav","nav-tabs"],[1,"p-4","flex-grow-1","border","rounded-2","border-top-0","rounded-top-0"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","card"],[1,"px-2","d-flex","align-items-center"],[3,"element"],[1,"nav-item"],["role","button",1,"nav-link",3,"click"],[1,"card"],[1,"card-body"],[1,"row"],["class","nav-item"],[1,"w-100","h-100","d-flex","align-items-center","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],[1,"position-relative",2,"width","24px","height","24px"],["ngSrc","./assets/icons/pal_tower.png","alt","Tower boss icon","width","24","height","24"],["ngSrc","./assets/icons/pal_boss.png","alt","Boss icon","width","30","height","24"],["ngSrc","./assets/icons/pal.png","alt","Regular pal icon","width","21","height","24"],[1,"h-100","d-flex","flex-column","gap-2"],[1,"d-flex","gap-2"],[1,"d-flex","gap-2","flex-column","align-items-center","justify-content-center",2,"width","64px"],["ngSrc","./assets/icons/pal_tower.png","alt","Tower boss icon","width","64","height","64"],[1,"badge","text-bg-secondary"],[1,"d-flex","align-items-center","justify-content-center",2,"width","64px","height","64px"],["ngSrc","./assets/icons/pal_boss.png","alt","Boss icon","width","40","height","32"],["ngSrc","./assets/icons/pal.png","alt","Regular pal icon","width","56","height","64"],[1,"col-2"],[1,"fw-semibold","text-center","d-flex","gap-2","align-items-center"],["width","40","height","40",3,"ngSrc","alt"],[1,"text-truncate"]],template:function(a,o){a&1&&f(0,Xt,21,10,"div",0)(1,Zt,4,0)(2,ni,4,1,"ng-template",null,1,ie)(4,li,8,2,"ng-template",null,2,ie)(6,si,5,6,"ng-template",null,3,ie),a&2&&u(0,o.tribe?0:1)},dependencies:[Ve,st,ne],encapsulation:2});let t=i;return t})();var ci=[{path:"",pathMatch:"full",redirectTo:"browse"},{path:"browse",component:lt},{path:"view/:pal",component:mt}],sn=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=we({type:i}),i.\u0275inj=Ce({providers:[Be(ci)],imports:[M]});let t=i;return t})();export{sn as PalsModule};
