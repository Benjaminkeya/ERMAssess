class Dashboard {
  elements = {
    feedbackBtn: () => cy.get(".Feedback"),
    feedbackDesc: () => cy.get(".modal-body > div > .form-control"),
    submitBtn: () => cy.get(".modal-footer > .btn-primary"),
    message: () => cy.get("p.mb-1 > small"),
    closeFeedbackModal: () => cy.get(".modal-footer > .btn"),
    helpBtn: () => cy.contains("Help"),
    helpCenterModal: () => cy.get(".modal-header"),
    verifyHelpCentrePage: () => cy.contains("Help Center"),
    userMenu: () => cy.get("#collasible-nav-dropdown"),
    newPortfolioBtn: () => cy.get(".py-0"),
    firstPortfolioOnTheDashboard: () =>
      cy.xpath("//div[@class='nav nav-pills']/a[1]").click(),
  };

  actionItemDropDown() {
    cy.get(".action-item > .dropdown-toggle").click();
  }

  addFeedback(Description) {
    this.elements.feedbackBtn().click();
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.elements.feedbackDesc().type(Description + randomNum);
    this.elements.submitBtn().click();

    this.elements.message().should("contain", "We appreciate that");
    this.elements.closeFeedbackModal().click();
  }
  helpCenter() {
    this.elements.helpBtn().click();
    this.elements.helpCenterModal().click();
    this.elements.verifyHelpCentrePage();
  }

  userProfileDropDown() {
    this.elements.userMenu().click();
  }
  newPortfolio() {
    this.elements.newPortfolioBtn().click();
  }

  firstPortfolioOnTheDashboard() {
    this.elements.firstPortfolioOnTheDashboard().click();
  }

  newEntity() {
    cy.get(
      ".border > .card-body > :nth-child(1) > :nth-child(2) > .btn"
    ).click();
  }

  activityLog() {
    cy.get(".dropdown-menu > .my-2").click();
  }
}
module.exports = new Dashboard();
