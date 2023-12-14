// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import 'cypress-mochawesome-reporter/register';
import '@shelex/cypress-allure-plugin';

// Alternatively you can use CommonJS syntax:
//require('./commands')

require("cypress-xpath");



Cypress.on('uncaught:exception', (err, runnable, promise) => {
  // when the exception originated from an unhandled promise
  // rejection, the promise is provided as a third argument
  // you can turn off failing the test in this case
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  // Prevent Cypress from failing on uncaught exceptions
  if (promise) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
  if (err) {
    return false
  }

  if(runnable){
    return false
  }
})

//Remove XHR requests in the logs
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
 const style = app.document.createElement("style");
 style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
 style.setAttribute("data-hide-command-log-request", "");
 app.document.head.appendChild(style); 
}