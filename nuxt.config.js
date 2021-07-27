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
    '@nuxtjs/axios'
  ],
  build: {
  }
}
