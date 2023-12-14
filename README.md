Install cypress: 
Run "npm install cypress --save-dev"


Install: ## all dependencies
Run "npm i" to instal all cypress dependency packages
Run tests: ## Runs all e2e tests
run "npx cypress run -P  hsi/test" to run all tests in the spec files


 "chromes": "npx cypress run --headless --browser chrome",
    "edge": "npx cypress run --headless --browser edge",
    "allBrowsers":"npm run chrome || npm run edge",
    "cy:run": "npx cypress run --browser chrome --env allure=true",
    "clean:reports": "rm -R -f allure-report/* && rm -R -f allure-results/*",
    "before:test": "npm run clean:reports",
    "tests": "npm run cy:run || npm run after:test",
    "after:test": "npm run allure:report",
    "allure:report": "allure generate allure-results --clean -o allure-report && allure open allure-report",
    "allure:generate": "allure generate allure-results"





   config.specPattern = [

        'cypress/e2e/Login.cy.js',
        'cypress/e2e/Organization.cy.js',
        'cypress/e2e/Dashboard.cy.js',
        'cypress/e2e/Entities.cy.js',
        'cypress/e2e/Portfolio.cy.js',
        'cypress/e2e/Assessments.cy.js',
        'cypress/e2e/AuditQuestions.cy.js',
        'cypress/e2e/ActionItems.cy.js',
        'cypress/e2e/Notifications.cy.js',
        'cypress/e2e/DataExport.cy.js',
        'cypress/e2e/ActivityLog.cy.js',
        'cypress/e2e/ManageAccount.cy.js',
        'cypress/e2e/Logout.cy.js',
        
       

      ]

//select random option from a dropdown
it('Selects a random option from the dropdown', () => {
  // Assuming you have a select element with the id "dropdown"
  cy.get('#dropdown').then(($dropdown) => {
    // Get the number of options
    const optionsCount = $dropdown.find('option').length;

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * optionsCount);

    // Select the option at the random index
    cy.get('#dropdown').select(randomIndex);
  });
});


        
      


        









