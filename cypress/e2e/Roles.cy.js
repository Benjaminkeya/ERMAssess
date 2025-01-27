import PreActions from '../Pages/PreActions';
//import Dashboard from '../Pages/Dashboard';
import ActionItems from '../Pages/ActionItems'
const account = require('../fixtures/erm.json');
describe('Member Role',() => {
  beforeEach(() => {
    PreActions.preActions();
  });

  it('',()=>{
    
  })

})
describe.only('Certifier Role',() => {
  beforeEach(()=>{
    cy.login2(account.CertifierRole.email, account.CertifierRole.password,'https://www.ermassess.com/audits',{log:false})

  })
  
  });

  



describe('Contibutor Role',() => {
  beforeEach(() => {
    cy.login2(account.ContributorRole.email, account.ContributorRole.password,'https://www.ermassess.com/audits',{log:false})
  });
  
context('Action Items',()=>{
  beforeEach(() => {
    cy.login2(account.ContributorRole.email, account.ContributorRole.password,'https://www.ermassess.com/audits',{log:false})
    ActionItems.clickActionItemDropDown()
  });

  it('C197: Open action items page',() => {
    ActionItems.openActionItemsPage();
  });


  it('C1040: View Action Item History',()=>{
    ActionItems.viewActionItemHistory()
  })

  it('C505: Filter Action Items',() => {
    ActionItems.filterActionItems(account.Assignee,account.Assignee,account.newName);
  });

  it('C466: Add Action Item Comments',()=>{
    ActionItems.addComment(account.Name)
  })

  it('C1043: View Action Item Comments',()=>{
    ActionItems.viewComments()
  })

  it('C467: Edit Action Item Comment',()=>{
    ActionItems.editComment(account.newName)
  })

  it('C1759: Delete Action Item Comment',()=>{
    ActionItems.deleteComment()
  })

  it('C1760: Upload Evidence File to Action Item',() => {
    ActionItems.uploadEvidenceFilesToActionItem()
  });

  it('C1761: Delete Evidence File',() => {
    ActionItems.DeleteEvidenceFile();
  });

  it('C604: Export Action Items',() => {
    try{
    ActionItems.exportActionItemsExcelCSV(account.TestOrg);
  } catch (error) {
    throw error;
   }
  })
  it('C1019: Turn off Action Item Notifications',() => {
    ActionItems.turnOffNotifications('Your notification preference has been updated');
  });

  it('C2020: Turn on Action Item Notifications',() => {
    ActionItems.turnOnNotifications('Your notification preference has been updated');
  });
  })

})