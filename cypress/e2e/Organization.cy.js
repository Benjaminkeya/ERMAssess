import Organization from '../Pages/Organization';
import PreActions from '../Pages/PreActions';
const account = require('../fixtures/erm.json')

describe('Organization Test Suite',() => {
  beforeEach(()=>{
    PreActions.preActions();
  })
  it('C193 C189: Switch organization',() => {
   
  });
  it('C2348: View Subscriber Organizations',()=>{
    Organization.viewSubscriberOrganizations(account.profileID)
  })

  it('C2338: Add Dashboard Report',()=>{
    Organization.addReport(account.ReportTitle, account.ReportDesc, account.ReportiFrameCode,account.Assignee, account.ReportID,'The Report has been created successfully');
  })

  it('C2339: Edit Dashboard Report',()=>{
    Organization.editReport(account.ReportEditedTitle,'The Report has been updated successfully');
  })

  it('C2340: Delete Dashboard Report',()=>{
    Organization.deleteReport('The Report has been deleted successfully',account.ReportEditedTitle);
  })
});