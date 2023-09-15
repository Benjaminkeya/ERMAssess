class assessment {
  elements = {
    createAssessBtn: () => cy.get(".btn-primary:nth-child(1)"),
    assessmodal: () => cy.get(".modal-header"),
    nameField: () => cy.get("#name"),
    descriptionField: () => cy.get("#description"),
    createBtn: () => cy.get(".modal-footer > .btn-primary"),
    selectFirstAssessment: () =>
      cy.get(
        "body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > h5:nth-child(1) > a:nth-child(1)"
      ),
    assessSettings: () =>
      cy.xpath(
        "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/button[1]/span[1]"
      ),
    assessUpdateBtn: () => cy.get(".dropdown-menu > :nth-child(1)"),
    createAssessDropDown: () =>
      cy.xpath(
        "//div[@class='mb-3']//div[@class='rbt']//div//input[@placeholder='Filter by protocol']"
      ),
    assessProtocolDropDown: () => cy.get(".rbt-input-main"),
    protocolOption: () => cy.get("#protocol-typeahead-item-1"),
    submitBtn: () => cy.get(".modal-footer > .btn-primary"),
    assessDeleteBtn: () => cy.get(".dropdown-menu > :nth-child(2)"),
    assessNameValue: () => cy.get(".modal-title > .text-muted"),
    confirmAssesName: () => cy.get("#productName"),
    delAssessBtn: () => cy.get(".btn-danger"),
  };

  createAssessment(name, description) {
    this.elements.createAssessBtn().click();
    this.elements.assessmodal().click();
    this.elements.nameField().type(name);
    this.elements.descriptionField().type(description);
    this.elements.createAssessDropDown().click({ force: true });
    cy.get("#protocol-typeahead-item-0").click();
    this.elements.createBtn().click();
    cy.wait(3000).contains(name).should("exist");
  }
  updateAssessment(name, description) {
    this.elements.selectFirstAssessment().click({ force: true });
    this.elements.assessSettings().click({ force: true });
    this.elements.assessUpdateBtn().click();
    this.elements.assessmodal().click();
    this.elements.nameField().clear().type(name);
    cy.get("button[aria-label='Clear']").click();
    this.elements.assessProtocolDropDown().click({ force: true });
    this.elements.protocolOption().click({ force: true });
    this.elements.descriptionField().clear().type(description);
    this.elements.submitBtn().click({ force: true });
    cy.wait(3000).contains(name).should("exist");
  }
  deleteAssessment() {
    this.elements.selectFirstAssessment().click({ force: true });
    this.elements.assessSettings().click({ force: true });
    this.elements.assessDeleteBtn().click();
    this.elements.assessmodal().click();
    this.elements
      .assessNameValue()
      .invoke("text")
      .then((getText) => {
        this.elements.assessmodal().click({ force: true });
        this.elements.confirmAssesName().type(getText);
        this.elements.delAssessBtn().click({ force: true });
        cy.wait(3000).contains(getText).should("not.exist");
      });
  }
}
module.exports = new assessment();
