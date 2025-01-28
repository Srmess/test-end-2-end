const { defineConfig } = require("cypress")
const dotenv = require("dotenv")

dotenv.config()

module.exports = defineConfig({
  projectId: "t4povc",

  e2e: {
    setupNodeEvents(on, config) {
      config.env = { ...process.env, ...config.env }
      return config
    },
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
    },
  },
})
