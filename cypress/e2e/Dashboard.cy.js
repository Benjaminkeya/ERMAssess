import PreActions, { preActions } from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';

describe('Dashboard Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
  });

  it('C190 C189 C205: Validate Dasboard elements',()=>{
    Dashboard.verifyDashboard()
  })

  it('C900: View User profile link',()=>{
    Dashboard.isUserProfileDropDownVisible()
  })
  //Commented out this test block as client complained of flooded feedback email notifications
  // it.skip('C191: Adding a feedback',() => {
  //   Dashboard.addFeedback('Test feedback', 'We appreciate that');
  // });

  it('C1004: Help center',() => {
   Dashboard.helpCenter()
  });

  it("C967: What's new",() => {
    Dashboard.whatsNew();
  });
});
