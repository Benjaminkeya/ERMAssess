import Loginpage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import ActionItems from "../Pages/ActionItems";
import Portfolio from "../Pages/Portfolios";
import slowCypressDown from "cypress-slow-down";
const account = require("../fixtures/erm.json");

slowCypressDown();

import "cypress-iframe";

describe("Organization Test Suite", () => {
  beforeEach(() => {
    cy.login(account.email, account.password);
  });
  it("Add portfolio with a unique name", () => {
    Portfolio.addPortfolio("Portfolio");
  });

  it("Manage a portfolio", () => {
    Portfolio.managePortfolio("abcd");
  });

  it("Delete a portfolio", () => {
    Portfolio.deletePortfolio();
  });
});
