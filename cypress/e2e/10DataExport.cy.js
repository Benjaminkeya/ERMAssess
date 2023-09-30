import DataExport from "../Pages/DataExport";
import PreActions from "../Pages/PreActions";

describe("Data Export test", () => {
  PreActions.preActions();
  DataExport.dateExport();
});
