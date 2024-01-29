//Import class dependencies
import Organization from './Organization';
import LoginPage from './LoginPage';
const account = require('../fixtures/erm.json')

//All prerequisite actions that  will be required by all Spec files
class PreActions {
  preActions() {
    cy.login(account.email, account.password)
    LoginPage.navigate()
    Organization.switchOrg(account.TestOrg);
    cy.intercept('GET','**/*').as('allPageContentLoaded')//intercept API requests  for page elements and store iin alias
    cy.wait('@allPageContentLoaded');//wait for all page elements to load;until DOM has fully build up
  }
}
export default new PreActions()


