(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{263:function(t,e,n){"use strict";var r={components:{},props:{title:{type:String,required:!0},description:{type:String,required:!0},name:{type:String,required:!0},section:{type:String,required:!0}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ShareNetwork",{attrs:{network:"facebook",url:"http://thedatatalks.in"+t.$route.path,title:t.title,description:t.description,quote:"Don't be in delusion, understand the reality from historical data",hashtags:"theDataTalks",img:"http://thedatatalks.in/images/"+t.section+"/"+t.name+"/_thumbnail.png"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),t._v(" "),n("ShareNetwork",{attrs:{network:"twitter",url:"http://thedatatalks.in"+t.$route.path,title:t.title,description:t.description,quote:"Don't be in delusion, understand the reality from historical data",hashtags:"theDataTalks",img:"http://thedatatalks.in/images/"+t.section+"/"+t.name+"/_thumbnail.png"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),t._v(" "),n("ShareNetwork",{attrs:{network:"linkedin",url:"http://thedatatalks.in"+t.$route.path,title:t.title,description:t.description,quote:"Don't be in delusion, understand the reality from historical data",hashtags:"theDataTalks",img:"http://thedatatalks.in/images/"+t.section+"/"+t.name+"/_thumbnail.png"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)],1)}),[],!1,null,"6f017930",null);e.a=component.exports},418:function(t,e,n){var map={"./en/privacy.md":[280,12],"./ta/privacy.md":[288,23]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=418,t.exports=r},536:function(t,e,n){"use strict";n.r(e);n(32),n(23);var r=n(2),o=n(263),c=n(264),l=n(265)({html:!0,linkify:!0,typographer:!0}),h={components:{SocialShare:o.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o,h,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,t.params,t.route,e.next=3,n(418)("./".concat(r.state.locale,"/privacy.md"));case 3:return o=e.sent,h=c(o.default),d=h.attributes,e.abrupt("return",{title:d.title,description:d.desc,date:d.date,noMainImage:d.noMainImage,content:l.render(h.body),name:d.name,altLang:d.altLang});case 7:case"end":return e.stop()}}),e)})))()},computed:{ogImage:function(){return"".concat("http://thedatatalks.in","/icon.png")},pageTitle:function(){return this.title},altLanguage:function(){var t=this;return this.$store.state.langcodes.filter((function(i){return i.code!==t.$store.state.locale}))},hreflang:function(){return this.altLang?{hid:"alternate-hreflang-"+this.altLanguage[0].iso,rel:"alternate",href:"".concat("http://thedatatalks.in"+("en"===this.altLanguage[0].code?"":"/ta"),"/").concat(this.name),hreflang:this.altLanguage[0].code}:""}},head:function(){return{title:this.pageTitle,htmlAttrs:{lang:this.$store.state.locale},meta:[{name:"author",content:"Dasarathan Sampath"},{name:"description",property:"og:description",content:this.description,hid:"description"},{property:"og:title",content:this.pageTitle},{property:"og:image",content:this.ogImage},{name:"twitter:description",content:this.description},{name:"twitter:image",content:this.ogImage}],link:[this.hreflang]}}},d=n(8),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogContent"},[n("SocialShare",{attrs:{title:t.title,description:t.description,name:t.name,section:""}}),t._v(" "),n("h1",{staticClass:"blogCard__title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("h2",{staticClass:"blogCard__desc"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("h3",{staticClass:"blogCard__date"},[t._v("\n    "+t._s(t.date)+"\n  ")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content)}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);