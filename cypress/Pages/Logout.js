class Logout {
  elements = {
    userMenu: () => cy.get('#collasible-nav-dropdown'),
    logoutBtn: () => cy.get("[href='/logout']")
  };

  logoutUser() {
    this.elements.userMenu().should('be.visible').click({ force: true });
    this.elements.logoutBtn().should('be.visible').click({ force: true });
    //Wait for logout operation to complete and return login screen
    cy.url().should('contain', '/login');
    // cy.location('pathname','/login')
  }
}

export default new Logout()
