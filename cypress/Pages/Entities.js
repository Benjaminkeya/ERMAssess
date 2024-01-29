var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
class Entity {
  elements = {
    newEntityBtn: () => cy.get("button[class='btn btn-primary btn-sm']"),
    entityName: () => cy.get('#name'),
    entityAddress: () => cy.get('#address'),
    tag:()=>cy.get(':nth-child(3) > .rbt > .rbt-input-multi'),
    firstTag:()=>cy.get('#entityTags-item-0'),
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
    confirmEntityname:() => cy.get("//input[@id='productName']"),
    entitydeleteBtn:() => cy.get('.btn-danger'),
    confirmEntityfield: () =>cy.get('#productName'),
    entityInnerText:() => cy.get('.modal-title > .text-muted'),
    entitySearchField: () => cy.get('.col-md-12 > .form-control'),
    dateFilter: () =>cy.get('.react-datepicker__input-container > .form-control'),
    dateModal:() => cy.get('.react-datepicker'),
    assessmentsBtn:()=>cy.get('.mx-2'),
  }

  createEntity(entityName, entityAddress,jurisdiction,enabled) {
    this.elements.newEntityBtn().should('be.visible').click({ force: true })
    this.elements.entityName().clear().type(entityName+ randomNum,{delay:0},{force:true});
    this.elements.entityAddress().type(entityAddress,{delay:0});
    this.elements.tag().click({force:true})
    this.elements.firstTag().click({force:true})
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

  updateEntity(name,entityAddress,jurisdiction,desc) {
    this.elements.updateEntityBtn1().should('be.visible').click({force:true});
    cy.wait(1000)
    this.elements.entityName()
                             .should('exist')
                             .clear()
                             .type(name + randomNum,{delay:0},{force:true});
    this.elements.entityAddress().clear().type(entityAddress + randomNum,{delay:0});
    this.elements.entityDesc().should('exist').clear().type(desc,{delay:0})
    this.elements.locationAndContactInfoTab().click({force:true})
    this.elements.advancedInfoTab().click({force:true})
    this.elements.updateEntityBtn2().should('be.enabled').click({ force: true }, { timeout: 3000 });
    cy.contains(name).should('exist');
  }

  openEntityAssessments(){
    this.elements.assessmentsBtn().should('be.visible').click({force:true})
    cy.get('h1').should('contain','Assessment')
  }

  deleteEntityNegative(text) {
    cy.contains('Overview').should('exist').should('be.visible')
    this.elements.delEntity().should('be.visible').click({ force: true });
    this.elements.confirmEntityfield().should('exist').should('be.visible').type(text,{delay:0},{force:true});
    this.elements.entitydeleteBtn().should('exist').should('be.disabled');
  }

  deleteEntityPositive() {
    cy.contains('Overview').should('exist').should('be.visible')
        this.elements.delEntity().should('exist').click({ force: true });
        //Confirm Entity name to delete 
        this.elements
          .entityInnerText()
          .should('exist')
          .invoke('text')
          .then((getText) => {
            this.elements.confirmEntityfield()
                                             .should('exist')
                                             .type(getText,{delay:0},{force:true});
            this.elements.entitydeleteBtn().should('be.enabled').click({ force: true });
            //verify Entity is deleted and does not exist
            cy.contains(getText).should('not.exist');
          });
        //verify user is redirected to the dashboard
        cy.location('pathname').should('eq', '/');
      }  

  searchEntityPositive(name) {
    this.elements.entitySearchField().should('exist').scrollIntoView().type(name,{delay:0});
    cy.contains(name).should('exist');
  }

  searchEntityNegative(name) {
    this.elements.entitySearchField().should('exist').scrollIntoView().type(name,{delay:0});
    cy.contains('No entities found');
  }
  
  filterEntities(name) {
    const today = new Date();
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const slicedYear = String(today.getFullYear()).slice(2);
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
    //cy.scrollTo('bottom')
    cy.contains(formattedDate1)
  }
 
}
export default new Entity()

