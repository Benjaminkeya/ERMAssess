import PreActions from "../Pages/PreActions";
import Entities from "../Pages/Entities";
const account = require("../fixtures/erm.json");

describe("Entities test suite", () => {
  beforeEach(() => {
    PreActions.preActions(account.email, account.password);
  });
  it("Create New Entity Negative", () => {
    Entities.clickNewEntitybtn({ timeout: 15000 });

    Entities.setEntityName(" ");
    Entities.setEntityAddress(" ");
    Entities.selectJuris();
    cy.get("form > .d-flex > :nth-child(2) > .btn-primary").should(
      "be.disabled"
    );
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

  it("Search Entity Positive", () => {
    Entities.searchEntityPositive("EntityName");
  });
  it("Search Entity Negative", () => {
    Entities.searchEntityNegative("EntityNavhvhvh");
  });
  it("Filter Entity by Jurisdiction", () => {
    Entities.filterEntityByJurisdiction("Benjamin", "Benjamin test Juris");
  });
  it.only("Filter Entity by Date Range", () => {
    Entities.filterEntityByDateRange("09/01/2023 - 10/31/2023");
  });

  it("Update Entity", () => {
    Entities.updateEntity(account.Name, account.Name);
  });
  it("Delete Entity Negative", () => {
    Entities.deleteEntityNegative("Test Text");
  });
  it("Delete Entity Positive", () => {
    Entities.deleteEntityPositive();
  });

  // it.only("Delete Multiple Entities", () => {
  //   for (let i = 0; i < 6; i++) {
  //     Entities.deleteEntityPositive();
  //   }
  //});
});
