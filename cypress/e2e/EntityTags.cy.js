import PreActions from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';
import ManageAccount from '../Pages/ManageAccount';
const account = require('../fixtures/erm.json');

describe('Manage Entity Tags', () => {

  beforeEach(() => {
    PreActions.preActions();
    Dashboard.clickUserMenu();
    ManageAccount.clickManageLink();
    ManageAccount.openEntityTagsTab()

  });

  it(': Add Entity Tag', () => {
    ManageAccount.addTag(account.Name,account.Description);
  });
  it(': update Entity Tag', () => {
    ManageAccount.updateTag(account.newName);
  });
  it(': Delete Entity Tag', () => {
    ManageAccount.deleteTag()
  });
  it(': Add Entity Tag for entity Creation test', () => {
    ManageAccount.addTag(account.Name,account.Description);
  });
  
});
