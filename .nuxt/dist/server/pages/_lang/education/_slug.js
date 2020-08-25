exports.ids = [12];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/social.vue?vue&type=template&id=6f017930&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ShareNetwork',{attrs:{"network":"facebook","url":'http://thedatatalks.in'+_vm.$route.path,"title":_vm.title,"description":_vm.description,"quote":"Don't be in delusion, understand the reality from historical data","hashtags":"theDataTalks","img":'http://thedatatalks.in/images/'+_vm.section+'/'+_vm.name+'/_thumbnail.png'}},[_c('font-awesome-icon',{attrs:{"icon":['fab', 'facebook']}})],1),_vm._ssrNode(" "),_c('ShareNetwork',{attrs:{"network":"twitter","url":'http://thedatatalks.in'+_vm.$route.path,"title":_vm.title,"description":_vm.description,"quote":"Don't be in delusion, understand the reality from historical data","hashtags":"theDataTalks","img":'http://thedatatalks.in/images/'+_vm.section+'/'+_vm.name+'/_thumbnail.png'}},[_c('font-awesome-icon',{attrs:{"icon":['fab', 'twitter']}})],1),_vm._ssrNode(" "),_c('ShareNetwork',{attrs:{"network":"linkedin","url":'http://thedatatalks.in'+_vm.$route.path,"title":_vm.title,"description":_vm.description,"quote":"Don't be in delusion, understand the reality from historical data","hashtags":"theDataTalks","img":'http://thedatatalks.in/images/'+_vm.section+'/'+_vm.name+'/_thumbnail.png'}},[_c('font-awesome-icon',{attrs:{"icon":['fab', 'linkedin']}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/social.vue?vue&type=template&id=6f017930&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/social.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Facebook from '~/svgfiles/facebook.svg'
/* harmony default export */ var socialvue_type_script_lang_js_ = ({
  components: {// Facebook
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/social.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_socialvue_type_script_lang_js_ = (socialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/social.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_socialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f017930",
  "06cd1012"
  
)

/* harmony default export */ var social = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/education/bernouli-distribution-binomial-trials.md": [
		164,
		45
	],
	"./en/education/covid19-corona-virus-china-data.md": [
		165,
		46
	],
	"./en/education/covid19-corona-virus-india-data.md": [
		166,
		47
	],
	"./en/education/covid19-corona-virus-world-data.md": [
		167,
		48
	],
	"./en/education/discrete-continuous.md": [
		168,
		49
	],
	"./en/education/gaussian-normal-distribution.md": [
		169,
		50
	],
	"./en/education/nginx-pm2-nuxtjs.md": [
		170,
		51
	],
	"./en/education/p-value.md": [
		171,
		52
	],
	"./en/education/pm25-tl-hyderabad-sanathnagar.md": [
		172,
		53
	],
	"./en/education/pm25-tn-chennai-alandur.md": [
		173,
		54
	],
	"./en/education/random-variable.md": [
		174,
		55
	],
	"./en/education/standard-deviation-and-error.md": [
		175,
		56
	],
	"./en/education/uniform-distribution.md": [
		176,
		57
	],
	"./ta/education/bernouli-distribution-binomial-trials.md": [
		177,
		105
	],
	"./ta/education/covid19-corona-virus-china-data.md": [
		178,
		106
	],
	"./ta/education/covid19-corona-virus-india-data.md": [
		179,
		107
	],
	"./ta/education/covid19-corona-virus-world-data.md": [
		180,
		108
	],
	"./ta/education/nginx-pm2-nuxtjs.md": [
		181,
		109
	],
	"./ta/education/p-value.md": [
		182,
		110
	],
	"./ta/education/pm25-tl-hyderabad-sanathnagar.md": [
		183,
		111
	],
	"./ta/education/pm25-tn-chennai-alandur.md": [
		184,
		112
	],
	"./ta/education/standard-deviation-and-error.md": [
		185,
		113
	],
	"./ta/education/uniform-distribution.md": [
		186,
		114
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 135;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/education/_slug.vue?vue&type=template&id=1e682192&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blogContent"},[_c('SocialShare',{attrs:{"title":_vm.title,"description":_vm.description,"name":_vm.name,"section":"education"}}),_vm._ssrNode(" <h1 class=\"blogCard__title\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.title)+"\n  ")+"</h1> <h2 class=\"blogCard__desc\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.description)+"\n  ")+"</h2> <h3 class=\"blogCard__date\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.date)+"\n  ")+"</h3> <div>"+(_vm._s(_vm.content))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_lang/education/_slug.vue?vue&type=template&id=1e682192&

// EXTERNAL MODULE: ./components/social.vue + 4 modules
var social = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/education/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const fm = __webpack_require__(130);

const md = __webpack_require__(131)({
  html: true,
  linkify: true,
  typographer: true
});

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    SocialShare: social["a" /* default */]
  },

  async asyncData({
    store,
    params,
    route
  }) {
    const slug = route.params.slug;
    const page = await __webpack_require__(135)(`./${store.state.locale}/education/${slug}.md`);
    const fileContent = fm(page.default);
    const attributes = fileContent.attributes;
    return {
      title: attributes.title,
      description: attributes.desc,
      date: attributes.date,
      noMainImage: attributes.noMainImage,
      content: md.render(fileContent.body),
      name: attributes.name,
      altLang: attributes.altLang
    };
  },

  computed: {
    ogImage() {
      return `${"http://thedatatalks.in"}/images/education/${this.name}/_thumbnail.png`;
    },

    pageTitle() {
      return this.title;
    },

    currentLanguage() {
      return this.$store.state.langcodes.filter(i => i.code !== this.$store.state.locale);
    },

    hreflang() {
      if (!this.altLang) {
        return '';
      }

      return {
        hid: 'alternate-hreflang-' + this.currentLanguage[0].iso,
        rel: 'alternate',
        href: `${"http://thedatatalks.in" + (this.currentLanguage[0].code === 'en' ? '' : '/ta')}/education/${this.name}`,
        hreflang: this.currentLanguage[0].code
      };
    }

  },

  head() {
    return {
      title: this.pageTitle,
      htmlAttrs: {
        lang: this.$store.state.locale
      },
      meta: [{
        name: 'author',
        content: 'Dasarathan Sampath'
      }, {
        name: 'description',
        property: 'og:description',
        content: this.description,
        hid: 'description'
      }, {
        property: 'og:title',
        content: this.pageTitle + '(' + this.name + ')'
      }, {
        property: 'og:image',
        content: this.ogImage
      }, {
        name: 'twitter:description',
        content: this.description
      }, {
        name: 'twitter:image',
        content: this.ogImage
      }],
      link: [this.hreflang]
    };
  }

});
// CONCATENATED MODULE: ./pages/_lang/education/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var education_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_lang/education/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  education_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fdb7dd9a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map