import head from './config/meta'
import social from './config/social'

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
    '@nuxt/content',
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
