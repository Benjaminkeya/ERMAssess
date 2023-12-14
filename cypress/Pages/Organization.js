const account = require('../fixtures/erm.json')
class Orgarnization {
  elements = {
    OrgDropdown: () => cy.get('.OrganizationToggler > .dropdown-toggle'),
    OrgName: () => cy.contains(account.TestOrg),
    selectedOrg:()=>cy.get('.dropdown-menu > .active'),
    userMenu: () => cy.get('#collasible-nav-dropdown'),
    profileLink:()=>cy.contains('a','Profile')
  }

  switchOrg() {
    this.elements.OrgDropdown().click({force:true});
    cy.intercept('GET','**/*').as('allPageContentLoaded')
    this.elements.OrgName().should('be.visible').click({ force: true });
    cy.wait('@allPageContentLoaded');
    this.elements.selectedOrg().should('contain',account.TestOrg)
  }

  viewSubscriberOrganizations(){
    this.elements.userMenu().click({force:true})
    this.elements.profileLink().click({force:true})
    const baseUrl = Cypress.env('testEnvironments').baseUrl;
    cy.url().should('eq',baseUrl + '/profile/organizations')
  }
}

export default new Orgarnization()
