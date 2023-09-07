import Loginpage from "../Pages/Loginpage";
import Organization from "../Pages/Organization";
import Entities from "../Pages/Entities";
import Logout from "../Pages/Logout";
import PasswordReset from "../Pages/PasswordReset";
import { parse } from "node-html-parser";
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
    Loginpage.setEmail(account.wrongEmail);
    Loginpage.setPassword(account.password);
    Loginpage.clickLogin({ timout: 2000 });
    Loginpage.assertLoginError();
  });

  it("Login-Blank fields tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail("     ");
    Loginpage.setPassword("       ");
    Loginpage.clickLogin({ timout: 2000 });
    cy.location("pathname", "/login");
  });

  it("View password button", () => {
    Loginpage.navigate();
    Loginpage.viewPassword(account.password, "Techbajaoy8*");
  });
  it("Login- Positive tests", () => {
    Loginpage.navigate();
    Loginpage.setEmail(account.email);
    Loginpage.setPassword(account.password);
    Loginpage.clickLogin({ timout: 2000 });
    Loginpage.verifylogin();
  });
  it("Reset Password-registered email", () => {
    PasswordReset.resetPass(account.email, "Success!");
  });
  it("Reset Password-non-registered email", () => {
    PasswordReset.resetPass(account.wrongEmail, "Success!");
  });
});

describe("Dashboard", () => {
  beforeEach(() => {
    cy.login(account.email, account.password);
  });

  it("Select Organization ", () => {
    cy.visit("/");
    Organization.selectOrg();
  });

  it("Create New Entity", () => {
    cy.visit("/");
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
  it("Delete Entity", () => {
    cy.visit("/");
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

  it.only("Logout", () => {
    Logout.logoutuser();
  });
});
