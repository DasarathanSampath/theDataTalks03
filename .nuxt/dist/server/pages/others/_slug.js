exports.ids = [30];
exports.modules = {

/***/ 146:
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

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/others/_slug.vue?vue&type=template&id=11f4e2c6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blogContent"},[_c('SocialShare',{attrs:{"title":_vm.title,"description":_vm.description,"name":_vm.name,"section":"others"}}),_vm._ssrNode(" <article><h1 class=\"blogCard__title\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.title)+"\n    ")+"</h1> <h2 class=\"blogCard__desc\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.description)+"\n    ")+"</h2> <h3 class=\"blogCard__date\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.date)+"\n    ")+"</h3> <div>"+(_vm._s(_vm.content))+"</div></article>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/others/_slug.vue?vue&type=template&id=11f4e2c6&

// EXTERNAL MODULE: ./components/social.vue + 4 modules
var social = __webpack_require__(146);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/others/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
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
    const page = await __webpack_require__(150)(`./${store.state.locale}/others/${slug}.md`);
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
      return `${"http://thedatatalks.in"}/images/others/${this.name}/_thumbnail.png`;
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
        href: `${"http://thedatatalks.in" + (this.currentLanguage[0].code === 'en' ? '' : '/ta')}/others/${this.name}`,
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
// CONCATENATED MODULE: ./pages/others/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var others_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/others/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  others_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "775fb2d6"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map