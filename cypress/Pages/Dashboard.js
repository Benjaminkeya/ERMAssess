var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

class Dashboard {
  //Page elements
  elements = {
    userMenu: () => cy.get('#collasible-nav-dropdown'),
    feedbackBtn: () => cy.contains('Feedback'),
    feedbackDesc: () => cy.get('.modal-body > div > .form-control'),
    submitBtn: () => cy.get('.modal-footer > .btn-primary'),
    message: () => cy.get('p.mb-1 > small'),
    closeFeedbackModal: () => cy.get('.modal-footer > .btn'),
    helpBtn: () => cy.contains('Help'),
    helpCenterModal: () => cy.get('.modal-header'),
    verifyHelpCentrePage: () => cy.contains('Help Center'),
    searchField:()=>cy.get('.mb-4 > .form-control'),
    searchBtn:()=>cy.contains('button','Search'),
    firstHelpArticleLink:()=>cy.contains('Assessment Groups'),
    helpArticleTitle:()=>cy.get(':nth-child(25)'),
    logo: () => cy.get('img'),
    whatsNewLink:()=>cy.get('#whatsNew'),
    filesAndPhotosLink:()=>cy.contains('a','Files & Photos'),
    dragAndDropBtn:()=>cy.get("p[class='mb-0']"),
    descField:()=>cy.get('#description'),
    uploadBulfFilesField: () => cy.get('.text-center > .mb-0'),
      
  };

  //Page element actions
  clickUserMenu(){
    this.elements.userMenu().as('menu')
    cy.get('@menu').click({force:true})
  }
  
  isUserProfileDropDownVisible() {
    this.elements.userMenu().should('be.visible')
  }
  clickFilesPhotosLink(){
    this.elements.filesAndPhotosLink().click({force:true});
  }
  //Class Function Objects
   addFeedback(Description, expectedResponse) {
    this.elements.feedbackBtn().should('be.visible').click({ force: true });
    this.elements.feedbackDesc().should('be.visible').type(Description + randomNum);
    this.elements.submitBtn().should('be.visible').click();
    this.elements.message().should('contain', expectedResponse);
    this.elements.closeFeedbackModal().should('be.visible').click();
  }

  verifyDashboard(org){
    //verify logo is present
    this.elements.logo().should('be.visible');
    //assert web app title
    cy.title().should('include',org)
    //verify Copyright info is displayed
    cy.contains('Copyright © 2025 ERM')
    cy.get('.my-3 > a').should('be.visible').click({force:true})
    //open privacy policy link in the footer
    cy.window().then((newWindow) => {
      // Perform actions in the new tab
      newWindow.location.href = '/contents/65147fbbb80cc';
      cy.contains('Privacy policy');
    });
  }

  helpCenter(searchTerm) {
    this.elements.helpBtn().should('be.visible').click({force:true});
    this.elements.verifyHelpCentrePage();
    this.elements.searchField().type(searchTerm)
    cy.intercept('GET','**/*').as('search')
    this.elements.searchBtn().click()
    cy.wait('@search')
    this.elements.firstHelpArticleLink().should('exist').click({force:true});
    cy.contains('a','View content on full screen').scrollIntoView().invoke('removeAttr','target').click({force:true});
    cy.url().should('include', '/contents/'); 
  //   cy.window().then((newWindow) => {
  //     // Perform actions in the new tab
  //     cy.url().then((url) => {
  //       newWindow.location.href = url;
  //       cy.scrollTo('bottom')
  //       cy.contains('Grouping Your Assessments');
  //     }); 
  //   });
  //   cy.window().then((win) => {
  //     const newTab = win.open('', '_blank'); // Open a blank tab in the same window
  //     expect(newTab,{ timeout: 30000 }).to.exist;
  //   });
   }

  searchHelpCenterArticle() {
    this.elements.helpBtn().should('be.visible').click({force:true});
    this.elements.verifyHelpCentrePage();
    this.elements.firstHelpArticleLink().should('exist').click({force:true});
  }
  
  whatsNew(label){
    this.elements.whatsNewLink().click({force:true});
    cy.contains(label).eq(0).invoke('removeAttr', 'target').click({force:true})
    //cy.window().then((win) => {
     // const newTab = win.open('', '_blank'); // Open a blank tab in the same window
      //expect(newTab,{ timeout: 30000 }).to.exist;
     cy.url().should('contain', '/contents/');
   // });
  }
  UploadBulkfilesAndphotos(desc){
    cy.url().should('contain','/files')
    cy.contains('Files & Photos')
    cy.contains('button','Bulk Upload').click({force:true})
    this.elements.uploadBulfFilesField().attachFile(['file-sample.pdf', 'file-sample.docx', 'file-sample.xlsx', 'file-sample.txt','file-sample.jpg','file-sample.png','file-sample.webp','file-sample.csv','file-sample.pptx','file-sample.ppt','file-sample.doc','file-sample.xls','file-sample.avi','file-sample.mp3','file-sample.mp4','file-sample.gif','file-sample.bmp','file-sample.mov','file-sample.vsdx','file-sample.xlsm'], { subjectType: 'drag-n-drop',mimeType:'application/pdf',encoding: 'utf-8' });
    cy.get(':nth-child(23) > .d-flex > .mt-2').scrollIntoView()
    this.elements.descField().scrollIntoView().type(desc + randomNum)
    cy.intercept('POST','**/*').as('upload')
    cy.contains('button','Upload File').click({force:true})
    cy.wait('@upload')
  }
  downloadAllFilesAsZipped(){
    cy.contains('button','Download Files').click({force:true})
    cy.intercept('GET','**/*').as('download')
    cy.contains('button','Download').click({force:true})
    cy.wait('@download')
  }
  downloadASingleFiles(){
    cy.intercept('GET','**/*').as('download')
    cy.get('tbody tr:nth-child(1) td:nth-child(6) button:nth-child(1)').click({force:true})
    cy.wait('@download')
  }
  updateFileOrPhoto(desc){
    cy.get('tbody tr:nth-child(1) td:nth-child(6) button:nth-child(2)').click({force:true})
    this.elements.descField().type(desc + randomNum )
    cy.intercept('PUT','**/*').as('updateFile')
    cy.contains('button','Update File').click({force:true})
    cy.wait('@updateFile')
    cy.contains(desc + randomNum)
  }
  deleteAFileorPhoto(){
    cy.get('tbody tr:nth-child(1) td:nth-child(6) button:nth-child(3)').click({force:true})
    cy.get('.form-check-input').check()
    cy.intercept('Delete','**/*').as('deleteFile')
    cy.contains('button','Delete').click({force:true})
    cy.wait('@deleteFile')

  }
}
export default new Dashboard()
