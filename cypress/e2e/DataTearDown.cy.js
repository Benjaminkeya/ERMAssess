import PreActions from '../Pages/PreActions';
import Assessments from '../Pages/Assessments';
import Entities from '../Pages/Entities';
import ActionItems from '../Pages/ActionItems'
import Portfolios from '../Pages/Portfolios';
const account = require('../fixtures/erm.json');

describe('Data Tear down',()=>{
  beforeEach(() => {
    PreActions.preActions();
  });
    it.only('Delete Multiple Entities', () => {
          cy.get('tbody tr').should('exist').then((result)=>{
            cy.log(Array.isArray([...result]))
            if(result.length > 0 ){

            cy.get('tbody tr').its('length').then((rowCount) => {
              //cy.log(typeof rowCount) 
            for (let i = 1; i < rowCount; i++) {
              // Delete Entity row
              cy.log(i)
              Entities.deleteEntityPositive();
      
            }
          })
        }
          });
        })
        
      it('Delete Multiple Assessments', () => {
          cy.clickTableLink(1,1);
          cy.get('tbody tr').should('exist').then((result)=>{
            cy.log(Array.isArray([...result]))
            if(result == true){
              cy.get('table tr').its('length').then((rowCount) => {
                for (let i = 1; i < rowCount; i++) {
                  // Delete Assessmentys row
                  // cy.log(rowCount)
                  Assessments.deleteAssessmentPositive(account.Name);
                }
              });
            }
          })
          
        });

        it('Delete Multiple ActionItems', () => {
        
        cy.xpath("//tbody[@class='table-group-divider']/tr/td/div/button/span[contains(text(),'delete_outline')]").should('exist').then((result)=>{
          cy.log(Array.isArray([...result]))
          if(result== true){
            cy.get('.form-select').scrollIntoView().select("100")
            cy.xpath("//tbody[@class='table-group-divider']/tr/td/div/button/span[contains(text(),'delete_outline')]").its('length').then((rowCount) => {
              for (let i = 1; i < rowCount; i++) {
                //cy.log(rowCount)
                // Delete ActionItem row
                ActionItems.deleteActionItemFromViewAllPage('The action Item has been deleted successfully');
        
              }
            });

          }
        })
      });

      it('Delete Multiple Portfolios', () => {
        cy.xpath("//div[@class='nav nav-pills']//a").should('exist').then((result)=>{
            cy.log(result)
            if(result == true){
              cy.xpath("//div[@class='nav nav-pills']//a").then((rowCount) => {
                for (let i = 1; i < rowCount; i++) {
                  // Delete Portfolio row
                  cy.log(rowCount)
                  Portfolios.deletePortfolio();;
                }
              });
            }
        })
      }); 
      it('DeleteAllBulkUploadedFiles',()=>{
    cy.clickTableLink(1,1);
    cy.clickTableLink(1,1);
    this.elements.filesPhotosBtn().scrollIntoView().click();
    cy.get('.d-flex > .text-wrap').should('exist').then(()=>{
      cy.get('.d-flex > .text-wrap').its('length').then((rowCount) => {
            for (let i = 0; i < rowCount; i++) {
        
      
              Assessments.deleteBulkUploadedFile()

              cy.log(i)
      
            }
          })
  });   
 })
})


  

