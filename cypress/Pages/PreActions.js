const Organization = require('./Organization');
const Loginpage = require('./LoginPage');
const account = require('../fixtures/erm.json')

class PreActions {
  preActions() {
    cy.login(account.email, account.password)
    Loginpage.navigate();
    Organization.switchOrg();
    cy.intercept('GET','**/*').as('allPageContentLoaded')
    //wait for all page elements to load
    cy.wait('@allPageContentLoaded');
  }
}
export default new PreActions()


