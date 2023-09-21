class orgarnization {
  elements = {
    OrgDropdown: () => cy.get(".bg-primary > .dropdown-toggle"),
    OrgItem: () => cy.contains("Benjamin Test Org"),
  };
  selectOrg() {
    this.elements.OrgDropdown().click({ force: true });
    this.elements.OrgItem().click({ force: true });
  }
}

module.exports = new orgarnization();
