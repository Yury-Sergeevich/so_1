// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-02'
})