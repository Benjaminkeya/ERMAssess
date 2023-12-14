import Assessments from '../Pages/Assessments';
import PreActions from '../Pages/PreActions';
const account = require('../fixtures/erm.json')

describe('Audit Questions',()=>{
  

    beforeEach(() => {
      PreActions.preActions();
      cy.clickTableLink(1,1);
    });
   
    it('C997: Answer Audit questions', () => {
    
        Assessments.observations(account.Description,account.Phone,{delay: 0});
      });
      
    it('C608: Attach a file to an audit question', () => {
    Assessments.uploadFilesToAuditQsns(account.Description)
    });

    it('C1754: Mark Question as Not Applicable', () => {
      Assessments.markAuditQuestionNA() ;
    });
    
    it('C1001: Mark Section as Not Applicable', () => {
      Assessments.markSectionNA();
    });
    
    it('C1753: Mark Assessment as Not Applicable', () => {
    
      Assessments.markAssessmentNA();
    });

    it(': Add Geotag to a question', () => {
      Assessments.addGeoatagToQsn(account.TestGeo)
    })
    
    it(': View Geotag Map ', () => {
      Assessments.viewGeotag()
    })
    it(':Export Geotag', () => {
      Assessments.viewGeotag(account.Name)
    })
    it(': Update Geotag ', () => {
      Assessments.updateGeotag('updated Title')
    })
    it(': Delete Geotag ', () => {
      Assessments.deleteGeotag()
    })

    it('C1755: Show/Hide Compliance Questions', () => {
      Assessments.showHideComplianceQuestions();
    });

})
