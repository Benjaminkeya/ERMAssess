import PreActions from '../Pages/PreActions';
import Dashboard from '../Pages/Dashboard';
const account = require('../fixtures/erm.json');

  describe('Organization Level Files & Photos',() => {
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

describe('Entity Level Files & Photos',() => {
    beforeEach(() => {
      PreActions.preActions();
      cy.clickTableLink(1,1);
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