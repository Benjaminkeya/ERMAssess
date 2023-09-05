const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "watchForFileChanges":false,
    //"pageLoadTimeout":100000,
    "defaultCommandTimeout":20000,
    "scrollBehavior":false,
    "screenshotOnRunFailure": false,
    "video": false,
    baseUrl:'https://www.ermassess.com'
  },

});

