var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
class ManageAccount {
  elements = {
    manageUserLink:()=>cy.contains('a','Manage'),
    pageTitle:()=>cy.get('.my-2 > :nth-child(2)'),
    firstName: () => cy.get('#firstName'),
    lastName: () => cy.get('#lastName'),
    email: () => cy.get('#email'),
    addMemberBtn1: () => cy.contains('button','Add Member'),
    cancelAddMember: () => cy.get('.bg-secondary'),
    addMemberBtn2: () => cy.get('.float-end'),
    submitBtn:()=>cy.get('.align-bottom > .float-end'),
    userEmail:()=>cy.get('.table-group-divider > tr > :nth-child(3)'),
    delLastMember: () =>cy.xpath( "//tbody[@class='table-group-divider']/tr[1]/td/button/span[contains(text(),'delete_outline')]"),
    editLastMemberBtn: () =>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/button/span[contains(text(),'tune')]"),
    resendLastAddedMemberRequest: () =>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/button/span[contains(text(),'refresh')]"),
    copyEmail: () => cy.get('.modal-title > .text-muted'),
    confirmEmail: () => cy.get('#productName'),
    delMemberBtn: () =>cy.xpath("//div[@class='modal-footer']/button[@type='submit']"),
    updateMemberBtn: () => cy.get('.align-bottom > .float-end'),
    memberStatus: () =>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td[5]/span"),
    resendToastMsg:()=>cy.get('p.mb-1'),
    updateToastMsg:()=>cy.get('.toast-body'),
    entitiesTab:()=>cy.get('#controlled-tab-example-tabpane-facilities > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input'),
    allEntitiesToggleBtn:()=> cy.get('#controlled-tab-example-tabpane-facilities > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input'),
    portfolioTab:()=>cy.get('#controlled-tab-example-tab-portfolios'),
    AllPortfliosToggleBtn:()=> cy.get( '#controlled-tab-example-tabpane-portfolios > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input'),
    searchMember:()=>cy.get('.form-control'),
    entityTagsTab:()=>cy.get(':nth-child(2) > .nav-link'),
    addTagBtn:()=>cy.contains('button','Add Tag'),
    entityTagName:()=>cy.get('#name'),
    entityTagDescription:()=>cy.get('#description'),
    saveTagBtn:()=>cy.get('.float-end'),
    editTagBtn:()=>cy.xpath("(//span[normalize-space()='tune'])[1]"),
    delTagBtn1:()=>cy.xpath("(//span[@class='material-icons md-16'][normalize-space()='delete_outline'])[1]"),
    tagInnerText:()=>cy.get('.modal-title > .text-muted'),
    confirmTagField:()=>cy.get('#productName'),
    delTagBtn2:()=>cy.contains('button','Delete')
    
  };

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

  CancelAddMember() {
    this.elements.cancelAddMember().should('be.visible').click({force:true});
  }

  clickAddMemberBtn2() {
    this.elements.addMemberBtn2().should('be.visible').click({force:true});
  }
  clickSubmitBtn(){
    this.elements.submitBtn().click({force:true})
  }
  // clickMemberByNumber(n) {
  //   cy.get('.table-group-divider > :nth-child(' + n + ') > :nth-child(1)').should('be.visible').click({force:true});
  // }

  addUniqueMemberPositive(firstName,role) {
    this.clickAddMemberBtn1();
    this.setFirstName(firstName);
    this.setLastName(randomNum);
    this.setEmail(firstName + randomNum + '@pixeledge.io');
    this.selectMemberRole(role);
    const debaseUrl = Cypress.env('testEnvironments').deBaseUrl
    cy.intercept('POST',debaseUrl + '/organizations/e7b20a69-5418-423a-ba4e-ace7312cb632/members').as('created')
    this.clickAddMemberBtn2({force:true});
    this.clickSubmitBtn()
    cy.wait('@created')
    this.elements.userEmail().invoke('text').then((email)=>{
      expect(email).to.have.string(firstName + randomNum + '@pixeledge.io')

    }) 
}
  addUniqueMemberNegative(firstName,role) {
    this.clickAddMemberBtn1();
    this.setFirstName(firstName);
    this.setEmail(firstName + randomNum + '@gmail.com');
    this.selectMemberRole(role);
    this.elements.addMemberBtn2().should('be.disabled')
  }

  updateLastMemberWithAllEntityAccess(message) {
    this.elements.editLastMemberBtn().should('be.visible').scrollIntoView().click({force:true});
    this.elements.entitiesTab().should('be.visible').click();
    this.elements.allEntitiesToggleBtn().should('be.visible').click({force:true});
    this.elements
      .updateMemberBtn()
      .should('be.visible')
      .scrollIntoView()
      .should('be.visible')
      .click({force:true});
    this.elements.updateToastMsg().should('contain', message);
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
    this.elements.updateToastMsg().should('contain', message);
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
    cy.contains(MemberName + randomNum + '@pixeledge.io')


  }
  deleteLastMemberPositive() {
    this.elements.delLastMember().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.copyEmail().then((email) => {
    let memberEmail = email.text();
    this.elements.confirmEmail().type(memberEmail);
    this.elements.delMemberBtn().click({force:true});
    });
  }
  deleteLastMemberNegative() {
    this.elements.delLastMember().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.delMemberBtn().should('be.disabled')
  }
openEntityTagsTab(){
this.elements.entityTagsTab().click({force:true})
cy.contains('h4','Entity tags')
}
addTag(name,desc){
  this.elements.addTagBtn().click({force:true})
  this.elements.entityTagName().type(name + randomNum)
  this.elements.entityTagDescription().type(desc)
  this.elements.saveTagBtn().click(({force:true}))
  cy.contains(name+ randomNum)
}
updateTag(name){
  this.elements.editTagBtn().click({force:true})
  this.elements.entityTagName().clear().type(name+ randomNum)
  this.elements.saveTagBtn().click(({force:true}))
  cy.contains(name+ randomNum)
}
deleteTag(){
  this.elements.delTagBtn1().click({force:true})
  this.elements
  .tagInnerText()
  .invoke('text')
  .then((getText) => {
    this.elements.confirmTagField().should('be.visible').type(getText);
    this.elements.delTagBtn2().should('be.enabled').click({ force: true });
    //verify Entity is deleted and does not exist
    cy.contains(getText).should('not.exist');
  });
 
}

}
export default new ManageAccount()
