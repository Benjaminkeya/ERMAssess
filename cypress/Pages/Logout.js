class logout {
  elements = {
    userMenu: () => cy.get("#collasible-nav-dropdown"),
    logoutBtn: () => cy.get('[href="/logout"]'),
  };

  logoutuser() {
    this.elements.userMenu().click({ force: true });
    this.elements.logoutBtn().click({ force: true });
    // cy.intercept("DELETE", "/api/v2/login").as("delete");
    // cy.wait("@delete").its("response.statusCode").should("eq", 401);
    cy.url().should("contain", "https://dev.ermassess.com/login");
    cy.contains("Login to continue");
  }
}

module.exports = new logout();
