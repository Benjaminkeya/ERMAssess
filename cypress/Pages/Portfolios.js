const Dashboard = require("./Dashboard");
class Portfolio {
  elements = {};
  portfolioName(name) {
    cy.get("#name").type(name);
  }

  addDescription(desc) {
    cy.get("#description").type(desc);
  }

  createPortfolioBtn() {
    cy.xpath("//div[@class='modal-footer']/button[@type='submit']").click();
  }

  cancelPortfolioPopup() {
    cy.get(".bg-secondary").click();
  }
  addPortfolio(name) {
    Dashboard.newPortfolio();
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

    this.portfolioName(name + randomNum);
    this.createPortfolioBtn();
  }
  managePortfolio(desc) {
    Dashboard.firstPortfolioOnTheDashboard();
    cy.get(
      ".col-xl-8 > :nth-child(1) > :nth-child(2) > .btn-outline-primary"
    ).click();

    this.addDescription(desc);
    cy.get(".btn-primary").click();
  }
  deletePortfolio() {
    Dashboard.firstPortfolioOnTheDashboard();
    cy.get(":nth-child(2) > .ms-3").click();
    cy.get(".modal-title > .text-muted").then((portfolioName) => {
      let portfolio = portfolioName.text();

      cy.get("#productName").type(portfolio);

      cy.xpath("//div[@class='modal-footer']/button[@type='submit']").click();
    });
  }
}
module.exports = new Portfolio();
