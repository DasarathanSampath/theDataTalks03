exports.ids = [27];
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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4ec706c4", content, true, context)
};

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".e-mathjax{text-align:left}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/education/_slug.vue?vue&type=template&id=0adabd9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blogContent"},[_c('SocialShare',{attrs:{"title":_vm.title,"description":_vm.description,"name":_vm.name,"section":"education"}}),_vm._ssrNode(" <h1 class=\"blogCard__title\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.title)+"\n  ")+"</h1> <h2 class=\"blogCard__desc\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.description)+"\n  ")+"</h2> <h3 class=\"blogCard__date\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.date)+"\n  ")+"</h3> <span class=\"e-mathjax\">"+(_vm._s(_vm.content))+"</span>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/education/_slug.vue?vue&type=template&id=0adabd9e&

// EXTERNAL MODULE: ./components/social.vue + 4 modules
var social = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/education/_slug.vue?vue&type=script&lang=js&
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
  typographer: true,
  injected: true,
  breaks: false,
  use: ['markdown-it-mathjax', 'markdown-it-container', 'markdown-it-attrs']
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

  mounted() {
    this.renderMathJax();
  },

  methods: {
    renderMathJax() {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true
          },
          displayAlign: 'left',
          'HTML-CSS': {
            styles: {
              '.MathJax_Display': {
                margin: 0
              }
            },
            linebreaks: {
              automatic: true
            }
          }
        });
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, this.$refs.mathJaxEl]);
      }
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
        content: this.pageTitle
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
      link: [this.hreflang],
      script: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/education/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var education_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/education/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(293)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  education_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71ccd3c2"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map