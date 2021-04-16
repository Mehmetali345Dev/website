import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\src\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_58e1afba from 'nuxt_plugin_plugin_58e1afba' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_webfontloader_597698c6 from 'nuxt_plugin_webfontloader_597698c6' // Source: .\\webfontloader.js (mode: 'client')
import nuxt_plugin_index_4549c0b5 from 'nuxt_plugin_index_4549c0b5' // Source: .\\firebase\\index.js (mode: 'all')
import nuxt_plugin_pluginclient_3109bf59 from 'nuxt_plugin_pluginclient_3109bf59' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_d2799e3e from 'nuxt_plugin_pluginserver_d2799e3e' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_9bd6573c from 'nuxt_plugin_workbox_9bd6573c' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_591e46e2 from 'nuxt_plugin_metaplugin_591e46e2' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_5dc5ec56 from 'nuxt_plugin_iconplugin_5dc5ec56' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_7b810e74 from 'nuxt_plugin_axios_7b810e74' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_3d12c7a0 from 'nuxt_plugin_googleanalytics_3d12c7a0' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_pluginserver_0e5211e3 from 'nuxt_plugin_pluginserver_0e5211e3' // Source: .\\color-mode\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_aecebf4a from 'nuxt_plugin_pluginclient_aecebf4a' // Source: .\\color-mode\\plugin.client.js (mode: 'client')
import nuxt_plugin_moment_d7499cdc from 'nuxt_plugin_moment_d7499cdc' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_Util_927bffd4 from 'nuxt_plugin_Util_927bffd4' // Source: ..\\src\\plugins\\Util (mode: 'all')
import nuxt_plugin_Firebase_3a08d81b from 'nuxt_plugin_Firebase_3a08d81b' // Source: ..\\src\\plugins\\Firebase (mode: 'client')
import nuxt_plugin_Tippy_216b0650 from 'nuxt_plugin_Tippy_216b0650' // Source: ..\\src\\plugins\\Tippy (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Mehmetali_345","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1","property":"viewport"},{"hid":"description","name":"description","content":"Young developer from Turkey, interested in languages, gaming, and programming, trying to improve his C# skills!","property":"description"},{"hid":"twitter:card","name":"twitter:card","content":"summary","property":"twitter:card"},{"hid":"twitter:site","name":"twitter:site","content":"@AnakinS07677978","property":"twitter:site"},{"hid":"twitter:creator","name":"twitter:creator","content":"@AnakinS07677978","property":"twitter:creator"},{"hid":"twitter:title","name":"twitter:title","content":"mehmetali345.xyz.xyz","property":"twitter:title"},{"hid":"twitter:description","name":"twitter:description","content":"Young developer from Turkey, interested in languages, gaming, and programming, trying to improve his C# skills!","property":"twitter:description"},{"hid":"twitter:image","name":"twitter:image","content":"\u002Ficon.png","property":"twitter:image"},{"hid":"og:type","name":"og:type","content":"website","property":"og:type"},{"hid":"og:site_name","name":"og:site_name","content":"mehmetali345.xyz","property":"og:site_name"},{"hid":"og:description","name":"og:description","content":"Young developer from Turkey, interested in languages, gaming, and programming, trying to improve his C# skills!","property":"og:description"},{"hid":"og:image","name":"og:image","content":"https:\u002F\u002Fmehmetali345.xyz\u002Ficon.png","property":"og:image"},{"hid":"theme-color","name":"theme-color","content":"#111827","property":"theme-color"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Fmehmetali345.xyz\u002Ffavicon.ico"},{"rel":"search","type":"application\u002Fopensearchdescription+xml","title":"Mehmetali_345's Blog","href":"https:\u002F\u002Fmehmetali345.xyz\u002Fopensearch.xml"}],"style":[],"script":[{"hid":"nuxt-color-mode-script","innerHTML":"!function(){\"use strict\";var e=window,s=document,o=s.documentElement,a=[\"dark\",\"light\"],t=window.localStorage.getItem(\"color-mode\")||\"system\",c=\"system\"===t?l():t,i=s.body.getAttribute(\"data-color-mode-forced\");function r(e){var s=\"\"+e+\"\";o.classList?o.classList.add(s):o.className+=\" \"+s}function n(s){return e.matchMedia(\"(prefers-color-scheme\"+s+\")\")}function l(){if(e.matchMedia&&\"not all\"!==n(\"\").media)for(var s of a)if(n(\":\"+s).matches)return s;return\"dark\"}i&&(c=i),r(c),e[\"__NUXT_COLOR_MODE__\"]={preference:t,value:c,getColorScheme:l,addClass:r,removeClass:function(e){var s=\"\"+e+\"\";o.classList?o.classList.remove(s):o.className=o.className.replace(new RegExp(s,\"g\"),\"\")}}}();\n","pbody":true}],"__dangerouslyDisableSanitizersByTagID":{"nuxt-color-mode-script":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_58e1afba === 'function') {
    await nuxt_plugin_plugin_58e1afba(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_webfontloader_597698c6 === 'function') {
    await nuxt_plugin_webfontloader_597698c6(app.context, inject)
  }

  if (typeof nuxt_plugin_index_4549c0b5 === 'function') {
    await nuxt_plugin_index_4549c0b5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_3109bf59 === 'function') {
    await nuxt_plugin_pluginclient_3109bf59(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_d2799e3e === 'function') {
    await nuxt_plugin_pluginserver_d2799e3e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_9bd6573c === 'function') {
    await nuxt_plugin_workbox_9bd6573c(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_591e46e2 === 'function') {
    await nuxt_plugin_metaplugin_591e46e2(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_5dc5ec56 === 'function') {
    await nuxt_plugin_iconplugin_5dc5ec56(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_7b810e74 === 'function') {
    await nuxt_plugin_axios_7b810e74(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_3d12c7a0 === 'function') {
    await nuxt_plugin_googleanalytics_3d12c7a0(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_0e5211e3 === 'function') {
    await nuxt_plugin_pluginserver_0e5211e3(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_aecebf4a === 'function') {
    await nuxt_plugin_pluginclient_aecebf4a(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_d7499cdc === 'function') {
    await nuxt_plugin_moment_d7499cdc(app.context, inject)
  }

  if (typeof nuxt_plugin_Util_927bffd4 === 'function') {
    await nuxt_plugin_Util_927bffd4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Firebase_3a08d81b === 'function') {
    await nuxt_plugin_Firebase_3a08d81b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Tippy_216b0650 === 'function') {
    await nuxt_plugin_Tippy_216b0650(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.push(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
