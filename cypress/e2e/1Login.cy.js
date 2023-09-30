import Loginpage from "../Pages/LoginPage";
import PasswordReset from "../Pages/PasswordReset";
const account = require("../fixtures/erm.json");
//import { slowCypressDown } from "cypress-slow-down";

//slowCypressDown();

describe("Login page", () => {
  it("Login-Wrong Email tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail(account.wrongEmail);
    Loginpage.setPassword(account.password);
    Loginpage.clickLogin({ timout: 2000 });
    Loginpage.assertLoginError("These credentials did not match our records");
  });
  it("Login-Wrong Password tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail(account.email);
    Loginpage.setPassword(account.wrongpassword);
    Loginpage.clickLogin({ timout: 2000 });
    Loginpage.assertLoginError("These credentials did not match our records");
  });

  it("Login-Blank fields tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail("  ");
    Loginpage.setPassword("  ");
    Loginpage.clickLogin({ timout: 2000 });
    cy.location("pathname", "/login");
  });

  it("Login- Positive tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail(account.email);
    Loginpage.setPassword(account.password);
    Loginpage.clickLogin({ timout: 2000 });
    Loginpage.verifyLogin();
  });
  it("View Password", () => {
    Loginpage.navigate();
    Loginpage.viewPassword("TechbJoy8*");
  });

  it("Terms of service link present", () => {
    Loginpage.navigate();
    cy.get("small > :nth-child(1)").should("be.visible");
  });
  it("Privacy Policy link present", () => {
    Loginpage.navigate();
    cy.get("small > :nth-child(2)").should("be.visible");
  });

  it("Reset Password-registered email", () => {
    Loginpage.navigate();
    PasswordReset.resetPass(account.email, "Success!");
  });

  it("Reset Password-non-registered email", () => {
    Loginpage.navigate();
    PasswordReset.resetPass(account.wrongEmail, "Success!");
  });
});
