class login{

   elements =
{
txtEmail: () => cy.get("#email"),
 txtPass: () => cy.get("#password"),
     btn: () => cy.get("button[type='submit']"),
     lbl: () => cy.get(".breadcrumb-item > span"),
     passEye:()=>cy.get('.border > .material-icons')
     //errorMessage:()=> cy.get(":nth-child(2) > p.mb-1 > small")

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
cy.location("pathname").should("eq", "/");
}

assertLoginError(message)
{
cy.contains("These credentials did not match our records")
}

viewPassword(password,pass)
{   
   
    this.elements.passEye().click()
    this.elements.txtPass().type(password)
    
}

}

module.exports = new login();