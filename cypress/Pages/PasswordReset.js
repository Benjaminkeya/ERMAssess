class PasswordReset {
  elements = {
    forgotPassBtn: () => cy.contains("Forgot Password"),
    txtEmail: () => cy.get("#email"),
    sendBtn: () => cy.contains("Send Instructions"),
  };

  resetPass(email, message) {
    this.elements.forgotPassBtn().scrollIntoView().click({ force: true });
    cy.url().should("contains", "/forgot-password");
    this.elements.txtEmail().clear().type(email);
    this.elements.sendBtn().click();
    cy.contains(message);
  }
}

module.exports = new PasswordReset();
