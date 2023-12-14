const fs = require('fs');
const baseUrl = Cypress.env('testEnvironments').deBaseUrl;

class DataExport {
  elements = {
    userMenu:()=>cy.get('#collasible-nav-dropdown'),
    dataExportLink:()=>cy.get('.postion-relative'),
    protocolId:()=>cy.get('#protocolId'),
    assessmentDropdown:()=>cy.get('.rbt-input-multi'),
    firstListedAssessment:()=>cy.get('#assessments-item-0'),
    dataExportBtn:()=>cy.contains('button','Export To Excel (CSV)'),
    generateDataLinkBtn:()=>cy.contains('button','Generate Data Link') ,
    dataLink:()=>cy.get('.flex-fill > .form-control')
  }

  dataExport(orgName) {
    this.elements.userMenu().should('be.visible').click();
    this.elements.dataExportLink().should('be.visible').click();
    this.elements.protocolId().should('be.visible').select('6571d0ff10da2');
    this.elements.assessmentDropdown().should('be.visible').click();
    this.elements.firstListedAssessment().should('be.visible').click();
    this.elements.dataExportBtn().should('be.visible').click()
    cy.verifyDownload(orgName + '.csv')
  }

  generateDataLink() {
    this.elements.userMenu().should('be.visible').click();
    this.elements.dataExportLink().should('be.visible').click();
    this.elements.protocolId().should('be.visible').select('6571d0ff10da2');
    this.elements.assessmentDropdown().should('be.visible').click();
    this.elements.firstListedAssessment().should('be.visible').click();
    this.elements.generateDataLinkBtn().should('be.visible').click()
    this.elements.dataLink().should('be.visible').invoke('attr','value').then((link)=>{
    expect(link).to.include(baseUrl+'/gateway/organizations/6571cacabe208/observations')
    })
    
  }
}
export default new DataExport()
