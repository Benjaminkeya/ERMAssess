var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
class Entity {
  elements = {
    newEntityBtn: () => cy.get("button[class='btn btn-primary btn-sm']"),
    entityName: () => cy.get('#name'),
    entityAddress: () => cy.get('#address'),
    tag:()=>cy.get(':nth-child(3) > .rbt > .rbt-input-multi'),
    firstTag:()=>cy.get('#entityTags-item-0'),
    jurisDropdown: () => cy.get(':nth-child(4) > .rbt > .rbt-input-multi'),
    chooseJuris1: () => cy.get('.rbt-highlight-text'),
    chooseJuris2:()=>cy.get('#jurisdiction-typeahead-item-0'),
    entityDesc:()=>cy.get('#description'),
    facilityIDField:()=>cy.get('#customId'),
    nextBtn:()=>cy.get('.px-4'),
    genInfoTab:()=>cy.get('#controlled-tab-example-tab-step-1'),
    locationAndContactInfoTab:()=>cy.get('#controlled-tab-example-tab-step-2'),
    advancedInfoTab:()=>cy.get('#controlled-tab-example-tab-step-3'),
    createEntityBtn: () =>cy.contains('button','Create Entity'),
    delEntity: () => cy.xpath("(//span[@translate='no'][normalize-space()='delete_outline'])[1]"),
    updateEntityBtn1:()=>cy.xpath("(//span[@class='material-icons-outlined md-18'][normalize-space()='tune'])[1]"),
    updateEntityBtn2: () =>cy.contains('button','Update Entity'),
    confirmEntityname: () => cy.get("//input[@id='productName']"),
    entitydeleteBtn: () => cy.get('.btn-danger'),
    confirmEntityfield: () => cy.get('#productName'),
    entityNameValue: () => cy.get('.modal-title >.text-muted'),
    entitySearchField: () => cy.get('.col-md-12 > .form-control'),
    jurisFilterBtn: () => cy.get('.rbt-input-main'),
    clearJurisBtn: () => cy.xpath("(//button[@aria-label='Clear'])[2]"),
    filterByJurisDropdown: () => cy.get('.rbt-input-main'),
    jurisFilterDate: () =>cy.get('.react-datepicker__input-container > .form-control'),
    dateModal: () => cy.get('.react-datepicker'),
    assessmentsBtn:()=>cy.get('.mx-2'),
   
  };

  clickNewEntitybtn() {
    this.elements.newEntityBtn().should('be.visible').click({ force: true });
    
  }

  setEntityName(name) {
    this.elements.entityName().should('be.visible').clear().type(name,{delay:0});
  }
  setEntityAddress(address) {
    this.elements.entityAddress().should('be.visible').type(address,{delay:0});
  }

  selectJuris(jurisdiction) {
    this.elements.jurisDropdown().should('be.visible').type(jurisdiction,{delay:0});
    this.elements.chooseJuris1().should('be.visible').click({ force: true });
  }

  createEntity(entityName, entityAddress,jurisdiction,enabled) {
    this.clickNewEntitybtn({ timeout: 15000 });
    this.setEntityName(entityName + randomNum);
    this.setEntityAddress(entityAddress);
    this.elements.tag().click({force:true})
    this.elements.firstTag().click({force:true})
    this.selectJuris(jurisdiction);
    this.elements.locationAndContactInfoTab().should('be.visible').click()
    this.elements.advancedInfoTab().should('be.visible').click()
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
  updateEntity(name,address,jurisdiction,desc) {
    this.elements.updateEntityBtn1().should('be.visible').click()
    this.setEntityName(name + randomNum);
    this.elements.entityAddress().should('be.visible').clear().type(address + randomNum,{delay:0});
    this.elements.clearJurisBtn().should('be.visible').click();
    this.selectJuris(jurisdiction)
    this.elements.entityDesc().should('be.visible').clear().type(desc,{delay:0})
    this.elements.locationAndContactInfoTab().should('be.visible').click()
    this.elements.advancedInfoTab().should('be.visible').click()
    this.elements.updateEntityBtn2().should('be.visible').click({ force: true }, { timeout: 3000 });
    cy.contains(name).should('exist');
  }
  openEntityAssessments(){
    this.elements.assessmentsBtn().should('be.visible').click()
    cy.get('h1').should('contain','Assessment')
  }
  deleteEntityNegative(text) {
    this.elements.delEntity().should('be.visible').click({ force: true });
    this.elements.confirmEntityfield().should('be.visible').type(text,{delay:0});
    this.elements.entitydeleteBtn().should('exist').should('be.disabled');
  }
  deleteEntityPositive() {
        this.elements.delEntity().should('be.visible').click({ force: true });
        //Confirm Entity name to delete 
        this.elements
          .entityNameValue()
          .invoke('text')
          .then((getText) => {
            this.elements.confirmEntityfield().should('be.visible').type(getText,{delay:0});
            this.elements.entitydeleteBtn().should('be.enabled').click({ force: true });
            //verify Entity is deleted and does not exist
            cy.contains(getText).should('not.exist');
          });
        //verify user is redirected to the dashboard
        cy.location('pathname').should('eq', '/');

      }  

  searchEntityPositive(name) {
    this.elements.entitySearchField().should('be.visible').scrollIntoView().type(name,{delay:0});
    cy.contains(name).should('exist');
  }
  searchEntityNegative(name) {
    this.elements.entitySearchField().should('be.visible').scrollIntoView().type(name,{delay:0});
    cy.contains('No entities found');
  }
  
  filterEntityByDateRangeAndJurisdiction(name) {
    const today = new Date();
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    //const slicedYear = String(today.getFullYear()).slice(2);
    const formattedDate = `${month}/${day}/${year}`;
    //const formattedYYDate = `${month}/${day}/${slicedYear}`;
    this.elements.jurisFilterDate().scrollIntoView().should('exist').type(formattedDate+' - '+formattedDate,{delay:0});
    this.elements.jurisFilterDate().type('{esc}')
    this.elements.jurisFilterBtn().scrollIntoView().should('be.visible').click({force:true});
    this.elements.filterByJurisDropdown().should('be.visible').type(name,{delay:0});
    this.elements.chooseJuris2().should('be.visible').click({force:true});
    //verify search results has only today's date  and entity name as filtered
    cy.xpath("//tbody[@class='table-group-divider']//tr[1]/td[1]/p//a").click({force:true})
    cy.contains(name)
    //cy.contains(formattedYYDate)
    
   
  }
}
export default new Entity
