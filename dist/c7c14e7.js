(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{660:function(t,r,n){"use strict";var e=n(3),o=n(129).findIndex,l=n(153),m="findIndex",c=!0;m in[]&&Array(1)[m]((function(){c=!1})),e({target:"Array",proto:!0,forced:c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(m)},662:function(t,r,n){"use strict";n.d(r,"a",(function(){return v}));n(12),n(10),n(22),n(23);var e=n(1),o=(n(51),n(15),n(4),n(127),n(13),n(38),n(76),n(660),n(672),n(667)),l=n(663),m=n(63),c=n(27),d=n(17);function h(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}var v=Object(c.a)(o.a,l.a,m.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){Object(e.a)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(r,n){return t.toggleMethod(t.getValue(r,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(r){return t.valueComparator(t.internalValue,r)};var r=this.internalValue;return Array.isArray(r)?function(n){return r.some((function(r){return t.valueComparator(r,n)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(d.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,i){return void 0===t.value?i:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var r=this,n=this.items.push(t)-1;t.$on("change",(function(){return r.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var r=this.items.indexOf(t),n=this.getValue(t,r);if(this.items.splice(r,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,r){var n=this.getValue(t,r);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var r=this.items.slice();t&&r.reverse();var n=r.find((function(t){return!t.disabled}));if(n){var e=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,e))}}},updateMultiple:function(t){var r=this,n=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),e=n.findIndex((function(n){return r.valueComparator(n,t)}));this.mandatory&&e>-1&&n.length-1<1||null!=this.max&&e<0&&n.length+1>this.max||(e>-1?n.splice(e,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var r=this.valueComparator(this.internalValue,t);this.mandatory&&r||(this.internalValue=r?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}});v.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},663:function(t,r,n){"use strict";var e=n(1),o=n(0);var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.a.extend({name:"proxyable",model:{prop:t,event:r},props:Object(e.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(r,t))}}},watch:Object(e.a)({},t,(function(t){this.internalLazyValue=t}))})}();r.a=l},667:function(t,r,n){"use strict";var e=n(0),o=n(2);r.a=e.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.i}}})},672:function(t,r,n){var content=n(673);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("1ef5ee20",content,!0,{sourceMap:!1})},673:function(t,r,n){var e=n(24),o=n(31),l=n(32),m=n(33),c=n(34),d=n(35),h=e((function(i){return i[1]})),v=o(l),f=o(m),x=o(c),w=o(d);h.push([t.i,'@font-face{font-display:swap;font-family:"Lekton";font-style:normal;font-weight:400;src:url('+v+') format("truetype")}@font-face{font-display:swap;font-family:"Lekton";font-style:italic;font-weight:400;src:url('+f+') format("truetype")}@font-face{font-display:swap;font-family:"Lekton";font-style:normal;font-weight:500;src:url('+x+') format("truetype")}@font-face{font-display:swap;font-family:"Lekton";font-style:normal;font-weight:700;src:url('+w+') format("truetype")}:root{--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--c:var(--clr);--font1:"Poppins",sans-serif;--font2:"League Gothic",sans-serif;--fw:initial;--resizer:max(12px,min(1vw,16px));--resizer-mobile:max(10px,min(1.5vw,12px));--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,.3));--sombra-card:0px 4px 4px rgba(0,0,0,.25);--sombra-btn:0px 4px 4px rgba(0,0,0,.25)}:root.light{--primary:hsla(0,0%,100%,.5);--secondary:#ffcb4c;--accent:#b07200;--active:var(--primary);--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--bg-ap:#05030f;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,.5)}:root.dark{--primary:hsla(0,0%,100%,.5);--secondary:#000;--accent:#b07200;--active:var(--primary);--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--bg-ap:#05030f;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:max(1em,min(5vw,4em))}}@media(max-width:880px){:root{--margin-global:max(1em,min(5vw,4em))}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:var(--primary)!important}.clr_secondary{background-color:var(--secondary)!important}.clr_accent{background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.parent{max-width:1600px!important;max-width:var(--parent)!important}.parent,.subparent{margin-left:auto;margin-right:auto;width:100%}.subparent{max-width:1900px!important;max-width:var(--subparent)!important}.margin_global{padding-left:9em;padding-left:var(--margin-global);padding-right:9em;padding-right:var(--margin-global)}@media(max-width:880px)and (fixed-width:){.margin_globalmobile{padding-left:9em!important;padding-left:var(--margin-global)!important;padding-right:9em!important;padding-right:var(--margin-global)!important}}@media(max-width:880px){.margin_globalmobile{padding-left:9em!important;padding-left:var(--margin-global)!important;padding-right:9em!important;padding-right:var(--margin-global)!important}}.btn{--bg:var(--primary);--c:#000;--b:initial;--p:.5em 1em;--w:initial;--max-w:none;--min-w:none;--h:initial;--max-h:none;--min-h:36px;--g:5px;--br:30px;--bs:0px 4px 4px rgba(0,0,0,.25);--fs:max(16px,1em);--fw:300;--ls:-0.005em;--lh:1;--f:initial;--t:initial;background:var(--primary)!important;background:var(--bg)!important;border:var(--b);border-radius:30px!important;border-radius:var(--br)!important;box-shadow:0 4px 4px rgba(0,0,0,.25)!important;box-shadow:var(--bs)!important;color:#000!important;color:var(--c)!important;filter:var(--f);font-size:max(16px,1em);font-size:var(--fs);height:var(--h)!important;max-height:none!important;max-height:var(--max-h)!important;max-width:none!important;max-width:var(--max-w)!important;min-height:36px!important;min-height:var(--min-h)!important;min-width:none!important;min-width:var(--min-w)!important;padding:.5em 1em!important;padding:var(--p)!important;transform:var(--t);width:var(--w)!important}.btn:has(>.v-btn__content>:only-child){--br:10px}.btn i,.btn img,.btn span{color:var(--clr);color:var(--c);font-size:1em;font-weight:var(--fw)!important;letter-spacing:var(--ls);line-height:var(--lh);text-transform:none;text-transform:var(--tt,initial)}.btn,.btn>.v-btn__content{display:flex;gap:var(--g)}.card{--w:initial;--max-w:none;--min-w:none;--h:initial;--max-h:none;--min-h:none;--bg:var(--clr-card);--c:var(--clr);--b:initial;--p:1em;--br:30px;--bs:0px 4px 4px rgba(0,0,0,.25);--f:initial;--t:initial;background:var(--clr-card)!important;background:var(--bg)!important;border:var(--b)!important;border-radius:30px!important;border-radius:var(--br)!important;box-shadow:0 4px 4px rgba(0,0,0,.25)!important;box-shadow:var(--bs)!important;color:var(--clr)!important;color:var(--c)!important;filter:var(--f);height:var(--h)!important;max-height:none!important;max-height:var(--max-h)!important;max-width:none!important;max-width:var(--max-w)!important;min-height:none!important;min-height:var(--min-h)!important;min-width:none!important;min-width:var(--min-w)!important;padding:1em;padding:var(--p);transform:var(--t);width:var(--w)!important}.v-item-group{flex:0 1 auto;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}',""]),h.locals={},t.exports=h},758:function(t,r,n){var content=n(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("38f88344",content,!0,{sourceMap:!1})},759:function(t,r,n){var e=n(24),o=n(31),l=n(32),m=n(33),c=n(34),d=n(35),h=e((function(i){return i[1]})),v=o(l),f=o(m),x=o(c),w=o(d);h.push([t.i,'@font-face{font-display:swap;font-family:"Lekton";font-style:normal;font-weight:400;src:url('+v+') format("truetype")}@font-face{font-display:swap;font-family:"Lekton";font-style:italic;font-weight:400;src:url('+f+') format("truetype")}@font-face{font-display:swap;font-family:"Lekton";font-style:normal;font-weight:500;src:url('+x+') format("truetype")}@font-face{font-display:swap;font-family:"Lekton";font-style:normal;font-weight:700;src:url('+w+') format("truetype")}:root{--error:#ff4081;--warning:#ffc260;--success:#3cd4a0;--c:var(--clr);--font1:"Poppins",sans-serif;--font2:"League Gothic",sans-serif;--fw:initial;--resizer:max(12px,min(1vw,16px));--resizer-mobile:max(10px,min(1.5vw,12px));--margin-global:9em;--parent:1600px;--subparent:1900px;--h-navbar:100px;--w-scroll:8px;--sombra-filter:drop-shadow(0px 4px 1px rgba(0,0,0,.3));--sombra-card:0px 4px 4px rgba(0,0,0,.25);--sombra-btn:0px 4px 4px rgba(0,0,0,.25)}:root.light{--primary:hsla(0,0%,100%,.5);--secondary:#ffcb4c;--accent:#b07200;--active:var(--primary);--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--bg-ap:#05030f;--clr:#000;--clr-hover:#270330;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#fff;--clr-btn:var(--primary);--clr-text-btn:#000;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,.5)}:root.dark{--primary:hsla(0,0%,100%,.5);--secondary:#000;--accent:#b07200;--active:var(--primary);--clr-gradient:linear-gradient(to right top,#356d74,#2a505c,#21394a,#1a293d,#172035,#161d33,#161e34,#192539,#1e3143,#244251,#2d5862,#387378,#449492,#53b9b1,#63e2d2);--bg-ap:#05030f;--clr:#fff;--clr-hover:#f3cffc;--clr-scroll:var(--primary);--clr-bg-scroll:var(--secondary);--clr-card:#191919;--clr-btn:var(--primary);--clr-text-btn:#fff;--clr-badge:var(--primary);--clr-text-badge:#000;--clr-line:rgba(235,231,36,.5)}@media(max-width:880px)and (fixed-width:){:root{--margin-global:max(1em,min(5vw,4em))}}@media(max-width:880px){:root{--margin-global:max(1em,min(5vw,4em))}}@media(max-width:880px)and (fixed-width:){:root{--h-navbar:80px}}@media(max-width:880px){:root{--h-navbar:80px}}.clr_primary{background-color:var(--primary)!important}.clr_secondary{background-color:var(--secondary)!important}.clr_accent{background-color:var(--accent)!important}.clr{color:var(--clr)!important}.clr_btn{background-color:var(--clr-btn)!important}.clr_btn_pressed{background-color:var(--clr-btn-pressed)!important}.clr_btn_inactive{background-color:var(--clr-btn-inactive)!important}.clr_text_btn{color:var(--clr-text-btn)!important}.clr_card{background-color:var(--clr-card)!important}.clr_svg{fill:var(--clr)!important}.flr{filter:invert(100%)!important}.flr_inv{filter:invert(0)!important}.clr-gradient{background:var(--clr-gradient)!important}.clr_card_2{background-color:var(--clr-card-2)!important}.parent{max-width:1600px!important;max-width:var(--parent)!important}.parent,.subparent{margin-left:auto;margin-right:auto;width:100%}.subparent{max-width:1900px!important;max-width:var(--subparent)!important}.margin_global{padding-left:9em;padding-left:var(--margin-global);padding-right:9em;padding-right:var(--margin-global)}@media(max-width:880px)and (fixed-width:){.margin_globalmobile{padding-left:9em!important;padding-left:var(--margin-global)!important;padding-right:9em!important;padding-right:var(--margin-global)!important}}@media(max-width:880px){.margin_globalmobile{padding-left:9em!important;padding-left:var(--margin-global)!important;padding-right:9em!important;padding-right:var(--margin-global)!important}}.btn{--bg:var(--primary);--c:#000;--b:initial;--p:.5em 1em;--w:initial;--max-w:none;--min-w:none;--h:initial;--max-h:none;--min-h:36px;--g:5px;--br:30px;--bs:0px 4px 4px rgba(0,0,0,.25);--fs:max(16px,1em);--fw:300;--ls:-0.005em;--lh:1;--f:initial;--t:initial;background:var(--primary)!important;background:var(--bg)!important;border:var(--b);border-radius:30px!important;border-radius:var(--br)!important;box-shadow:0 4px 4px rgba(0,0,0,.25)!important;box-shadow:var(--bs)!important;color:#000!important;color:var(--c)!important;filter:var(--f);font-size:max(16px,1em);font-size:var(--fs);height:var(--h)!important;max-height:none!important;max-height:var(--max-h)!important;max-width:none!important;max-width:var(--max-w)!important;min-height:36px!important;min-height:var(--min-h)!important;min-width:none!important;min-width:var(--min-w)!important;padding:.5em 1em!important;padding:var(--p)!important;transform:var(--t);width:var(--w)!important}.btn:has(>.v-btn__content>:only-child){--br:10px}.btn i,.btn img,.btn span{color:var(--clr);color:var(--c);font-size:1em;font-weight:var(--fw)!important;letter-spacing:var(--ls);line-height:var(--lh);text-transform:none;text-transform:var(--tt,initial)}.btn,.btn>.v-btn__content{display:flex;gap:var(--g)}.card{--w:initial;--max-w:none;--min-w:none;--h:initial;--max-h:none;--min-h:none;--bg:var(--clr-card);--c:var(--clr);--b:initial;--p:1em;--br:30px;--bs:0px 4px 4px rgba(0,0,0,.25);--f:initial;--t:initial;background:var(--clr-card)!important;background:var(--bg)!important;border:var(--b)!important;border-radius:30px!important;border-radius:var(--br)!important;box-shadow:0 4px 4px rgba(0,0,0,.25)!important;box-shadow:var(--bs)!important;color:var(--clr)!important;color:var(--c)!important;filter:var(--f);height:var(--h)!important;max-height:none!important;max-height:var(--max-h)!important;max-width:none!important;max-width:var(--max-w)!important;min-height:none!important;min-height:var(--min-h)!important;min-width:none!important;min-width:var(--min-w)!important;padding:1em;padding:var(--p);transform:var(--t);width:var(--w)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-bottom-left-radius:inherit;border-top-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-bottom-right-radius:inherit;border-top-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-bottom-left-radius:inherit;border-top-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle .v-btn.v-btn.v-size--default{min-height:0;min-width:48px}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}',""]),h.locals={},t.exports=h},781:function(t,r,n){"use strict";n(12),n(10),n(15),n(4),n(22),n(13),n(23);var e=n(1),o=(n(758),n(662)),l=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}}),m=n(75),c=n(27);function d(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function h(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?d(Object(n),!0).forEach((function(r){Object(e.a)(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}r.a=Object(c.a)(l,m.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return h(h({},l.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,h({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})}}]);