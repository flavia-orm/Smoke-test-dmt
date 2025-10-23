const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL, 
    env: {
      debugUrl: process.env.DEBUG_URL, 
      domains: process.env.DOMAINS, 
    },
    setupNodeEvents(on, config) {
      return config
    },
  },
})
