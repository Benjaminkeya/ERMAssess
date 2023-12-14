import PreActions from '../Pages/PreActions';
import Logout from '../Pages/Logout';

describe('Logout',()=>{

  beforeEach(()=>{
    PreActions.preActions();
  })

it('C1005: Logout',{ retries: 3 }, () => {
  Logout.logoutUser();
});
})



