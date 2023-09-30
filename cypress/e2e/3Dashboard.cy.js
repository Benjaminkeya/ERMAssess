import Loginpage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import slowCypressDown from "cypress-slow-down";

slowCypressDown();

import "cypress-iframe";

describe("Dashboard Test Suite", () => {
  it("Adding a feedback", () => {
    Dashboard.addFeedback("Test feedback");
  });
  it("Help center", () => {
    Dashboard.helpCenter();
  });
});
