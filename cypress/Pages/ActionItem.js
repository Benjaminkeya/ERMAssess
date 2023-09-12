class actionItem {
  elements = {};
  createActionItem() {
    cy.get(".d-flex:nth-child(1) .btn-outline-primary").click({ force: true });
    cy.get("#item").type("test");
    cy.get(".form-control > p").click();
    cy.get("#dueDate").trigger("mouseover").click();
    //cy.contains("Today").click({ force: true });
    // cy.get(".focus .rbt-input-main").click();
    // cy.get(".rbt-input-wrapper > div:nth-child(1) > .rbt-input-main").click();
    // cy.get(".btn-primary:nth-child(2)").click();
    // cy.get(".overflow-auto > form").submit();
  }
}
module.exports = new actionItem();
