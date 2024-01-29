const { defineConfig } = require("cypress");
const fs = require('fs');
const {verifyDownloadTasks} =require('cy-verify-downloads');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  projectId: 'isqitv',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  //Experimental test flake Detection and allow retries
retries: {
  experimentalStrategy: 'detect-flake-and-pass-on-threshold',
  experimentalOptions: {
    maxRetries: 2,
    passesRequired: 1,
  },
  // you must also explicitly set openMode and runMode to
  // either true or false when using experimental retries
  openMode: true,
  runMode: true,
},
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 8000,
  requestTimeout: 8000,
  watchForFileChanges: false,
  scrollBehavior: false,
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  env:{
      testrail: {
        domain: "https://pixeledgeqateam.testrail.io",
        username: "benjamin.keya@pixeledge.io",
        password: "Benjamin@1",
        projectId: "",
        milestoneId: "",
        suiteId: "",
        runId:"",
        runName: "Cypress regression",
        runIncludeAll: "",
        closeRun: false,
        screenshots: "",
        screenshotsAll: true
      } ,
      browserPermissions: {
        notifications: "allow",
        geolocation: "allow",
        camera: "",
        microphone: "",
        popups: ""
      },
      testEnvironments:{
        baseUrl:"https://www.ermassess.com",
        deBaseUrl:"https://de.ermassess.com/api/v1"
      }
    },
  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config)
      //allureWriter(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
       //spec pattern here
       config.specPattern = [
        'cypress/e2e/Login.cy.js',
        'cypress/e2e/Organization.cy.js',
        'cypress/e2e/Dashboard.cy.js',
        'cypress/e2e/EntityTags.cy.js',
        'cypress/e2e/Entities.cy.js',
        'cypress/e2e/Portfolio.cy.js',
        'cypress/e2e/Assessments.cy.js',
        'cypress/e2e/Geotags.cy.js',
        'cypress/e2e/ActionItems.cy.js',
        'cypress/e2e/Notifications.cy.js',
        'cypress/e2e/DataExport.cy.js',
        'cypress/e2e/ActivityLog.cy.js',
        'cypress/e2e/ManageAccount.cy.js',
        'cypress/e2e/Logout.cy.js',
      ]
       // implement node event listeners here
       on('task',verifyDownloadTasks)
      // const TestRailReporter = require('cypress-testrail');
      // new TestRailReporter(on, config).register();
      return config
    }
  }
});

