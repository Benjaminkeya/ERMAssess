    import Loginpage from "../Pages/Loginpage"
    import Organization from "../Pages/Organization"
    import Entities from "../Pages/Entities";
    const account = require("../fixtures/erm.json")

    
    describe('Login page',()=>{
        it('Login-Wrong Email tests',()=>{
          Loginpage.navigate()
          Loginpage.setEmail(account.wrongEmail)
          Loginpage.setPassword(account.password)
          Loginpage.clickLogin({timout:2000})
          Loginpage.assertLoginError()
        })
        it('Login-Wrong Password tests',()=>{
         Loginpage.navigate()
         Loginpage.setEmail(account.wrongEmail)
         Loginpage.setPassword(account.password)
         Loginpage.clickLogin({timout:2000})
         Loginpage.assertLoginError()
          })
          
        it('Login-Blank fields tests',()=>{
          Loginpage.navigate()
          Loginpage.setEmail("     ")
          Loginpage.setPassword("       ")
          Loginpage.clickLogin({timout:2000})
          cy.location('pathname','/login')
            })

        it('View password button',()=>{
          Loginpage.navigate()
          Loginpage.viewPassword(account.password,"Techbajaoy8*")
    
          

              
              })
        it('Login- Positive tests',()=>{
          Loginpage.navigate()
          Loginpage.setEmail(account.email)
          Loginpage.setPassword(account.password)
          Loginpage.clickLogin({timout:2000})
          Loginpage.verifylogin()

    }) 
  })

  describe('Dashboard',()=>{

      beforeEach(()=>{
        cy.login(account.email,account.password)
      })
      
      it('Select Organization ',()=>{
        cy.visit('/')
        Organization.selectOrg()
      
      })

      it('Create New Entity',()=>{
        cy.visit('/')
        Organization.selectOrg() 
        Entities.clickNewEntitybtn({timeout: 15000});
        var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1
        Entities.setEntityName("EntityName"+randomNum)
        Entities.setEntityAddress("EntityAddress"+randomNum)
        Entities.selectJuris()
        Entities.clickCreateEntitybtn()
        cy.contains("EntityName"+randomNum).scrollIntoView().click({force: true})

      })
      it('Delete Entity',()=>{
        cy.visit('/')
        Organization.selectOrg()
        Entities.clickNewEntitybtn({timeout: 15000})
        var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1
        Entities.setEntityName("EntityName"+randomNum)
        Entities.setEntityAddress("EntityAddress"+randomNum)
        Entities.selectJuris()
        Entities.clickCreateEntitybtn()
        cy.contains("EntityName"+randomNum).scrollIntoView().click({force: true})
        var entityname = "EntityName"+randomNum
        Entities.DeleteEntity(entityname)


      
    })
    })




    


