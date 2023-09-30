import Loginpage from "../Pages/LoginPage";
import "cypress-iframe";
import "cypress-file-upload";
import "cypress-iframe";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

Cypress.Commands.add("login", (email, password) => {
  cy.session("erm", () => {
    Loginpage.navigate();
    Loginpage.setEmail(email, { log: false });
    Loginpage.setPassword(password, { log: false });
    Loginpage.clickLogin({ timout: 10000 });
    Loginpage.verifylogin();
  });
});
