class Logout {
  elements = {
    userMenu: () => cy.get("#collasible-nav-dropdown"),
    logoutBtn: () => cy.get('[href="/logout"]'),
  };

  logoutUser(message) {
    this.elements.userMenu().click({ force: true });
    this.elements.logoutBtn().click({ force: true });
    cy.url().should("contain", "/login");
    cy.contains(message);
  }
}

module.exports = new Logout();
