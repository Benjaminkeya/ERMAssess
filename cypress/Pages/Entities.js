class entity {
  elements = {
    newEntitybtn: () => cy.get("button[class='btn btn-primary btn-sm']"),
    entitymodal: () => cy.get(".modal-body > .mb-3:nth-child(1)"),
    entityName: () => cy.get("#name"),
    entityAddress: () => cy.get("#address"),
    jurisdropdown: () => cy.get(".rbt-input-wrapper .rbt-input-main"),
    choosejuris: () => cy.get("#jurisdiction-typeahead-item-0"),
    entityBtn: () => cy.get(".modal-footer > .btn-primary"),
    deleteentity: () => cy.get(".btn-outline-danger"),
    updateEntity: () => cy.get("button[class='me-2 btn btn-secondary btn-sm']"),
    selectFirstEntity: () =>
      cy.get(
        ":nth-child(3) > div.flex-grow-1 > .fw-bold > .text-decoration-none"
      ),
    confirmentityname: () => cy.get("//input[@id='productName']"),
    entitydeleteBtn: () => cy.get(".btn-danger"),
    entitydeletemodal: () => cy.get(".modal-header"),
    confirmentityfield: () => cy.get("#productName"),
    entityNameValue: () => cy.get(".modal-title > .text-muted"),
  };

  clickNewEntitybtn() {
    this.elements.newEntitybtn().click({ force: true });
    this.elements.entitymodal().click({ force: true });
  }

  setEntityName(name) {
    this.elements.entityName().type(name);
  }
  setEntityAddress(address) {
    this.elements.entityAddress().type(address);
  }

  selectJuris() {
    this.elements.jurisdropdown().type("Demo");
    this.elements.choosejuris().click({ force: true });
  }
  clickCreateEntitybtn() {
    this.elements.entityBtn().click({ force: true });
  }

  updateEntity() {
    this.elements.selectFirstEntity().click({ force: true });
    cy.get(".mt-3 > .me-2").click({ force: true });
    cy.get(".modal-header").click({ force: true });
    cy.get("#name").clear().type("Name Updated Cypress test");
    cy.get("#address").clear().type("Entity address  Updated Cypress test");
    cy.get("button[aria-label='Clear']").click();
    this.elements.jurisdropdown().type("Benjamin");
    this.elements.choosejuris().click({ force: true });
    cy.get(".modal-footer > .btn-primary").click(
      { force: true },
      { timeout: 3000 }
    );
    cy.go("back");
    cy.location("pathname").should("eq", "/");
    this.elements
      .selectFirstEntity()
      .invoke("text")
      .then((getText) => {
        cy.wait(3000).contains(getText).should("exist");
      });
  }
  deleteEntityNegative(text) {
    this.elements.selectFirstEntity().click({ force: true });
    this.elements.deleteentity().click({ force: true });
    this.elements.entitydeletemodal().click({ force: true });
    this.elements.confirmentityfield().type(text);
    this.elements.entitydeleteBtn().should("exist").should("be.disabled");
  }
  deleteEntityPositive() {
    this.elements.selectFirstEntity().click({ force: true });
    this.elements.deleteentity().click({ force: true });
    this.elements.entitydeletemodal().click({ force: true });
    this.elements
      .entityNameValue()
      .invoke("text")
      .then((getText) => {
        this.elements.entitydeletemodal().click({ force: true });
        this.elements.confirmentityfield().type(getText);
        this.elements.entitydeleteBtn().click({ force: true });
        cy.wait(3000).contains(getText).should("not.exist");
      });

    cy.location("pathname").should("eq", "/");
  }

  searchEntity(name) {
    cy.get(".mb-3 > .form-control").type(name);
    this.elements
      .selectFirstEntity()
      .invoke("text")
      .then((entityName) => {
        cy.get(
          ":nth-child(3) > div.flex-grow-1 > .fw-bold > .text-decoration-none"
        );
        //if()
        cy.expect(entityName).to.contain(name);
      });
  }
  filterEntity;
  // DeleteMultipleEntities() {
  //   cy.get(
  //     ":nth-child(5) > div.flex-grow-1 > .fw-bold > .text-decoration-none"
  //   ).each(($item) => {
  //     cy.wrap($item)
  //       .invoke("text")
  //       .then((text) => {
  //         // Check if the item's text matches the text of the item you want to delete.
  //         if (text.includes("EntityName")) {
  //           // Assuming there's a delete button within each item. Replace '.delete-button' with your actual delete button selector.
  //           cy.wrap($item).click();
  //           this.elements.entitydeletemodal().click({ force: true });
  //           this.elements
  //             .entityNameValue()
  //             .invoke("text")
  //             .then((getText) => {
  //               this.elements.entitydeletemodal().click({ force: true });
  //               this.elements.confirmentityfield().type(getText);
  //               this.elements.entitydeleteBtn().click({ force: true });
  //               cy.location("pathname").should("eq", "/");
  //             });
  //         }
  //       });
  //   });
  // }
}
module.exports = new entity();
