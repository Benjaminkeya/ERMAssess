const account = require("../fixtures/erm.json");
const preAactions = require("../Pages/PreActions");
class DataExport {
  dateExport() {
    preAactions.preActions();

    cy.get("#collasible-nav-dropdown").click();
    cy.get(".postion-relative").click();
    cy.get("#protocolId").click();
    cy.get("#protocolId").type("6509a8db94ea5");
    cy.get(".rbt-input-wrapper .rbt-input-main").click();
    cy.get(".modal-footer > .btn:nth-child(1)").click();
    cy.get(".modal").click();
  }
}
module.exports = new DataExport();
