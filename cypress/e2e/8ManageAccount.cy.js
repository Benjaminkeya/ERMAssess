import PreActions from "../Pages/PreActions";
import Dashboard from "../Pages/Dashboard";
import ManageAccount from "../Pages/ManageAccount";
const account = require("../fixtures/erm.json");
import slowCypressDown from "cypress-slow-down";

slowCypressDown();

import "cypress-iframe";

describe("User Management Test Suite", () => {
  beforeEach(() => {
    PreActions.preActions(account.email, account.password);
    Dashboard.userProfileDropDown();
    ManageAccount.manageAccount();
  });
  it("Navigate to user management and validate the page", () => {
    ManageAccount.validateManageUserPage();
  });

  it("User management - Add member with a unique name", () => {
    ManageAccount.addUniqueMember("test", "Certifier");
  });

  it("User management - Delete the last added member", () => {
    ManageAccount.deleteLastMember();
  });

  it("User management - Update the last added member and give all entity access", () => {
    ManageAccount.editLastMemberWithAllEntityAccess("Updated Successfully");
  });

  it("User management - Update the last added member and give all portfolio access", () => {
    ManageAccount.editLastMemberWithAllPortfolioAccess("Updated Successfully");
  });

  it("User management - Resend join request", () => {
    ManageAccount.resendJoinRequestToLastMember(
      "Invitation was successfully sent"
    );
  });

  it("User management - Validate the status after adding a new member", () => {
    ManageAccount.lastAddedmemberJoinStatus(
      "test",
      "Admin",
      "Pending Invitation"
    );
  });
});
