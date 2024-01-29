//Generate a random number
 var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

class Assessment {
//Page Elements
  elements = {
    newAssessBtn: () => cy.contains('button','New Assessment'),
    assessModal: () => cy.get('.w-fixed-640 > .border-bottom'),
    nameField: () => cy.get('#name'),
    descriptionField: () =>cy.get('#description'),
    createAsessBtn: () => cy.get('form > .d-flex > :nth-child(2) > .btn-primary'),
    assessmentsBtn:()=>cy.contains('a','Assessments'),
    asessDateRangeField:()=>cy.get('.react-datepicker__input-container > .form-control'),
    filterByEntityField:()=>cy.get(':nth-child(2) > .rbt > div > .rbt-input-main'),
    firstEntity:()=>cy.get('#entity-item-0'),
    filterByProtocolField:()=>cy.get(':nth-child(3) > .rbt > div > .rbt-input-main'),
    firstProtocol:()=>cy.get('#protocols-item-0'),
    firstAssessment:()=>cy.get(':nth-child(2) > .rbt > div > .rbt-input-main'),
    assessmentLink:()=>cy.xpath("//tbody[@class='table-group-divider']//tr[1]/td[1]/a"),
    assessmentGroupBtn:()=>cy.contains('a','Assessment Groups'),
    newGroupBtn:()=>cy.get('.px-3'),
    groupTitle:()=>cy.get('#title'),
    createGroupBtn:()=>cy.contains('button','Create Group'),
    editAssessmentGroupBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/button/span[contains(text(),'tune')]"),
    updateGroupBtn:()=>cy.contains('button','Update Group'),
    delAssessmentGroupBtn1:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/button/span[contains(text(),'delete_outline')]"),
    delAssessmentGroupBtn2:()=>cy.get("button[type='submit']"),
    assessGroupInnerText:()=>cy.get('.text-muted'),
    assessSettings: () => cy.xpath("//span[contains(text(),'settings')]"),
    updateBtn1: () => cy.get('.dropdown-menu > :nth-child(1)'),
    manageLockBtn: () => cy.get('.dropdown-menu > :nth-child(3)'),
    lockBtn: () => cy.get('.offcanvas-body input.form-check-input[type="checkbox"]'),
    closeBtn: () => cy.get('.btn-close'),
    createAssessDropDown: () =>cy.xpath( "//div[@class='mb-3']//div[@class='rbt']//div//input[@placeholder='Filter by protocol']"),
    assessProtocolDropDown: () => cy.get('.h-100vh > :nth-child(2) > .rbt > div > .rbt-input-main'),
    protocolOption: () => cy.get('#protocol-typeahead-item-0'),
    clearProtocolBtn: () => cy.get("button[aria-label='Clear']"),
    protocolFilterBtn:()=>cy.xpath("//input[@placeholder='Filter by protocol']"),
    updateBtn2: () =>cy.get('form > .d-flex > :nth-child(2) > .btn-primary'),
    assessmentName:()=>cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)'),
    assessmeentReportBtn:()=> cy.get(':nth-child(1) > .text-end > .d-flex > :nth-child(1) > .btn > .material-icons-outlined'),
    assessDeleteBtn: () => cy.get(':nth-child(1) > .text-end > .d-flex > :nth-child(3) > .btn > .material-icons-outlined'),
    assessNameInnerText: () => cy.get('.modal-title >.text-muted'),
    confirmAssesName: () => cy.get('#productName'),
    delAssessBtn: () => cy.get('.btn-danger'), 
    manageAssessBtn:()=>cy.get('div:nth-child(4) > .dropdown-item'),
    assessNABtn:()=>cy.get('.form-check:nth-child(3) > .form-check-input'),
    updateAssessNA:()=>cy.contains('button','Update'),
    invalidFeedback: () => cy.get('.invalid-feedback'),
    message: () =>cy.get('h5.mb-1 > small'),
    showComplianceQsnsBtn:()=> cy.get("input[value='true']"),
    assessmentReportBtn:()=> cy.get('.gap-2 > .btn'),
    selectQsn:()=> cy.get('[data-cy="section-0-question-0"]'),
    disabledSection:()=> cy.get('[data-cy="section-toggle-0"]'),
    principlaDropdownBtn:()=>cy.get('[data-cy="principle-dropdown"]'),
    firstPrinciple:()=>cy.get('[data-cy="principle-1"]'),
    sectionExpandBtn:()=>cy.get('[data-cy="section-0"]'),
    testPropmtText:()=> cy.get('#\\36 57304c8299b2'),
    selectAllBtn:()=> cy.get('#all'),
    yesBtn:()=>cy.get('#\\36 572f92e61092'),
    noBtn:()=>cy.get('#\\36 572f9452fb1b'),
    MaybeBtn:()=>cy.get('#\\36 572f95e5afd0'),
    child1TestPrompt:()=>cy.get(':nth-child(3) > #\\36 572fa1234305'),
    child2TestPrompt:()=>cy.get(':nth-child(3) > #\\36 572fa20b818e'),
    testPromptRadio:()=>cy.get(':nth-child(3) > #\\36 57308d0789ef'),
    dateField:()=> cy.get('#\\36 572f7bebfaea'),
    phoneNumberField:()=> cy.get('#\\36 572f85b91587'),
    testDropdown:()=>cy.get('.rbt-input-main'),
    dropdownOption1:()=>cy.contains('Dropdown1'),
    riskBtns:()=> cy.get(':nth-child(5) > #risk'),
    complianceBtn:()=> cy.get(':nth-child(3) > #compliance'),
    conformityBtn:()=> cy.get('#radio-4'),
    conformityLevelLabel:()=>cy.get('.float-end rounded-0 badge px-2 py-1'),
    conformityNAField:()=> cy.get('#conformity-inapplicable'),
    notesField:()=> cy.get('#findings'),
    causalFactors:()=>cy.get('#causalFactors'),
    recommendationField:()=> cy.get('#recommendation'),
    attachFileDoc:()=> cy.contains('button','Attach file documentation'),
    fileField:()=> cy.get('#file'),
    fileDescField:()=> cy.get('#description'),
    uploadFileBtn:()=> cy.contains('button','Upload File'),
    qsnCompleteCheckmark:()=>cy.get('[data-cy="section-0-question-1-check"]'),
    filesPhotosSection:()=> cy.get('.position-absolute.start-100.translate-middle.badge.rounded-pill.bg-danger.text-white'),
    markQsnNABtn:()=>cy.get('.card-body > :nth-child(2) > .form-check > .form-check-input'),
    sectionNABtn:()=>cy.get('.text-dark > .form-check-input'),
    showComplianceQsnsBtn:()=>cy.get('.my-3 > .form-check-input'),
    filesPhotosBtn:()=> cy.get('[data-cy="files-photos"]'),
    bulkUploadBtn:()=> cy.get('[data-cy="btn-bulk-upload"]'),
    assessSearchField:()=> cy.get('.col-md-12 > .form-control'),
    uploadBulfFilesField:()=>cy.get('.text-center > .mb-0'),
    attachedFiles:()=>cy.get('.d-flex > .mt-2'),
    bulkFileDesc:()=>cy.get('#description'),
    submitBulkUploadedFilesBtn:()=>cy.contains('button','Upload File(s)'),
    editBulkFileBtn:()=>cy.xpath("//span[normalize-space()='tune'][1]"),
    downloadBulkFile:()=>cy.xpath("//span[normalize-space()='download'][1]"),
    updateBulkFileBtn1:()=>cy.contains('button','Update File'),
    delBulkFileBtn1:()=>cy.xpath("(//span[normalize-space()='delete_outline'])[1]"),
    confirmDelBulkFileBtn:()=>cy.get('.btn-danger'),
    fileDesc:()=>cy.get('.table-group-divider > :nth-child(1) > :nth-child(2)'),
    latitude:()=>cy.get('#latitude'),
    longitude:()=>cy.get('#longitude'),
    closeGeotagModal:()=>cy.get('.btn-close')
   
  }

  //Page element Actions
  clickExpandSectionBtn(){
    this.elements.sectionExpandBtn().click({force:true})
  }

  clickFirstQsn(){
    this.elements.selectQsn().click({force:true})
  }
  
  clickAssessmentsBtn(){
    this.elements.assessmentsBtn().click({force:true})
  }

  clickAssessmentGroupsBtn(){
    this.elements.assessmentGroupBtn().click()
  }
  clickToOpenAssessment(){
    const Url = Cypress.env('testEnvironments').baseUrl
    this.elements.assessmentLink().scrollIntoView().click({force:true})          
    
  }
//Class Function objects
  createAssessment(AssessName,protocol,description) {
    this.elements.newAssessBtn().should('be.visible').click({ force: true });
    this.elements.nameField().type(AssessName + randomNum,{delay:0});
    this.elements.createAssessDropDown().type(protocol,{delay:0})
    this.elements.protocolOption().should('be.visible').click({ force: true });
    this.elements.descriptionField().type(description,{delay:0});
    this.elements.createAsessBtn().should('be.visible').click({ force: true });
    cy.wait(1000)
    cy.contains(AssessName + randomNum).should('exist');
  }

  openAssessment(){
    this.elements.assessmentName().should('be.visible').invoke('text').then((assessName)=>{
    this.clickToOpenAssessment()
    //const debaseUrl = Cypress.env('testEnvironments').deBaseUrl
    cy.intercept('GET','**/*').as('loaded')  
    //debaseUrl + '/audits/audits/65701cd201bd8
    cy.wait('@loaded')
    cy.contains(assessName)
    cy.contains('Assessment Report')
    }) 
}
  updateAssessment(name, description) {
    cy.get('tr:nth-child(1) .me-2 > div .material-icons-outlined').click({force:true});
    this.elements.nameField().clear().type(name + randomNum,{delay:0});
    this.elements.clearProtocolBtn().should('be.visible').click();
    this.elements.descriptionField().clear().type(description,{delay:0});
    this.elements.updateBtn2().should('be.visible').should('be.enabled').click({ force: true });
    cy.contains(name).should('exist');
  }

  lockAssessment(){
    this.clickToOpenAssessment()
    this.elements.assessSettings().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.manageLockBtn().click({ force: true });
    this.elements.lockBtn().click({ force: true });
    this.elements.closeBtn().click({ force: true });
    this.clickExpandSectionBtn()
    this.elements.disabledSection().should('be.disabled');
    this.elements.selectQsn().click({ force: true })
    this.elements.child1TestPrompt().should('be.disabled');
    this.elements.child2TestPrompt().should('be.disabled');
    this.elements.testPromptRadio().should('be.disabled');
    this.elements.dateField().should('be.disabled');
  }

  unLockAssessment(){
    this.clickToOpenAssessment()
    this.elements.assessSettings().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.manageLockBtn().click({ force: true });
    this.elements.lockBtn().click({ force: true });
    this.elements.closeBtn().click({ force: true });
    this.clickExpandSectionBtn()
    this.elements.disabledSection().should('not.be.disabled');
    this.elements.selectQsn().click({ force: true })
    this.elements.child1TestPrompt().should('not.be.disabled');
    this.elements.child2TestPrompt().should('not.be.disabled');
    this.elements.testPromptRadio().should('not.be.disabled');
    this.elements.dateField().should('not.be.disabled');
  }

  deleteAssessmentPositive(name) {
    this.elements.assessDeleteBtn().should('be.visible').click({force:true});
    this.elements
      .assessNameInnerText()
      .invoke('text')
      .then((getText) => {
        this.elements.confirmAssesName().should('be.visible').type(getText,{delay:0});
        this.elements.delAssessBtn().should('be.visible').click({ force: true });
      });
      cy.wait(1000).contains(name + randomNum).should('not.exist');
  }

  deleteAssessmentNegative(name) {
    this.elements.assessDeleteBtn().should('be.visible').click({force:true});
    this.elements.confirmAssesName().should('be.visible').type(name),{delay:0};
    this.elements
      .invalidFeedback()
      .should('contain', 'name must match the following:');
    this.elements.delAssessBtn().should('exist').should('be.disabled');
  }

  validateAssessmentsPage(){
  this.clickAssessmentsBtn()
  cy.url().should('contain','/audits')
  }

  filterAllAssessments(protocol){
     //Get today's date
      const currentDate = new Date();
      const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
      const formattedDate = currentDate.toLocaleString('en-Us', options);
      this.elements.asessDateRangeField().type(formattedDate + ' - ' + formattedDate,{delay:0})
      this.elements.filterByEntityField().click()
      this.elements.firstEntity().click()
      this.elements.filterByProtocolField().type(protocol,{delay:0})
      this.elements.firstProtocol().click()
      this.elements.firstAssessment().invoke('attr','value').then((entityName)=>{
      cy.xpath("//tbody[@class='table-group-divider']//tr[1]/td[1]/h6/a").click()
      cy.contains(protocol)
      cy.contains(entityName)
    })
  }

  validateAssessmentGroupsPage(){
    cy.url().should('contain','/groups')
  }

  createAssessmentGroup(name){
    this.elements.newGroupBtn().click({force:true})
    this.elements.groupTitle().type(name + randomNum,{delay:0})
    cy.intercept('POST','**/*').as('createGroup')
    this.elements.createGroupBtn().click({force:true})
    cy.wait('@createGroup')
    cy.contains(name +randomNum)
  }

  updateAssessmentGroup(name){
    this.elements.editAssessmentGroupBtn().should('exist').should('be.visible').as('editBtn')
    cy.get('@editBtn').click({force:true})
    this.elements.groupTitle().clear().type(name + randomNum,{delay:0})
    this.elements.updateGroupBtn().click({force:true})
    cy.contains(name +randomNum) 
  }

  deleteAssessmentGroup(){
    this.elements.delAssessmentGroupBtn1().as('delBtn')
    cy.get('@delBtn')
                  .should('exist')
                  .should('be.visible')
                  .click({force:true})
    this.elements
    .assessGroupInnerText()
    .should('be.visible')
    .invoke('text')
    .then((getText) => {
      this.elements.groupTitle().clear().type(getText,{delay:0})
      this.elements.delAssessmentGroupBtn2().should('be.enabled').click({ force: true });
      cy.contains(getText).should('not.exist')
    });
  }

  observations(desc,phone) {
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.selectQsn().click({force:true})
    this.elements.testPropmtText().clear().type(desc,{delay:0})
    this.elements.selectAllBtn().click({force:true})
    cy.wait(2000)
    this.elements.child1TestPrompt().click({force:true})
    this.elements.child2TestPrompt().click({force:true})
    this.elements.testPromptRadio().click({force:true})
    
    // Function to format date and time without leading zeros
    function formatDateTimeWithoutLeadingZeros(date) {
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      return `${formattedDate} ${formattedTime}`;
    }
    const expectedDateTime = new Date();
    //Function to remove leading zeros
    const formattedExpectedValue = formatDateTimeWithoutLeadingZeros(expectedDateTime);
    this.elements.dateField().scrollIntoView().clear().type(formattedExpectedValue,{delay:0});
    this.elements.dateField().type('{esc}');
    this.elements.phoneNumberField().scrollIntoView().clear().type(phone);
    this.elements.testDropdown().should('exist').click({force:true})
    this.elements.dropdownOption1().should('exist').click({force:true})
    this.elements.riskBtns().scrollIntoView().should('exist').click({ force: true });
    this.elements.complianceBtn().should('exist').click({ force: true });
    this.elements.conformityBtn().should('exist').click({ force: true });
    this.elements.conformityNAField().should('exist').clear().type(desc,{delay:0})
    this.elements.notesField().scrollIntoView().clear().type(desc,{delay:0});
    this.elements.causalFactors().clear().type(desc,{delay:0})
    this.elements.recommendationField().scrollIntoView().clear().type(desc,{delay:0});
    const baseUrl = Cypress.env('testEnvironments').deBaseUrl;
    cy.intercept('GET','**/* ').as('observations')
    cy.wait('@observations')
    cy.wait(2000)
    this.elements.qsnCompleteCheckmark().should('exist')
    cy.reload();
    cy.intercept('GET','**/*').as('observationComments')
    cy.wait('@observationComments')
    this.elements.testPropmtText().should('have.text',desc)
    //assert 'Yes' button checked
    this.elements.yesBtn().should('be.checked')
    //assert 'No' checkbox button checked
    this.elements.noBtn().should('be.checked')
    //assert 'Maybe' checkbox button checked
    this.elements.child1TestPrompt().should('be.checked')
    this.elements.child2TestPrompt().should('be.checked')
    this.elements.testPromptRadio().should('be.checked')
    this.elements.dateField().scrollIntoView().should('have.value',formattedExpectedValue)
    this.elements.phoneNumberField().scrollIntoView().should('have.value',phone)
    this.elements.riskBtns().should('be.checked')
    this.elements.complianceBtn().should('be.checked')
    this.elements.conformityBtn().should('be.checked')
  }
  markAssessmentNA(){
    this.clickToOpenAssessment()
    this.elements.assessSettings().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.manageAssessBtn().click({ force: true });
    this.elements.assessNABtn().click()
    this.elements.updateAssessNA().click()
    cy.contains('100% Complete')
    cy.contains('100% Inapplicable') 
  }
  markSectionNA(){
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.sectionNABtn().click({force:true}),
    cy.wait(2000)
    this.elements.selectQsn().should('exist').click({force:true})
    this.elements.riskBtns().should('be.disabled')
    this.elements.complianceBtn().should('be.disabled')
    this.elements.conformityBtn().should('be.disabled')
  }
  
  markAuditQuestionNA(){
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.selectQsn().click({force:true})
    cy.intercept('GET','**/*').as('markedNA')
    this.elements.markQsnNABtn().click({force:true})
    cy.wait('@markedNA')
    this.elements.selectQsn().click({force:true})
    this.elements.riskBtns().should('be.disabled')
    this.elements.complianceBtn().should('be.disabled')
    this.elements.conformityBtn().should('be.disabled')
  }

  showHideComplianceQuestions(){
    this.clickToOpenAssessment()
    this.elements.showComplianceQsnsBtn().click({force:true})
    this.elements.sectionExpandBtn().should('not.exist')
  }

  uploadFilesToAuditQsns(desc){
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.selectQsn().scrollIntoView().click({force:true})
    this.elements.attachFileDoc().scrollIntoView().click({ force: true });
    this.elements.fileField().attachFile('File.pdf', {action: 'drag-drop'});
    this.elements.fileDescField().clear().type(desc,{delay:0});
    cy.intercept('GET','**/*').as('allFilesUploaded')
    this.elements.uploadFileBtn().click({ force: true });
    cy.wait('@allFilesUploaded')
      this.elements.filesPhotosSection()
        .invoke('text')
        .then((fileCount) => {
          expect(fileCount).to.have.length.of.at.least(1);
        });    
  }
  addGeoatagToQsn(title){
    this.clickToOpenAssessment();
    this.elements.principlaDropdownBtn().click({force:true});
    this.elements.firstPrinciple().click({force:true});
    this.clickExpandSectionBtn();
    this.elements.selectQsn().as('qst');
    this.elements.testPromptRadio().click({force:true})
    cy.wait(1000);
    cy.get('@qst').scrollIntoView().click({force:true});
    cy.get(':nth-child(16) >.mb-0').scrollIntoView().click({force:true});
    cy.contains('button','Create').click({force:true});
    cy.get('#title').type(title +' ' + randomNum,{delay:0});
    cy.get('#longitude').type('36.754324')
    cy.get('#latitude').type('-1.395362')
    //cy.wait(5000);
    cy.contains('button','Next').click({force:true});
    //cy.get('.container >.text-center').attachFile('Image.jpg',{ subjectType: "drag-n-drop"});
    //cy.get('.d-flex > .mt-2').should('exist');
    //cy.xpath("//button[@class='btn btn-primary btn-sm']").click({force:true});
    //cy.intercept('POST','https://de.ermassess.com/api/v1/observations/*').as('createGeotag');
    //cy.wait('@createGeotag');
    cy.wait(5000);
    cy.contains(title +' ' + randomNum);
  }

  viewGeotag(){
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.selectQsn().scrollIntoView().click({force:true})
    cy.get(':nth-child(16) >.mb-0').click({force:true}) 
    cy.get('[title="Map View"]').scrollIntoView().click({force:true})
    cy.get(':nth-child(9) > .gm-control-active').scrollIntoView().should('be.visible') 
  }

  exportGeotag(name){
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.selectQsn().scrollIntoView().click({force:true})
    cy.get(':nth-child(16) >.mb-0').scrollIntoView().click({force:true}) 
    cy.get('.p-0 > .mb-2 > :nth-child(2)').click({force:true})
    cy.verifyDownload('cypress-test-name*'+'.csv')
  }

  updateGeotag(title){
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.selectQsn().scrollIntoView().click({force:true})
    cy.get(':nth-child(16) >.mb-0').click({force:true}) 
    cy.get("button[class='me-1 btn btn-outline-secondary btn-sm'] span[class='material-icons md-16 ']").click({force:true})
    cy.get('#title').clear().type(title + '' + randomNum,{delay:0})
    cy.contains('button','Next').click({force:true})
    cy.xpath("(//button[@class='btn btn-primary btn-sm'])").click({force:true})
    cy.contains(title + '' + randomNum)
  }

  deleteGeotag(){
    this.clickToOpenAssessment()
    this.elements.principlaDropdownBtn().click({force:true})
    this.elements.firstPrinciple().click({force:true})
    this.clickExpandSectionBtn()
    this.elements.selectQsn().scrollIntoView().click({force:true})
    cy.get(':nth-child(16) > .mb-0').click({force:true}) 
    cy.get("button[class='btn btn-outline-danger btn-sm'] span[class='material-icons md-16 ']").click({force:true})
    cy.contains('The Geo Location has been deleted successfully')
  }
  
  assessmentBulkFileUpload(desc){
    this.clickToOpenAssessment();
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({force:true});
    this.elements.bulkUploadBtn().should('be.visible').click();
    this.elements.uploadBulfFilesField().attachFile(['file-sample1.pdf','file-sample2.pdf','file-sample3.pdf'],{ subjectType: 'drag-n-drop'});
    this.elements.bulkFileDesc().type(desc,{delay:0});
    this.elements.attachedFiles().should('be.exist').should('have.length',3); 
    this.elements.submitBulkUploadedFilesBtn().click({force:true});
    //wait for files to upload and modal to close
    //const debaseUrl = Cypress.env('testEnvironments').deBaseUrl;
    cy.intercept('POST','**/*').as('allUploadRequests');
    cy.wait('@allUploadRequests')
    cy.wait(2000)
    cy.contains('file-sample1.pdf');
    cy.contains('file-sample2.pdf');
    cy.contains('file-sample3.pdf');
  }

  updatefileDescription(desc){
    cy.wait(1000)
    this.clickToOpenAssessment()
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({force:true});
    this.elements.editBulkFileBtn().should('be.visible').first().click({force:true});
    this.elements.bulkFileDesc().clear().should('be.visible').type(desc,{delay:0});
    this.elements.updateBulkFileBtn1().should('be.visible').click({force:true});
    cy.wait(2000);
    this.elements.fileDesc().should('be.visible').invoke('text').then((description)=>{
      expect(description).to.have.string(desc)
    })
  }

  downloadBulkFile(){
    cy.wait(1000)
    this.clickToOpenAssessment();
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({force:true});
    this.elements.downloadBulkFile().first().click({force:true})
    //veerify file opens in new tab
    cy.window().then((newWindow) => {
      // Perform actions in the new tab
      cy.url().then((url) => {
        newWindow.location.href = url;
        cy.intercept('GET','**/*').as('fileOpened')
        cy.wait('@fileOpened')
       //Assert page here
      }); 
    });
  }
  
  deleteBulkUploadedFile(){
    cy.wait(1000)
    this.clickToOpenAssessment()
    cy.intercept('GET','**/*').as('allRequests')
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({force:true});
    cy.wait('@allRequests')
    this.elements.delBulkFileBtn1().should('be.visible').first().click({force:true})
    this.elements.confirmDelBulkFileBtn().should('be.visible').click({force:true})
    cy.contains('The file has been deleted successfully')
  }
  
  searchAssessment(name) {
    this.elements.assessSearchField().should('be.visible').type(name + randomNum,{delay:0});
    cy.wait(2000)
      this.clickToOpenAssessment()
        cy.contains(name + randomNum);
      }
   
  filterAssessment(name,protocol){
    this.elements.protocolFilterBtn().should('be.visible').scrollIntoView().type(protocol,{delay:0});
    this.elements.protocolOption().should('be.visible').click({force:true});
    cy.wait(2000)
    cy.contains(name).should('exist');
  }
}
export default new Assessment()
