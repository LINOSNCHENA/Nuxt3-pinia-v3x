// // nuxt.config.ts

import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({

  experimental: {
    watcher: "chokidar",
  },

  ssr: true,
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  modules: ['@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins!.push(
          vuetify()
        )
      })
    },
  ],

  sourcemap: {
    server: false,
    client: false
  },
  build: {
    transpile: ['vuetify']
  },

})

