exports.ids = [11];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/economics/analysis-on-imports-and-exports-of-india.md": [
		168,
		39
	],
	"./en/economics/compound-interest.md": [
		153,
		0
	],
	"./en/economics/exports-of-india.md": [
		169,
		40
	],
	"./en/economics/imports-of-india.md": [
		170,
		41
	],
	"./en/economics/nifty50-10year-bond-yield.md": [
		171,
		42
	],
	"./en/economics/recurring-deposit.md": [
		154,
		1
	],
	"./en/economics/reinvestment-deposit-scheme.md": [
		172,
		43
	],
	"./ta/economics/analysis-on-imports-and-exports-of-india.md": [
		173,
		113
	],
	"./ta/economics/compound-interest.md": [
		155,
		2
	],
	"./ta/economics/exports-of-india.md": [
		174,
		114
	],
	"./ta/economics/imports-of-india.md": [
		175,
		115
	],
	"./ta/economics/nifty50-10year-bond-yield.md": [
		176,
		116
	],
	"./ta/economics/recurring-deposit.md": [
		156,
		3
	],
	"./ta/economics/reinvestment-deposit-scheme.md": [
		177,
		117
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
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['analysis-on-imports-and-exports-of-india', 'nifty50-10year-bond-yield', 'reinvestment-deposit-scheme', 'imports-of-india', 'exports-of-india']);

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['analysis-on-imports-and-exports-of-india', 'nifty50-10year-bond-yield', 'reinvestment-deposit-scheme']);

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/economics.md": [
		319,
		38
	],
	"./ta/economics.md": [
		320,
		112
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
webpackAsyncContext.id = 298;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blogCardLayoutEconomics.vue?vue&type=template&id=5c459dcf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul style=\"padding: 0; list-style-type: none;\">","</ul>",[_vm._ssrNode("<div class=\"blogLayout\">","</div>",[_vm._ssrNode("<div>","</div>",_vm._l((_vm.blogs.slice(0,Math.round(_vm.noofblogs/3))),function(blog){return _vm._ssrNode("<li"+(_vm._ssrAttr("blog",blog))+" class=\"blogList\">","</li>",[_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path((_vm.section + "/" + (blog.name)))}},[_c('div',{staticClass:"blogCardH"},[_c('div',{staticClass:"blogCardH__image"},[_c('ImageResponsive',{attrs:{"image-u-r-l":(_vm.section + "/" + (blog.name) + "/_thumbnail.png")}})],1),_vm._v(" "),_c('div',{staticClass:"blogCardH__text"},[_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                  "+_vm._s(blog.title)+"\n                ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                  "+_vm._s(blog.desc)+"\n                ")]),_vm._v(" "),_c('h1',{staticClass:"blogCard__date"},[_vm._v("\n                  "+_vm._s(blog.date)+"\n                ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                  "+_vm._s(blog.imgDesc)+"\n                ")])])])])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",_vm._l((_vm.blogs.slice(Math.round(_vm.noofblogs/3),Math.round(1.75*_vm.noofblogs/3))),function(blog){return _vm._ssrNode("<li"+(_vm._ssrAttr("blog",blog))+" class=\"blogList\">","</li>",[_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path('custom/economics/compound-interest')}},[_c('div',{staticClass:"blogCardV2"},[_c('ImageResponsive',{attrs:{"image-u-r-l":"custom/economics/compound-interest/_thumbnail.png","width":'50%'}}),_vm._v(" "),_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                Compound Interest "),_c('br'),_vm._v(" கூட்டு வட்டி\n              ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                Calculator "),_c('br'),_vm._v(" கணக்கி\n              ")])],1)]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path('custom/economics/recurring-deposit')}},[_c('div',{staticClass:"blogCardV2"},[_c('ImageResponsive',{attrs:{"image-u-r-l":"custom/economics/recurring-deposit/_thumbnail.png","width":'50%'}}),_vm._v(" "),_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                Recurring Deposit "),_c('br'),_vm._v(" தொடர் வைப்பு\n              ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                Calculator "),_c('br'),_vm._v(" கணக்கி\n              ")])],1)]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path((_vm.section + "/" + (blog.name)))}},[_c('div',{staticClass:"blogCardV"},[_c('ImageResponsive',{attrs:{"image-u-r-l":(_vm.section + "/" + (blog.name) + "/_thumbnail.png"),"width":'50%'}}),_vm._v(" "),_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                "+_vm._s(blog.title)+"\n              ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                "+_vm._s(blog.desc)+"\n              ")]),_vm._v(" "),_c('h1',{staticClass:"blogCard__date"},[_vm._v("\n                "+_vm._s(blog.date)+"\n              ")])],1)])],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",_vm._l((_vm.blogs.slice(Math.round(1.75*_vm.noofblogs/3),_vm.noofblogs)),function(blog){return _vm._ssrNode("<li"+(_vm._ssrAttr("blog",blog))+" class=\"blogList\">","</li>",[_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path((_vm.section + "/" + (blog.name)))}},[_c('div',{staticClass:"blogCardV2"},[_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                "+_vm._s(blog.title)+"\n              ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                "+_vm._s(blog.desc)+"\n              ")])])])],1)}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blogCardLayoutEconomics.vue?vue&type=template&id=5c459dcf&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogCardLayoutEconomics.vue?vue&type=script&lang=js&
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
/* harmony default export */ var blogCardLayoutEconomicsvue_type_script_lang_js_ = ({
  props: {
    blogs: {
      type: Array,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    noofblogs: {
      type: Number,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/blogCardLayoutEconomics.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_blogCardLayoutEconomicsvue_type_script_lang_js_ = (blogCardLayoutEconomicsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blogCardLayoutEconomics.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_blogCardLayoutEconomicsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "23386648"
  
)

/* harmony default export */ var blogCardLayoutEconomics = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/economics/index.vue?vue&type=template&id=48c2e38a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<article>","</article>",[_c('BlogCards',{attrs:{"blogs":_vm.blogs,"section":_vm.name,"noofblogs":_vm.noOfBlogs}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_lang/economics/index.vue?vue&type=template&id=48c2e38a&

// EXTERNAL MODULE: ./components/blogCardLayoutEconomics.vue + 4 modules
var blogCardLayoutEconomics = __webpack_require__(311);

// EXTERNAL MODULE: ./docs/en/economics/blogsEn.js
var blogsEn = __webpack_require__(157);

// EXTERNAL MODULE: ./docs/ta/economics/blogsTa.js
var blogsTa = __webpack_require__(158);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/economics/index.vue?vue&type=script&lang=js&
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




const fm = __webpack_require__(144);

const md = __webpack_require__(145)({
  html: true,
  linkify: true,
  typographer: true
});

/* harmony default export */ var economicsvue_type_script_lang_js_ = ({
  components: {
    BlogCards: blogCardLayoutEconomics["a" /* default */]
  },

  async asyncData({
    route,
    params,
    store
  }) {
    const blogs = params.lang === 'ta' ? blogsTa["a" /* default */] : blogsEn["a" /* default */];
    const page = await __webpack_require__(298)(`./${store.state.locale}/economics.md`);
    const fileContent = fm(page.default);
    const attributes = fileContent.attributes;

    async function asyncImport(blogName) {
      const wholeMD = await __webpack_require__(148)(`./${store.state.locale}/economics/${blogName}.md`);
      const res = fm(wholeMD.default);
      return res.attributes;
    }

    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        blogs: res,
        title: attributes.title,
        description: attributes.desc,
        date: attributes.date,
        noMainImage: attributes.noMainImage,
        content: md.render(fileContent.body),
        name: attributes.name,
        imgDesc: attributes.imgDesc,
        altLang: attributes.altLang,
        noOfBlogs: blogs.length
      };
    });
  },

  computed: {
    ogImage() {
      return `${"http://thedatatalks.in"}/images/${this.name}/_thumbnail.png`;
    },

    pageTitle() {
      return this.title;
    },

    altLanguage() {
      return this.$store.state.langcodes.filter(i => i.code !== this.$store.state.locale);
    },

    hreflang() {
      if (!this.altLang) {
        return '';
      }

      return {
        hid: 'alternate-hreflang-' + this.altLanguage[0].iso,
        rel: 'alternate',
        href: `${"http://thedatatalks.in" + (this.altLanguage[0].code === 'en' ? '' : '/ta')}/${this.name}`,
        hreflang: this.altLanguage[0].code
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
      link: [this.hreflang]
    };
  }

});
// CONCATENATED MODULE: ./pages/_lang/economics/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _lang_economicsvue_type_script_lang_js_ = (economicsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_lang/economics/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _lang_economicsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56b5a31e"
  
)

/* harmony default export */ var economics = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map