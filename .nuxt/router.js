import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _425353e5 = () => interopDefault(import('..\\src\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1b1cbea8 = () => interopDefault(import('..\\src\\pages\\blog\\gonderi\\ara\\_title.vue' /* webpackChunkName: "pages/blog/gonderi/ara/_title" */))
const _1e4807c9 = () => interopDefault(import('..\\src\\pages\\blog\\gonderi\\_slug.vue' /* webpackChunkName: "pages/blog/gonderi/_slug" */))
const _a1737bf2 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _425353e5,
    name: "blog"
  }, {
    path: "/blog/gonderi/ara/:title?",
    component: _1b1cbea8,
    name: "blog-gonderi-ara-title"
  }, {
    path: "/blog/gonderi/:slug?",
    component: _1e4807c9,
    name: "blog-gonderi-slug"
  }, {
    path: "/",
    component: _a1737bf2,
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
