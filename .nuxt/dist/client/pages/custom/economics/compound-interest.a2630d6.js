(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{280:function(t,e,n){"use strict";var o={components:{},props:{title:{type:String,required:!0},description:{type:String,required:!0},name:{type:String,required:!0},section:{type:String,required:!0}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ShareNetwork",{attrs:{network:"facebook",url:"http://thedatatalks.in"+t.$route.path,title:t.title,description:t.description,quote:"Don't be in delusion, understand the reality from historical data",hashtags:"theDataTalks",img:"http://thedatatalks.in/images/"+t.section+"/"+t.name+"/_thumbnail.png"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),t._v(" "),n("ShareNetwork",{attrs:{network:"twitter",url:"http://thedatatalks.in"+t.$route.path,title:t.title,description:t.description,quote:"Don't be in delusion, understand the reality from historical data",hashtags:"theDataTalks",img:"http://thedatatalks.in/images/"+t.section+"/"+t.name+"/_thumbnail.png"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),n("ShareNetwork",{attrs:{network:"linkedin",url:"http://thedatatalks.in"+t.$route.path,title:t.title,description:t.description,quote:"Don't be in delusion, understand the reality from historical data",hashtags:"theDataTalks",img:"http://thedatatalks.in/images/"+t.section+"/"+t.name+"/_thumbnail.png"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)],1)}),[],!1,null,"6f017930",null);e.a=component.exports},434:function(t,e,n){var content=n(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0ece5da2",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";var o=n(434);n.n(o).a},445:function(t,e,n){(e=n(17)(!1)).push([t.i,".input-control{margin:10px 0}.input-control label{display:block;font-weight:700;float:left;margin:10px;width:75%;text-align:left}.input-control input,.input-control select,.input-control textarea{display:block;width:25%;box-sizing:border-box;font:inherit;border:1px solid #ccc;padding:5px;text-align:right}@media only screen and (max-width:1024px){.input-control input,.input-control select,.input-control textarea{width:50%}}@media only screen and (max-width:800px){.input-control input,.input-control select,.input-control textarea{width:25%}}.input-control input:focus,.input-control select:focus,.input-control textarea:focus{background-color:#eee;outline:none}",""]),t.exports=e},446:function(t,e,n){"use strict";var o={name:"AppInputControl",props:{controlType:{type:String,default:"input"},value:{type:String,default:""},arr:{type:Array,default:function(){return["Monthly","Quarterly","HalfYearly","Yearly"]}}}},r=(n(444),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-control"},[n("label",[t._t("default")],2),t._v(" "),"input"===t.controlType?n("input",t._b({domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)):t._e(),t._v(" "),"textarea"===t.controlType?n("textarea",{attrs:{rows:"3"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):t._e(),t._v(" "),"dropdownbox"===t.controlType?n("select",t._b({on:{input:function(e){return t.$emit("input",e.target.value)}}},"select",t.$attrs,!1),t._l(t.arr,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,null,null);e.a=component.exports},464:function(t,e,n){var map={"./en/economics/compound-interest.md":[290,6],"./ta/economics/compound-interest.md":[298,17]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(map)},o.id=464,t.exports=o},465:function(t,e,n){var content=n(565);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("15327a30",content,!0,{sourceMap:!1})},564:function(t,e,n){"use strict";var o=n(465);n.n(o).a},565:function(t,e,n){(e=n(17)(!1)).push([t.i,".result[data-v-173b92d6]{display:block;width:80%;box-sizing:border-box;font:inherit;font-weight:700;background-color:#d3d3d3;border:1px solid #ccc;padding:5px;text-align:left;margin:10px 40px 10px 10px}.thisLayout[data-v-173b92d6]{float:left}",""]),t.exports=e},582:function(t,e,n){"use strict";n.r(e);n(35),n(16);var o=n(2),r=n(280),l=n(446),c=n(281),d=n(282)({html:!0,linkify:!0,typographer:!0}),h={components:{AppControlInput:l.a,SocialShare:r.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var o,r,l,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.store,t.params,t.route,e.next=3,n(464)("./".concat(o.state.locale,"/economics/compound-interest.md"));case 3:return r=e.sent,l=c(r.default),h=l.attributes,e.abrupt("return",{title:h.title,description:h.desc,date:h.date,noMainImage:h.noMainImage,content:d.render(l.body),name:h.name,altLang:h.altLang,headA1:h.headA1,headA2:h.headA2,headA3:h.headA3,headA4:h.headA4,headA5:h.headA5,headA6:h.headA6,headA7:h.headA7,headA8:h.headA8,headA9:h.headA9});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{inputValues:{oneTimeDeposit:"",period:"",rateOfInterest:"",compoundingPeriod:"Monthly"}}},computed:{cmCompoundingTimes:function(){var t;return"HalfYearly"===this.inputValues.compoundingPeriod&&(t=2),"Yearly"===this.inputValues.compoundingPeriod&&(t=1),"Quarterly"===this.inputValues.compoundingPeriod&&(t=4),"Monthly"===this.inputValues.compoundingPeriod&&(t=12),t},comopoundInterest:function(){return Math.round((Math.pow(1+this.inputValues.rateOfInterest/100/this.cmCompoundingTimes,this.inputValues.period*this.cmCompoundingTimes)-1)*this.inputValues.oneTimeDeposit)},ogImage:function(){return"".concat("http://thedatatalks.in","/images/custom/economics/").concat(this.name,"/_thumbnail.png")},pageTitle:function(){return this.title},altLanguage:function(){var t=this;return this.$store.state.langcodes.filter((function(i){return i.code!==t.$store.state.locale}))},hreflang:function(){return this.altLang?{hid:"alternate-hreflang-"+this.altLanguage[0].iso,rel:"alternate",href:"".concat("http://thedatatalks.in"+("en"===this.altLanguage[0].code?"":"/ta"),"/custom/economics/").concat(this.name),hreflang:this.altLanguage[0].code}:""}},methods:{},head:function(){return{title:this.pageTitle,htmlAttrs:{lang:this.$store.state.locale},meta:[{name:"author",content:"Dasarathan Sampath"},{name:"description",property:"og:description",content:this.description,hid:"description"},{property:"og:title",content:this.pageTitle},{name:"twitter:description",content:this.description},{name:"twitter:image",content:this.ogImage}],link:[this.hreflang]}}},m=(n(564),n(8)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",[n("SocialShare",{attrs:{title:t.title,description:t.description,name:t.name,section:"economics"}}),t._v(" "),n("article",[n("div",{staticClass:"thisLayout"},[n("h1",{staticClass:"blogCard__title"},[t._v("\n      "+t._s(t.headA1)+"\n      "),n("h2",{staticClass:"blogCard__desc"},[t._v("\n        "+t._s(t.headA2)+"\n      ")])]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[n("AppControlInput",{model:{value:t.inputValues.oneTimeDeposit,callback:function(e){t.$set(t.inputValues,"oneTimeDeposit",e)},expression:"inputValues.oneTimeDeposit"}},[t._v("\n        "+t._s(t.headA3)+"\n      ")]),t._v(" "),n("AppControlInput",{model:{value:t.inputValues.period,callback:function(e){t.$set(t.inputValues,"period",e)},expression:"inputValues.period"}},[t._v("\n        "+t._s(t.headA4)+"\n      ")]),t._v(" "),n("AppControlInput",{model:{value:t.inputValues.rateOfInterest,callback:function(e){t.$set(t.inputValues,"rateOfInterest",e)},expression:"inputValues.rateOfInterest"}},[t._v("\n        "+t._s(t.headA5)+"\n      ")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"dropdownbox"},model:{value:t.inputValues.compoundingPeriod,callback:function(e){t.$set(t.inputValues,"compoundingPeriod",e)},expression:"inputValues.compoundingPeriod"}},[t._v("\n        "+t._s(t.headA6)+"\n      ")]),t._v(" "),n("div",{staticClass:"result"},[t._v("\n        "+t._s(t.headA7)+":  "+t._s(t.inputValues.oneTimeDeposit)),n("br"),t._v("\n        "+t._s(t.headA8)+": "+t._s(t.comopoundInterest)+" "),n("br"),t._v("\n        "+t._s(t.headA9)+": "+t._s(+t.comopoundInterest+ +t.inputValues.oneTimeDeposit)+"\n      ")])],1)]),t._v(" "),n("div",[n("h1",{staticClass:"blogCard__title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"blogCard__desc"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("h3",{staticClass:"blogCard__date"},[t._v("\n    "+t._s(t.date)+"\n  ")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content)}})])])],1)])}),[],!1,null,"173b92d6",null);e.default=component.exports}}]);