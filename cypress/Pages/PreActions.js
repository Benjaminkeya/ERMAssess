const Organization = require("./Organization");
const Loginpage = require("./LoginPage");

class PreActions {
  preActions(email, password) {
    cy.login(email, password);
    Loginpage.navigate();
    Organization.switchOrg();
  }
}
module.exports = new PreActions();
