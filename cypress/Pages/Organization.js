import LoginPage from './LoginPage'

//Generate a random number
var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

class Orgarnization {

  //Page Element selectors
  elements = {
    OrgDropdown: () => cy.get("a[class='dropdown-toggle nav-link'] span"),
    OrgName: () => cy.xpath("//a[contains(text(),'1PixelEdge Test Automation')]"),
    selectedOrg:()=>cy.get('.dropdown-menu > .active'),
    userMenu: () => cy.get('#collasible-nav-dropdown'),
    profileLink:()=>cy.contains('a','Profile'),
    dashboardReportBtn:()=> cy.xpath("//button[contains(@class,'btn-primary') and contains(text(),'Reports')]"),
    addNewReportBtn:()=> cy.get('.btn-primary'),
    editReportBtn:()=> cy.get('button.ms-2.btn.btn-outline-primary.btn-sm'),
    deleteReportBtn:()=> cy.get('button.btn.btn-outline-danger.btn-sm'),
    confirmCheckboxBtn:()=>cy.get('.form-check-input'),
    confirmDeleteReportBtn:()=> cy.get('button.btn.btn-danger.btn-sm'),
    titleField: () => cy.get('#title'),
    descriptionField: () => cy.get('#description'),
    iFrameCodeField: () => cy.get('#iframeCode'),
    reportTypeField: () => cy.get('#reportType'),
    assignedTo:()=>cy.xpath("(//input[@placeholder='Select a user...'])"),
    selectAssignee:()=>cy.get('#subscribers-typeahead-item-0'),
    isActiveBox: () => cy.get('#isActive'),
    reporIDField: () => cy.get('#workspace_id'),
    addBtn: () => cy.get('form > .d-flex > .btn-primary'),
    editBtn:()=>cy.get('.sticky-bottom > .ms-2')
  }

//Class Function Objects
  switchOrg(text) {
    LoginPage.navigate()
    this.elements.OrgDropdown().should('exist').click({timeout:30000})//as('dropDown')
    //cy.get('@dropDown').click({force:true});
    cy.intercept('GET','**/*').as('allPageContentLoaded')//Intercept all GET API requests and store in alias
    this.elements.OrgName().contains('1PixelEdge Test Automation').click({ force: true });
    //cy.wait('@allPageContentLoaded');//Explicitly wait for all the page DOM elements to  load
    this.elements.selectedOrg().should('contain',text)
    cy.get('.dropdown-toggle > span').should('contain',text)
    cy.contains('Assessments').should('exist')
  }

  viewSubscriberOrganizations(profileID){
    this.elements.userMenu().should('exist').as('menu')
    cy.get('@menu').click({force:true})
    this.elements.profileLink().click({force:true})
    //Call base Url into a variable
    cy.url().should('eq',Cypress.env('testEnvironments').baseUrl + '/profile/'+ profileID +'/organizations')//assert expected URL 
  }

  addReport(ReportTitle, ReportDesc, ReportiFrameCode,name, ReportID,msg) {
    this.elements.dashboardReportBtn().should('be.visible').click({ force: true });
    this.elements.addNewReportBtn().should('be.visible').click({ force: true });
    this.elements.titleField().type(ReportTitle + randomNum, { delay: 0 });
    this.elements.descriptionField().type(ReportDesc,{delay:0});
    this.elements.iFrameCodeField().type(ReportiFrameCode,{delay:0});
    this.elements.reportTypeField().select('1');
    this.elements.assignedTo().type(name,{delay:0})
    this.elements.selectAssignee().click()
    this.elements.isActiveBox().check();
    this.elements.reporIDField().should('exist').type(ReportID,{delay:0});
    this.elements.addBtn().should('exist').click({ force: true });
    cy.contains(msg);
    // // Intercept the PowerBI GET request to the API URL
    // cy.intercept('POST', 'https://appsource.powerbi.com/visuals.json').as('embeddedReport');
    // cy.contains(ReportTitle + randomNum).should('exist').click({ force: true });
    // // Wait for the API call to be intercepted
    // cy.wait('@embeddedReport').then((interception) => {
    //   // check the status code of the API response
    //   expect(interception.response.statusCode).to.equal(201);
    //   // Wait for the iframe to be loaded
    //   cy.get('iframe').then(($iframe) => {
    //     // Access the contentWindow of the iframe
    //     const contentWindow = $iframe.contents()[0];

    //     // Perform assertions within the iframe content
    //     cy.wrap(contentWindow).contains('[data-testid="visual-container"]', 'Program Level').should('exist');
    // });
    //});
  }

  editReport(ReportEditedTitle,msg) {
    this.elements.dashboardReportBtn().should('be.visible').click({ force: true });
    this.elements.editReportBtn().first().should('be.visible').click({ force: true });
    this.elements.titleField().clear().type(ReportEditedTitle + randomNum, { delay: 0 });
    this.elements.editBtn().should('exist').click({ force: true });
    cy.contains(msg)
    cy.contains(ReportEditedTitle + randomNum).should('exist')
  }

  deleteReport(msg,ReportEditedTitle) {
    this.elements.dashboardReportBtn().should('be.visible').click({ force: true });
    this.elements.deleteReportBtn().first().should('be.visible').click({ force: true });
    this.elements.confirmCheckboxBtn().check()
    this.elements.confirmDeleteReportBtn().click({force:true})
    cy.contains(msg)
    cy.contains(ReportEditedTitle + randomNum).should('not.exist');
  }
}

export default new Orgarnization()