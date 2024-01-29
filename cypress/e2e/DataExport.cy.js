import DataExport from '../Pages/DataExport';
import PreActions from '../Pages/PreActions';
import Entities from '../Pages/Entities';
const account = require('../fixtures/erm.json')

describe('Organization Level Data Export test suite',() => {
  beforeEach(() => {
    PreActions.preActions();
  });

  it('C966: Export to Excel CSV',() => {
    DataExport.dataExport(account.TestOrg);
  });
  
  it('C1013: Generate Data Link',() => {
    DataExport.generateDataLink(account.OrganizationID);
  });

});
describe('Entity Level  Data Export test suite',() => {
  after(()=>{
    PreActions.preActions();
    Entities.deleteEntityPositive()
  })
  beforeEach(() => {
    PreActions.preActions();
  });

  it(': Export to Excel CSV',() => {
    DataExport.entityDataExport(account.TestOrg);
  });
  
  it(': Generate Data Link',() => {
    DataExport.generateEntityDataLink(account.OrganizationID);
  });

});
