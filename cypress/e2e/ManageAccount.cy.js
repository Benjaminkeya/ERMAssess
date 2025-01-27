import PreActions from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';
import Portfolios from '../Pages/Portfolios';
import Entities from '../Pages/Entities';
import ManageAccount from '../Pages/ManageAccount';
const account = require('../fixtures/erm.json');

describe('User Management Test Suite',() => {

  before(()=>{
    PreActions.preActions();
    //Add Portfolio for Portfolio access test
    Portfolios.addPortfolio('Portfolio','Cypress description',{ delay: 0 });
    cy.wait(1000)
    PreActions.preActions();
    Entities.createEntity(account.Name,account.Address,'be.enabled','54545fd32',account.Name,{delay: 0});
  })
  beforeEach(() => {
    PreActions.preActions();
    Dashboard.clickUserMenu();
    ManageAccount.clickManageLink();

  });

  it('C1038: Navigate to user management page',() => {
    ManageAccount.validateManageUserPage();
  });

  it('C955: Add member with First Name field blank (Negative)',() => {
    ManageAccount.addMemberWithout1stName(account.emailName,'Certifier');
  });

  it('C955: Add member with Last Name field blank(Negative)',() => {
    ManageAccount.addMemberWithoutLastName(account.emailName, 'Certifier');
  });
  
  it('C955: Add member with  blank fields (Negative)',() => {
    ManageAccount.addMemberWithBlankFields('Member');
  });

  it('C1016: Add member(Positive)',() => {
    ManageAccount.addMemberPositive(account.emailName, 'Certifier',account.OrganizationID);
  });

  it('C961: Resend join request to added member',() => {
    ManageAccount.resendJoinRequestToLastMember('Invitation was successfully sent')
  });

  it('C956: Update member with all entity access',() => {
    ManageAccount.updateLastMemberWithAllEntityAccess('The member has been upddated successfully');
  });

  it('C956: Update member with all portfolio access',() => {
    ManageAccount.updateLastMemberWithAllPortfolioAccess('The member has been upddated successfully');
  });

  it('C1016: Validate the status of newly added  member',() => {
    ManageAccount.lastAddedmemberJoinStatus('Pending Invitation');
  });
  it('C958: search members',() => {
    ManageAccount.searchMember(account.emailName);
  });
  it('C2887: export Members',() => {
    ManageAccount.exportMembers(account.TestOrg);
  });

  it('C957: Delete the last added member(Negative)',() => {
    ManageAccount.deleteLastMemberNegative();
  });

  it('C1033: Delete the last added member(Positive)',() => {
    ManageAccount.deleteLastMemberPositive();
  });

 //Test data clean up after all tests in this block are executed
  // after(()=>{
  //   //Delete added Entity
  //   PreActions.preActions();
  //   Entities.deleteEntityPositive("Entity deleted successfully");
  //  // Delete added  Portfolio
  //  cy.wait(1000)
  //   PreActions.preActions();
  //   Portfolios.deletePortfolio();
  // })
  
});

describe('Manage Action Item Tags Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
    Dashboard.clickUserMenu();
    ManageAccount.clickManageLink();
    ManageAccount.openActionItemTagsTab()
  });

  it('C3051 :Add Action Item Tag',() => {
    ManageAccount.addActionItemTag(account.Name,account.Description);
  });
  it('C3052 :Update Action Item Tag',() => {
    ManageAccount.updateActionItemTag(account.newName);
  });
  it('C3053 :Delete Action Item Tag',() => { 
    ManageAccount.deleteActionItemTag();
  });
});

  describe('Manage Assessment Tags Test Suite',() => {
    beforeEach(() => {
      PreActions.preActions();
      Dashboard.clickUserMenu();
      ManageAccount.clickManageLink();
      ManageAccount.OpenAssessmentTagsTab()
    });
   
    it('C6322 :Add Assessment Tag',() => {
      ManageAccount.addAssessmentTag(account.Name,account.Description);
    });
    it('C6323 :Update Assessment Tag',() => {
      ManageAccount.updateActionItemTag(account.newName)
     
    });
    it('C6324 :Delete Assessment Tag',() => { 
      ManageAccount.deleteActionItemTag();
    });
  });
