class Entity {
  elements = {
    newEntityBtn: () => cy.get("button[class='btn btn-primary btn-sm']"),
    entityModal: () => cy.get(".w-fixed-640 > .border-bottom"),
    entityName: () => cy.get("#name"),
    entityAddress: () => cy.get("#address"),
    jurisDropdown: () => cy.get(".rbt-input-wrapper .rbt-input-main"),
    chooseJuris1: () => cy.get("#jurisdiction-typeahead-item-0"),
    createEntityBtn: () =>
      cy.get("form > .d-flex > :nth-child(2) > .btn-primary"),
    delEntity: () => cy.get(".btn-outline-danger"),
    updateEntityBtn: () =>
      cy.get("form > .d-flex > :nth-child(2) > .btn-primary"),
    selectFirstEntity: () =>
      cy.get(":nth-child(1) > :nth-child(2) > h6 > .text-decoration-none"),
    confirmEntityname: () => cy.get("//input[@id='productName']"),
    entitydeleteBtn: () => cy.get(".btn-danger"),
    entityDeleteModal: () => cy.get(".modal-header"),
    confirmEntityfield: () => cy.get("#productName"),
    entityNameValue: () => cy.get(".modal-title > .text-muted"),
    entitySearchField: () => cy.get(":nth-child(2) > .mb-1 > small"),
    jurisFilterBtn: () => cy.get(".rbt-input-main"),
    clearJurisBtn: () => cy.get("button[aria-label='Clear']"),
    filterByJurisDropdown: () => cy.get(".rbt-input-main"),
    jurisFilterDate: () =>
      cy.get(".react-datepicker__input-container > .form-control"),
    dateModal: () => cy.get(".react-datepicker"),
  };

  clickNewEntitybtn() {
    this.elements.newEntityBtn().click({ force: true });
    this.elements.entityModal().click({ force: true });
  }

  setEntityName(name) {
    this.elements.entityName().type(name);
  }
  setEntityAddress(address) {
    this.elements.entityAddress().type(address);
  }

  selectJuris() {
    this.elements.jurisDropdown().type("Demo");
    this.elements.chooseJuris().click({ force: true });
  }
  clickCreateEntitybtn() {
    this.elements.createEntityBtn().click({ force: true });
  }

  updateEntity(name) {
    this.elements.selectFirstEntity().click({ force: true });
    this.elements.entityModal().click({ force: true });
    this.elements.entityName.clear().type(name);
    this.elements.entityAddress().clear().type(name);
    this.elements.clearJurisBtn().click();
    this.elements.jurisDropdown().type("Benjamin");
    this.elements.chooseJuris().click({ force: true });
    this.elements.updateEntityBtn().click({ force: true }, { timeout: 3000 });
    cy.contains(name).should("exist");
  }
  deleteEntityNegative(text) {
    this.elements.selectFirstEntity().click({ force: true });
    this.elements.delEntity().click({ force: true });
    this.elements.entityDeleteModal().click({ force: true });
    this.elements.confirmEntityfield().type(text);
    this.elements.entitydeleteBtn().should("exist").should("be.disabled");
  }
  deleteEntityPositive() {
    this.elements.selectFirstEntity().click({ force: true });
    this.elements.delEntity().click({ force: true });
    this.elements.entityDeleteModal().click({ force: true });
    this.elements
      .entityNameValue()
      .invoke("text")
      .then((getText) => {
        this.elements.entitydeletemodal().click({ force: true });
        this.elements.confirmEntityfield().type(getText);
        this.elements.entitydeleteBtn().click({ force: true });
        cy.wait(3000).contains(getText).should("not.exist");
      });

    cy.location("pathname").should("eq", "/");
  }

  searchEntityPositive(name) {
    this.elements.entitySearchField().scrollIntoView().type(name);
    cy.wait(5000);
    cy.contains(name).should("exist");
  }
  searchEntityNegative(name) {
    this.elements.entitySearchField().type(name);
    this.elements.entitySearchField().should("contain", "No entities found");
  }
  filterEntityByJurisdiction(name, juris) {
    this.jurisFilterBtn().scrollIntoView().click();
    this.elements.filterByJurisDropdown().type(name);
    this.elements.chooseJuris1().click();
    this.elements.selectFirstEntity().click();
    cy.contains(juris);
  }
  filterEntityByDateRange(date) {
    this.elements.jurisFilterDate().type(date);
    this.elements.dateModal().trigger("mouseout").click();
  }
}
module.exports = new Entity();
