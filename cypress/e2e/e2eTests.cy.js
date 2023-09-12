import Loginpage from "../Pages/Loginpage";
import Organization from "../Pages/Organization";
import Entities from "../Pages/Entities";
import Logout from "../Pages/Logout";
import PasswordReset from "../Pages/PasswordReset";
//import { parse } from "node-html-parser";
import ActionItem from "../Pages/ActionItem";
const account = require("../fixtures/erm.json");

describe("Login page", () => {
  it("Login-Wrong Email tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail(account.wrongEmail);
    Loginpage.setPassword(account.password);
    Loginpage.clickLogin({ timout: 2000 });
    Loginpage.assertLoginError();
  });
  it("Login-Wrong Password tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail(account.email);
    Loginpage.setPassword(account.wrongpassword);
    Loginpage.clickLogin({ timout: 2000 });
    Loginpage.assertLoginError();
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
    Loginpage.verifylogin();
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

describe("Dashboard", () => {
  beforeEach(() => {
    cy.login(account.email, account.password);
  });

  it("Select Organization ", () => {
    Loginpage.navigate();
    Organization.selectOrg();
  });

  it("Create New Entity", () => {
    cy.visit("/", { failOnStatusCode: false });
    Organization.selectOrg();
    Entities.clickNewEntitybtn({ timeout: 15000 });
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    Entities.setEntityName("EntityName" + randomNum);
    Entities.setEntityAddress("EntityAddress" + randomNum);
    Entities.selectJuris();
    Entities.clickCreateEntitybtn();
    cy.contains("EntityName" + randomNum)
      .scrollIntoView()
      .click({ force: true });
    var entityname = "EntityName" + randomNum;
    Entities.DeleteEntity(entityname);
  });
  it.skip("test", () => {
    Loginpage.navigate();
    Entities.DeleteMultipleEntities();
  });
  it.skip("Update Entity", () => {
    Loginpage.navigate();
    Organization.selectOrg();
    Entities.upDateEntity();
  });
  it("Delete Entity", () => {
    Loginpage.navigate();
    Organization.selectOrg();
    Entities.clickNewEntitybtn({ timeout: 15000 });
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    Entities.setEntityName("EntityName" + randomNum);
    Entities.setEntityAddress("EntityAddress" + randomNum);
    Entities.selectJuris();
    Entities.clickCreateEntitybtn();
    cy.contains("EntityName" + randomNum)
      .scrollIntoView()
      .click({ force: true });
    var entityname = "EntityName" + randomNum;
    Entities.DeleteEntity(entityname);
  });
  it.skip("Action Item", () => {
    Loginpage.navigate();
    ActionItem.createActionItem();
  });
  // it.only("", () => {
  //   Entities.DeleteMultipleEntities();
  // });

  it("Logout", () => {
    Loginpage.navigate();
    Logout.logoutuser();
  });
});
