import Portfolios from '../Pages/Portfolios';
import PreActions from '../Pages/PreActions';
const account = require('../fixtures/erm.json');

describe('Portfolio Suite', () => {
  beforeEach(() => {

    PreActions.preActions();
  });
  it('C969: Add portfolio with a unique name', () => {
    Portfolios.addPortfolio('Portfolio', 'Cypress description', { delay: 0 });

  });

  it('C970: Manage a portfolio', () => {
    Portfolios.managePortfolio(account.Name);
  });


  it('C971: Delete a portfolio',{ retries: 2 }, () => {
    Portfolios.deletePortfolio();
  });

  it('Add portfolio with a unique name for ManageAccount tests', () => {
    Portfolios.addPortfolio('Portfolio', 'Cypress description', { delay: 0 });

  });
});
