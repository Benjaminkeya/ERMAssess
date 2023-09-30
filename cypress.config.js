const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // env: {
  //   commandDelay: 1000,
  // },
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  watchForFileChanges: false,
  scrollBehavior: false,

  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://dev.ermassess.com",
  },
  includeShadowDom: true,
});
