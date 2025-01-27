const { defineConfig } = require("cypress");
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path')
const csv = require('csv-parser');

const { verifyDownloadTasks } = require('cy-verify-downloads');
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');
const { randomUUID } = require("crypto");
module.exports = defineConfig({
  fileServerFolder: 'cypress/fixtures',
  projectId: 'isqitv',
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   reportDir: 'cypress/reports',
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  //   html:true
  //   // json:false
  // },
  //Experimental test flake Detection and allow retries
retries: {
  experimentalStrategy:'detect-flake-and-pass-on-threshold',
  experimentalOptions: {
    maxRetries: 1,
    passesRequired: 1,
    },
    // you must also explicitly set openMode and runMode to
    // either true or false when using experimental retries
    openMode: true,
    runMode: true,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
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
        projectId: "1",
        milestoneId: "",
        suiteId: "1",
        runId:"",
        runName: "ERMAssess January 2025 Automated Regression run",
        runIncludeAll: "",
        closeRun: false,
        screenshots: true,
        screenshotsAll: false,
        ignorePending:true
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
     // require('cypress-mochawesome-reporter/plugin')(on);
      //spec pattern here
      config.specPattern = [
        'cypress/e2e/Login.cy.js',
        'cypress/e2e/Organization.cy.js',
        'cypress/e2e/Dashboard.cy.js',
        'cypress/e2e/EntityTags.cy.js',
        'cypress/e2e/Entities.cy.js',
        'cypress/e2e/Portfolio.cy.js',
        'cypress/e2e/Assessments.cy.js',
        'cypress/e2e/AuditQuestions.cy.js',
        'cypress/e2e/ActionItems.cy.js',
        'cypress/e2e/DataExport.cy.js',
        'cypress/e2e/ActivityLog.cy.js',
        'cypress/e2e/ManageAccount.cy.js',
       //'cypress/e2e/Roles.cy.js',
        'cypress/e2e/Logout.cy.js',
        
        ]
      // implement node event listeners here
      on('task', verifyDownloadTasks)
      //const customComment = 'AUT v' + Cypress.env('MY_APP_VERSION');
      const TestRailReporter = require('cypress-testrail');
      new TestRailReporter(on, config).register();

      // Register the 'readPdf' task
      on('task',
        {
          readPdf(pdfPath) {
            return new Promise((resolve) => {
              const filePath = path.resolve(pdfPath)
              const dataBuffer = fs.readFileSync(filePath)
              pdf(dataBuffer).then(function (data) {
                resolve(data);
              })
            })
          }
        })

      // Register the 'readCsv' task
      on('task', {
        readCsv(filePath) {

          return new Promise((resolve, reject) => {
            const absolutePath = path.join(config.projectRoot, filePath);

            const rows = [];
            fs.createReadStream(absolutePath)
              .pipe(csv())
              .on('data', (row) => {
                rows.push(row);
              })
              .on('end', () => {
                resolve({ rows });
              })
              .on('error', (error) => {
                reject(error);
              });
          });
        },
      });

      return config
    }
  },
});
