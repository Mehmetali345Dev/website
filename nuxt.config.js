import head from './config/meta'
import sitemap from './config/sitemap'
import publicRuntimeConfig from './config/publicRuntimeConfig'

export default {
  rootDir: './',
  srcDir: 'src',
  target: 'static',
  ssr: true,
  components: true,


  publicRuntimeConfig,

  // Meta tags imported from ./config/meta.js
  head,

  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-helmet',
    '@nuxt/content',
    '@nuxtjs/robots',
    ['@nuxtjs/sitemap', sitemap],
  ],

  // Loads all of css files from one rootscss file
  css: ['~/stylesheets/root.scss'],

  // Imports Animate-on-scroll and v-tooltip plugin
  plugins: ['@/plugins/aos.js', '@plugins/v-tooltip.js'],

  // Configuration for modules

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  colorMode: {
    classSuffix: '',
  },

  // For @nuxt/content
  content: {
    liveEdit: false,

    // Specifies blog posts' directory
    dir: '../posts',
  },

  webfontloader: {
    google: {
      families: ['JetBrains Mono:400,700'], //Loads Lato font with weights 400 and 700
    },
  },
}
