import Organization from '../Pages/Organization';
import PreActions from '../Pages/PreActions';

describe('Organization Test Suite', () => {
  beforeEach(()=>{
    PreActions.preActions();
  })
  it('C193 C189: Switching the organization from the dropdown and assert the selected organization', () => {
   
  });
  it(':View Subscriber Organization',()=>{
    Organization.viewSubscriberOrganizations()
  })
});
