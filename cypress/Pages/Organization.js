class Orgarnization {
  elements = {
    OrgDropdown: () => cy.get(".bg-primary > .dropdown-toggle"),
    OrgName: () => cy.contains("Benjamin Test Org"),
  };
  switchOrg() {
    this.elements.OrgDropdown().click({ force: true });
    this.elements.OrgName().click();
    cy.get(".bg-primary > .dropdown-toggle").then((org) => {
      let orgName = org.text();
      this.elements.OrgDropdown().should("have.text", orgName);
    });
  }
}

module.exports = new Orgarnization();
