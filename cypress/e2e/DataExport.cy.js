import DataExport from '../Pages/DataExport';
import PreActions from '../Pages/PreActions';
const account = require('../fixtures/erm.json')

describe('Data Export test', () => {
  beforeEach(() => {
    PreActions.preActions();
  });

  it('C966: Export to Excel CSV', () => {
    DataExport.dataExport(account.TestOrg);
  });
  
  it('C1013: Generate Data Link', () => {
    DataExport.generateDataLink();
  });

});
