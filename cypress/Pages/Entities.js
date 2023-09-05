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
     entitydeleteBtn:()=>cy.get('.btn-outline-danger'),
     entitydeletemodal:()=>cy.get('.modal-header'),
     confirmentityfield:()=>cy.get('#productName'),
     entityNameValue:()=>cy.get("//small[@class='text-muted ms-1']"),
     openEntityName:()=>{



    }
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
    let getText;
    this.elements.entityNameValue().then(($value) => {
    getText = $value.text();
    })
    this.elements.entitydeletemodal().click({force: true});
    this.elements.confirmentityfield().type(getText);
    this.elements.entitydeleteBtn().click({force: true})
}

}
module.exports = new entity();