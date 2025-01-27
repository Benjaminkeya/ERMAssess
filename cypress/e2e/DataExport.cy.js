import DataExport from '../Pages/DataExport';
import PreActions from '../Pages/PreActions';
const account = require('../fixtures/erm.json')

describe('Organization Level Data Export test suite',() => {
  beforeEach(() => {
    PreActions.preActions();
  });

  it('C966: Export to Excel CSV',() => {
    DataExport.dataExport(account.Protocol,account.TestOrg,'Your Files have been downloaded successfully')
   })

  it('C1013: Generate Data Link',() => {
    DataExport.generateDataLink(account.Protocol,account.OrganizationID);
  });

});
describe('Entity Level  Data Export test suite',() => {
  
  beforeEach(() => {
    PreActions.preActions();
  });

  it('C2012: Export to Excel CSV',() => {
    DataExport.entityDataExport(account.Protocol,account.TestOrg,'Your Files have been downloaded successfully');
  });
  
  it('C2016: Generate Data Link',() => {
    DataExport.generateEntityDataLink(account.Protocol,account.OrganizationID);
  });
  // after(()=>{
  //   PreActions.preActions();
  //   cy.clickTableLink(1,1);
  //   Assessments.deleteAssessment(account.Name)
  // })
});
