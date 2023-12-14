import Assessments from '../Pages/Assessments';
import PreActions from '../Pages/PreActions';
const account = require('../fixtures/erm.json');

describe('Assessments', () => {
  
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1);
  });

  it.only('C224: Create Assessment', () => {
    
    Assessments.createAssessment(account.Name, account.Protocol,account.Description,{delay: 0});
  });
  
  it('C998: Open Assessment ', () => {
    
    Assessments.openAssessment();
  });

  it('C225: Update Assessment', () => {
    
    Assessments.updateAssessment(account.Name,account.Description ,{delay: 0});
  });


  it('C1036: Search Assessment', () => {
   
    Assessments.searchAssessment(account.Name,{delay: 0});
  });

  it('C1009: Filter Assessment Positive', () => {
   
    Assessments.filterAssessment(account.Protocol,account.Protocol,{delay: 0});
  });
  it('C1037:Upload Bulk files',{retries: 1 }, () => {

    Assessments.assessmentBulkFileUpload(account.Description)
      
    });
  it('C1757: Update Bulk file description',{ retries: 2 }, () => {
    Assessments.updatefileDescription(account.Description)
      
    });
  it('C1756: Delete Bulk Uploaded files',{ retries: 2 },  () => {
    Assessments.deleteBulkUploadedFile()
  });

  it('C1039: Delete Assessment Negative', () => {
    Assessments.deleteAssessmentNegative('Test Assess',{delay: 0});
  });

  it('C227: Delete Assessment Positive', () => {
    Assessments.deleteAssessmentPositive(account.Name);
  });

  it('Create Assessment for Action items creation', () => {
    
    Assessments.createAssessment(account.Name,account.Protocol,account.Description,{delay: 0});
  });
})
describe("All Assessments' Page",()=>{
  beforeEach(() => {
    PreActions.preActions();
    Assessments.clickAssessmentsBtn()
  })
  
  it('Filter All assessments',()=>{
    Assessments.filterAllAssessments(account.Protocol)
  })

  // it('Reset All assessments Filters ',()=>{
    
  // })
})
describe("Assessments Groups",()=>{
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1)
    Assessments.clickAssessmentGroupsBtn()
  })

  it('C1975: Open Assessment Groups page',()=>{
    Assessments.validateAssessmentsGroupPage()
  })

  it('C1972: Create assessments Group',()=>{
    Assessments.createAssessmentGroup(account.AssessmentGroupName)
  })

  it('C1973: Update assessment Group',()=>{
  })

  it('C1974: Delete assessments Group',()=>{
  })
  
})