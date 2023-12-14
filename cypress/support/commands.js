import 'cypress-iframe';
import 'cypress-file-upload';
import LoginPage from '../Pages/LoginPage';
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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>
///<reference types="cypress-xpath"/>
/// <reference types="@shelex/cypress-allure-plugin" />

//Import verify downloaded files
require ('cy-verify-downloads').addCustomCommand()

//Custom command tocreate and reuse login session
Cypress.Commands.add("login", (email, password) => {
  cy.session("erm", () => {
   LoginPage.navigate()
   LoginPage.login(email,password)
   //wait for auth to complete
   cy.location('pathname').should('eq','/')
  },
  {
    cacheAcrossSpecs:true
  }
  );
});
//Custom command to click on a table link
Cypress.Commands.add('clickTableLink', (rowIndex, columnIndex) => {
  cy.xpath(`//tbody[@class='table-group-divider']//tr[${rowIndex}]/td[${columnIndex}]/p/a`).should('exist').scrollIntoView().click({force:true})
});


