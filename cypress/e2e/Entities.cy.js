import PreActions from '../Pages/PreActions';
import Entities from '../Pages/Entities';
import ManageAccount from '../Pages/ManageAccount';
import Dashboard from '../Pages/Dashboard';
const account = require('../fixtures/erm.json');

describe('Entities test suite',() => {
  before(()=>{
      PreActions.preActions();
      Dashboard.clickUserMenu();
      ManageAccount.clickManageLink();
      ManageAccount.openEntityTagsTab()
      ManageAccount.addEntityTag(account.Name,account.Description);
  })
  beforeEach(() => {
    PreActions.preActions();
  });

  it('C1042: Create Entity(Positive)',() => {
    Entities.createEntity(account.Name,account.Address,'be.enabled','54545fd32',account.Name);
  });

  // it.only('C992 C993: Filter Entity',() => {
  //   Entities.filterEntities();
  // });

  it('C994: Search Entity(Positive)',() => {
    Entities.searchEntityPositive(account.Name);
  });


  it('C994: Search Entity(Negative)',() => {
    Entities.searchEntityNegative('EntityX',{delay: 0});
  });
  

  it('C214: Update Entity',() => {
    Entities.updateEntity(account.newName,account.Name,account.Description);
  });

  it('C3054: Export Entities',()=>{
    Entities.exportEntities(account.TestOrg,'File has been downloaded')

  })
  
  it('C1041: Delete Entity(Negative)',() => {
    Entities.deleteEntityNegative()
  });

  it('C215: Delete Entity(Positive)',() => {
    //for(let i=0;i<=10;i++){
    Entities.deleteEntityPositive('Entity deleted successfully');
  //}
  });
  after(()=>{
    PreActions.preActions();
    Dashboard.clickUserMenu();
    ManageAccount.clickManageLink();
    ManageAccount.openEntityTagsTab()
    ManageAccount.deleteEntityTag()
  })
 
});

