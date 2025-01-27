import PreActions from "../Pages/PreActions";
import Entities from "../Pages/Entities";
import Assessments from "../Pages/Assessments";
const account = require('../fixtures/erm.json');

describe('Observations/Audit  Questions Test Suite',() => {
    before(()=>{
    PreActions.preActions();
    Entities.createEntity(account.Name,account.Address,'be.enabled','54545fd32',account.Name, { delay: 0 });
    cy.clickTableLink(1,1);
    Assessments.createAssessment(account.Name, account.Protocol, account.Description,{delay: 0});
    })
   
    beforeEach(() => {
      PreActions.preActions();
      cy.clickTableLink(1,1);
    })

  it('C997: Answer Audit questions',() => {
    Assessments.observations(account.Description,account.Phone,account.Name,'12312026PM','10');
  });
  it('C2991: Add Question level Notepad ',() => {
    Assessments.addQuestionLevelNotepad(account.NotepadTitle,account.Description, 'Notepad has been created successfully');
  });

  it('C2992: Edit Quetsion level Notepad ',() => {
    Assessments.editQuestionLevelNotepad(account.NotepadTitle, 'Notepad has been updated successfully');
  });

  it('C2993: Delete Question level Notepad ',() => {
    Assessments.deleteQuestionLevelNotepad('Notepad has been deleted successfully');
  });
  
  it('C608: Attach a file to an audit question',() => {
    Assessments.uploadFilesToAuditQsns(account.Description)
  });

  it('C2343: Update an audit question file ',() => {
    Assessments.updateAuditQstnFile(account.Description)
    });

  it('C2344: Delete an audit question file ',() => {
    Assessments.deleteAuditQstnFile()
    });

  it('C1754: Mark Question as Not Applicable',() => {
    Assessments.markAuditQuestionNA() ;
  });

  it('C1001: Mark Section as Not Applicable',() => {
    Assessments.markSectionNA();
  });
  it('C2897: Show Inapplicable Section', () => {
    Assessments.showInapplicableSection();
  });

  it('C1753: Mark Assessment as Not Applicable',() => {
    Assessments.markAssessmentNA();
  });
 
 })

 describe('Corrective Actions', () => {
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1, 1);
  });

  it('C2433: View Correction Action Page', () => {
    Assessments.viewCorrectiveActionPage();
  });

  it('C2615: Go back to Assessment Page', () => {
    Assessments.goBackToAssessmentPage();
  });

  it('C2438: Select any item in filter dropdown', () => {
    Assessments.filterDropdown();
  });

  it('C2440: Export Action Items',() => {
    Assessments.exportActionItemsCSV(account.TestOrg);
  });

  it('C2570: User can copy information from correction action.', () => {
    Assessments.copyInformation();
  });

  it('C2434: Create Action item and verify increase count.', () => {
    Assessments.createActionItemAndVerifyCount(account.Name,account.Assignee,account.ActionTag);
  });

  it('Export Corrective Action in Excel' , () =>{
    Assessments.exportCorrectiveAction(account.TestOrg,"Your file has been downloaded successfully")
  })

  it('C6320: Bulk Update Corrective Action Item' , ()=>{
    Assessments.bulkUpdateActionItems()
  })

  it('C6321: Show Action Item with Inapplicable Questions' , ()=>{
    Assessments.inapplicableActionItem()
  });

  it('C3087: User able to delete action item from corrective action', () => {
    Assessments.deleteCorrectiveAction();
  });
  // after(()=>{
  //   PreActions.preActions();
  //   cy.clickTableLink(1,1);
  //   Assessments.deleteAssessment(account.Name);
  //   PreActions.preActions();
  //   Entities.deleteEntityPositive('Entity deleted successfully');

  //   })



})