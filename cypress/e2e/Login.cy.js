import Loginpage from '../Pages/LoginPage';
import PasswordReset from '../Pages/PasswordReset';
const account = require('../fixtures/erm.json');
//import { slowCypressDown } from 'cypress-slow-down';

//slowCypressDown();

describe('Login page', () => {
  beforeEach(() => {
    Loginpage.navigate();
  });
  it('C178: Login Wrong Email address', () => {
    Loginpage.login(account.wrongEmail,account.password);
    Loginpage.assertLoginError('These credentials did not match our records');
  });
  it('C178: Login with Wrong Password ', () => {
    Loginpage.login(account.email,account.wrongpassword);
    Loginpage.assertLoginError('These credentials did not match our records');
  });

  it('C529: Login-Blank fields tests', () => {
    Loginpage.login('  ','  ');
    cy.location('pathname', '/login');
  });

  it('C175: Login- Positive tests', () => {
    //cy.allure().severity('critical')
    Loginpage.login(account.email,account.password)
    cy.intercept('GET','https://de.ermassess.com/api/v1/invitations').as('pageloaded')
    cy.wait('@pageloaded');
    
  });
  
  it('C1007: View Password', () => {
    Loginpage.viewPassword(account.password);
  });

  it('C175: Verify Login Page',{ retries: 2 }, () => {
    Loginpage.verifyLoginPage()
  });
  
  it('C232: Reset Password-registered email', () => {
    PasswordReset.resetPass(account.email, 'Success!');
  });

  it('C1006: Reset Password-non-registered email', () => {
    PasswordReset.resetPass(account.wrongEmail, 'Success!');
  });
});
