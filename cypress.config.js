const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //config.browser = 'chrome';
    },
    baseUrl: 'https://automationexercise.com',
    //viewportHeight: 1280,
    //defaultCommandTimeout: 2000,
  },
});
