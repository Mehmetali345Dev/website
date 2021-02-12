import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a3dedab0 = () => interopDefault(import('..\\src\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _4397c185 = () => interopDefault(import('..\\src\\pages\\blog\\gonderi\\ara\\_title.vue' /* webpackChunkName: "pages/blog/gonderi/ara/_title" */))
const _7481b466 = () => interopDefault(import('..\\src\\pages\\blog\\gonderi\\_slug.vue' /* webpackChunkName: "pages/blog/gonderi/_slug" */))
const _19ba11f8 = () => interopDefault(import('..\\src\\pages\\redirect\\_url.vue' /* webpackChunkName: "pages/redirect/_url" */))
const _f302e1ec = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _a3dedab0,
    name: "blog"
  }, {
    path: "/blog/gonderi/ara/:title?",
    component: _4397c185,
    name: "blog-gonderi-ara-title"
  }, {
    path: "/blog/gonderi/:slug?",
    component: _7481b466,
    name: "blog-gonderi-slug"
  }, {
    path: "/redirect/:url?",
    component: _19ba11f8,
    name: "redirect-url"
  }, {
    path: "/",
    component: _f302e1ec,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
