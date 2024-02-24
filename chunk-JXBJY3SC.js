import{A as T,Aa as ye,B as c,Ba as Ie,C as s,Ca as Se,D as b,Da as Ne,F as V,G as E,H as d,Ja as Pe,K as ne,Ka as R,L as F,La as G,N as m,O as B,P as C,Q as M,R as ae,S as oe,T as I,U as O,V as re,W as q,X as $,Z as le,_ as se,a as A,b as U,c as H,ca as ce,d as W,e as K,f as Y,g as J,ga as ue,h as z,i as w,ia as me,j as Q,k as N,ka as de,l as P,la as L,m as X,ma as pe,n as Z,na as fe,oa as ge,p as ee,pa as he,q as r,qa as g,r as x,ra as ve,s as te,sa as S,t as h,ta as xe,u as f,v as y,va as be,w as D,wa as _e,x as p,xa as Ce,y as ie,ya as we,z as k,za as u}from"./chunk-FLTX7T4E.js";function Le(t,n){if(t&1&&b(0,"img",2),t&2){let i=d();ne("alt","",i.name," icon"),f("src",i.icon,ee)}}function Ge(t,n){t&1&&(c(0,"div",12),m(1,"?"),s())}function je(t,n){if(t&1&&(c(0,"span"),m(1),q(2,"lowercase"),s()),t&2){let i=d();r(),B($(2,1,i.paldexIndex.suffix))}}function ze(t,n){t&1&&(c(0,"span"),m(1,", "),s())}function De(t,n){if(t&1&&(c(0,"span",13),m(1),q(2,"lowercase"),s()),t&2){let i=d().$implicit;r(),B($(2,1,i.suffix))}}function Oe(t,n){if(t&1&&(h(0,ze,2,0,"span"),c(1,"span"),m(2),s(),h(3,De,3,3,"span",6)),t&2){let i=n.$implicit,e=n.$index;p(0,e>0?0:-1),r(2),B(i.index),r(),p(3,i.suffix?3:-1)}}function qe(t,n){if(t&1&&(c(0,"span",13)(1,"span"),m(2," ("),s(),k(3,Oe,4,3,null,null,ie),c(5,"span"),m(6,")"),s()()),t&2){let i=d();r(3),T(i.variantsPaldexIndexes)}}function $e(t,n){t&1&&b(0,"i",14)}var Ee=()=>({"width.px":24,"height.px":24,fill:"#6c757d"});function Ae(t,n){t&1&&b(0,"svg-icon",9),t&2&&f("svgStyle",O(1,Ee))}function Ue(t,n){t&1&&b(0,"svg-icon",10),t&2&&f("svgStyle",O(1,Ee))}function He(t,n){if(t&1&&m(0),t&2){let i=d();C(" ",i.rarityRange[0]," ")}}function We(t,n){if(t&1&&m(0),t&2){let i=d();M(" ",i.rarityRange[0]," - ",i.rarityRange[1]," ")}}var Ve=(()=>{let n=class n{get tribe(){return this._tribe}set tribe(e){this._tribe=e,this.update(e)}constructor(e,a,o){this.palsApi=e,this.palworldVersionService=a,this.sanitizer=o,this._tribe=null,this.name="",this.paldexIndex=null,this.variantsPaldexIndexes=[],this.elements=[],this.rarityRange=[0,0],this.hasNocturnalVariant=!1,this.hasBossVariant=!1,this.hasGymBossVariant=!1}update(e){let a=e.pals,o=a.filter(l=>l.identity.paldexIndex>0).map(l=>({index:l.identity.paldexIndex,suffix:l.identity.paldexIndexSuffix})),v=a.map(l=>l.statistics.rarity).filter(l=>l>0);this.name=e.localizedName??e.name,this.paldexIndex=o.find(l=>!l.suffix)??o[0],this.variantsPaldexIndexes=o.filter(l=>l!=this.paldexIndex),this.elements=a.map(l=>[l.element1,l.element2]),this.rarityRange=[Math.min(...v),Math.max(...v)],this.hasNocturnalVariant=a.some(l=>l.isNocturnal),this.hasBossVariant=a.some(l=>l.isBoss),this.hasGymBossVariant=a.some(l=>l.isGymBoss),this.icon=void 0,this.palsApi.getIcon(e.name,ge.Small,this.palworldVersionService.current).pipe(H(l=>l.data),W(l=>(console.error(l),U(void 0)))).subscribe(l=>{if(l){let _=URL.createObjectURL(l);this.icon=this.sanitizer.bypassSecurityTrustUrl(_)}else this.icon=void 0})}};n.\u0275fac=function(a){return new(a||n)(x(L),x(R),x(ue))},n.\u0275cmp=w({type:n,selectors:[["app-pal-nav-list-item"]],inputs:{tribe:"tribe"},standalone:!0,features:[I],decls:22,vars:9,consts:[[1,"d-flex","align-items-center","gap-3"],[1,"border","border-secondary-subtle","border-2","position-relative",2,"width","64px","height","64px"],["width","100%","height","100%",3,"src","alt"],[1,"d-flex","flex-column"],[1,"d-flex","align-items-center"],[1,"fs-6"],["class","text-muted"],[1,"fs-4","pe-2"],["class","bi bi-moon-fill fs-5 text-secondary","ngbTooltip","Nocturnal"],["src","./assets/icons/chess-queen.svg","ngbTooltip","BOSS",3,"svgStyle"],["src","./assets/icons/tower.svg","ngbTooltip","GYM",3,"svgStyle"],["ngbTooltip","Rarity",1,"bi","bi-star-fill","text-secondary"],[1,"w-100","h-100","d-flex","align-items-center","justify-content-center","fs-2","fw-bold"],[1,"text-muted"],["ngbTooltip","Nocturnal",1,"bi","bi-moon-fill","fs-5","text-secondary"]],template:function(a,o){a&1&&(c(0,"div",0)(1,"div",1),h(2,Le,1,2,"img",2)(3,Ge,2,0),s(),c(4,"div",3)(5,"div",4)(6,"div")(7,"span",5),m(8,"No."),s(),c(9,"span"),m(10),s(),h(11,je,3,3,"span")(12,qe,7,0,"span",6),c(13,"span",7),m(14),s()(),h(15,$e,1,0,"i",8)(16,Ae,1,2,"svg-icon",9)(17,Ue,1,2,"svg-icon",10),s(),c(18,"div"),b(19,"i",11),h(20,He,1,1)(21,We,1,2),s()()()),a&2&&(r(2),p(2,o.icon?2:3),r(8),B(o.paldexIndex.index),r(),p(11,o.paldexIndex.suffix?11:-1),r(),p(12,o.variantsPaldexIndexes.length>0?12:-1),r(2),C(" ",o.name,""),r(),p(15,o.hasNocturnalVariant?15:-1),r(),p(16,o.hasBossVariant?16:-1),r(),p(17,o.hasGymBossVariant?17:-1),r(3),p(20,o.rarityRange[0]===o.rarityRange[1]?20:21))},dependencies:[S,ce,xe,Pe],encapsulation:2});let t=n;return t})();function Re(t,n){return this.value}function Ke(t,n){if(t&1){let i=V();c(0,"div",1)(1,"input",2),E("change",function(a){let v=N(i).$implicit,l=d(2),_;return P(l.check(v.value,(_=a.target)==null?null:_.checked))}),s(),c(2,"label",3),m(3),s()()}if(t&2){let i=n.$implicit,e=d(2);r(),F("id","",e.label,"-",i.value,"-check"),f("disabled",e.isDisabled)("checked",e.isChecked(i.value)),r(),y("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),F("for","",e.label,"-",i.value,"-check"),r(),C(" ",i.label," ")}}function Ye(t,n){if(t&1&&(c(0,"label"),m(1),s(),k(2,Ke,4,13,"div",4,Re,!0)),t&2){let i=d();D("col-",i.labelCols," col-form-label"),y("text-secondary",i.value==null)("text-primary",i.value!=null),r(),C(" ",i.label," "),r(),T(i.values)}}function Je(t,n){if(t&1){let i=V();c(0,"input",2),E("change",function(a){let v=N(i).$implicit,l=d(2),_;return P(l.check(v.value,(_=a.target)==null?null:_.checked))}),s(),c(1,"label",6),m(2),s()}if(t&2){let i=n.$implicit,e=d(2);F("id","",e.label,"-",i.value,"-check"),f("disabled",e.isDisabled)("checked",e.isChecked(i.value)),r(),y("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),F("for","",e.label,"-",i.value,"-check"),r(),C(" ",i.label," ")}}function Qe(t,n){if(t&1&&(c(0,"div",5)(1,"span"),m(2),s(),k(3,Je,3,13,null,null,Re,!0),s()),t&2){let i=d();r(),D("col-",i.labelCols," input-group-text"),y("text-secondary",i.value==null)("text-primary",i.value!=null)("border-primary",i.value!=null),r(),C(" ",i.label," "),r(),T(i.values)}}var Fe=(()=>{let n=class n{constructor(){this.label="",this.values=[],this.labelCols=1,this.skin="buttons",this.multiple=!1,this.isDisabled=!1,this.value=void 0,this.onChange=()=>{},this.onTouched=()=>{}}writeValue(e){this.value=e,this.onChange(this.value),this.onTouched(this.value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.isDisabled=e}isChecked(e){return this.multiple?this.value?.includes(e):this.value===e}check(e,a){if(this.multiple){if(a&&(!this.value||!this.value.includes(e)))this.value=[...this.value??[],e];else if(!a&&this.value&&this.value.includes(e)){let o=this.value.filter(v=>v!=e);this.value=o.length==0?void 0:o}}else this.value=a?e:void 0;this.onChange(this.value),this.onTouched(this.value)}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=w({type:n,selectors:[["app-radio-row-control"]],inputs:{label:"label",values:"values",labelCols:[z.HasDecoratorInputTransform,"labelCols","labelCols",se],skin:"skin",multiple:[z.HasDecoratorInputTransform,"multiple","multiple",le]},standalone:!0,features:[oe([{provide:be,useExisting:Z(()=>n),multi:!0}]),te,I],decls:3,vars:1,consts:[[1,"row","mb-3"],[1,"col"],["type","checkbox","autocomplete","off",1,"btn-check",3,"id","disabled","checked","change"],[1,"w-100","btn","btn-outline-secondary","text-truncate","text-capitalize",3,"for"],["class","col"],[1,"input-group","justify-content-center"],[1,"btn","text-truncate","text-capitalize",3,"for"]],template:function(a,o){if(a&1&&(c(0,"div",0),h(1,Ye,4,8)(2,Qe,5,10),s()),a&2){let v;r(),p(1,(v=o.skin)==="buttons"?1:v==="input-group"?2:-1)}},styles:["[_nghost-%COMP%]{display:contents}"]});let t=n;return t})();var Be=(()=>{let n=class n{constructor(e,a,o){this.filtersChange=new J,this.elementTypes=[],this.rarities=[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10}],this.ternary=[{label:"yes",value:!0},{label:"no",value:!1}],this.form=new we({sizes:new u(void 0,{nonNullable:!0}),elementTypes:new u(void 0,{nonNullable:!0}),hasNocturnalVariant:new u(void 0,{nonNullable:!0}),hasEdibleVariant:new u(void 0,{nonNullable:!0}),hasPredatorVariant:new u(void 0,{nonNullable:!0}),hasBossVariant:new u(void 0,{nonNullable:!0}),hasGymBossVariant:new u(void 0,{nonNullable:!0}),rarity:new u(void 0,{nonNullable:!0}),minKindling:new u(void 0,{nonNullable:!0}),maxKindling:new u(void 0,{nonNullable:!0}),minWatering:new u(void 0,{nonNullable:!0}),maxWatering:new u(void 0,{nonNullable:!0}),minPlanting:new u(void 0,{nonNullable:!0}),maxPlanting:new u(void 0,{nonNullable:!0}),minGeneratingElectricity:new u(void 0,{nonNullable:!0}),maxGeneratingElectricity:new u(void 0,{nonNullable:!0}),minHandwork:new u(void 0,{nonNullable:!0}),maxHandwork:new u(void 0,{nonNullable:!0}),minGathering:new u(void 0,{nonNullable:!0}),maxGathering:new u(void 0,{nonNullable:!0}),minLumbering:new u(void 0,{nonNullable:!0}),maxLumbering:new u(void 0,{nonNullable:!0}),minMining:new u(void 0,{nonNullable:!0}),maxMining:new u(void 0,{nonNullable:!0}),minOilExtraction:new u(void 0,{nonNullable:!0}),maxOilExtraction:new u(void 0,{nonNullable:!0}),minMedicineProduction:new u(void 0,{nonNullable:!0}),maxMedicineProduction:new u(void 0,{nonNullable:!0}),minCooling:new u(void 0,{nonNullable:!0}),maxCooling:new u(void 0,{nonNullable:!0}),minTransporting:new u(void 0,{nonNullable:!0}),maxTransporting:new u(void 0,{nonNullable:!0}),minFarming:new u(void 0,{nonNullable:!0}),maxFarming:new u(void 0,{nonNullable:!0})}),o.getPalElementsTexts(a.current,e.current).subscribe(v=>{this.elementTypes=Object.entries(v).filter(([l,_])=>l!==fe.Unknown).map(([l,_])=>({label:_,value:l}))})}ngOnInit(){this.form.valueChanges.subscribe(e=>this.filtersChange.emit(new he({sizes:e.sizes,elements:e.elementTypes,hasNocturnalVariant:e.hasNocturnalVariant,hasPredatorVariant:e.hasPredatorVariant,hasEdibleVariant:e.hasEdibleVariant,hasBossVariant:e.hasBossVariant,hasGymBossVariant:e.hasGymBossVariant,rarity:new g({fromInclusive:e.rarity,toInclusive:e.rarity}),workSuitability:new ve({kindling:new g({fromInclusive:e.minKindling,toInclusive:e.maxKindling}),watering:new g({fromInclusive:e.minWatering,toInclusive:e.maxWatering}),planting:new g({fromInclusive:e.minPlanting,toInclusive:e.maxPlanting}),generatingElectricity:new g({fromInclusive:e.minGeneratingElectricity,toInclusive:e.maxGeneratingElectricity}),handwork:new g({fromInclusive:e.minHandwork,toInclusive:e.maxHandwork}),gathering:new g({fromInclusive:e.minGathering,toInclusive:e.maxGathering}),lumbering:new g({fromInclusive:e.minLumbering,toInclusive:e.maxLumbering}),mining:new g({fromInclusive:e.minMining,toInclusive:e.maxMining}),oilExtraction:new g({fromInclusive:e.minOilExtraction,toInclusive:e.maxOilExtraction}),medicineProduction:new g({fromInclusive:e.minMedicineProduction,toInclusive:e.maxMedicineProduction}),cooling:new g({fromInclusive:e.minCooling,toInclusive:e.maxCooling}),transporting:new g({fromInclusive:e.minTransporting,toInclusive:e.maxTransporting}),farming:new g({fromInclusive:e.minFarming,toInclusive:e.maxFarming})})})))}};n.\u0275fac=function(a){return new(a||n)(x(R),x(G),x(pe))},n.\u0275cmp=w({type:n,selectors:[["app-browse-pals-filters"]],outputs:{filtersChange:"filtersChange"},standalone:!0,features:[I],decls:8,vars:10,consts:[[3,"formGroup"],["label","Elements","multiple","",3,"formControl","values"],["label","Rarity",3,"formControl","values"],[1,"row"],[1,"col"],["skin","input-group","label","Nocturnal","multiple","",3,"formControl","labelCols","values"],["skin","input-group","label","GYM","labelCols","4",3,"formControl","values"]],template:function(a,o){a&1&&(c(0,"form",0),b(1,"app-radio-row-control",1)(2,"app-radio-row-control",2),c(3,"div",3)(4,"div",4),b(5,"app-radio-row-control",5),s(),c(6,"div",4),b(7,"app-radio-row-control",6),s()()()),a&2&&(f("formGroup",o.form),r(),f("formControl",o.form.controls.elementTypes)("values",o.elementTypes),r(),f("formControl",o.form.controls.rarity)("values",o.rarities),r(3),f("formControl",o.form.controls.hasNocturnalVariant)("labelCols",4)("values",o.ternary),r(2),f("formControl",o.form.controls.hasGymBossVariant)("values",o.ternary))},dependencies:[S,Ne,ye,_e,Ce,Ie,Se,Fe],encapsulation:2});let t=n;return t})();var Ze=(t,n)=>n.name;function et(t,n){if(t&1&&m(0),t&2){let i=d(3);ae(" ",i.currentPageRange[0],"..",i.currentPageRange[1]," / ",i.result.pagination.totalCount," results ")}}function tt(t,n){if(t&1&&m(0),t&2){let i=d(3);C(" ",i.result.results.length," results ")}}function it(t,n){if(t&1&&h(0,et,1,3)(1,tt,1,1),t&2){let i=d(2);p(0,i.result.results.length<i.result.pagination.totalCount?0:1)}}var nt=t=>["..",t];function at(t,n){if(t&1&&(c(0,"a",6),b(1,"app-pal-nav-list-item",7),s()),t&2){let i=n.$implicit;f("routerLink",re(2,nt,i.name)),r(),f("tribe",i)}}function ot(t,n){if(t&1){let i=V();c(0,"nav",8)(1,"ul",9)(2,"li",10)(3,"a",11),E("click",function(){N(i);let a=d(2);return P(a.previousPage())}),m(4,"Previous"),s()(),c(5,"li",12),m(6),s(),c(7,"li",10)(8,"a",11),E("click",function(){N(i);let a=d(2);return P(a.nextPage())}),m(9,"Next"),s()()()()}if(t&2){let i=d(2);r(2),y("disabled",i.result.pagination.pageNumber<=1),r(4),M(" ",i.result.pagination.pageNumber," / ",i.result.pagination.totalPages," "),r(),y("disabled",i.result.pagination.pageNumber>=i.result.pagination.totalPages)}}function rt(t,n){if(t&1){let i=V();c(0,"div",0)(1,"h5"),m(2,"Filters"),s(),c(3,"div",1)(4,"app-browse-pals-filters",2),E("filtersChange",function(a){N(i);let o=d();return o.onFiltersChange(a),P(o.refresh())}),s()()(),c(5,"div",3),h(6,it,2,1),s(),c(7,"div",4),k(8,at,2,4,"a",13,Ze),s(),h(10,ot,10,6,"nav",5)}if(t&2){let i=d();r(6),p(6,i.result?6:-1),r(2),T(i.result.results),r(2),p(10,i.result.pagination.totalPages>1?10:-1)}}var Me=(()=>{let n=class n{constructor(e,a,o){this.palworldVersionService=e,this.languageService=a,this.palsApi=o,this.currentPageRange=[0,0],this.searchRequest={pagination:{pageNumber:1,pageSize:10}},this.searchRequestSubject=new A}ngOnInit(){this.searchRequestSubject.pipe(K(250),Y(e=>this.search(e.filters,e.pagination))).subscribe(e=>{this.result=e,this.currentPageRange=[(e.pagination.pageNumber-1)*e.pagination.pageSize+1,Math.min(e.pagination.pageNumber*e.pagination.pageSize,e.pagination.totalCount)]}),this.refresh()}refresh(){this.searchRequestSubject.next(this.searchRequest)}nextPage(){console.log(this.result,this.searchRequest);let e=this.searchRequest.pagination.pageNumber??1;this.result?.pagination&&e>=this.result.pagination.totalPages||(this.searchRequest.pagination.pageNumber=e+1,this.refresh())}previousPage(){let e=this.searchRequest.pagination.pageNumber??1;e<=1||(this.searchRequest.pagination.pageNumber=e-1,this.refresh())}onFiltersChange(e){this.searchRequest.filters=e,this.searchRequest.pagination.pageNumber=1}search(e,a){return this.palsApi.searchTribes(e?.sizes,e?.elements,e?.hasNocturnalVariant,e?.hasEdibleVariant,e?.hasPredatorVariant,e?.hasBossVariant,e?.hasGymBossVariant,e?.rarity?.fromInclusive,e?.rarity?.toInclusive,e?.workSuitability?.kindling?.fromInclusive,e?.workSuitability?.kindling?.toInclusive,e?.workSuitability?.watering?.fromInclusive,e?.workSuitability?.watering?.toInclusive,e?.workSuitability?.planting?.fromInclusive,e?.workSuitability?.planting?.toInclusive,e?.workSuitability?.generatingElectricity?.fromInclusive,e?.workSuitability?.generatingElectricity?.toInclusive,e?.workSuitability?.handwork?.fromInclusive,e?.workSuitability?.handwork?.toInclusive,e?.workSuitability?.gathering?.fromInclusive,e?.workSuitability?.gathering?.toInclusive,e?.workSuitability?.lumbering?.fromInclusive,e?.workSuitability?.lumbering?.toInclusive,e?.workSuitability?.mining?.fromInclusive,e?.workSuitability?.mining?.toInclusive,e?.workSuitability?.oilExtraction?.fromInclusive,e?.workSuitability?.oilExtraction?.toInclusive,e?.workSuitability?.medicineProduction?.fromInclusive,e?.workSuitability?.medicineProduction?.toInclusive,e?.workSuitability?.cooling?.fromInclusive,e?.workSuitability?.cooling?.toInclusive,e?.workSuitability?.transporting?.fromInclusive,e?.workSuitability?.transporting?.toInclusive,e?.workSuitability?.farming?.fromInclusive,e?.workSuitability?.farming?.toInclusive,a.pageNumber,a.pageSize,this.languageService.current,this.palworldVersionService.current)}};n.\u0275fac=function(a){return new(a||n)(x(R),x(G),x(L))},n.\u0275cmp=w({type:n,selectors:[["app-browse-pals-page"]],standalone:!0,features:[I],decls:3,vars:1,consts:[[1,"mb-4"],[1,"ps-2"],[3,"filtersChange"],[1,"mb-2"],[1,"list-group","list-group-flush"],["class","mt-4"],[1,"list-group-item","list-group-item-action",3,"routerLink"],[3,"tribe"],[1,"mt-4"],[1,"pagination","align-items-center","justify-content-center"],[1,"page-item"],["role","button",1,"page-link","user-select-none",3,"click"],[1,"page-link"],["class","list-group-item list-group-item-action",3,"routerLink"]],template:function(a,o){a&1&&(c(0,"h1"),m(1,"Pals"),s(),h(2,rt,11,2)),a&2&&(r(2),p(2,o.result?2:-1))},dependencies:[S,me,Ve,Be],encapsulation:2});let t=n;return t})();var lt=[{path:"",pathMatch:"full",redirectTo:"browse"},{path:"browse",component:Me}],zt=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=Q({type:n}),n.\u0275inj=X({providers:[de(lt)],imports:[S]});let t=n;return t})();export{zt as PalsModule};
