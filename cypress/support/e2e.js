// ***********************************************************
// Import commands.js using ES2015 syntax:
import "./commands";
import 'cypress-mochawesome-reporter/register';
//import '@shelex/cypress-allure-plugin';

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