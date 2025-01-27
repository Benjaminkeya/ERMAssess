//Generate random Number
var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

class Portfolio {
  //Page Element selectors
  elements = {
    firstPortfolioOnTheDashboard:()=>cy.xpath("//div[@class='nav nav-pills']/a[1]"),
    newPortfolioBtn:()=>cy.get('.py-0'),
    confirmDelPortfolioBtn:()=>cy.get("input[type='checkbox']"),
    nameField:()=>cy.get('#name'),
    descriptionField:()=> cy.get('#description'),
    createPortfolioBtn:()=>cy.xpath("//div[@class='modal-footer']/button[@type='submit']"),
    managePortfolioBtn:()=>cy.xpath("//div[@class='d-flex flex-row mb-3']//button[1]"), 
    firstEntity:()=>cy.get('#entity-item-0'),
    selectEntityField:()=>cy.get('.rbt-input-wrapper .rbt-input-main'),
    saveBtn:()=>cy.contains('button','Save'),
    delPortfolioBtn1:()=>cy.get("button[class='ms-3 btn btn-outline-danger btn-sm']"),
    delPortfolioBtn2:()=>cy.get('.btn-danger'),
    portfolioNameInnertext:()=>cy.xpath("//small[@class='text-muted ms-1']"),
    //cy.get('.modal-title > .text-muted'),
    confirmPortfolioName:()=>cy.get('#productName'),
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
    this.elements.newPortfolioBtn().click({force:true});
    this.setPortfolioName(name + randomNum);
    this.setDescriptionField(desc);
    this.clickCreatePortfolioBtn({ force: true });
    cy.contains(name +  randomNum)
  }

///Class Function Objects
  managePortfolio(name) {
    this.clickFirstPortfolioOnTheDashboard();
    this.elements.managePortfolioBtn().click({force:true});
    this.setPortfolioName(name + randomNum);
    this.elements.selectEntityField().click({force:true});
    this.elements.firstEntity().click({force:true});
    this.elements.saveBtn().click({force:true});
    this.clickFirstPortfolioOnTheDashboard();
    cy.contains(name + randomNum)
  }
  
  deletePortfolio() {
    this.clickFirstPortfolioOnTheDashboard();
    this.elements.delPortfolioBtn1().should('be.enabled').as('deleteBtn')
    cy.get('@deleteBtn').first().click({force:true});
    cy.wait(1000)
    this.elements.confirmDelPortfolioBtn().check()
    this.elements.delPortfolioBtn2().should('be.enabled').click({force:true});          
    }
}
export default new Portfolio()
