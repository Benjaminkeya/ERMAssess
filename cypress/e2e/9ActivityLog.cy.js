import Dashboard from "../Pages/Dashboard";
import PreActions from "../Pages/PreActions";

it.only("User management - Activity Log validation", () => {
  Dashboard.activityLog();
  cy.get(".pt-4").should("contain", "Activity Log");
});
