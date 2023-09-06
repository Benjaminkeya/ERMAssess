        class Orgarnization{

            elements = 
        {
            OrgDropdown: () => cy.get('.bg-primary > .dropdown-toggle'), 
            OrgItem:()=> cy.contains("Sample Supplier"),  
        }    
        selectOrg()
        {
            this.elements.OrgDropdown().click({force: true});
            this.elements.OrgItem().click({force: true});
        }
        }
        
        module.exports = new Orgarnization();