//Generate random Number
var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

class Portfolio {
  //Page Element selectors
  elements = {
    firstPortfolioOnTheDashboard: () =>cy.xpath("//div[@class='nav nav-pills']/a[1]"),
    newPortfolioBtn: () => cy.get('.py-0'),
    portfolioInnerText:()=>cy.get('.rbt-token-label'),
    nameField:()=>cy.get('#name'),
    descriptionField: () => cy.get('#description'),
    createPortfolioBtn: () =>cy.xpath("//div[@class='modal-footer']/button[@type='submit']"),
    managePortfolioBtn: () =>cy.get('.col-xl-8 > :nth-child(1) > :nth-child(2) > .btn-outline-primary'),
    firstEntity: () => cy.get('#facility-typeahead-item-0'),
    selectEntityField: () => cy.get('.rbt-input-wrapper .rbt-input-main'),
    saveBtn: () => cy.contains('button','Save'),
    delPortfolioBtn1: () => cy.contains('button','Delete'),
    delPortfolioBtn2: () => cy.get('.btn-danger'),
    portfolioNameInnertext: () => cy.get('.modal-title > .text-muted'),
    confirmPortfolioName: () => cy.get('#productName'),
  };

//Page Element Actions
  clickFirstPortfolioOnTheDashboard() {
    this.elements.firstPortfolioOnTheDashboard().click({force:true});
  }

  setPortfolioName(name) {
    this.elements.nameField().type(name);
  }

  setDescriptionField(desc) {
    this.elements.descriptionField().type(desc);
  }

  clickCreatePortfolioBtn() {
    this.elements.createPortfolioBtn().click();
  }
  
  addPortfolio(name, desc) {
    this.elements.newPortfolioBtn().click();
    this.setPortfolioName(name + randomNum);
    this.setDescriptionField(desc);
    this.clickCreatePortfolioBtn({ force: true });
    cy.contains(name +  randomNum)
  }

//Class  Function Objects

  managePortfolio(name) {
    this.clickFirstPortfolioOnTheDashboard();
    this.elements.managePortfolioBtn().click({force:true});
    this.setPortfolioName(name + randomNum);
    this.elements.selectEntityField().click({force:true});
    this.elements.firstEntity().click({force:true});
    this.elements.portfolioInnerText().then((portfolio)=>{
      let port = portfolio.text()
    this.elements.saveBtn().click({force:true});
    this.clickFirstPortfolioOnTheDashboard();
    cy.contains(port)
    })
  }
  
  deletePortfolio() {
    this.clickFirstPortfolioOnTheDashboard();
    this.elements.delPortfolioBtn1().should('be.enabled').as('deleteBtn')
    cy.get('@deleteBtn').click({force:true});
    this.elements.portfolioNameInnertext().should('exist').should('be.visible').as('innerText')
    cy.get('@innerText').then((portfolioName) => {
                        let portfolio = portfolioName.text();
                        this.elements.confirmPortfolioName().type(portfolio, { delay:0 });
                        this.elements.delPortfolioBtn2().should('be.enabled').click({force:true});
                   });
     }
}
export default new Portfolio()
