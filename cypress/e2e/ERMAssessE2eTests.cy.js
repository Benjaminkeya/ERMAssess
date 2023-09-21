import Loginpage from "../Pages/Loginpage";
import PasswordReset from "../Pages/PasswordReset";
import Organization from "../Pages/Organization";
import Entities from "../Pages/Entities";
import Assessments from "../Pages/Assessments";
import Logout from "../Pages/Logout";
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
    Loginpage.prerequisite(account.email, account.password);
  });
  it("Select Organization ", () => {});

  it("Create New Entity Negative", () => {
    Entities.clickNewEntitybtn({ timeout: 15000 });

    Entities.setEntityName(" ");
    Entities.setEntityAddress(" ");
    Entities.selectJuris();
    cy.get(".modal-footer > .btn-primary").should("be.disabled");
  });

  it("Create New Entity Positive", () => {
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
  });

  it("Search Entity", () => {
    Entities.searchEntity("EntityName");
  });

  it("Update Entity", () => {
    Entities.updateEntity();
  });

  it("Create Assessment Positive", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.createAssessment(account.Name, account.Description);
  });

  it("Update Assessment", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.updateAssessment(account.Name, account.Description);
  });
  it("Respond to Assessment questions", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.fillAssessmentQuestions();
  });

  it("Delete Assessment Negative", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.deleteAssessmentNegative("Test Assess");
  });
  it("Delete Assessment Positive", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.deleteAssessmentPositive();
  });
  it("Delete Entity Negative", () => {
    Entities.deleteEntityNegative("Test Text");
  });
  it("Delete Entity Positive", () => {
    Entities.deleteEntityPositive();
  });

  // it.only("Delete Multiple Entities", () => {
  //   for (let i = 0; i < 3; i++) {
  //     Entities.deleteEntityPositive();
  //   }
  // });

  it("Logout", () => {
    Logout.logoutuser();
  });
});
