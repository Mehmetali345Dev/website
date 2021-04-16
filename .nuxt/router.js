import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _51067b5e = () => interopDefault(import('..\\src\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _f8e95b1e = () => interopDefault(import('..\\src\\pages\\donate.vue' /* webpackChunkName: "pages/donate" */))
const _e0318f20 = () => interopDefault(import('..\\src\\pages\\blog\\gonderi\\_slug.vue' /* webpackChunkName: "pages/blog/gonderi/_slug" */))
const _6f66b840 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _51067b5e,
    name: "blog"
  }, {
    path: "/donate",
    component: _f8e95b1e,
    name: "donate"
  }, {
    path: "/blog/gonderi/:slug?",
    component: _e0318f20,
    name: "blog-gonderi-slug"
  }, {
    path: "/",
    component: _6f66b840,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
