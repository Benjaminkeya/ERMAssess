const Organization = require("./Organization");

class login {
  elements = {
    txtEmail: () => cy.get("#email"),
    txtPass: () => cy.get("#password"),
    btn: () => cy.get("button[type='submit']"),
    lbl: () => cy.get(".breadcrumb-item > span"),
    passEye: () => cy.get(".border > .material-icons"),
    logo: () => cy.get(".img-responsive"),
  };

  navigate() {
    cy.visit("/", { failOnStatusCode: false });
    cy.get(".img-responsive").should("be.visible");
  }

  setEmail(email) {
    this.elements.txtEmail().clear().type(email, { log: false });
    //.should("have.value", email);
  }

  setPassword(password) {
    this.elements.txtPass().clear().type(password, { log: false });
    //.should("have.value", password);
  }

  viewPassword(password) {
    this.elements.passEye().click();
    this.elements.txtPass().type(password, { log: false });
    this.elements.txtPass().should("have.value", password);
  }

  clickLogin() {
    this.elements.btn().click({ force: true });
  }

  verifylogin() {
    this.elements.lbl().should("have.text", "Dashboard");
    cy.location("pathname").should("eq", "/");
    this.elements.logo().should("be.visible");
  }

  assertLoginError(message) {
    cy.contains("These credentials did not match our records");
  }

  prerequisite(email, password) {
    cy.login(email, password);
    this.navigate();
    Organization.selectOrg();
  }
}

module.exports = new login();
