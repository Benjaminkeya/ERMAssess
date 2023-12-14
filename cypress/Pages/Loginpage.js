class LoginPage {
  elements = {
    txtEmail: () => cy.get('#email'),
    txtPass: () => cy.get('#password'),
    loginBtn: () => cy.get("button[type='submit']"),
    dashboard: () => cy.get('.breadcrumb-item > span'),
    passEye: () => cy.get('.border > .material-icons'),
    LoginPageLogo: () => cy.get('img'),
    DashboardLogo:()=>cy.xpath("//img[@class='visible']"),
    DashboardTxt:()=>cy.get('small > :nth-child(2)'),
    copyrightText:()=>cy.get('.my-3 > .mb-1 > small'),
    appVersion:()=>cy.get('.my-3 > .text-muted > small')
  };

  navigate() {
    const baseUrl = Cypress.env('testEnvironments').baseUrl;
    cy.visit(baseUrl, { failOnStatusCode: false });
  }

  setEmail(email) {
    this.elements.txtEmail().should('be.visible').clear().type(email, {delay:0},{ log: false });
  }

  setPassword(password) {
    this.elements.txtPass().should('be.visible').clear().type(password,{delay:0},{ log: false });
  }

  viewPassword(password) {
    this.elements.passEye().should('be.visible').click();
    this.elements.txtPass().type(password, {delay:0},{ log: false });
    this.elements.txtPass().should('have.value', password);
  }

  clickLogin() {
    this.elements.loginBtn().should('be.visible').click({force: true });
  }

  login(email,password){ 
    this.setEmail(email);
    this.setPassword(password);
    this.clickLogin();
  }
  
  verifyLoginPage(){
    this.elements.LoginPageLogo().should('be.visible');
    this.elements.copyrightText().should('be.visible');
    this.elements.appVersion().should('be.visible');
  }

  verifySuccessfulLogin() {
    this.elements.dashboard().should('have.text', 'Dashboard');
    cy.location('pathname').should('eq', '/');
    this.elements.DashboardLogo().should('be.visible');
    }

  assertLoginError(message) {
    cy.contains(message);
    }
}

export default new LoginPage()
