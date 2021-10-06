import head from './config/meta'
import social from './config/social'
import sitemap from './config/sitemap'

export default {
  rootDir: "./",
  srcDir: "src",
  target: "static",
  ssr: true,

  social,
  head,
  css: [
    "~/stylesheets/root.scss"
  ],

  plugins: [
    '@/plugins/aos.js'
  ],

  components: true,

  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/moment',
    '@nuxtjs/color-mode'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxt/content',
    ['@nuxtjs/sitemap', sitemap],

  ],


  axios: {},

  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    liveEdit: false,
  },

  build: {
  }
}
