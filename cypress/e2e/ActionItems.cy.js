import PreActions from '../Pages/PreActions';
import ActionItems from '../Pages/ActionItems';
import Assessments from '../Pages/Assessments';
const account = require('../fixtures/erm.json');



describe('Action Items-Organization Level', () => {
  beforeEach(() => {
    PreActions.preActions();
  });
        it('C199: Add new Organizational level action item with unique name',{ retries: 2 }, () => {
          ActionItems.createActionItem(account.Name,account.Description,account.Assignee,account.TestOrg);
        });
        
        it.only('C1762: Update action item with unique name',{ retries: 2 }, () => {
          ActionItems.updateActionItem(account.newName, account.newDescription);
        });

});

describe('Action Items-Entity Level', () => {
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1)
  });
  
        it('C980: Add new Entity level action item with unique name',{ retries: 2 }, () => {
          ActionItems.createActionItem(account.Name,account.Description,account.Assignee,account.TestOrg);
        });
        
        it('C1763: Update action item with unique name',{ retries: 2 }, () => {
          ActionItems.updateActionItem(account.newName, account.newDescription);
        });
});
describe('Action Items- Audit Question Level', () => {
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1)
    cy.clickTableLink(1,1);
    Assessments.clickExpandSectionBtn();
    Assessments.clickFirstQsn()
  });
 
      it('C981: Add new Audit Question level action item with unique name',{ retries: 2 } , () => {
        ActionItems.createAuditLevelActionItem(account.Name,account.Assignee,'test')
  });

      it('C1764: Update action item with unique name', { retries: 2 } ,() => {
        ActionItems.updateActionItem(account.newName, account.newDescription);
      });

      it(': Validate Overdue status for action item ', { retries: 2 } ,() => {
        ActionItems.validateActionItemOverDueStatus();
      });

});


describe('Manage Action Items', () => {
  beforeEach(() => {
    PreActions.preActions();
    ActionItems.clickActionItemDropDown()
  });
  
      it('C197: View all action items', () => {
        ActionItems.viewAllActionItems();
      });

      it('C1040: View Action Item History',()=>{
        ActionItems.viewActionItemHistory()
      })

      it('C466: Add Action Item Comments',{ retries: 2 },()=>{
        ActionItems.addComment(account.Name)
      })
  
      it('C1043: View Action Item Comments',()=>{
        ActionItems.viewComments()
      })

      it('C467: Edit Action Item Comment',{ retries: 2 },()=>{
        ActionItems.editComment(account.newName)
      })

      it('C1759: Delete Action Item Comment',{ retries: 2 },()=>{
        ActionItems.deleteComment()
      })

      it('C505: Filter Action Items', () => {
        ActionItems.filterActionItems('Benjamin Keya','Benjamin Keya',account.newName);
      });

      it('C1760: Upload Evidence File to Action Item',{ retries: 2 }, () => {
        ActionItems.uploadEvidenceFilesToActionItem()
      });

      it('C1761: Delete Evidence File',{ retries: 2 }, () => {
        ActionItems.DeleteEvidenceFile();
      });

      it('C604: Export Action Items', () => {
        ActionItems.exportActionItems();
      });

      
      it('C1012: Delete Action Item',{ retries: 2 }, () => {
        ActionItems.deleteActionItemFromViewAllPage('The action Item has been deleted successfully');
      });

      it(': Turn on Action Item Notifications',{ retries: 2 }, () => {
        ActionItems.turnOnNotifications('Your notification preference has been updated');
      });

      it('C1012: Turn o Action Item Notifications', () => {
        ActionItems.turnOffNotifications('Your notification preference has been updated');
      });
      describe('My Action Items',()=>{

      it('My Action Items',()=>{
        ActionItems.viewMyActionItems(account.Name)
      })
      
      })
    
});

