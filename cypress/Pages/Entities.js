
var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
class Entity {
  elements = {
    firstEntity:()=>cy.get(':nth-child(1) > :nth-child(1) > .p-0 > .text-decoration-none'),
    newEntityBtn: () => cy.get("button[class='btn btn-primary btn-sm']"),
    entityName: () => cy.get('#name'),
    entityAddress: () => cy.get('#address'),
    tag:()=>cy.get(':nth-child(3) > .rbt > .rbt-input-multi'),
    firstTag:()=>cy.get('#tagsTypeahead-item-0'),
    clearTag:()=>cy.xpath("//button[@aria-label='Clear']"),
    chooseJuris2:()=>cy.get('#jurisdiction-typeahead-item-0'),
    entityDesc:()=>cy.get('#description'),
    facilityIDField:()=>cy.get('#customId'),
    nextBtn:()=>cy.get('.px-4'),
    genInfoTab:()=>cy.get('#controlled-tab-example-tab-step-1'),
    locationAndContactInfoTab:()=>cy.get('#controlled-tab-example-tab-step-2'),
    advancedInfoTab:()=>cy.get('#controlled-tab-example-tab-step-3'),
    mannedRdioBtn:()=>cy.get('#checkbox-manned'),
    createEntityBtn: () =>cy.contains('button','Create Entity'),
    delEntity: () => cy.contains('button','Delete'),
    confirmDelEntityCheckboxBtn:()=> cy.get('.form-check-input'),
    updatedAtFilter:()=> cy.get('tr > :nth-child(5)'),
    updateEntityBtn1:()=>cy.get('.mt-3 > .me-2'),
    updateEntityBtn2: () =>cy.contains('button','Update Entity'),
    entitydeleteBtn:() => cy.get('.btn-danger'),
    entityNameInnerText:()=>cy.get(':nth-child(1) > :nth-child(1) > .p-0 > .text-decoration-none'),
    entitySearchField: () => cy.get('.col-md-12 > .form-control'),
    dateFilter: () =>cy.get('.react-datepicker__input-container > .form-control'),
    dateModal:() => cy.get('.react-datepicker'),
    assessmentsBtn:()=>cy.get('.mx-2'),
  }

  createEntity(entityName, entityAddress,enabled,facility,desc) {
    this.elements.newEntityBtn().should('exist').click({ force: true })
    this.elements.entityName().clear().type(entityName+ randomNum,{delay:0},{force:true});
    this.elements.entityAddress().type(entityAddress,{delay:0});
    this.elements.facilityIDField().type(facility,{delay: 0});
    this.elements.entityDesc().type(desc,{delay: 0});
    this.elements.locationAndContactInfoTab().should('be.visible').click({ force: true })
    this.elements.advancedInfoTab().should('be.visible').click({ force: true })
    this.elements.mannedRdioBtn().click({force:true})
    this.elements.createEntityBtn().should('be.visible').should(enabled)
    .then(($button) => {
       if ($button.length > 0) {
        this.elements.createEntityBtn().should('be.visible').click({ force: true })
        cy.contains(entityName + randomNum).scrollIntoView()
    }
    else{
      this.elements.createEntityBtn().should('be.disabled')
    }
      })
  }

  updateEntity(name,entityAddress,desc) {
    cy.clickTableLink(1,1)
    this.elements.updateEntityBtn1().should('exist').click({force:true});
    this.elements.entityName()
                             .should('exist')
                             .clear()
                             .type(name + randomNum,{delay:0},{force:true});
    this.elements.entityAddress().clear().type(entityAddress + randomNum,{delay:0});
    this.elements.entityDesc().should('exist').clear().type(desc,{delay:0})
    //cy.xpath("(//button[@aria-label='Clear'])[1]").click({force:true})
    this.elements.tag().click()
    cy.wait(1000)
    this.elements.firstTag().click({force:true})
    //this.elements.clearTag().should('exist').click({force:true})
    this.elements.locationAndContactInfoTab().click({force:true})
    this.elements.advancedInfoTab().click({force:true})
    this.elements.updateEntityBtn2().scrollIntoView().should('be.enabled').click({ force: true }, { timeout: 3000 });
    cy.contains(name).should('exist');
  //  PreActions.preActions()
  //   Dashboard.clickUserMenu();
  //   ManageAccount.clickManageLink();
  //   ManageAccount.openEntityTagsTab()
  //   ManageAccount.elements.delTagBtn1().click({force:true})
  //   cy.contains('is associated with an entity and cannot be deleted.') 

  }

  // updateEntityRemoveTag() {
  //   this.elements.updateEntityBtn1().should('exist').click({force:true});
  //   this.elements.clearTag().should('exist').click({force:true})
  //   this.elements.locationAndContactInfoTab().click({force:true})
  //   this.elements.advancedInfoTab().click({force:true})
  //   this.elements.updateEntityBtn2().scrollIntoView().should('be.enabled').click({ force: true }, { timeout: 3000 });
  // }
  openEntityAssessments(){
    this.elements.assessmentsBtn().should('be.visible').click({force:true})
    cy.get('h1').should('contain','Assessment')
  }
  exportEntities(orgName,msg){
    cy.contains('Overview').should('exist').should('be.visible')
    cy.intercept('GET','**/*').as('exported')
    cy.contains('button','Export Entities').click({force:true})
    cy.wait('@exported')
    cy.contains(msg)
    cy.verifyDownload(orgName + ' - ' + 'Entities'+'.csv')
  }
  deleteEntityNegative() {
    cy.contains('Overview').should('exist').should('be.visible')
    cy.clickTableLink(1,1)
    this.elements.delEntity().should('be.visible').click({ force: true });
    this.elements.entitydeleteBtn().should('exist').should('be.disabled');
  }

  deleteEntityPositive(notification) {
    cy.contains('Overview').should('exist').should('be.visible')
    cy.clickTableLink(1,1)
    //this.elements.entityNameInnerText().invoke('text').then((getText)=>{  
      this.elements.delEntity().should('exist').click({ force: true });
      //Confirm Entity name to delete 
      this.elements.confirmDelEntityCheckboxBtn().check({force:true})              
      this.elements.entitydeleteBtn().should('be.enabled').as('del')
      cy.get('@del').click({ force: true });
      cy.contains(notification)
      cy.wait(1000)
      //verify user is redirected to the dashboard
      cy.location('pathname').should('eq','/')
      //verify Entity is deleted and does not exist
      //cy.contains(getText).should('not.exist');
    //})    
      }  

  searchEntityPositive(name) {
    this.elements.entitySearchField().should('exist').scrollIntoView().type(name,{delay:0});
    cy.contains(name).should('exist');
  }

  searchEntityNegative(name) {
    this.elements.entitySearchField().should('exist').scrollIntoView().type(name,{delay:0});
    cy.contains('No entities found');
  }
  
  filterEntities() {
    const today = new Date();
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    //const month1 = (today.getMonth() + 1).toString();
    //const day1 = today.getDate().toString();
    const year = today.getFullYear();
    //const slicedYear = String(today.getFullYear()).slice(2);
    const formattedDate = `${month}/${day}/${year}`;
    const formattedDate1 = `${day}/${month}/${year}`;
    //const formattedYYDate = `${month}/${day}/${slicedYear}`;
    this.elements.dateFilter().scrollIntoView().should('exist').type(formattedDate+' - '+formattedDate,{delay:0});
    this.elements.dateFilter().type('{esc}')
    //verify search results has only today's date  and entity name as filtered
    cy.intercept('GET','**/*').as('assessment')
    cy.xpath("//tbody[@class='table-group-divider']//tr[1]/td[1]/p/a").as('entityLink')
    cy.get('@entityLink').click({force:true})
    cy.wait('@assessment')
    cy.get(':nth-child(1) > :nth-child(5) > small').contains(formattedDate1)
    cy.contains(formattedDate1)
  }
}
export default new Entity()

