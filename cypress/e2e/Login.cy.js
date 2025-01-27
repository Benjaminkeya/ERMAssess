import Loginpage from '../Pages/LoginPage';
const account = require('../fixtures/erm.json');

describe('Login Page Test Suite',() => {
  beforeEach(() => {
    Loginpage.navigate();
  });

  it('C178: Login attempt with Wrong Email address',() => {
    Loginpage.login(account.OwnerRole.wrongEmail,account.OwnerRole.password);
    Loginpage.assertLoginError('These credentials did not match our records');
  });

  it('C178: Login attempt with Wrong Password ',() => {
    Loginpage.login(account.OwnerRole.email,account.OwnerRole.wrongpassword);
    Loginpage.assertLoginError('These credentials did not match our records');
  });

  it('C529: Login attempt with Blank fields',() => {
    Loginpage.login('  ','  ');
    cy.location('pathname', '/login');
  });

  it('C175: Login - Positive tests',() => {
    cy.intercept('GET','**/**').as('loginsucccess')
    Loginpage.login(account.OwnerRole.email,account.OwnerRole.password)
    cy.wait('@loginsucccess'); 
  });
  
  it('C1007: View Password',() => {
    Loginpage.viewPassword(account.OwnerRole.password);
  });

  it('C175: Verify Login Page',() => {
    Loginpage.verifyLoginPage()
  });
  
  it('C232: Reset Password-registered email',() => {
    Loginpage.resetPass(account.OwnerRole.email, 'Success!');
  });

  it('C1006: Reset Password-non-registered email',() => {
    Loginpage.resetPass(account.OwnerRole.wrongEmail, 'Success!');
  });
  it('C1006: Cancel Password Reset',() => {
    Loginpage.cancelPasswordReset()
  });
});