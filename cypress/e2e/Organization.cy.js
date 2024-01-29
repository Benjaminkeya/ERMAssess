import Organization from '../Pages/Organization';
import PreActions from '../Pages/PreActions';

describe('Organization Test Suite',() => {
  beforeEach(()=>{
    PreActions.preActions();
  })
  it('C193 C189: Switch organization',() => {
   
  });
  it(':View Subscriber Organizations',()=>{
    Organization.viewSubscriberOrganizations()
  })
});