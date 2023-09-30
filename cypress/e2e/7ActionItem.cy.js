import PreActions from "../Pages/PreActions";
import Dashboard from "../Pages/Dashboard";
import ActionItems from "../Pages/ActionItems";
const account = require("../fixtures/erm.json");

describe("Action Items", () => {
  beforeEach(() => {
    PreActions.preActions(account.email, account.password);
  });
  it("Add new action item with unique name", () => {
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

    ActionItems.createActionItem();
    ActionItems.title("Action" + randomNum);
    // cy.frameLoaded(".aut-iframe")

    // cy.iframe().find("#dueDate").click()

    // newActionItemPopup.dueDatePicker()

    // Example of waiting for an element to be present before interacting with it
    cy.get("#dueDate").should("exist").click();

    // cy.document().then($document => {
    //   $document.getElementById('dueDate').addEventListener('click', (ev) => {

    //     ev.preventDefault();
    //     console.log("Select the date picker")

    //     if ("showPicker" in HTMLInputElement.prototype) {
    //       console.log("Date picker selected")

    //       try {

    //       }
    //       catch (err) {

    //         switch (err.type) {
    //           case 'InvalidStateError':

    //           case 'NotAllowedError':

    //           case 'SecurityError':

    //             console.log({ err });
    //             break;
    //         }
    //       }

    //     }
    //     else {
    //       console.log("Date picker not selected")
    //     }

    //   })
    // })
  });

  it("View all action item added", () => {
    ActionItems.actionItemDropDown();
    cy.contains("View All").click();

    cy.get("h1").should("contain.text", "Action Items");
  });
});

// it.skip("Action Items", () => {
//   cy.get("#w-fixed-640 offcanvas offcanvas-end show").click();
//   cy.get(".d-flex:nth-child(1) .btn-outline-primary").click({ force: true });
//   //cy.get("#item").type("test");
//   //cy.get(".form-control > p").click();
//   //cy.get("#dueDate").trigger("mouseover").click();
//   // cy.xpath("//input[@id='dueDate']").click();
//   // cy.contains("Today").click({ force: true });
//   // cy.get(".focus .rbt-input-main").click();
//   // cy.get(".rbt-input-wrapper > div:nth-child(1) > .rbt-input-main").click();
//   // cy.get(".btn-primary:nth-child(2)").click();
//   // cy.get(".overflow-auto > form").submit();
//   cy.frameLoaded(".aut-iframe");
//   cy.iframe().find("#dueDate").click();
// });
