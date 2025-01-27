import PreActions from '../Pages/PreActions';
import ActionItems from '../Pages/ActionItems';
import Assessments from '../Pages/Assessments';
import Entities from '../Pages/Entities';
const account = require('../fixtures/erm.json');

describe('Action Items-Organization Level  Test Suite',() => {
  //Ations  required for each test in this suite
  
  beforeEach(() => {
    PreActions.preActions();
  });
        it('C199: Add new Organizational level action item with unique name',() => {
          ActionItems.createActionItem(account.Name,account.Description,account.Assignee,account.TestOrg);
        });
        
        it('C1762: Update action item with unique name',{ retries: 2 },() => {
          ActionItems.updateActionItem(account.newName, account.newDescription);
        });
         //Test data clean up after all  tests in this block  executed
         after(()=>{
          PreActions.preActions();
          ActionItems.deleteActionItem()
        })
});

describe('Action Items-Entity Level Test Suite',() => {
    before(()=>{
      PreActions.preActions();
      Entities.createEntity(account.Name,account.Address,'be.enabled','54545fd32',account.Name);
    })
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
        //Test data clean up after all  tests in this block  executed
        after(()=>{
          PreActions.preActions();
          cy.clickTableLink(1,1);
          ActionItems.deleteActionItem()
        })
});

describe('Action Items- Audit Question Level  Test Suite',() => {
   //Actions needed once before all tests in this suite
  before(()=>{
    PreActions.preActions();
    cy.clickTableLink(1,1);
    Assessments.createAssessment(account.Name, account.Protocol, account.Description,{delay: 0});
  })
  //Actions needed  for  each test in this suite
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1)
    Assessments.clickToOpenAssessment();
    Assessments.clickExpandSectionBtn();
    Assessments.clickFirstQsn()
  });
 
      it('C981: Add Audit Question level action item ',() => {
        ActionItems.createAuditLevelActionItem(account.Name,account.Assignee)
  });

      it('C1764: Update action item ',() => {
        ActionItems.updateActionItem(account.newName, account.newDescription);
      });
     
});

describe('My Action Items',() => {
  beforeEach(()=>{
    PreActions.preActions();
  })

  it('C2022 : View My Action Items',()=>{
    ActionItems.viewMyActionItems(account.profileID)
  })

});


describe('Manage Action Items Test Suite',() => {
  //Actions needed for each test in tthis suite
 
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
  
      });

      // it('C943: Validate Overdue status for action item ',() => {
      //   ActionItems.validateActionItemOverDueStatus();
      // }); 

      it('C1012: Delete Action Item',() => {
        ActionItems.deleteActionItemFromViewAllPage();
      });

      it('C1019: Turn off Action Item Notifications',() => {
        ActionItems.turnOffNotifications('Your notification preference has been updated');
      });

      it('C2020: Turn on Action Item Notifications',() => {
        ActionItems.turnOnNotifications('Your notification preference has been updated');
      });
       
      
   });

    