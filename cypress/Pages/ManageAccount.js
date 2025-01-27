//Generate a random number 
var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
//let tagName;
class ManageAccount {
  //Page Element selectors
  elements = {
    manageUserLink:()=>cy.contains('a','Manage'),
    pageTitle:()=>cy.get('.my-2 > :nth-child(2)'),
    firstName:() => cy.get('#firstName'),
    lastName:() => cy.get('#lastName'),
    email:() => cy.get('#email'),
    addMemberBtn1:() => cy.contains('button','Add Member'),
    cancelAddMember:() => cy.get('.bg-secondary'),
    addMemberBtn2:() => cy.get('.d-flex > .btn-primary'),
    submitBtn:()=>cy.contains('button','Submit'),
    userEmail:()=>cy.get('.table-group-divider > tr > :nth-child(3)'),
    delLastMember:() =>cy.xpath( "//tbody[@class='table-group-divider']/tr[1]/td/span/button/span[contains(text(),'delete')]"),
    editLastMemberBtn:() =>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/span/button/span[contains(text(),'edit')]"),
    resendLastAddedMemberRequest: () =>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/span/button/span[contains(text(),'refresh')]"),
    confirmDelMemberBtn:() => cy.get("input[type='checkbox']"),
    delMemberBtn:() =>cy.get("button[class='btn btn-danger btn-sm']"),
    updateMemberBtn:() => cy.get('.align-bottom > .float-end'),
    memberStatus:() =>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td[6]/span"),
    resendToastMsg:()=>cy.get('p.mb-1'),
    updateToastMsg:()=>cy.get('.toast-body'),
    entitiesTab:()=>cy.xpath("//button[@id='controlled-tab-example-tab-facilities']"),
    allEntitiesToggleBtn:()=> cy.get('#controlled-tab-example-tabpane-facilities > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input'),
    portfolioTab:()=>cy.get('#controlled-tab-example-tab-portfolios'),
    AllPortfliosToggleBtn:()=> cy.get('#controlled-tab-example-tabpane-portfolios > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input'),
    searchMember:()=>cy.get('.form-control'),
    exportMemberBtn:()=>cy.contains('button','Export Members'),
    entityTagsTab:()=>cy.contains('a','Entity tags'),
    assessmentTagsTab:()=>cy.get('.mb-3 > :nth-child(4) > .nav-link'),
    addTagBtn:()=>cy.contains('button','Tag'),
    entityTagName:()=>cy.get('#name'),
    entityTagDescription:()=>cy.get('#description'),
    saveTagBtn:()=>cy.get('.float-end'),
    editTagBtn:()=>cy.get(':nth-child(1) > :nth-child(5) > .btn-outline-primary'),
    delTagBtn1:()=>cy.get(':nth-child(1) > :nth-child(5) > .ms-2'),
    confirmDelEntityBtn:()=>cy.get('.form-check-input'),
    delTagBtn2:()=>cy.contains('button','Delete'),
    actionItemTagsTab:()=>cy.get(':nth-child(3) > .nav-link'),
    addActionItemTagBtn:()=>cy.contains('button','Tag'),
    actionItemTagName:()=>cy.get('#name'),
    actionItemTagDescription:()=>cy.get('#description'),
    saveActionItemTagBtn:()=>cy.get('.float-end'),
    editActionItemTagBtn:()=>cy.get(':nth-child(1) > :nth-child(5) > .btn-outline-primary'),
    delActionItemTagBtn1:()=>cy.get('tbody tr:nth-child(1) td:nth-child(5) button:nth-child(2)'),
    confirmDelActionItemTagBtn:()=>cy.get('.form-check-input'),
    delActionItemTagBtn2:()=>cy.get('.btn-danger')
    
  };

//Actions  on Page Eelements
  setFirstName(name) {
    this.elements.firstName().should('be.visible').type(name);
  }

  setLastName(name) {
    this.elements.lastName().should('be.visible').type(name);
  }

  setEmail(email) {
    this.elements.email().should('be.visible').type(email);
  }
  
  clickManageLink() {
    this.elements.manageUserLink().should('be.visible').click({force:true}); 
  }

  validateManageUserPage() {
    this.elements.pageTitle().should('be.visible').should('contain', 'Account Management');
  }

  selectMemberRole(role) {
    const radioBtn = {
      Admin: 3,
      Certifier: 4,
      Member: 5,
    };
    cy.get(`:nth-child(${radioBtn[role]}) > #checkbox-member`).should('be.visible').click({force:true});
  }

  clickAddMemberBtn1() {
    this.elements.addMemberBtn1().should('be.visible').click({force:true});
  }

  clickAddMemberBtn2() {
    this.elements.addMemberBtn2().should('be.visible').click({force:true});
  }

  clickSubmitBtn(){
    this.elements.submitBtn().click({force:true})
  }

  openActionItemTagsTab(){
    this.elements.actionItemTagsTab().click({force:true})
    cy.contains('h4','Action Item tags')
    }
    
  openEntityTagsTab(){
    this.elements.entityTagsTab().click({force:true})
    cy.contains('h4','Entity tags')
    }

  OpenAssessmentTagsTab(){
    this.elements.assessmentTagsTab().click({force:true})
  }
//Class Function Objects
  addMemberPositive(firstName,role) {
    this.clickAddMemberBtn1();
    this.setFirstName(firstName);
    this.setLastName(randomNum);
    this.setEmail(firstName + randomNum + '@pixeledge.io');
    this.selectMemberRole(role);
    const debaseUrl = Cypress.env('testEnvironments').deBaseUrl
    cy.intercept('POST','**/*').as('created') 
    this.clickAddMemberBtn2({force:true});
    cy.wait('@created')
    cy.intercept('PUT','**/*').as('submitted')
    this.clickSubmitBtn()
    cy.wait('@submitted')
    this.elements.userEmail().invoke('text').then((email)=>{
      expect(email).to.have.string(firstName + randomNum + '@pixeledge.io')
    }) 
}

//Negative Member Account tests
addMemberWithout1stName(firstName,role) {
  this.clickAddMemberBtn1();
  this.setLastName(randomNum);
  this.setEmail(firstName + '+' + randomNum + '@pixeledge.io');
  this.selectMemberRole(role);
  this.elements.addMemberBtn2().should('be.disabled')
}
  addMemberWithoutLastName(firstName,role) {
    this.clickAddMemberBtn1();
    this.setFirstName(firstName);
    this.setEmail(firstName +'+'+ randomNum + '@pixeledge.io');
    this.selectMemberRole(role);
    this.elements.addMemberBtn2().should('be.disabled')
  }
  
  addMemberWithInvalidEmail(firstName,role) {
    this.clickAddMemberBtn1();
    this.setFirstName(firstName);
    this.setLastName(randomNum);
    this.setEmail(firstName + randomNum + '+'+ randomNum + '@pixeledge.io');
    this.selectMemberRole(role);
    cy.contains('email must be a valid email')
    this.elements.addMemberBtn2().should('be.disabled')
  }

  addMemberWithBlankFields(role) {
    this.clickAddMemberBtn1();
    this.elements.firstName().click()
    this.elements.lastName().click();
    this.elements.email().click()
    this.selectMemberRole(role);
    cy.contains('First name is required')
    cy.contains('Last name is required')
    cy.contains('Member email is required')
    this.elements.addMemberBtn2().should('be.disabled')
  }
  //Update  Member Account
  updateLastMemberWithAllEntityAccess(message) {
    this.elements.editLastMemberBtn().should('be.visible').scrollIntoView().click({force:true});
    this.elements.entitiesTab().should('be.visible').click();
    this.elements.allEntitiesToggleBtn().should('be.visible').click({force:true});
    this.elements
      .updateMemberBtn()
      .scrollIntoView()
      .should('be.visible')
      .click({force:true});
    this.elements.updateToastMsg().scrollIntoView().should('contain', message);
  }

  updateLastMemberWithAllPortfolioAccess(message) {
    this.elements.editLastMemberBtn().should('be.visible').scrollIntoView().click({force:true});
    this.elements.portfolioTab().should('be.visible').click();
    this.elements.AllPortfliosToggleBtn().should('be.visible').click({force:true});
    cy
      .get('.align-bottom > .float-end')
      .scrollIntoView()
      .should('be.visible')
      .scrollIntoView()
      .should('be.visible')
      .click();
    this.elements.updateToastMsg().scrollIntoView().should('contain', message);
  }

  resendJoinRequestToLastMember(message) {
    this.elements.resendLastAddedMemberRequest().should('be.visible').scrollIntoView().click({force:true});
    this.elements.resendToastMsg().should('be.visible').should('contain', message);
  }

  lastAddedmemberJoinStatus(status) {
    this.elements.memberStatus().should('be.visible').scrollIntoView().should('contain', status);
  }

  searchMember(MemberName){
    this.elements.searchMember().type(MemberName + randomNum + '@pixeledge.io','{enter}')
    cy.wait(2000)
    cy.contains(MemberName + randomNum+ '@pixeledge.io')
  }

  deleteLastMemberPositive() {
    this.elements.delLastMember().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.confirmDelMemberBtn().check()
    this.elements.delMemberBtn().click({force:true});
  }

  deleteLastMemberNegative() {
    this.elements.delLastMember().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.delMemberBtn().should('be.disabled')
  }

  exportMembers(OrgName){
    cy.intercept('GET','**/*').as('exportMembers')
    this.elements.exportMemberBtn().click()
    cy.wait('@exportMembers')
    cy.verifyDownload(OrgName + ' - Members.csv') 

  }

  addEntityTag(name,desc){
    this.elements.addTagBtn().click({force:true})
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.elements.entityTagName().type(name + randomNum,{delay:0})
    this.elements.entityTagDescription().type(desc)
    this.elements.saveTagBtn().click(({force:true}))
    cy.contains(name+ randomNum)
  }
  
  updateEntityTag(name){
   // tagName = name
    this.elements.editTagBtn().click({force:true})
    this.elements.entityTagName().clear().type(name+ randomNum,{delay:0})
    this.elements.saveTagBtn().click(({force:true}))
    cy.contains(name+ randomNum)
  }

  deleteEntityTag(){
    this.elements.delTagBtn1().click({force:true})
    this.elements.confirmDelEntityBtn().should('exist').check()
    cy.intercept('DELETE','**/*').as('deleteTag')
    this.elements.delTagBtn2().should('be.enabled').click({ force: true });
    cy.wait('@deleteTag')
  }
  
    addActionItemTag(name,desc){
      this.elements.addActionItemTagBtn().click({force:true})
      this.elements.actionItemTagName().type(name + randomNum)
      this.elements.actionItemTagDescription().type(desc)
      this.elements.saveActionItemTagBtn().click(({force:true}))
      cy.contains(name+ randomNum)
    }
    
    updateActionItemTag(name){
      this.elements.editActionItemTagBtn().click({force:true})
      this.elements.actionItemTagName().clear().type(name+ randomNum)
      this.elements.saveActionItemTagBtn().click(({force:true}))
      cy.contains(name+ randomNum)
    }
  
    deleteActionItemTag(){
      this.elements.delActionItemTagBtn1().click({force:true})
      this.elements.confirmDelActionItemTagBtn().should('exist').check()
      this.elements.delActionItemTagBtn2().click({ force: true });
    } 

    addAssessmentTag(name,desc){
     this.elements.addTagBtn().click({force:true});
     this.elements.actionItemTagName().type(name + randomNum)
     this.elements.actionItemTagDescription().type(desc)
     this.elements.saveActionItemTagBtn().click(({force:true}))
     cy.contains(name+ randomNum)
    }

    updateAssessmentTag(name){
      this.elements.editActionItemTagBtn().click({force:true})
      this.elements.actionItemTagName().clear().type(name+ randomNum)
      this.elements.saveActionItemTagBtn().click(({force:true}))
    }
    // deleteActionItemTag(){
    //   this.elements.delActionItemTagBtn1().click({force:true})
    //   this.elements.confirmDelActionItemTagBtn().should('exist').check()
    //   this.elements.delActionItemTagBtn2().should('be.enabled').click({ force: true });
      
    // } 
}
export default new ManageAccount()
