const account = require('../fixtures/erm.json')
class Orgarnization {

  //Page Element selectors
  elements = {
    OrgDropdown: () => cy.get('.OrganizationToggler > .dropdown-toggle'),
    OrgName: () => cy.contains(account.TestOrg),
    selectedOrg:()=>cy.get('.dropdown-menu > .active'),
    userMenu: () => cy.get('#collasible-nav-dropdown'),
    profileLink:()=>cy.contains('a','Profile')
  }

//Class  Function Objects
  switchOrg(text) {
    this.elements.OrgDropdown().as('dropDown')
    cy.get('@dropDown').click({force:true});
    cy.intercept('GET','**/*').as('allPageContentLoaded')//Intercept all GET API requests and store in alias
    this.elements.OrgName().click({ force: true });
    cy.wait('@allPageContentLoaded');//Explicitly wait for all the page DOM elements to  load
    this.elements.selectedOrg().should('contain',text)
  }

  viewSubscriberOrganizations(){
    this.elements.userMenu().should('exist').as('menu')
    cy.get('@menu').click({force:true})
    this.elements.profileLink().click({force:true})
    const baseUrl = Cypress.env('testEnvironments').baseUrl;//Call base Url into a variable
    cy.url().should('eq',baseUrl + '/profile/organizations')//assert expected URL 
  }
}

export default new Orgarnization()