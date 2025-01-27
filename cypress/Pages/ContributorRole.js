import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard"
import ManageAccount from "./ManageAccount";
import ActivityLog from "./ActivityLog";
import Assessments from "./Assessments";
import DataExport from "./DataExport";


class contributor{

    elements = {
        firstEssessmentLink:()=>cy.get("tbody tr:nth-child(1) td:nth-child(1) h6:nth-child(1) a:nth-child(1)"),
        profileLink:()=>cy.xpath("//a[normalize-space()='Profile']")
    }

    //Actions
    openAssessment(){
        cy.intercept('GET','**/*').as('assessLoaded')
        this.elements.firstEssessmentLink().click({force:true})
        cy.wait('@assessLoaded')
        
    }
  //Function objects
verifyDashboardUrl(){
    cy.url().should('eq','https://www.ermassess.com/audits')
    LoginPage.navigate()
    cy.url().should('eq','https://www.ermassess.com/audits')
}
VerifyUserView(){
    Dashboard.clickUserMenu();
    ManageAccount.elements.manageUserLink().should('not.exist')
    ActivityLog.elements.activityLogLink().should('not.exist')  
    this.elements.profileLink().should('not.exist')  
    DataExport.elements.dataExportLink().should('not.exist')
    Dashboard.elements.whatsNewLink().should('exist')  
    Dashboard.elements.feedbackBtn().should('exist')    
}
VerifyAssessmentPage(desc){
    this.openAssessment()
    cy.url().should('include','/files')
   
}
uploadBulkFiles(desc){
    Assessments.assessmentBulkFileUpload(desc)

}



}

export default new contributor