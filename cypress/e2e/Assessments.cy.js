import PreActions from '../Pages/PreActions';
import Entities from '../Pages/Entities';
import Assessments from '../Pages/Assessments';
const account = require('../fixtures/erm.json');

describe('Assessments Test Suite', () => {
  before(() => {
    PreActions.preActions();
    Entities.createEntity(account.Name,account.Address,'be.enabled','54545fd32',account.Name);
   })
  beforeEach(() => {
    
        PreActions.preActions();
        cy.clickTableLink(1,1);
    
  });

  context('Assessment',()=>{ 

    it('C2368: Create Assessment', () => {
      Assessments.createAssessment(account.Name, account.Protocol, account.Description, { delay: 0 });
    });

    it('C998: Open Assessment ', () => {
      Assessments.openAssessment();
    });

    it('C225: Update Assessment', () => {
      Assessments.updateAssessment(account.Name, account.Description, { delay: 0 });
    });

    it('C1036: Search Assessment', () => {
      Assessments.searchAssessment(account.Name, { delay: 0 });
    });

    it('C1009: Filter Assessment', () => {
      Assessments.filterAssessment(account.Protocol, account.Protocol, { delay: 0 });
    });

    it('C2331: View Assessment Report', () => {
      Assessments.viewAssessmentReport();
    });

    it('C2988: Add Assessment level Notepad ',() => {
      Assessments.addAssessmentLevelNotepad(account.NotepadTitle,account.Description, 'Notepad has been created successfully');
    });

    it('C2989: Edit Assessment level Notepad ',() => {
      Assessments.editAssessmentLevelNotepad(account.NotepadTitle, 'Notepad has been updated successfully');
    });

    it('C2990: Delete Assessment level Notepad ',() => {
      Assessments.deleteAssessmentLevelNotepad('Notepad has been deleted successfully');
    });
  })

  context('Bulk File Upload',()=>{

    it('C1037: Upload Bulk files', () => {
      Assessments.assessmentBulkFileUploadSet1(account.Description,"Files has been uploaded successfully")
    });

    it('C1757: Update Bulk file description', () => {
      Assessments.updatefileDescription(account.Description)
    });

    it('C2342: Download Bulk Uploaded files', () => {
      Assessments.downloadBulkFile()
    })

    it('C1756: Delete Bulk Uploaded files', () => {
      Assessments.deleteBulkUploadedFile('File has been deleted successfully')
    })
})


  context('Assessment Team Member',()=>{

    it('C2552: Add Assessment Team Member', () => {
      Assessments.addAssessmentTeamMmember(account.Assignee)
    })
    it('C2553: Delete Assessment Team Member', () => {
      Assessments.deleteAssessmentTeamMmember('Assessment was updated successfully')
    })
   }) 
  context('Signatures',()=>{

    it('C2554: Add Signature',()=>{
      Assessments.addSignature(account.Name)
    })
    it('C2555: Delete Signature',()=>{
      Assessments.deleteSignature()
    })

    })

    context('Scope and Metadata',()=>{
    it('C2619: Add Scope & Metadata',()=>{
      Assessments.addScopeMetaData(account.Name,account.Phone)
    })
    
    })

    context('Applicability Screening',()=>{
    it('Applicability screening',() => {
      Assessments.appScreening('Applicability screening has been saved')
    })

    })
    
    context('Assessment Settings',()=>{

      it('C2031: Lock Assessment', () => {
        Assessments.lockAssessment();
      });
  
      it('C2032: Unlock Assessment', () => {
        Assessments.unLockAssessment();
      });
  
      it('C2896: Mark-as-Done Assessment', () => {
        Assessments.assessmentMarkAsDone();
      })
  
      it('C2897: Show Inapplicable Section', () => {
        Assessments.showInapplicableSection();
      });
     //Assessment complete



     //View Only
      
  })

context('Geotags',()=>{

    it('C2369: Add Geotag to a question',() => {
      Assessments.addGeoatagToQsn('Test Principle - 1',account.TestGeo)
    })

    it('C2347: Export Geotag',() => {
      Assessments.exportGeotag('Test Principle - 1')
    })

    it('C2345: Update Geotag ',() => {
      Assessments.updateGeotag(account.Name)
    })

    it('C2346: Delete Geotag ',() => {
      Assessments.deleteGeotag('')
    })
  })
  context('Multiple Observation',()=>{

    it(': Add Observation ',()=>{
      Assessments.addObservation(account.Name)
    })
    it(': Update Observation',()=>{
      Assessments.updateObservation(account.newName)
    })
    it(' : Delete Observation',()=>{
      Assessments.deleteObservation()
    })
   
  })

})

  describe('Assessment Reports', () => {

    beforeEach(() => {
      PreActions.preActions();
      cy.clickTableLink(1, 1);
    });

    it('C2383: Add Executive Summary', () => {
      Assessments.addExecutiveSummary(account.addSummary);
    });

    it('C2374: Export Assessments in PDF', () => {
      Assessments.exportAssessmentPDFReport(account.TestOrg);
    });

    // it('C: Review Exported PDF Assessments',() => {
    //    Assessments.reviewDownloadedPDFAssessment();
    // });

    it('C2375: Export Assessments in Docx', () => {
      Assessments.exportAssessmentDocxReport(account.TestOrg);
    });

    it('C2476: Verify Native Word Report', () => {
      Assessments.exportNativeDocxReport(account.TestOrg);
    });

    it('C2373: Exports Assessments in Print', () => {
      Assessments.exportAssessmentPrintReport();
    });

    it('C2376: Exports Assessments in Csv', () => {
      Assessments.exportAssessmentCsvReport(account.TestOrg);
    });

    it('C977: Hide Executive Summary in HTML', () => {
      Assessments.hideExecutiveSummaryInHtml();
    });

    it('C978: View Executive Summary in HTML', () => {
      Assessments.viewExecutiveSummaryInHtml();
    });

    it('C973: Hide Summary Table in HTML', () => {
      Assessments.hideSummaryTableInHtml();
    });

    it('C974: View Summary Table in HTML', () => {
      Assessments.viewSummaryTableInHtml();
    });

    it('C982: Hide Charts in HTML', () => {
      Assessments.hideShowChartsInHtml();
    });

    it('C979: View Charts in HTML', () => {
      Assessments.viewShowChartsInHtml();
    });

    it('C988: Hide Inapplicable Questions in HTML', () => {
      Assessments.hideInapplicableQuestionsInHtml();
    });

    it('C989: View Inapplicable Questions in HTML', () => {
      Assessments.viewInapplicableQuestionsInHtml();
    });

    it('C986: Hide Citations in HTML', () => {
      Assessments.hideCitationsInHtml();
    });

    it('C987: View Citations in HTML', () => {
      Assessments.viewCitationsInHtml();
    });

    it('C984: Hide Attachments in HTML', () => {
      Assessments.hideAttachmentsInHtml();
    });

    it('C985: View Attachments in HTML', () => {
      Assessments.viewAttachmentInHtml(account.Description);
    });

    it('C2475: Verify Risk Matrices - Heatmap', () => {
      Assessments.viewRiskMatricesHeatMap();
    });

    it('C2377: Verify Default LIST View', () => {
      Assessments.defaultListView();
    });

    it('C2380: Add Comments', () => {
      Assessments.addComments(account.addComment);
    });

    it('C2377: Edit Response using Manuscript', () => {
      Assessments.manuscriptEditing(account.editResponse);
    });

    it('C227: Delete Assessment Positive', () => {
      //Assessments.deleteAssessment(account.Name);
    });
  })

    describe("All Assessments' Page", () => {

      beforeEach(() => {
        PreActions.preActions();
      })
      it('C2370: Create assessment from All Assessments page', () => {
       Assessments.createAssessmentfromAllAssessPage(account.Name,account.Protocol)
      })
      it('C2598: Search Invalid keyword in Assessments (Negative)', () => {
       Assessments.searchInAssessmentInvalid("InvalidData")
      })
      it('C2597: Search valid keyword in Assessments (Positive)', () => {
       Assessments.searchInAssessmentValid(account.Name,account.Description,account.Phone,'10')
      })
      it('C2599: Navigate to clickable Question link (Search in Assessments)', () => {
        Assessments.searchInAssessmentNavigate(account.Name)
      })
      it('C2353: Filter All assessments', () => {
       Assessments.filterAllAssessments(account.Protocol)

        
      })
      it('C2898: Delete Assessment', () => {
       Assessments.deleteAssessmentfromAllAssessPage()
      })
  })

  describe("Assessments Groups Test Suite", () => {
    beforeEach(() => {
      PreActions.preActions();
      cy.clickTableLink(1, 1)
      Assessments.clickAssessmentGroupsBtn()
    })

    it('C1975: Open Assessment Groups page', () => {
      Assessments.validateAssessmentGroupsPage()
    })

    it('C1972: Create assessments Group', () => {
      Assessments.createAssessmentGroup(account.AssessmentGroupName,'Entity assessment group created successfully')
    })

    it('C1973: Update assessment Group', () => {
      Assessments.updateAssessmentGroup(account.AssessmentGroupName,'Entity assessment group updated successfully')
    })

    it('C1974: Delete assessments Group', () => {
      Assessments.deleteAssessmentGroup()
    })
    // after(()=>{
    //   PreActions.preActions();
    //   Entities.deleteEntityPositive('Entity deleted successfully');
    // })
  })
 

