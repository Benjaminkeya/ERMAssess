const baseUrl = Cypress.env('testEnvironments').deBaseUrl;

class DataExport {
  //Page Elements
  elements = {
    userMenu:()=>cy.get('#collasible-nav-dropdown'),
    dataExportLink:()=>cy.get('.postion-relative'),
    protocolTxt:()=>cy.get('.rbt-input-main'),
    firstProtocol:()=>cy.get('#protocol-typeahead-item-0'),
    selectAllAssess:()=>cy.get('#select-all'),
    dataExportBtn:()=>cy.contains('button','Export To Excel (CSV)'),
    generateDataLinkBtn:()=>cy.get('.sticky-bottom > .ms-2'),
    dataLink:()=>cy.get('.flex-fill > .form-control'),
    entityDataExportBtn:()=>cy.contains('button','Data Export')
  }

  //Page Actions on Elements
  clickUserMenu(){
    this.elements.userMenu().should('be.visible').click({force:true});
  }
 
   clickExportDataLink(){
    this.elements.dataExportLink().should('be.visible').click({force:true});
   }

   clickEntityDataExportLink(){
    this.elements.entityDataExportBtn().click({force:true})
   }

   //Page Function Objects
  dataExport(protocolName,orgName,msg) {
    this.clickUserMenu();
    this.clickExportDataLink();
    this.elements.protocolTxt().should('exist').type(protocolName);
    this.elements.firstProtocol().click({force:true})
    this.elements.selectAllAssess().check();
    cy.wait(1000)
   // cy.intercept('GET','**/*').as('export')
    this.elements.dataExportBtn().should('exist').click({force:true});
    //cy.wait('@export')
    cy.wait(2000)
    cy.verifyDownload(orgName + '.csv')
    cy.contains(msg)
  }

  generateDataLink(protocolName,orgID) {
    this.clickUserMenu();
    this.clickExportDataLink();
    this.elements.protocolTxt().should('exist').type(protocolName,{delay:0});
    this.elements.firstProtocol().click({force:true})
    this.elements.selectAllAssess().check({force:true})
    cy.wait(1000)
    this.elements.generateDataLinkBtn().should('exist').click({force:true})
    cy.wait(1000)
    this.elements.dataLink().should('exist').invoke('attr','value').then((link)=>{
    expect(link).to.include(baseUrl+'/gateway/organizations/'+ orgID +'/observations')
    })
  }

  entityDataExport(protocolName,orgName,msg){
    this.clickEntityDataExportLink();
    this.elements.protocolTxt().should('exist').type(protocolName,{delay:0});
    this.elements.firstProtocol().click({force:true})
    this.elements.selectAllAssess().check({force:true})
    cy.wait(1000)
    this.elements.dataExportBtn().should('exist').click({force:true})
    cy.scrollTo('bottom')
    cy.verifyDownload(orgName + '.csv')
    //cy.contains(msg)
  }
   
  generateEntityDataLink(protocolName,orgID) {
    this.clickEntityDataExportLink();
    this.elements.protocolTxt().should('exist').type(protocolName,{delay:0});
    this.elements.firstProtocol().click({force:true})
    this.elements.selectAllAssess().check({force:true})
    cy.wait(1000)
    this.elements.generateDataLinkBtn().should('exist').click({force:true})
    this.elements.dataLink().should('exist').invoke('attr','value').then((link)=>{
    expect(link).to.include(baseUrl+'/gateway/organizations/'+ orgID +'/observations')
    })
  }
}
export default new DataExport()
