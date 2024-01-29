import PreActions from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';
import Portfolios from '../Pages/Portfolios';
import Entities from '../Pages/Entities';
import ManageAccount from '../Pages/ManageAccount';
const account = require('../fixtures/erm.json');

describe('User Management Test Suite',() => {

  before(()=>{
    PreActions.preActions();
    Portfolios.addPortfolio('Portfolio','Cypress description',{ delay: 0 });
    PreActions.preActions();
    cy.wait(1000)
    Entities.createEntity(account.Name,account.Address,account.updateJurisName,'be.enabled',{delay: 0});
  })
  beforeEach(() => {
    PreActions.preActions();
    Dashboard.clickUserMenu();
    ManageAccount.clickManageLink();

  });

  it('C1038: Navigate to user management page',() => {
    ManageAccount.validateManageUserPage();
  });

  it('C1016:Add member(Positive)',() => {
  
    ManageAccount.addMemberPositive(account.emailName, 'Certifier',account.OrganizationID);
  });
 
  it(':Add member with First Name field blank (Negative)',() => {
    ManageAccount.addMemberWithout1stName(account.emailName,'Certifier');
  });

  it(':Add member with Last Name field blank(Negative)',() => {
    ManageAccount.addMemberWithoutLastName(account.emailName, 'Certifier');
  });
  
  it('C955:Add member with  blank fields (Negative)',() => {
    ManageAccount.addMemberWithBlankFields('Member');
  });

  it('C961: Resend join request to added member',() => {
    
    ManageAccount.resendJoinRequestToLastMember('Invitation was successfully sent')
  });

  it('C956:Update member with all entity access',() => {
  
    ManageAccount.updateLastMemberWithAllEntityAccess('Updated Successfully');
  });

  it('C956:Update member with all portfolio access',() => {
    
    ManageAccount.updateLastMemberWithAllPortfolioAccess('Updated Successfully');
  });

  it('C1016: Validate the status of newly added  member',() => {
    //cy.allure().severity('Medium')
    ManageAccount.lastAddedmemberJoinStatus('Pending Invitation');
  });
  it('C958: search members',() => {
    ManageAccount.searchMember(account.emailName);
  });

  it('C957: Delete the last added member(Negative)',() => {
    ManageAccount.deleteLastMemberNegative();
  });

  it('C1033: Delete the last added member(Positive)',() => {
    //cy.allure().severity('Medium')
    ManageAccount.deleteLastMemberPositive();
  });

  

  after(()=>{
    PreActions.preActions();
    Entities.deleteEntityPositive();
    cy.wait(1000)
    PreActions.preActions();
    Portfolios.deletePortfolio();
  })
  
});
