class ActionItem {
  elements = {};
  title(title) {
    cy.get("#item").type(title);
  }

  description() {
    cy.get(".bg-light > .form-control").click();
  }

  dueDatePicker() {
    cy.get("#dueDate").click();
  }

  assignedTo() {
    cy.get(":nth-child(4) > .rbt > .rbt-input-multi").click();
  }

  tags() {
    cy.get(":nth-child(5) > .rbt > .rbt-input-multi").click();
  }

  cancelPopup() {
    cy.get(".sticky-bottom > .me-3").click();
  }

  createActionItem() {
    //cy.get(".sticky-bottom > .btn-primary").click();
    cy.get(".col-xl-4.col-lg-12 > :nth-child(1) > :nth-child(2) > .float-end")
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }
}

module.exports = new ActionItem();
