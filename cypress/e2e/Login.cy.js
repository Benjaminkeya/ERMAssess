import Loginpage from '../Pages/LoginPage';
const account = require('../fixtures/erm.json');

describe('Login Page Test Suite',() => {
  beforeEach(() => {
    Loginpage.navigate();
  });

  it('C178: Login Wrong Email address',() => {
    Loginpage.login(account.wrongEmail,account.password);
    Loginpage.assertLoginError('These credentials did not match our records');
  });

  it('C178: Login with Wrong Password ',() => {
    Loginpage.login(account.email,account.wrongpassword);
    Loginpage.assertLoginError('These credentials did not match our records');
  });

  it('C529: Login-Blank fields tests',() => {
    Loginpage.login('  ','  ');
    cy.location('pathname', '/login');
  });

  it('C175: Login- Positive tests',() => {
    //cy.allure().severity('critical')
    Loginpage.login(account.email,account.password)
    const debaseUrl = Cypress.env('testEnvironments').deBaseUrl
    cy.intercept('GET',debaseUrl + '/login').as('loginsucccess')
    cy.wait('@loginsucccess'); 
  });
  
  it('C1007: View Password',() => {
    Loginpage.viewPassword(account.password);
  });

  it('C175: Verify Login Page',() => {
    Loginpage.verifyLoginPage()
  });
  
  it('C232: Reset Password-registered email',() => {
    Loginpage.resetPass(account.email, 'Success!');
  });

  it('C1006: Reset Password-non-registered email',() => {
    Loginpage.resetPass(account.wrongEmail, 'Success!');
  });

});