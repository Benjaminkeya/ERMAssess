import Portfolios from '../Pages/Portfolios';
import PreActions from '../Pages/PreActions';
import Entities from '../Pages/Entities';
const account = require('../fixtures/erm.json');

describe('Portfolio Suite',() => {
  before(()=>{
    PreActions.preActions();
    Entities.createEntity(account.Name,account.Address,'be.enabled','54545fd32',account.Name);
  })
  beforeEach(() => {
    PreActions.preActions();
  });
  it('C969: Add portfolio with a unique name',() => {
    Portfolios.addPortfolio('Portfolio','Cypress description',{ delay: 0 });
  });

  it('C970: Manage a portfolio',() => {
    // const resizeObserver = new ResizeObserver(() => {
    //   try {
        // Resize logic
        Portfolios.managePortfolio(account.Name);
        
      // } catch (e) {
      //   // Handle the error or simply ignore it
      // }
    //});
    
  });

  it('C971: Delete a portfolio',() => {
   
  });
  after(()=>{
    PreActions.preActions();
    Entities.deleteEntityPositive('Entity deleted successfully')
  })
});
