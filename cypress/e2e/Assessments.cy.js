import Entities from '../Pages/Entities';
import Assessments from '../Pages/Assessments';
import PreActions from '../Pages/PreActions';
const account = require('../fixtures/erm.json');

describe('Assessments Test Suite',() => {
  before(()=>{
    PreActions.preActions();
    Entities.createEntity(account.Name,account.Address,account.updateJurisName,'be.enabled',{delay: 0});
  })
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1);
  });

  it('C224: Create Assessment',() => {
    Assessments.createAssessment(account.Name, account.Protocol, account.Description,{delay: 0});
  });
  
  it('C998: Open Assessment ',() => {
    Assessments.openAssessment();
  });

  it('C225: Update Assessment',() => { 
    Assessments.updateAssessment(account.Name,account.Description ,{delay: 0});
  });

  it('C1036: Search Assessment',() => {
    Assessments.searchAssessment(account.Name,{delay: 0});
  });

  it('C1009: Filter Assessment Positive',() => {
    Assessments.filterAssessment(account.Protocol,account.Protocol,{delay: 0});
  });

    //context('Bulk file Upload section',()=>{
    
  it('C1037:Upload Bulk files',{retries: 1 },() => {
    Assessments.assessmentBulkFileUpload(account.Description)
    });

  it('C1757: Update Bulk file description',() => {
    Assessments.updatefileDescription(account.Description)
    });

  it(' :Download Bulk Uploaded files',()=>{
    Assessments.downloadBulkFile()
   }) 

  it('C1756: Delete Bulk Uploaded files',  () => {
    Assessments.deleteBulkUploadedFile()
  })
  //})

  it('C2031: Lock Assessment',() => {
    Assessments.lockAssessment();
  });

  it('C2032: Unlock Assessment',() => {
    Assessments.unLockAssessment();
  });

  it('C1039: Delete Assessment Negative',() => {
    Assessments.deleteAssessmentNegative('Test Assess',{delay: 0});
  });

  it('C227: Delete Assessment Positive',() => {
    Assessments.deleteAssessmentPositive(account.Name);
  });
 })

  describe('Observations/Audit  Questions Test Suite',() => {
    before(()=>{
      PreActions.preActions();
      cy.clickTableLink(1,1);
      Assessments.createAssessment(account.Name, account.Protocol, account.Description,{delay: 0});
    })
    
    beforeEach(() => {
      PreActions.preActions();
      cy.clickTableLink(1,1);
    })
  it('C997: Answer Audit questions',() => {
    Assessments.observations(account.Description,account.Phone,{delay: 0});
  });
  
  it('C608: Attach a file to an audit question',() => {
  Assessments.uploadFilesToAuditQsns(account.Description)
  });

  it('C1754: Mark Question as Not Applicable',() => {
    Assessments.markAuditQuestionNA() ;
  });

  it('C1001: Mark Section as Not Applicable',() => {
    Assessments.markSectionNA();
  });

  it('C1753: Mark Assessment as Not Applicable',() => {

    Assessments.markAssessmentNA();
  });


  it('C1755: Show/Hide Compliance Questions',() => {
    Assessments.showHideComplianceQuestions();
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

describe("Assessments Groups Test Suite",()=>{
  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1)
    Assessments.clickAssessmentGroupsBtn()
  })

  it('C1975: Open Assessment Groups page',()=>{
    Assessments.validateAssessmentGroupsPage()
  })

  it('C1972: Create assessments Group',()=>{
    Assessments.createAssessmentGroup(account.AssessmentGroupName)
  })

  it('C1973: Update assessment Group',()=>{
    Assessments.updateAssessmentGroup(account.AssessmentGroupName)
  })

  it('C1974: Delete assessments Group',()=>{
    Assessments.deleteAssessmentGroup()
  })
})

describe('Geotags Test Suite',()=>{

  beforeEach(() => {
    PreActions.preActions();
    cy.clickTableLink(1,1);
  });

it(': Add Geotag to a question',() => {
  Assessments.addGeoatagToQsn(account.TestGeo)
})

it(':Export Geotag',() => {
  Assessments.exportGeotag()
})

it(': Update Geotag ',() => {
  Assessments.updateGeotag('updated Title')
})

it(': Delete Geotag ',() => {
  Assessments.deleteGeotag()
})
after(()=>{
  PreActions.preActions();
  Entities.deleteEntityPositive();
})

})