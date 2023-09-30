const Entities = require("./Entities");

class Assessment {
  elements = {
    createAssessBtn: () => cy.get(".btn-primary:nth-child(1)"),
    assessModal: () => cy.get(".w-fixed-640 > .border-bottom"),
    nameField: () => cy.get("#name"),
    descriptionField: () => cy.get("#description"),
    createAsessBtn: () =>
      cy.get("form > .d-flex > :nth-child(2) > .btn-primary"),
    selectFirstAssessment: () => cy.get(".text-decoration-none"),
    assessSettings: () => cy.xpath("//span[normalize-space()='settings']"),
    updateBtn1: () => cy.get(".dropdown-menu > :nth-child(1)"),
    createAssessDropDown: () =>
      cy.xpath(
        "//div[@class='mb-3']//div[@class='rbt']//div//input[@placeholder='Filter by protocol']"
      ),
    assessProtocolDropDown: () => cy.get(".rbt-input-main"),
    protocolOption: () => cy.get("#protocol-typeahead-item-0"),
    clearProtocolBtn: () => cy.get("button[aria-label='Clear']"),
    updateBtn2: () =>
      cy.get("form > .d-flex > :nth-child(2) > .btn-primary").click(),
    assessDeleteBtn: () => cy.get(".dropdown-menu > :nth-child(2)"),
    assessNameValue: () => cy.get(".modal-title > .text-muted"),
    confirmAssesName: () => cy.get("#productName"),
    delAssessBtn: () => cy.get(".btn-danger"),
    invalidFeedback: () => cy.get(".invalid-feedback"),
    message: () =>
      cy.get(".card-body > .fade > :nth-child(2) > h5.mb-1 > small"),
  };

  createAssessment(name, description) {
    this.elements.createAssessBtn().click({ force: true });
    this.elements.assessModal().click({ force: true });
    this.elements.nameField().type(name);
    this.elements.createAssessDropDown().click({ force: true });
    this.elements.protocolOption().click({ force: true });
    this.elements.descriptionField().type(description);
    this.elements.createAssessBtn().click({ force: true });
    cy.wait(3000).contains(name).should("exist");
  }

  updateAssessment(name, description) {
    this.elements.selectFirstAssessment().click({ force: true });
    this.elements.assessSettings().scrollIntoView().click({ force: true });
    this.elements.updateBtn1().click({ force: true });
    this.elements.assessModal().click({ force: true });
    this.elements.nameField().clear().type(name);
    this.elements.clearProtocolBtn().click();
    this.elements.assessProtocolDropDown().type("Benjamin");
    this.elements.protocolOption().click({ force: true });
    this.elements.descriptionField().clear().type(description);
    this.elements.updateBtn2().click({ force: true });
    cy.contains(name).should("exist");
  }

  fillAssessmentQuestions() {
    this.elements.selectFirstAssessment().click({ force: true });
    cy.get(":nth-child(10) > :nth-child(2) > .flex-grow-1").click();
    cy.get(
      ".py-1 > :nth-child(2) > :nth-child(1) > .material-icons-outlined"
    ).click({ force: true });
    cy.get(".flex-fill > :nth-child(2) > p").click({ force: true });
    //cy.xpath('//*[@id="6509aa302bec3"]').scrollIntoView().click();
    //cy.contains("today").click();
    cy.xpath("//input[@id='650abcf5c1e13']").clear().type("2000");
    cy.get(":nth-child(4) > #risk").click({ force: true });
    cy.get(":nth-child(3) > #compliance").click({ force: true });
    cy.get("#radio-0").click({ force: true });
    cy.get("#findings")
      .scrollIntoView()
      .clear()
      .type("Cypress typing Test notes...");
    cy.get("#recommendation")
      .clear()
      .type("Cypress typing Test Recommendation...");
    cy.get(".d-grid > .text-start").click({ force: true });
    cy.get(".modal-header").click({ force: true });
    cy.get("#file").attachFile("CypressAuditReport.pdf", {
      action: "drag-drop",
    });
    cy.get("#description").clear().type("Test description");
    cy.get(".modal-footer > .btn-primary").click({ force: true });
    cy.wait(5000);
    cy.get(
      ".position-absolute.start-100.translate-middle.badge.rounded-pill.bg-danger.text-white"
    )
      .invoke("text")
      .then((fileCount) => {
        cy.expect(fileCount).to.have.length.of.at.least(1);
      });
  }

  deleteAssessmentNegative(name) {
    this.elements.selectFirstAssessment().click({ force: true });
    this.elements.assessSettings().click({ force: true });
    this.elements.assessDeleteBtn().click();
    this.elements.assessmodal().click();
    this.elements.confirmAssesName().type(name);
    this.elements
      .invalidFeedback()
      .should("contain", "name must match the following:");

    this.elements.delAssessBtn().should("exist").should("be.disabled");
  }

  deleteAssessmentPositive() {
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
  searchAssessmentPositive(name) {
    cy.get(".col-md-12 > .form-control").type(name);
    this.elements
      .selectFirstAssessment()
      .invoke("text")
      .then((assessName) => {
        cy.expect(assessName).to.contain(name);
      });
  }
  searchAssessmentNegative(name) {
    cy.get(".col-md-12 > .form-control").type(name);
    this.elements
      .selectFirstAssessment()
      .invoke("text")
      .then((assessName) => {
        this.elements.message().should("contain", "No assessments found");
      });
  }
  filterAssessmemtPositive(name) {
    cy.get(".rbt-input-main").scrollIntoView().click();
    cy.get("#protocol-typeahead-item-1").click();
    cy.contains(name).should("exist");
  }
  filterAssessmemtNegative(name) {
    cy.get(".rbt-input-main").scrollIntoView().click();
    cy.get("#protocol-typeahead-item-0").click();
    cy.get(".card-body > .fade > :nth-child(2) > h5.mb-1 > small").should(
      "contain",
      "No assessments found"
    );
  }
}
module.exports = new Assessment();
