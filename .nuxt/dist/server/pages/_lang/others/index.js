exports.ids = [16];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/others/anjirai-tamizh-ezhuthu.md": [
		201,
		60
	],
	"./en/others/cirupanjamoolam.md": [
		202,
		61
	],
	"./en/others/garlic-sauteed-vegetables.md": [
		203,
		62
	],
	"./en/others/gun-powder-chicken.md": [
		204,
		63
	],
	"./en/others/irattaip-pulavargal.md": [
		205,
		64
	],
	"./en/others/kaalamega-pulavar.md": [
		206,
		65
	],
	"./en/others/mambazha-puliserry.md": [
		207,
		66
	],
	"./en/others/mathanga-eriserry.md": [
		208,
		67
	],
	"./en/others/murgh-cheese-kebab.md": [
		209,
		68
	],
	"./en/others/naaladiyar.md": [
		210,
		69
	],
	"./en/others/nanmanikadigai.md": [
		211,
		70
	],
	"./en/others/sponge-cake.md": [
		212,
		71
	],
	"./ta/others/anjirai-tamizh-ezhuthu.md": [
		213,
		131
	],
	"./ta/others/cirupanjamoolam.md": [
		214,
		132
	],
	"./ta/others/garlic-sauteed-vegetables.md": [
		215,
		133
	],
	"./ta/others/gun-powder-chicken.md": [
		216,
		134
	],
	"./ta/others/irattaip-pulavargal.md": [
		217,
		135
	],
	"./ta/others/kaalamega-pulavar.md": [
		218,
		136
	],
	"./ta/others/mambazha-puliserry.md": [
		219,
		137
	],
	"./ta/others/mathanga-eriserry.md": [
		220,
		138
	],
	"./ta/others/murgh-cheese-kebab.md": [
		221,
		139
	],
	"./ta/others/naaladiyar.md": [
		222,
		140
	],
	"./ta/others/nanmanikadigai.md": [
		223,
		141
	],
	"./ta/others/sponge-cake.md": [
		224,
		142
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blogCardLayout.vue?vue&type=template&id=16ded370&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul style=\"padding: 0; list-style-type: none;\">","</ul>",[_vm._ssrNode("<div class=\"blogLayout\">","</div>",[_vm._ssrNode("<div>","</div>",_vm._l((_vm.blogs.slice(0,Math.round(_vm.noofblogs/3))),function(blog){return _vm._ssrNode("<li"+(_vm._ssrAttr("blog",blog))+" class=\"blogList\">","</li>",[_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path((_vm.section + "/" + (blog.name)))}},[_c('div',{staticClass:"blogCardH"},[_c('div',{staticClass:"blogCardH__image"},[_c('ImageResponsive',{attrs:{"image-u-r-l":(_vm.section + "/" + (blog.name) + "/_thumbnail.png")}})],1),_vm._v(" "),_c('div',{staticClass:"blogCardH__text"},[_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                  "+_vm._s(blog.title)+"\n                ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                  "+_vm._s(blog.desc)+"\n                ")]),_vm._v(" "),_c('h1',{staticClass:"blogCard__date"},[_vm._v("\n                  "+_vm._s(blog.date)+"\n                ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                  "+_vm._s(blog.imgDesc)+"\n                ")])])])])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",_vm._l((_vm.blogs.slice(Math.round(_vm.noofblogs/3),Math.round(1.75*_vm.noofblogs/3))),function(blog){return _vm._ssrNode("<li"+(_vm._ssrAttr("blog",blog))+" class=\"blogList\">","</li>",[_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path((_vm.section + "/" + (blog.name)))}},[_c('div',{staticClass:"blogCardV"},[_c('ImageResponsive',{attrs:{"image-u-r-l":(_vm.section + "/" + (blog.name) + "/_thumbnail.png"),"width":'50%'}}),_vm._v(" "),_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                "+_vm._s(blog.title)+"\n              ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                "+_vm._s(blog.desc)+"\n              ")]),_vm._v(" "),_c('h1',{staticClass:"blogCard__date"},[_vm._v("\n                "+_vm._s(blog.date)+"\n              ")])],1)])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",_vm._l((_vm.blogs.slice(Math.round(1.75*_vm.noofblogs/3),_vm.noofblogs)),function(blog){return _vm._ssrNode("<li"+(_vm._ssrAttr("blog",blog))+" class=\"blogList\">","</li>",[_c('nuxt-link',{staticClass:"nuxtLink",attrs:{"to":_vm.$i18n.path((_vm.section + "/" + (blog.name)))}},[_c('div',{staticClass:"blogCardV2"},[_c('h1',{staticClass:"blogCard__title"},[_vm._v("\n                "+_vm._s(blog.title)+"\n              ")]),_vm._v(" "),_c('h2',{staticClass:"blogCard__desc"},[_vm._v("\n                "+_vm._s(blog.desc)+"\n              ")])])])],1)}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blogCardLayout.vue?vue&type=template&id=16ded370&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogCardLayout.vue?vue&type=script&lang=js&
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
/* harmony default export */ var blogCardLayoutvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/blogCardLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_blogCardLayoutvue_type_script_lang_js_ = (blogCardLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blogCardLayout.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_blogCardLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "52b55ea6"
  
)

/* harmony default export */ var blogCardLayout = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['gun-powder-chicken', 'garlic-sauteed-vegetables', 'sponge-cake', 'murgh-cheese-kebab'
/* 'mambazha-puliserry',
'mathanga-eriserry' */
]);

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['nanmanikadigai', 'cirupanjamoolam', 'naaladiyar', 'kaalamega-pulavar', 'irattaip-pulavargal', 'anjirai-tamizh-ezhuthu', 'gun-powder-chicken', 'garlic-sauteed-vegetables', 'sponge-cake']);

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/others.md": [
		323,
		59
	],
	"./ta/others.md": [
		324,
		130
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
webpackAsyncContext.id = 300;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/others/index.vue?vue&type=template&id=48a45648&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BlogCards',{attrs:{"blogs":_vm.blogs,"section":_vm.name,"noofblogs":_vm.noOfBlogs}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_lang/others/index.vue?vue&type=template&id=48a45648&

// EXTERNAL MODULE: ./components/blogCardLayout.vue + 4 modules
var blogCardLayout = __webpack_require__(152);

// EXTERNAL MODULE: ./docs/en/others/blogsEn.js
var blogsEn = __webpack_require__(161);

// EXTERNAL MODULE: ./docs/ta/others/blogsTa.js
var blogsTa = __webpack_require__(162);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_lang/others/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var othersvue_type_script_lang_js_ = ({
  components: {
    BlogCards: blogCardLayout["a" /* default */]
  },

  async asyncData({
    route,
    params,
    store
  }) {
    const blogs = params.lang === 'ta' ? blogsTa["a" /* default */] : blogsEn["a" /* default */];
    const page = await __webpack_require__(300)(`./${store.state.locale}/others.md`);
    const fileContent = fm(page.default);
    const attributes = fileContent.attributes;

    async function asyncImport(blogName) {
      const wholeMD = await __webpack_require__(150)(`./${store.state.locale}/others/${blogName}.md`);
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
// CONCATENATED MODULE: ./pages/_lang/others/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _lang_othersvue_type_script_lang_js_ = (othersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_lang/others/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _lang_othersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7110e80c"
  
)

/* harmony default export */ var others = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map