export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  typescript: {
    strict: true,
    typeCheck: true
  },

  runtimeConfig: {
    public: {
      weatherApiKey: process.env.WEATHER_API_KEY
    }
  },

  app: {
    head: {
      title: 'Weather Dashboard',
      meta: [
        { name: 'description', content: 'A simple weather dashboard that shows the current weather at your location' }
      ]
    }
  },

  nitro: {
    compatibilityDate: '2025-04-29'
  },

  compatibilityDate: '2025-04-29'
});