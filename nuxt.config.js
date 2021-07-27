const options = {
  rootDir: "./",
  srcDir: "src",
  target: "static",
  ssr: true,
}
import publicRuntimeConfig from "./config/publicRuntimeConfig"
import head from "./config/head"

export default {
  ...options,
  publicRuntimeConfig,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Basic Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
    {
      src: "@/plugins/VueLanyard",
      mode: "client",
    },
  ],
  components: true,
  buildModules: [
    'nuxt-windicss',
    "@nuxtjs/color-mode",

  ],
  colorMode: {
    classSuffix: ''
  },
  modules: [
    "@nuxtjs/svg",
    '@nuxtjs/axios'
  ],
  build: {
  }
}
