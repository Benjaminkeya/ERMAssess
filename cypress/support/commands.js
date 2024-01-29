import 'cypress-iframe';
import 'cypress-file-upload';
import LoginPage from '../Pages/LoginPage';
// ***********************************************

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>
///<reference types="cypress-xpath"/>
//// <reference types="@shelex/cypress-allure-plugin" />

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
  cy.xpath(`//tbody[@class='table-group-divider']//tr[${rowIndex}]/td[${columnIndex}]/p/a`).as('tableLink');
  cy.get('@tableLink')
                      .should('exist')
                      .scrollIntoView().click({force:true})
});

Cypress.Commands.add('createUser', (username, email, password) => {
  // Your logic to create a user, for example:
  // Assume you have a registration page with form fields: username, email, password
  cy.visit('/register');
  cy.get('#username').type(username);
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});