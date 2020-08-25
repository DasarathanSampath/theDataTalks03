import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _065236e0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _85c6599a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _da5f7f50 = () => interopDefault(import('..\\pages\\disclaimer.vue' /* webpackChunkName: "pages/disclaimer" */))
const _c3dad21e = () => interopDefault(import('..\\pages\\economics\\index.vue' /* webpackChunkName: "pages/economics/index" */))
const _92e4d7b2 = () => interopDefault(import('..\\pages\\education\\index.vue' /* webpackChunkName: "pages/education/index" */))
const _02e1883c = () => interopDefault(import('..\\pages\\others\\index.vue' /* webpackChunkName: "pages/others/index" */))
const _7a5b8664 = () => interopDefault(import('..\\pages\\politics\\index.vue' /* webpackChunkName: "pages/politics/index" */))
const _1448de9b = () => interopDefault(import('..\\pages\\privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _ca56f548 = () => interopDefault(import('..\\pages\\custom\\economics\\compound-interest.vue' /* webpackChunkName: "pages/custom/economics/compound-interest" */))
const _e411e204 = () => interopDefault(import('..\\pages\\custom\\economics\\recurring-deposit.vue' /* webpackChunkName: "pages/custom/economics/recurring-deposit" */))
const _c74814ae = () => interopDefault(import('..\\pages\\economics\\_slug.vue' /* webpackChunkName: "pages/economics/_slug" */))
const _96521a42 = () => interopDefault(import('..\\pages\\education\\_slug.vue' /* webpackChunkName: "pages/education/_slug" */))
const _064ecacc = () => interopDefault(import('..\\pages\\others\\_slug.vue' /* webpackChunkName: "pages/others/_slug" */))
const _78a4e51c = () => interopDefault(import('..\\pages\\politics\\_slug.vue' /* webpackChunkName: "pages/politics/_slug" */))
const _260a11a5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7bf17262 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _5c39979d = () => interopDefault(import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages/_lang/about" */))
const _36aef8b0 = () => interopDefault(import('..\\pages\\_lang\\contact.vue' /* webpackChunkName: "pages/_lang/contact" */))
const _2dee648a = () => interopDefault(import('..\\pages\\_lang\\disclaimer.vue' /* webpackChunkName: "pages/_lang/disclaimer" */))
const _a41363d8 = () => interopDefault(import('..\\pages\\_lang\\economics\\index.vue' /* webpackChunkName: "pages/_lang/economics/index" */))
const _731d696c = () => interopDefault(import('..\\pages\\_lang\\education\\index.vue' /* webpackChunkName: "pages/_lang/education/index" */))
const _c4c6e0c2 = () => interopDefault(import('..\\pages\\_lang\\others\\index.vue' /* webpackChunkName: "pages/_lang/others/index" */))
const _e93a423e = () => interopDefault(import('..\\pages\\_lang\\politics\\index.vue' /* webpackChunkName: "pages/_lang/politics/index" */))
const _e449f7d0 = () => interopDefault(import('..\\pages\\_lang\\privacy.vue' /* webpackChunkName: "pages/_lang/privacy" */))
const _28bf6602 = () => interopDefault(import('..\\pages\\_lang\\custom\\economics\\compound-interest.vue' /* webpackChunkName: "pages/_lang/custom/economics/compound-interest" */))
const _427a52be = () => interopDefault(import('..\\pages\\_lang\\custom\\economics\\recurring-deposit.vue' /* webpackChunkName: "pages/_lang/custom/economics/recurring-deposit" */))
const _a780a668 = () => interopDefault(import('..\\pages\\_lang\\economics\\_slug.vue' /* webpackChunkName: "pages/_lang/economics/_slug" */))
const _768aabfc = () => interopDefault(import('..\\pages\\_lang\\education\\_slug.vue' /* webpackChunkName: "pages/_lang/education/_slug" */))
const _c8342352 = () => interopDefault(import('..\\pages\\_lang\\others\\_slug.vue' /* webpackChunkName: "pages/_lang/others/_slug" */))
const _eca784ce = () => interopDefault(import('..\\pages\\_lang\\politics\\_slug.vue' /* webpackChunkName: "pages/_lang/politics/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _065236e0,
    name: "about"
  }, {
    path: "/contact",
    component: _85c6599a,
    name: "contact"
  }, {
    path: "/disclaimer",
    component: _da5f7f50,
    name: "disclaimer"
  }, {
    path: "/economics",
    component: _c3dad21e,
    name: "economics"
  }, {
    path: "/education",
    component: _92e4d7b2,
    name: "education"
  }, {
    path: "/others",
    component: _02e1883c,
    name: "others"
  }, {
    path: "/politics",
    component: _7a5b8664,
    name: "politics"
  }, {
    path: "/privacy",
    component: _1448de9b,
    name: "privacy"
  }, {
    path: "/custom/economics/compound-interest",
    component: _ca56f548,
    name: "custom-economics-compound-interest"
  }, {
    path: "/custom/economics/recurring-deposit",
    component: _e411e204,
    name: "custom-economics-recurring-deposit"
  }, {
    path: "/economics/:slug",
    component: _c74814ae,
    name: "economics-slug"
  }, {
    path: "/education/:slug",
    component: _96521a42,
    name: "education-slug"
  }, {
    path: "/others/:slug",
    component: _064ecacc,
    name: "others-slug"
  }, {
    path: "/politics/:slug",
    component: _78a4e51c,
    name: "politics-slug"
  }, {
    path: "/",
    component: _260a11a5,
    name: "index"
  }, {
    path: "/:lang",
    component: _7bf17262,
    name: "lang"
  }, {
    path: "/:lang/about",
    component: _5c39979d,
    name: "lang-about"
  }, {
    path: "/:lang/contact",
    component: _36aef8b0,
    name: "lang-contact"
  }, {
    path: "/:lang/disclaimer",
    component: _2dee648a,
    name: "lang-disclaimer"
  }, {
    path: "/:lang/economics",
    component: _a41363d8,
    name: "lang-economics"
  }, {
    path: "/:lang/education",
    component: _731d696c,
    name: "lang-education"
  }, {
    path: "/:lang/others",
    component: _c4c6e0c2,
    name: "lang-others"
  }, {
    path: "/:lang/politics",
    component: _e93a423e,
    name: "lang-politics"
  }, {
    path: "/:lang/privacy",
    component: _e449f7d0,
    name: "lang-privacy"
  }, {
    path: "/:lang/custom/economics/compound-interest",
    component: _28bf6602,
    name: "lang-custom-economics-compound-interest"
  }, {
    path: "/:lang/custom/economics/recurring-deposit",
    component: _427a52be,
    name: "lang-custom-economics-recurring-deposit"
  }, {
    path: "/:lang/economics/:slug",
    component: _a780a668,
    name: "lang-economics-slug"
  }, {
    path: "/:lang/education/:slug",
    component: _768aabfc,
    name: "lang-education-slug"
  }, {
    path: "/:lang/others/:slug",
    component: _c8342352,
    name: "lang-others-slug"
  }, {
    path: "/:lang/politics/:slug",
    component: _eca784ce,
    name: "lang-politics-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
