class ManageAccount {
  elements = {
    firstName: () => cy.get("#firstName"),
    lastName: () => cy.get("#lastName"),
    email: () => cy.get("#email"),
    addMemberBtn1: () => cy.get(".modal-footer > .btn-primary"),
    cancelAddMember: () => cy.get(".bg-secondary"),
    addMemberBtn2: () => cy.get(".px-3"),
    delLastMember: () =>
      cy.xpath(
        "//tbody[@class='table-group-divider']/tr[last()]/td/button/span[contains(text(),'delete_outline')]"
      ),
    editLastMemberBtn: () =>
      cy.xpath(
        "//tbody[@class='table-group-divider']/tr[last()]/td/button/span[contains(text(),'tune')]"
      ),
    refreshBtnLastMember: () =>
      cy.xpath(
        "//tbody[@class='table-group-divider']/tr[last()]/td/button/span[contains(text(),'refresh')]"
      ),
    copyEmail: () => cy.get(".modal-title > .text-muted"),
    confirmEmail: () => cy.get("#productName"),
    delMemberBtn: () =>
      cy.xpath("//div[@class='modal-footer']/button[@type='submit']"),
    updateMemberBtn: () => cy.contains("Update"),
    updatedMsg: () => cy.get(".toast-body"),
    memberStatus: () =>
      cy.xpath("//tbody[@class='table-group-divider']/tr[last()]/td[5]/span"),
  };
  setFirstName(name) {
    this.elements.firstName().type(name);
  }

  setLastName(name) {
    this.elements.lastName().type(name);
  }

  setEmail(email) {
    this.elements.email().type(email);
  }
  manageAccount() {
    cy.get('[href="/account-management"]').click();
  }
  validateManageUserPage() {
    cy.get(".my-2 > :nth-child(2)").should("contain", "Account Management");
  }
  selectMemberRole(role) {
    const radioBtn = {
      Admin: 3,
      Certifier: 4,
      Member: 5,
    };

    cy.get(`:nth-child(${radioBtn[role]}) > #checkbox-member`).click();

    // cy.xpath("//label[contains(text(),"+role+")]").click({multiple:true})
  }

  clickAddMember() {
    this.elements.addMemberBtn1().click();
  }

  CancelAddMember() {
    this.elements.cancelAddMember().click();
  }

  clickAddMemberBtn() {
    this.elements.addMemberBtn2().click();
  }

  clickMemberByNumber(n) {
    cy.get(
      ".table-group-divider > :nth-child(" + n + ") > :nth-child(1)"
    ).click();
  }

  deleteLastMember() {
    this.elements.delLastMember().scrollIntoView().click({ force: true });
    this.elements.copyEmail().then((email) => {
      let memberEmail = email.text();
      this.elements.confirmEmail().type(memberEmail);
      this.elements.delMemberBtn().click();
    });
  }
  addUniqueMember(firstName) {
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.clickAddMember();
    this.setFirstName(firstName);
    this.setLastName(randomNum);
    this.setEmail(firstName + randomNum + "@gmail.com");
    this.selectMemberRole(role);
    this.clickAddMemberBtn();
  }
  editLastMemberWithAllEntityAccess(message) {
    this.elements.editLastMemberBtn().scrollIntoView().click();
    cy.get(
      "#controlled-tab-example-tabpane-facilities > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input"
    ).click();

    this.elements
      .updateMemberBtn()
      .scrollIntoView()
      .should("be.visible")
      .click();

    this.elements.updatedMsg().should("contain", message);
  }
  editLastMemberWithAllPortfolioAccess(message) {
    this.elements.editLastMemberBtn().scrollIntoView().click();
    cy.get("#controlled-tab-example-tab-portfolios").click();
    cy.get(
      "#controlled-tab-example-tabpane-portfolios > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input"
    ).click();

    cy.get(".align-bottom > .float-end")
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".toast-body").should("contain", message);
  }
  resendJoinRequestToLastMember(message) {
    this.elements.delLastMember().scrollIntoView().click();
    cy.get("p.mb-1").should("contain", message);
  }

  lastAddedmemberJoinStatus(firstName, role, status) {
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.clickAddMember();
    this.setFirstName(firstName);
    this.setLastName(randomNum);
    this.setEmail(firstName + randomNum + "@gmail.com");
    this.selectMemberRole(role);
    this.clickAddMember();

    this.elements.memberStatus().scrollIntoView().should("contain", status);
  }
}
module.exports = new ManageAccount();
