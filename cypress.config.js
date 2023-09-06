const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     "watchForFileChanges":false,
    "defaultCommandTimeout":20000,
    "scrollBehavior":false,
    "experimentalStudio": true,
    "experimentalSessionSupport": true,
    baseUrl:'https://www.ermassess.com'
  },

});

