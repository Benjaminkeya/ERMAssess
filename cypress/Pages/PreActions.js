//Import class dependencies
import Organization from './Organization';
const account = require('../fixtures/erm.json')

//All prerequisite actions that  will be required across tests
class PreActions {
  preActions() {
    cy.login(account.OwnerRole.email, account.OwnerRole.password)
    Organization.switchOrg(account.TestOrg); 
  }
}
export default new PreActions()