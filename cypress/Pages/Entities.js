class entity{

    elements={
     newEntitybtn:()=> cy.get("button[class='btn btn-primary btn-sm']"),
     entitymodal:()=> cy.get('.modal-body > .mb-3:nth-child(1)'),
     entityName: ()=> cy.get("#name"),
     entityAddress: ()=> cy.get("#address"),
     jurisdropdown:()=> cy.get('.rbt-input-wrapper .rbt-input-main'),
     choosejuris:()=> cy.get('#jurisdiction-typeahead-item-0'),
     entityBtn:()=>cy.get(".modal-footer > .btn-primary"),
     deleteentity:()=>cy.get(".btn-outline-danger"),
     confirmentityname:()=>cy.get("//input[@id='productName']"),
     entitydeleteBtn:()=>cy.get('.btn-danger'), 
     entitydeletemodal:()=>cy.get('.modal-header'),
     confirmentityfield:()=>cy.get('#productName'),
     entityNameValue:()=>cy.get(".modal-title > .text-muted")

    }


    clickNewEntitybtn()
    {
       
       this.elements.newEntitybtn().click({force: true});
       this.elements.entitymodal().click({force: true});
    }
   
    setEntityName(name)
    {
   this.elements.entityName().type(name)
      
    }
    setEntityAddress(address)
    {
       this.elements.entityAddress().type(address);
    }
   
    selectJuris()
    {
       this.elements.jurisdropdown().click({force: true});
       this.elements.choosejuris().click({force: true});
       
    }
    clickCreateEntitybtn()
    {  
       
       this.elements.entityBtn().click({force: true});
   
    }

    
DeleteEntity()
{    
    this.elements.deleteentity().click({force: true});
    this.elements.entitydeletemodal().click({force: true});
    this.elements.entityNameValue().invoke('text').then((getText) => {
      this.elements.entitydeletemodal().click({force: true});
      this.elements.confirmentityfield().type(getText);
      this.elements.entitydeleteBtn().click({force: true});
    cy
       .wait(3000)
       .contains(getText).should('not.exist');
      

      //  cy.intercept('DELETE','https://de.ermassess.com/api/v1/facilities').as('delete');
      //  cy.wait('@delete').its('response.status.Code').should('eq',204)
    })
    
    cy.location('pathname').should('eq', '/')


}

}
module.exports = new entity();
