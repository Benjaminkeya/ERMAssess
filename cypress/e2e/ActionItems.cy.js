import PreActions from '../Pages/PreActions';
import ActionItems from '../Pages/ActionItems';
import Assessments from '../Pages/Assessments';
const account = require('../fixtures/erm.json');

describe('Action Items-Organization Level  Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
  });
        it('C199: Add new Organizational level action item with unique name',() => {
          ActionItems.createActionItem(account.Name,account.Description,account.Assignee,account.TestOrg);
        });
        
        it('C1762: Update action item with unique name',{ retries: 2 },() => {
          ActionItems.updateActionItem(account.newName, account.newDescription);
        });
});

describe('Action Items-Entity Level Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1)
  });
  
        it('C980: Add new Entity level action item with unique name',() => {
          ActionItems.createActionItem(account.Name,account.Description,account.Assignee,account.TestOrg);
        });
        
        it('C1763: Update action item with unique name',() => {
          ActionItems.updateActionItem(account.newName, account.newDescription);
        });
});

describe('Action Items- Audit Question Level  Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1)
    Assessments.clickToOpenAssessment();
    Assessments.clickExpandSectionBtn();
    Assessments.clickFirstQsn()
  });
 
      it('C981: Add Audit Question level action item ',() => {
        ActionItems.createAuditLevelActionItem(account.Name,account.Assignee,'test')
  });

      it('C1764: Update action item ',() => {
        ActionItems.updateActionItem(account.newName, account.newDescription);
      });

});

describe('Manage Action Items Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
    ActionItems.clickActionItemDropDown()
  });
  
      it('C197: Open action items page',() => {
        ActionItems.openActionItemsPage();
      });

      it('C1040: View Action Item History',()=>{
        ActionItems.viewActionItemHistory()
      })

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

      it('C505: Filter Action Items',() => {
        ActionItems.filterActionItems(account.Assignee,account.Assignee,account.newName);
      });

      it('C1760: Upload Evidence File to Action Item',() => {
        ActionItems.uploadEvidenceFilesToActionItem()
      });

      it('C1761: Delete Evidence File',() => {
        ActionItems.DeleteEvidenceFile();
      });

      it('C604: Export Action Items',() => {
        ActionItems.exportActionItemsExcel(account.TestOrg);
      });

      it('C1012: Delete Action Item',() => {
        ActionItems.deleteActionItemFromViewAllPage('The action Item has been deleted successfully');
      });

      it('C1019: Turn off Action Item Notifications',() => {
        ActionItems.turnOffNotifications('Your notification preference has been updated');
      });

      it('C2020 : Turn on Action Item Notifications',() => {
        ActionItems.turnOnNotifications('Your notification preference has been updated');
      });
      it(': Validate Overdue status for action item ',() => {
        ActionItems.validateActionItemOverDueStatus();
      });   
   });

  describe('My Action Items',()=>{
    beforeEach(()=>{
      PreActions.preActions();
    })

    it('2022: My Action Items',()=>{
      ActionItems.viewMyActionItems(account.Assignee)
    })
    
    })
