class logout {
  elements = {
    userMenu: () => cy.get("#collasible-nav-dropdown"),
    logoutBtn: () => cy.get('[href="/logout"]'),
  };

  logoutuser() {
    cy.visit("/");
    this.elements.userMenu().click({ force: true });
    this.elements.logoutBtn().click({ force: true });
    cy.url().should("contain", "https://www.ermassess.com/login");
  }
}

module.exports = new logout();
