exports.ids = [33];
exports.modules = {

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/politics/bjp-major-milestone.md": [
		211,
		73
	],
	"./en/politics/centrism.md": [
		212,
		74
	],
	"./en/politics/constitution.md": [
		213,
		75
	],
	"./en/politics/delhi-electors-voters-details.md": [
		214,
		76
	],
	"./en/politics/delhi-over-view-of-legislative-results.md": [
		215,
		77
	],
	"./en/politics/delhi-vote-share-and-growth.md": [
		216,
		78
	],
	"./en/politics/electors-voters-details.md": [
		217,
		79
	],
	"./en/politics/inc-major-milestone.md": [
		218,
		80
	],
	"./en/politics/leftism.md": [
		219,
		81
	],
	"./en/politics/over-view-of-indian-parliamentary-results.md": [
		220,
		82
	],
	"./en/politics/political-alliances-of-india.md": [
		221,
		83
	],
	"./en/politics/political-spectrum.md": [
		222,
		84
	],
	"./en/politics/rightism.md": [
		223,
		85
	],
	"./en/politics/tamil-nadu-2001-legislative-election.md": [
		224,
		86
	],
	"./en/politics/tamil-nadu-2006-legislative-election.md": [
		225,
		87
	],
	"./en/politics/tamil-nadu-2011-legislative-election.md": [
		226,
		88
	],
	"./en/politics/tamil-nadu-2016-legislative-election.md": [
		227,
		89
	],
	"./en/politics/tn-electors-voters-details.md": [
		228,
		90
	],
	"./en/politics/tn-over-view-of-legislative-results.md": [
		229,
		91
	],
	"./en/politics/tn-vote-share-and-growth.md": [
		230,
		92
	],
	"./en/politics/vote-share-and-growth.md": [
		231,
		93
	],
	"./ta/politics/bjp-major-milestone.md": [
		232,
		130
	],
	"./ta/politics/centrism.md": [
		233,
		131
	],
	"./ta/politics/constitution.md": [
		234,
		132
	],
	"./ta/politics/delhi-electors-voters-details.md": [
		235,
		133
	],
	"./ta/politics/delhi-over-view-of-legislative-results.md": [
		236,
		134
	],
	"./ta/politics/delhi-vote-share-and-growth.md": [
		237,
		135
	],
	"./ta/politics/electors-voters-details.md": [
		238,
		136
	],
	"./ta/politics/inc-major-milestone.md": [
		239,
		137
	],
	"./ta/politics/leftism.md": [
		240,
		138
	],
	"./ta/politics/over-view-of-indian-parliamentary-results.md": [
		241,
		139
	],
	"./ta/politics/political-alliances-of-india.md": [
		242,
		140
	],
	"./ta/politics/political-spectrum.md": [
		243,
		141
	],
	"./ta/politics/rightism.md": [
		244,
		142
	],
	"./ta/politics/tamil-nadu-2001-legislative-election.md": [
		245,
		143
	],
	"./ta/politics/tamil-nadu-2006-legislative-election.md": [
		246,
		144
	],
	"./ta/politics/tamil-nadu-2011-legislative-election.md": [
		247,
		145
	],
	"./ta/politics/tamil-nadu-2016-legislative-election.md": [
		248,
		146
	],
	"./ta/politics/tn-electors-voters-details.md": [
		249,
		147
	],
	"./ta/politics/tn-over-view-of-legislative-results.md": [
		250,
		148
	],
	"./ta/politics/tn-vote-share-and-growth.md": [
		251,
		149
	],
	"./ta/politics/vote-share-and-growth.md": [
		252,
		150
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
webpackAsyncContext.id = 137;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 138:
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['over-view-of-indian-parliamentary-results', 'political-spectrum', 'vote-share-and-growth', 'tn-electors-voters-details', 'tn-over-view-of-legislative-results', 'tn-vote-share-and-growth', 'delhi-over-view-of-legislative-results', 'delhi-electors-voters-details', 'electors-voters-details', 'political-alliances-of-india', 'constitution', 'delhi-vote-share-and-growth', 'leftism', 'rightism', 'centrism', 'bjp-major-milestone', 'inc-major-milestone', 'tamil-nadu-2001-legislative-election', 'tamil-nadu-2006-legislative-election', 'tamil-nadu-2011-legislative-election', 'tamil-nadu-2016-legislative-election']);

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (['over-view-of-indian-parliamentary-results', 'political-spectrum', 'vote-share-and-growth', 'tn-electors-voters-details', 'tn-over-view-of-legislative-results', 'tn-vote-share-and-growth', 'delhi-over-view-of-legislative-results', 'delhi-electors-voters-details', 'tamil-nadu-2001-legislative-election', 'tamil-nadu-2006-legislative-election', 'tamil-nadu-2011-legislative-election', 'tamil-nadu-2016-legislative-election']);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/politics.md": [
		283,
		72
	],
	"./ta/politics.md": [
		284,
		129
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
webpackAsyncContext.id = 259;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/politics/index.vue?vue&type=template&id=f7a63b08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('BlogCards',{attrs:{"blogs":_vm.blogs,"section":_vm.name,"noofblogs":_vm.noOfBlogs}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/politics/index.vue?vue&type=template&id=f7a63b08&

// EXTERNAL MODULE: ./components/blogCardLayout.vue + 4 modules
var blogCardLayout = __webpack_require__(138);

// EXTERNAL MODULE: ./docs/en/politics/blogsEn.js
var blogsEn = __webpack_require__(149);

// EXTERNAL MODULE: ./docs/ta/politics/blogsTa.js
var blogsTa = __webpack_require__(150);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/politics/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var politicsvue_type_script_lang_js_ = ({
  components: {
    BlogCards: blogCardLayout["a" /* default */]
  },

  async asyncData({
    route,
    params,
    store
  }) {
    const blogs = params.lang === 'ta' ? blogsTa["a" /* default */] : blogsEn["a" /* default */];
    const page = await __webpack_require__(259)(`./${store.state.locale}/politics.md`);
    const fileContent = fm(page.default);
    const attributes = fileContent.attributes;

    async function asyncImport(blogName) {
      const wholeMD = await __webpack_require__(137)(`./${store.state.locale}/politics/${blogName}.md`);
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
// CONCATENATED MODULE: ./pages/politics/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_politicsvue_type_script_lang_js_ = (politicsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/politics/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_politicsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "da7aa14a"
  
)

/* harmony default export */ var politics = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map