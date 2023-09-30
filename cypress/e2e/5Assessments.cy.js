import Assessments from "../Pages/Assessments";
import PreActions from "../Pages/PreActions";
const account = require("../fixtures/erm.json");

describe.only("Dashboard", () => {
  beforeEach(() => {
    PreActions.preActions(account.email, account.password);
  });

  it("Create Assessment Positive", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.createAssessment(account.Name, account.Description);
  });

  it("Update Assessment", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.updateAssessment(account.Name, account.Description);
  });
  it.skip("Search Assessment Negative", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.searchAssessment("ytftyfygh");
  });
  it.skip("Search Assessment Positive", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.searchAssessment("Cypress Test");
  });

  it.skip("Filter Assessment Positive", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.filterAssessmemtPositive("test");
  });
  it.skip("Filter Assessment Negative", () => {
    Entities.elements.selectFirstEntity().click();
    Assessments.filterAssessmemtNegative("test");
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
});
