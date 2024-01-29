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
    dataLink:()=>cy.get('.flex-fill > .form-control'),
    entityDataExportBtn:()=>cy.contains('button','Data Export')
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

  generateDataLink(orgID) {
    this.elements.userMenu().should('be.visible').click();
    this.elements.dataExportLink().should('be.visible').click();
    this.elements.protocolId().should('be.visible').select('6571d0ff10da2');
    this.elements.assessmentDropdown().should('be.visible').click();
    this.elements.firstListedAssessment().should('be.visible').click();
    this.elements.generateDataLinkBtn().should('be.visible').click()
    this.elements.dataLink().should('be.visible').invoke('attr','value').then((link)=>{
    expect(link).to.include(baseUrl+'/gateway/organizations/'+ orgID +'/observations')
    })
  }

  entityDataExport(orgName){
    this.elements.entityDataExportBtn().click({force:true})
    this.elements.protocolId().should('be.visible').select('6571d0ff10da2');
    this.elements.assessmentDropdown().should('be.visible').click();
    this.elements.firstListedAssessment().should('be.visible').click();
    this.elements.dataExportBtn().should('be.visible').click()
    cy.verifyDownload(orgName + '.csv')
  }
   
  generateEntityDataLink(orgID) {
    this.elements.entityDataExportBtn().click({force:true})
    this.elements.protocolId().should('be.visible').select('6571d0ff10da2');
    this.elements.assessmentDropdown().should('be.visible').click();
    this.elements.firstListedAssessment().should('be.visible').click();
    this.elements.generateDataLinkBtn().should('be.visible').click()
    this.elements.dataLink().should('be.visible').invoke('attr','value').then((link)=>{
    expect(link).to.include(baseUrl+'/gateway/organizations/'+ orgID +'/observations')
    })
  }
}
export default new DataExport()
