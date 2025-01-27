class LoginPage {
  elements = {
    txtEmail: () => cy.get('#email'),
    txtPass: () => cy.get('#password'),
    loginBtn: () => cy.get("button[type='submit']"),
    dashboard: () => cy.get('.breadcrumb-item > span'),
    passEye: () =>cy.get('.material-symbols-outlined'),
    LoginPageLogo: () => cy.get('img'),
    DashboardLogo:()=>cy.xpath("//img[@class='visible']"),
    DashboardTxt:()=>cy.get('small > :nth-child(2)'),
    copyrightText:()=>cy.get('.my-3 > .mb-1 > small'),
    appVersion:()=>cy.get('.my-3 > .text-muted > small'),
    forgotPassBtn: () => cy.contains('a','Forgot Password?'),
    cancelPassResetBtn:()=>cy.contains('a','Cancel'),
    txtEmail: () => cy.get('#email'),
    sendBtn: () => cy.contains('Send Instructions'),
  };
//Page Actions
  navigate() {
    const url = Cypress.env('testEnvironments').baseUrl;
    cy.intercept('GET','*/**').as('getAllRequests')
    cy.visit(url, { failOnStatusCode: false });
    cy.wait('@getAllRequests')
  }

  viewPassword(password) {
    this.elements.passEye().should('be.visible').click();
    this.elements.txtPass().type(password, {delay:0},{ log: false });
    this.elements.txtPass().should('have.value', password);
  }

  clickLogin() {
    this.elements.loginBtn().should('be.visible').click({force: true });
  }

  //Function Objects
  login(email,password){ 
    this.elements.txtEmail().clear().type(email, {delay:0},{ log: false });
    this.elements.txtPass().clear().type(password,{delay:0},{ log: false });
    this.clickLogin({force:true});
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

  resetPass(email, message) {
    this.elements.forgotPassBtn().scrollIntoView().should('exist').click({force:true});
    cy.url().should('contain', Cypress.env('testEnvironments').baseUrl + '/forgot-password');
    this.elements.txtEmail().should('be.visible').clear().type(email,{delay:0});
    this.elements.sendBtn().should('be.visible').click({force:true});
    cy.contains(message);
  }
  cancelPasswordReset(){
    this.elements.forgotPassBtn().scrollIntoView().should('exist').click({force:true});
    cy.url().should('contain', Cypress.env('testEnvironments').baseUrl + '/forgot-password');
    this.elements.cancelPassResetBtn().click()
    cy.url().should('eq', Cypress.env('testEnvironments').baseUrl+'/login');
  }
    
}

export default new LoginPage()