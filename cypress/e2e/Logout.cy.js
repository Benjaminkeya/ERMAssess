import PreActions from '../Pages/PreActions';
import Logout from '../Pages/Logout';

describe('Logout  Test Suite',()=>{

  beforeEach(()=>{
    PreActions.preActions();
  })

it('C1005: Logout',() => {
  Logout.logoutUser();
});
})



