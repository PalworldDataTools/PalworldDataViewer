import{$ as xe,A as x,Aa as R,B as N,Ba as Te,C as X,D as g,Da as Ee,E as q,Ea as Ve,F as T,Fa as Re,G as E,Ga as Fe,H as s,Ha as c,I as l,Ia as Be,J as C,Ja as Me,Ka as Le,L as S,La as je,M as y,N as p,Q as fe,R as j,Ra as Ge,Sa as B,T as m,Ta as Y,U as F,V as _,W as H,X as ge,Y as he,Z as P,_ as G,a as te,aa as Z,b as ie,ba as ee,c as ne,d as L,da as ve,e as ae,ea as be,f as oe,g as re,h as A,i as $,ia as _e,j as D,k as Q,l as w,m as le,ma as Ce,n as I,na as K,o as k,p as se,pa as U,q as ce,qa as ye,r as me,s as O,sa as we,ta as W,u as ue,ua as Ie,v as r,va as ke,w as v,wa as Se,x as pe,xa as Pe,y as h,ya as b,z as de,za as Ne}from"./chunk-R5UZME2J.js";var J=(()=>{let i=class i{get elements$(){return this.elementsSubject||(this.elementsSubject=new ie(1),ae([this.palworldVersionService.current$,this.languageService.current$]).pipe($(([e,a])=>this.palElementsLocalizationService.getPalElementsTexts(a,e)),L(e=>this.elementsSubject.next(e))).subscribe()),this.elementsSubject}constructor(e,a,o){this.palworldVersionService=e,this.languageService=a,this.palElementsLocalizationService=o}element(e){return this.elements$.pipe(L(a=>a[e]))}};i.\u0275fac=function(a){return new(a||i)(O(B),O(Y),O(Ie))},i.\u0275prov=se({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();function Qe(t,i){if(t&1&&C(0,"img",2),t&2){let n=p();fe("alt","",n.name," icon"),x("src",n.icon,ue)}}function Xe(t,i){t&1&&(s(0,"div",12),m(1,"?"),l())}function Ze(t,i){if(t&1&&(s(0,"span"),m(1),Z(2,"lowercase"),l()),t&2){let n=p();r(),F(ee(2,1,n.paldexIndex.suffix))}}function et(t,i){t&1&&(s(0,"span"),m(1,", "),l())}function tt(t,i){if(t&1&&(s(0,"span",13),m(1),Z(2,"lowercase"),l()),t&2){let n=p().$implicit;r(),F(ee(2,1,n.suffix))}}function it(t,i){if(t&1&&(h(0,et,2,0,"span"),s(1,"span"),m(2),l(),h(3,tt,3,3,"span",6)),t&2){let n=i.$implicit,e=i.$index;g(0,e>0?0:-1),r(2),F(n.index),r(),g(3,n.suffix?3:-1)}}function nt(t,i){if(t&1&&(s(0,"span",13)(1,"span"),m(2," ("),l(),T(3,it,4,3,null,null,q),s(5,"span"),m(6,")"),l()()),t&2){let n=p();r(3),E(n.variantsPaldexIndexes)}}function at(t,i){if(t&1&&(s(0,"span"),m(1),l()),t&2){let n=p();r(),_("/",n.elementNames[n.elements[1]],"")}}function ot(t,i){t&1&&C(0,"i",14)}var De=()=>({"width.px":24,"height.px":24,fill:"#6c757d"});function rt(t,i){t&1&&C(0,"svg-icon",9),t&2&&x("svgStyle",G(1,De))}function lt(t,i){t&1&&C(0,"svg-icon",10),t&2&&x("svgStyle",G(1,De))}function st(t,i){if(t&1&&m(0),t&2){let n=p();_(" ",n.rarityRange[0]," ")}}function ct(t,i){if(t&1&&m(0),t&2){let n=p();H(" ",n.rarityRange[0]," - ",n.rarityRange[1]," ")}}var Oe=(()=>{let i=class i{get tribe(){return this._tribe}set tribe(e){this._tribe=e,this.update(e)}constructor(e,a,o,f){this.palsApi=e,this.palworldVersionService=a,this.localizationService=o,this.sanitizer=f,this.elementNames={},this._tribe=null,this.name="",this.paldexIndex=null,this.variantsPaldexIndexes=[],this.elements=null,this.rarityRange=[0,0],this.hasNocturnalVariant=!1,this.hasBossVariant=!1,this.hasGymBossVariant=!1,this.localizationService.elements$.subscribe(u=>this.elementNames=u)}update(e){let a=e.pals[0],o=e.pals.filter(u=>u.identity.paldexIndex>0).map(u=>({index:u.identity.paldexIndex,suffix:u.identity.paldexIndexSuffix})),f=e.pals.map(u=>u.statistics.rarity).filter(u=>u>0);this.name=e.localizedName??e.name,this.paldexIndex=o.find(u=>!u.suffix)??o[0]??{suffix:"?"},this.variantsPaldexIndexes=o.filter(u=>u!=this.paldexIndex),this.elements=[a.element1,a.element2],this.rarityRange=[Math.min(...f),Math.max(...f)],this.hasNocturnalVariant=e.pals.some(u=>u.isNocturnal),this.hasBossVariant=e.pals.some(u=>u.isBoss),this.hasGymBossVariant=e.pals.some(u=>u.isGymBoss),this.loadIcon(e.name)}loadIcon(e){this.icon=void 0,this.palsApi.getIcon(e,Se.Small,this.palworldVersionService.current).pipe(L(a=>a.data),oe(a=>(console.error(a),ne(void 0)))).subscribe(a=>{if(a){let o=URL.createObjectURL(a);this.icon=this.sanitizer.bypassSecurityTrustUrl(o)}else this.icon=void 0})}};i.\u0275fac=function(a){return new(a||i)(v(W),v(B),v(J),v(Ce))},i.\u0275cmp=w({type:i,selectors:[["app-pal-nav-list-item"]],inputs:{tribe:"tribe"},standalone:!0,features:[P],decls:27,vars:11,consts:[[1,"d-flex","align-items-center","gap-3"],[1,"border","border-secondary-subtle","border-2","position-relative",2,"width","64px","height","64px"],["width","100%","height","100%",3,"src","alt"],[1,"d-flex","flex-column"],[1,"d-flex","gap-2","align-items-center"],[1,"fs-6"],["class","text-muted"],[1,"fs-4"],["class","bi bi-moon-fill fs-5 text-secondary","ngbTooltip","Nocturnal"],["src","./assets/icons/chess-queen.svg","ngbTooltip","BOSS",3,"svgStyle"],["src","./assets/icons/tower.svg","ngbTooltip","GYM",3,"svgStyle"],["ngbTooltip","Rarity",1,"bi","bi-star-fill","text-secondary"],[1,"w-100","h-100","d-flex","align-items-center","justify-content-center","fs-2","fw-bold"],[1,"text-muted"],["ngbTooltip","Nocturnal",1,"bi","bi-moon-fill","fs-5","text-secondary"]],template:function(a,o){a&1&&(s(0,"div",0)(1,"div",1),h(2,Qe,1,2,"img",2)(3,Xe,2,0),l(),s(4,"div",3)(5,"div",4)(6,"div")(7,"span",5),m(8,"No."),l(),s(9,"span"),m(10),l(),h(11,Ze,3,3,"span")(12,nt,7,0,"span",6),l(),s(13,"div")(14,"span",7),m(15),l()(),s(16,"div")(17,"span"),m(18),l(),h(19,at,2,1,"span"),l(),h(20,ot,1,0,"i",8)(21,rt,1,2,"svg-icon",9)(22,lt,1,2,"svg-icon",10),l(),s(23,"div"),C(24,"i",11),h(25,st,1,1)(26,ct,1,2),l()()()),a&2&&(r(2),g(2,o.icon?2:3),r(8),F(o.paldexIndex.index),r(),g(11,o.paldexIndex.suffix?11:-1),r(),g(12,o.variantsPaldexIndexes.length>0?12:-1),r(3),_(" ",o.name,""),r(3),F(o.elementNames[o.elements[0]]),r(),g(19,o.elements[1]?19:-1),r(),g(20,o.hasNocturnalVariant?20:-1),r(),g(21,o.hasBossVariant?21:-1),r(),g(22,o.hasGymBossVariant?22:-1),r(3),g(25,o.rarityRange[0]===o.rarityRange[1]?25:26))},dependencies:[R,_e,Te,Ge],encapsulation:2});let t=i;return t})();function qe(t,i){return this.value}function mt(t,i){if(t&1){let n=S();s(0,"div",1)(1,"input",2),y("change",function(a){let f=I(n).$implicit,u=p(2),V;return k(u.check(f.value,(V=a.target)==null?null:V.checked))}),l(),s(2,"label",3),m(3),l()()}if(t&2){let n=i.$implicit,e=p(2);r(),j("id","",e.label,"-",n.value,"-check"),x("disabled",e.isDisabled)("checked",e.isChecked(n.value)),r(),N("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),j("for","",e.label,"-",n.value,"-check"),r(),_(" ",n.label," ")}}function ut(t,i){if(t&1&&(s(0,"label"),m(1),l(),T(2,mt,4,13,"div",4,qe,!0)),t&2){let n=p();X("col-",n.labelCols," col-form-label"),N("text-secondary",n.value==null)("text-primary",n.value!=null),r(),_(" ",n.label," "),r(),E(n.values)}}function pt(t,i){if(t&1){let n=S();s(0,"input",2),y("change",function(a){let f=I(n).$implicit,u=p(2),V;return k(u.check(f.value,(V=a.target)==null?null:V.checked))}),l(),s(1,"label",6),m(2),l()}if(t&2){let n=i.$implicit,e=p(2);j("id","",e.label,"-",n.value,"-check"),x("disabled",e.isDisabled)("checked",e.isChecked(n.value)),r(),N("border-primary",e.value!=null)("btn-outline-secondary",e.value==null)("btn-outline-primary",e.value!=null),j("for","",e.label,"-",n.value,"-check"),r(),_(" ",n.label," ")}}function dt(t,i){if(t&1&&(s(0,"div",5)(1,"span"),m(2),l(),T(3,pt,3,13,null,null,qe,!0),l()),t&2){let n=p();r(),X("col-",n.labelCols," input-group-text"),N("text-secondary",n.value==null)("text-primary",n.value!=null)("border-primary",n.value!=null),r(),_(" ",n.label," "),r(),E(n.values)}}var He=(()=>{let i=class i{constructor(){this.label="",this.values=[],this.labelCols=1,this.skin="buttons",this.multiple=!1,this.isDisabled=!1,this.value=void 0,this.onChange=()=>{},this.onTouched=()=>{}}writeValue(e){this.value=e,this.onChange(this.value),this.onTouched(this.value)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.isDisabled=e}isChecked(e){return this.multiple?this.value?.includes(e):this.value===e}check(e,a){if(this.multiple){if(a&&(!this.value||!this.value.includes(e)))this.value=[...this.value??[],e];else if(!a&&this.value&&this.value.includes(e)){let o=this.value.filter(f=>f!=e);this.value=o.length==0?void 0:o}}else this.value=a?e:void 0;this.onChange(this.value),this.onTouched(this.value)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=w({type:i,selectors:[["app-radio-row-control"]],inputs:{label:"label",values:"values",labelCols:[Q.HasDecoratorInputTransform,"labelCols","labelCols",be],skin:"skin",multiple:[Q.HasDecoratorInputTransform,"multiple","multiple",ve]},standalone:!0,features:[he([{provide:Ee,useExisting:me(()=>i),multi:!0}]),pe,P],decls:3,vars:1,consts:[[1,"row","mb-3"],[1,"col"],["type","checkbox","autocomplete","off",1,"btn-check",3,"id","disabled","checked","change"],[1,"w-100","btn","btn-outline-secondary","text-truncate","text-capitalize",3,"for"],["class","col"],[1,"input-group","justify-content-center"],[1,"btn","text-truncate","text-capitalize",3,"for"]],template:function(a,o){if(a&1&&(s(0,"div",0),h(1,ut,4,8)(2,dt,5,10),l()),a&2){let f;r(),g(1,(f=o.skin)==="buttons"?1:f==="input-group"?2:-1)}},styles:["[_nghost-%COMP%]{display:contents}"]});let t=i;return t})();function gt(t,i){if(t&1){let n=S();s(0,"button",8),y("click",function(){I(n);let a=p();return k(a.clear())}),m(1,"Clear filters"),l()}}var Ue=(()=>{let i=class i{constructor(e,a,o){this.router=a,this.activatedRoute=o,this.filtersChange=new D,this.elementTypes=[],this.rarities=[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10}],this.ternary=[{label:"yes",value:!0},{label:"no",value:!1}],this.form=new Fe({sizes:new c(void 0,{nonNullable:!0}),elementTypes:new c(void 0,{nonNullable:!0}),hasNocturnalVariant:new c(void 0,{nonNullable:!0}),hasEdibleVariant:new c(void 0,{nonNullable:!0}),hasPredatorVariant:new c(void 0,{nonNullable:!0}),hasBossVariant:new c(void 0,{nonNullable:!0}),hasGymBossVariant:new c(void 0,{nonNullable:!0}),rarity:new c(void 0,{nonNullable:!0}),minKindling:new c(void 0,{nonNullable:!0}),maxKindling:new c(void 0,{nonNullable:!0}),minWatering:new c(void 0,{nonNullable:!0}),maxWatering:new c(void 0,{nonNullable:!0}),minPlanting:new c(void 0,{nonNullable:!0}),maxPlanting:new c(void 0,{nonNullable:!0}),minGeneratingElectricity:new c(void 0,{nonNullable:!0}),maxGeneratingElectricity:new c(void 0,{nonNullable:!0}),minHandwork:new c(void 0,{nonNullable:!0}),maxHandwork:new c(void 0,{nonNullable:!0}),minGathering:new c(void 0,{nonNullable:!0}),maxGathering:new c(void 0,{nonNullable:!0}),minLumbering:new c(void 0,{nonNullable:!0}),maxLumbering:new c(void 0,{nonNullable:!0}),minMining:new c(void 0,{nonNullable:!0}),maxMining:new c(void 0,{nonNullable:!0}),minOilExtraction:new c(void 0,{nonNullable:!0}),maxOilExtraction:new c(void 0,{nonNullable:!0}),minMedicineProduction:new c(void 0,{nonNullable:!0}),maxMedicineProduction:new c(void 0,{nonNullable:!0}),minCooling:new c(void 0,{nonNullable:!0}),maxCooling:new c(void 0,{nonNullable:!0}),minTransporting:new c(void 0,{nonNullable:!0}),maxTransporting:new c(void 0,{nonNullable:!0}),minFarming:new c(void 0,{nonNullable:!0}),maxFarming:new c(void 0,{nonNullable:!0})}),e.elements$.subscribe(f=>{this.elementTypes=Object.entries(f).filter(([u,V])=>u!==ke.Unknown).map(([u,V])=>({label:V,value:u}))})}ngOnInit(){this.form.valueChanges.subscribe(e=>{this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:e,queryParamsHandling:"merge"}),this.filtersChange.emit(new Pe({sizes:e.sizes,elements:e.elementTypes,hasNocturnalVariant:e.hasNocturnalVariant,hasPredatorVariant:e.hasPredatorVariant,hasEdibleVariant:e.hasEdibleVariant,hasBossVariant:e.hasBossVariant,hasGymBossVariant:e.hasGymBossVariant,rarity:new b({fromInclusive:e.rarity,toInclusive:e.rarity}),workSuitability:new Ne({kindling:new b({fromInclusive:e.minKindling,toInclusive:e.maxKindling}),watering:new b({fromInclusive:e.minWatering,toInclusive:e.maxWatering}),planting:new b({fromInclusive:e.minPlanting,toInclusive:e.maxPlanting}),generatingElectricity:new b({fromInclusive:e.minGeneratingElectricity,toInclusive:e.maxGeneratingElectricity}),handwork:new b({fromInclusive:e.minHandwork,toInclusive:e.maxHandwork}),gathering:new b({fromInclusive:e.minGathering,toInclusive:e.maxGathering}),lumbering:new b({fromInclusive:e.minLumbering,toInclusive:e.maxLumbering}),mining:new b({fromInclusive:e.minMining,toInclusive:e.maxMining}),oilExtraction:new b({fromInclusive:e.minOilExtraction,toInclusive:e.maxOilExtraction}),medicineProduction:new b({fromInclusive:e.minMedicineProduction,toInclusive:e.maxMedicineProduction}),cooling:new b({fromInclusive:e.minCooling,toInclusive:e.maxCooling}),transporting:new b({fromInclusive:e.minTransporting,toInclusive:e.maxTransporting}),farming:new b({fromInclusive:e.minFarming,toInclusive:e.maxFarming})})}))}),this.activatedRoute.queryParams.pipe(A()).subscribe(e=>{let a=[{key:"sizes",formatter:Ke},{key:"elementTypes",formatter:Ke},{key:"rarity",formatter:d},{key:"hasNocturnalVariant",formatter:z},{key:"hasEdibleVariant",formatter:z},{key:"hasPredatorVariant",formatter:z},{key:"hasBossVariant",formatter:z},{key:"hasGymBossVariant",formatter:z},{key:"minKindling",formatter:d},{key:"maxKindling",formatter:d},{key:"minWatering",formatter:d},{key:"maxWatering",formatter:d},{key:"minPlanting",formatter:d},{key:"maxPlanting",formatter:d},{key:"minGeneratingElectricity",formatter:d},{key:"maxGeneratingElectricity",formatter:d},{key:"minHandwork",formatter:d},{key:"maxHandwork",formatter:d},{key:"minGathering",formatter:d},{key:"maxGathering",formatter:d},{key:"minLumbering",formatter:d},{key:"maxLumbering",formatter:d},{key:"minMining",formatter:d},{key:"maxMining",formatter:d},{key:"minOilExtraction",formatter:d},{key:"maxOilExtraction",formatter:d},{key:"minMedicineProduction",formatter:d},{key:"maxMedicineProduction",formatter:d},{key:"minCooling",formatter:d},{key:"maxCooling",formatter:d},{key:"minTransporting",formatter:d},{key:"maxTransporting",formatter:d},{key:"minFarming",formatter:d},{key:"maxFarming",formatter:d}];for(let o of a){let f=e[o.key];if(f){let u=o.formatter(f);this.form.get(o.key)?.patchValue(u),this.form.markAsDirty()}}})}clear(){this.form.reset(),this.form.markAsPristine()}};i.\u0275fac=function(a){return new(a||i)(v(J),v(U),v(K))},i.\u0275cmp=w({type:i,selectors:[["app-browse-pals-filters"]],outputs:{filtersChange:"filtersChange"},standalone:!0,features:[P],decls:9,vars:11,consts:[[3,"formGroup"],["label","Elements","multiple","",3,"formControl","values"],["label","Rarity",3,"formControl","values"],[1,"row"],[1,"col"],["skin","input-group","label","Nocturnal",3,"formControl","labelCols","values"],["skin","input-group","label","GYM","labelCols","4",3,"formControl","values"],["class","btn btn-outline-secondary"],[1,"btn","btn-outline-secondary",3,"click"]],template:function(a,o){a&1&&(s(0,"form",0),C(1,"app-radio-row-control",1)(2,"app-radio-row-control",2),s(3,"div",3)(4,"div",4),C(5,"app-radio-row-control",5),l(),s(6,"div",4),C(7,"app-radio-row-control",6),l()(),h(8,gt,2,0,"button",7),l()),a&2&&(x("formGroup",o.form),r(),x("formControl",o.form.controls.elementTypes)("values",o.elementTypes),r(),x("formControl",o.form.controls.rarity)("values",o.rarities),r(3),x("formControl",o.form.controls.hasNocturnalVariant)("labelCols",4)("values",o.ternary),r(2),x("formControl",o.form.controls.hasGymBossVariant)("values",o.ternary),r(),g(8,o.form.dirty?8:-1))},dependencies:[R,je,Be,Ve,Re,Me,Le,He],encapsulation:2});let t=i;return t})(),z=t=>Array.isArray(t)?!!t[0]:!!t,d=t=>Array.isArray(t)?Number(t[0]):Number(t),Ke=t=>Array.isArray(t)?t:[t];function ht(t,i){if(t&1){let n=S();s(0,"a",5),y("click",function(){let o=I(n).$index,f=p(2);return k(f.goToPage(o+1))}),m(1),l()}if(t&2){let n=i.$index,e=p(2);N("active",n+1==e.page),de("aria-label","Page "+(n+1)),r(),_(" ",n+1," ")}}var xt=()=>[];function vt(t,i){if(t&1&&T(0,ht,2,4,"a",6,q),t&2){let n=p();E(G(0,xt).constructor(n.total))}}function bt(t,i){if(t&1&&(s(0,"li",7),m(1),l()),t&2){let n=p();r(),H("",n.page,"/",n.total,"")}}var We=(()=>{let i=class i{get page(){return this._page}set page(e){this._page=e,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:e},queryParamsHandling:"merge"})}constructor(e,a){this.router=e,this.activatedRoute=a,this._page=1,this.total=1,this.pageChange=new D}ngOnInit(){this.activatedRoute.queryParams.pipe(A()).subscribe(e=>{let a=e.page;a&&this.goToPage(a)})}nextPage(){this.goToPage(this._page+1)}goToPage(e){this.pageChange.emit(e)}previousPage(){this.goToPage(this._page-1)}};i.\u0275fac=function(a){return new(a||i)(v(U),v(K))},i.\u0275cmp=w({type:i,selectors:[["app-browse-pals-pagination"]],inputs:{page:"page",total:"total"},outputs:{pageChange:"pageChange"},standalone:!0,features:[P],decls:12,vars:5,consts:[[1,"pagination","align-items-center","justify-content-center"],[1,"page-item"],["role","button","aria-label","Previous",1,"page-link","user-select-none",3,"click"],["aria-hidden","true"],["role","button","aria-label","Next",1,"page-link","user-select-none",3,"click"],["role","button",1,"page-link",3,"click"],["class","page-link","role","button",3,"active"],[1,"page-link"]],template:function(a,o){a&1&&(s(0,"nav")(1,"ul",0)(2,"li",1)(3,"a",2),y("click",function(){return o.previousPage()}),s(4,"span",3),m(5,"\xAB"),l()()(),h(6,vt,2,1)(7,bt,2,2),s(8,"li",1)(9,"a",4),y("click",function(){return o.nextPage()}),s(10,"span",3),m(11,"\xBB"),l()()()()()),a&2&&(r(2),N("disabled",o.page<=1),r(4),g(6,o.total<=20?6:7),r(2),N("disabled",o.page>=o.total))},encapsulation:2});let t=i;return t})();var _t=(t,i)=>i.name;function Ct(t,i){if(t&1&&m(0),t&2){let n=p(3);ge(" ",n.currentPageRange[0],"..",n.currentPageRange[1]," / ",n.result.pagination.totalCount," results ")}}function yt(t,i){if(t&1&&m(0),t&2){let n=p(3);_(" ",n.result.results.length," results ")}}function wt(t,i){if(t&1&&h(0,Ct,1,3)(1,yt,1,1),t&2){let n=p(2);g(0,n.result.results.length<n.result.pagination.totalCount?0:1)}}var It=t=>["..",t];function kt(t,i){if(t&1&&(s(0,"a",6),C(1,"app-pal-nav-list-item",7),l()),t&2){let n=i.$implicit;x("routerLink",xe(2,It,n.name)),r(),x("tribe",n)}}function St(t,i){if(t&1){let n=S();s(0,"app-browse-pals-pagination",8),y("pageChange",function(a){I(n);let o=p(2);return k(o.goToPage(a))}),l()}if(t&2){let n=p(2);x("page",n.result.pagination.pageNumber)("total",n.result.pagination.totalPages)}}function Pt(t,i){if(t&1){let n=S();s(0,"div",0)(1,"h5"),m(2,"Filters"),l(),s(3,"div",1)(4,"app-browse-pals-filters",2),y("filtersChange",function(a){I(n);let o=p();return o.onFiltersChange(a),k(o.refresh())}),l()()(),s(5,"div",3),h(6,wt,2,1),l(),s(7,"div",4),T(8,kt,2,4,"a",9,_t),l(),h(10,St,1,2,"app-browse-pals-pagination",5)}if(t&2){let n=p();r(6),g(6,n.result?6:-1),r(2),E(n.result.results),r(2),g(10,n.result.pagination.totalPages>1?10:-1)}}var Ye=(()=>{let i=class i{constructor(e,a,o){this.palworldVersionService=e,this.languageService=a,this.palsApi=o,this.currentPageRange=[0,0],this.searchRequest={pagination:{pageNumber:1,pageSize:10}},this.searchRequestSubject=new te}ngOnInit(){this.searchRequestSubject.pipe(re(250),$(e=>this.search(e.filters,e.pagination))).subscribe(e=>{this.result=e,this.currentPageRange=[(e.pagination.pageNumber-1)*e.pagination.pageSize+1,Math.min(e.pagination.pageNumber*e.pagination.pageSize,e.pagination.totalCount)]}),this.refresh()}refresh(){this.searchRequestSubject.next(this.searchRequest)}goToPage(e){this.searchRequest.pagination.pageNumber==e||this.result?.pagination&&(e<1||e>this.result.pagination.totalPages)||(this.searchRequest.pagination.pageNumber=e,this.refresh())}onFiltersChange(e){this.searchRequest.filters=e,this.searchRequest.pagination.pageNumber=1}search(e,a){return this.palsApi.searchTribes(e?.sizes,e?.elements,e?.hasNocturnalVariant,e?.hasEdibleVariant,e?.hasPredatorVariant,e?.hasBossVariant,e?.hasGymBossVariant,e?.rarity?.fromInclusive,e?.rarity?.toInclusive,e?.workSuitability?.kindling?.fromInclusive,e?.workSuitability?.kindling?.toInclusive,e?.workSuitability?.watering?.fromInclusive,e?.workSuitability?.watering?.toInclusive,e?.workSuitability?.planting?.fromInclusive,e?.workSuitability?.planting?.toInclusive,e?.workSuitability?.generatingElectricity?.fromInclusive,e?.workSuitability?.generatingElectricity?.toInclusive,e?.workSuitability?.handwork?.fromInclusive,e?.workSuitability?.handwork?.toInclusive,e?.workSuitability?.gathering?.fromInclusive,e?.workSuitability?.gathering?.toInclusive,e?.workSuitability?.lumbering?.fromInclusive,e?.workSuitability?.lumbering?.toInclusive,e?.workSuitability?.mining?.fromInclusive,e?.workSuitability?.mining?.toInclusive,e?.workSuitability?.oilExtraction?.fromInclusive,e?.workSuitability?.oilExtraction?.toInclusive,e?.workSuitability?.medicineProduction?.fromInclusive,e?.workSuitability?.medicineProduction?.toInclusive,e?.workSuitability?.cooling?.fromInclusive,e?.workSuitability?.cooling?.toInclusive,e?.workSuitability?.transporting?.fromInclusive,e?.workSuitability?.transporting?.toInclusive,e?.workSuitability?.farming?.fromInclusive,e?.workSuitability?.farming?.toInclusive,a.pageNumber,a.pageSize,this.languageService.current,this.palworldVersionService.current)}};i.\u0275fac=function(a){return new(a||i)(v(B),v(Y),v(W))},i.\u0275cmp=w({type:i,selectors:[["app-browse-pals-page"]],standalone:!0,features:[P],decls:3,vars:1,consts:[[1,"mb-4"],[1,"ps-2"],[3,"filtersChange"],[1,"mb-2"],[1,"list-group","list-group-flush"],[3,"page","total"],[1,"list-group-item","list-group-item-action",3,"routerLink"],[3,"tribe"],[3,"page","total","pageChange"],["class","list-group-item list-group-item-action",3,"routerLink"]],template:function(a,o){a&1&&(s(0,"h1"),m(1,"Pals"),l(),h(2,Pt,11,2)),a&2&&(r(2),g(2,o.result?2:-1))},dependencies:[R,ye,Oe,Ue,We],encapsulation:2});let t=i;return t})();var Nt=[{path:"",pathMatch:"full",redirectTo:"browse"},{path:"browse",component:Ye}],gi=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=le({type:i}),i.\u0275inj=ce({providers:[we(Nt)],imports:[R]});let t=i;return t})();export{gi as PalsModule};
