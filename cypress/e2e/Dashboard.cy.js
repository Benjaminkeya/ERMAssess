import PreActions from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';
const account = require('../fixtures/erm.json');

describe('Dashboard Test Suite',() => {
  beforeEach(() => {
    PreActions.preActions();
  });
  it('C190 C189 C205: Validate Dashboard elements',()=>{
    Dashboard.verifyDashboard(account.TestOrg)
  })
  it('C900: View User profile link',()=>{
    Dashboard.isUserProfileDropDownVisible()
  })
  ////Commented out this test block as client complained of flooded feedback email notifications
  // it.skip('C191: Adding a feedback',() => {
  //   Dashboard.addFeedback('Test feedback', 'We appreciate that');
  // });
  it('C1004: Help center',() => {
   Dashboard.helpCenter('Assessment Group')
  });
  it("C967: What's new",() => {
    Dashboard.whatsNew('Feature Updates');
  })
  })
  describe('Files & Photos',() => {
    beforeEach(() => {
      PreActions.preActions();
      Dashboard.clickFilesPhotosLink()
    });
    it("Upload bulk files and photos ",() => {
      Dashboard.UploadBulkfilesAndphotos(account.Name,"Files has been uploaded successfully")
    
    });
    it("Download Files and photos as zipped ",() => {
      
    });
    it("Download a single File ",() => {
      Dashboard.downloadASingleFiles()
    });
    // it("Filter Files/photos",() => {
    // });
    it("Update File/photos ",() => {
      Dashboard.updateFileOrPhoto(account.newName)
    });
    it("Delete a file or photo ",() => {
      Dashboard.deleteAFileorPhoto()
    });
});
