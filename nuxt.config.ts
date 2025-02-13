import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@vueuse/motion/nuxt'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    baseURL: '/ForMyLove/',
  },
  compatibilityDate: '2025-01-30',
})