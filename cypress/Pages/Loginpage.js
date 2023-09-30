class LoginPage {
  elements = {
    txtEmail: () => cy.get("#email"),
    txtPass: () => cy.get("#password"),
    loginBtn: () => cy.get("button[type='submit']"),
    dashboard: () => cy.get(".breadcrumb-item > span"),
    passEye: () => cy.get(".border > .material-icons"),
    logo: () => cy.get(".img-responsive"),
  };

  navigate() {
    cy.visit("/", { failOnStatusCode: false });
  }

  setEmail(email) {
    this.elements.txtEmail().clear().type(email, { log: false });
  }

  setPassword(password) {
    this.elements.txtPass().clear().type(password, { log: false });
  }

  viewPassword(password) {
    this.elements.passEye().click();
    this.elements.txtPass().type(password, { log: false });
    this.elements.txtPass().should("have.value", password);
  }

  clickLogin() {
    this.elements.loginBtn().click({ force: true });
  }

  verifyLogin() {
    this.elements.dashboard().should("have.text", "Dashboard");
    cy.location("pathname").should("eq", "/");
    this.elements.logo().should("be.visible");
  }

  assertLoginError(message) {
    cy.contains(message);
  }
}

module.exports = new LoginPage();
