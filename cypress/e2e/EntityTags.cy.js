import PreActions from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';
import ManageAccount from '../Pages/ManageAccount';
const account = require('../fixtures/erm.json');

describe('Manage Entity Tags Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
    Dashboard.clickUserMenu();
    ManageAccount.clickManageLink();
    ManageAccount.openEntityTagsTab()
  });

  it('C2005 :Add Entity Tag',() => {
    ManageAccount.addEntityTag(account.Name,account.Description);
  });
  it('C2006 :Update Entity Tag',() => {
    ManageAccount.updateEntityTag(account.newName);
  });
  it('C2007 :Delete Entity Tag',() => { 
    ManageAccount.deleteEntityTag()
  });
});
