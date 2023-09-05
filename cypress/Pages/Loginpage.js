class login{

   elements =
{
txtEmail: () => cy.get("#email"),
 txtPass: () => cy.get("#password"),
     btn: () => cy.get("button[type='submit']"),
     lbl: () => cy.get(".breadcrumb-item > span"),

}

navigate()
{  
    cy.visit('/');
    
}

setEmail(email)
{
    this.elements.txtEmail().clear().type(email);
}

setPassword(password)
{
    this.elements.txtPass().clear().type(password);
      
}

clickLogin()
{

this.elements.btn().click({force: true});
}

verifylogin()
{
this.elements.lbl().should('have.text','Dashboard');
}

}

module.exports = new login();