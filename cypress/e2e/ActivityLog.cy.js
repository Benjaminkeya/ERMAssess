import ActivityLog from "../Pages/ActivityLog";
import PreActions from "../Pages/PreActions";
describe('Activity Log',()=>{
beforeEach(()=>{
  PreActions.preActions()
  ActivityLog.clickUserMenu()
  ActivityLog.clickActivityLogLink()
})

it('C968: Activity Log page validation', () => {
  ActivityLog.ValidateActivityLogPage()
});
it('C968: Activity Log-Review Assessment ',()=>{
  ActivityLog.reviewActivityLog()
})
it('C1758: Activity Log - View Assessment ',()=>{
  ActivityLog.viewActivityLogAssessment()
})
})