import PreActions from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';
import ManageAccount from '../Pages/ManageAccount';
const account = require('../fixtures/erm.json');
//import slowCypressDown from 'cypress-slow-down';

//slowCypressDown();

import 'cypress-iframe';

describe('User Management Test Suite', () => {

  beforeEach(() => {
    PreActions.preActions();
    Dashboard.clickUserMenu();
    ManageAccount.clickManageLink();

  });

  it('C1038: Navigate to user management and validate the page', () => {
    ManageAccount.validateManageUserPage();
  });

  it('C1016: User management - Add member with a unique name-Positive', () => {
    //cy.allure().severity('critical')
    ManageAccount.addUniqueMemberPositive(account.emailName, 'Certifier');
  });
  it('C955: User management - Add member with a unique name - Negative', () => {
    ManageAccount.addUniqueMemberNegative(account.emailName, 'Certifier');
  });

  it('C961: User management - Resend join request', () => {
    //cy.allure().severity('Medium')
    ManageAccount.resendJoinRequestToLastMember('Invitation was successfully sent')
  });

  it('C956: User management - Update the last added member and give all entity access', () => {
    //cy.allure().severity('critical')
    ManageAccount.updateLastMemberWithAllEntityAccess('Updated Successfully');
  });

  it('C956: User management - Update the last added member and give all portfolio access', () => {
    //cy.allure().severity('critical')
    ManageAccount.updateLastMemberWithAllPortfolioAccess('Updated Successfully');
  });

  it('C1016: User management - Validate the status after adding a new member', () => {
    //cy.allure().severity('Medium')
    ManageAccount.lastAddedmemberJoinStatus('Pending Invitation');
  });
  it('C958: User management - search member', () => {
    ManageAccount.searchMember(account.emailName);
  });

  it('C957: User management - Delete the last added member -Negative', () => {
    ManageAccount.deleteLastMemberNegative();
  });

  it('C1033: User management - Delete the last added member -Positive', () => {
    //cy.allure().severity('Medium')
    ManageAccount.deleteLastMemberPositive();
  });
  
});
