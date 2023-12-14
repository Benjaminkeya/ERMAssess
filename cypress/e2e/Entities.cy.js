import PreActions from '../Pages/PreActions';
import Entities from '../Pages/Entities';
const account = require('../fixtures/erm.json');

describe('Entities test suite', () => {
  beforeEach(() => {
    PreActions.preActions();
  });

  it('C1042: Create New Entity Positive', () => {
   // cy.allure().severity('critical')
    Entities.createEntity(account.Name,account.Address,account.jurisName,'be.enabled',{delay: 0});
  });

  it('C213: Create New Entity Negative', () => {
    Entities.createEntity(account.Name,'t{backspace}',account.jurisName,'be.disabled',{delay: 0});

  });

  it('C994: Search Entity Positive', () => {
    Entities.searchEntityPositive(account.Name );
  });


  it('C994: Search Entity Negative', () => {
    Entities.searchEntityNegative('EntityX',{delay: 0});
  });
  
  it('C214: Update Entity', () => {
    //cy.allure().severity('critical')
    Entities.updateEntity(account.newName,account.Name,account.updateJurisName,account.Description);
  });

  it('C992 C993: Filter Entity by Jurisdiction and Date Range', () => {
    Entities.filterEntityByDateRangeAndJurisdiction(account.updateJurisName);
  });

  it('C1041: Delete Entity Negative', () => {
    Entities.deleteEntityNegative('Test Text',{delay: 0});
  });

  it('C215: Delete Entity Positive', () => {
    Entities.deleteEntityPositive();
  });
  
  it('Create Entity for Assessmentes test', () => {
      
    Entities.createEntity(account.Name,account.Address,account.updateJurisName,'be.enabled',{delay: 0});
  })
  
});

