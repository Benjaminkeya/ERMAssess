import Loginpage from "../Pages/Loginpage"
import Organization from "../Pages/Organization"
import Entities from "../Pages/Entities";
const account = require("../fixtures/erm.json")

describe('Dashboard',()=>{
  
  beforeEach(()=>{
  Loginpage.navigate()
  Loginpage.setEmail(account.email);
  Loginpage.setPassword(account.password);
  Loginpage.clickLogin();

  
    
  })
  it('Select Organization ',()=>{

    Organization.selectOrg();
  
  })

  it('Create New Entity',()=>{

    Organization.selectOrg(); 
    Entities.clickNewEntitybtn({timeout: 15000});
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    Entities.setEntityName("EntityName"+randomNum);
    Entities.setEntityAddress("EntityAddress"+randomNum);
    Entities.selectJuris();
    Entities.clickCreateEntitybtn();
    cy.contains("EntityName"+randomNum).scrollIntoView().click({force: true});

  })
  it.only('Delete Entity',()=>{
    
    Organization.selectOrg(); 
    Entities.clickNewEntitybtn({timeout: 15000});
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    Entities.setEntityName("EntityName"+randomNum);
    Entities.setEntityAddress("EntityAddress"+randomNum);
    Entities.selectJuris();
    Entities.clickCreateEntitybtn();
    cy.contains("EntityName"+randomNum).scrollIntoView().click({force: true});
    var entityname = "EntityName"+randomNum;
    Entities.DeleteEntity(entityname);


  
})
})




 


