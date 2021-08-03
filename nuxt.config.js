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
  head,
  
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
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Noto Sans:400,700'] //Loads Lato font with weights 400 and 700
    }
  },
  build: {
  }
}
