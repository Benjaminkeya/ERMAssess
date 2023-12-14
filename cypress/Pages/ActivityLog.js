class ActivityLog{
    elements = {
        userMenu: () => cy.get('#collasible-nav-dropdown'),
        activityLogLink:()=>cy.contains('Activity Log'),
        clearFilters:()=>cy.get('.mt-lg-4'),
        seachQsnField:()=>cy.get('.col-xl-3 > .min-input-width > .form-control'),
        audiIdfilterField:()=>cy.get('.col-xl-3 > .min-input-width > .form-control'),
        searchMemberField:()=>cy.get('.rbt-input-main'),
        dateRangeFild:()=>cy.get('.rbt-input-main'),
        filterByPropertiesBtn:()=>cy.get('.form-select'),
        reviewBtn:()=>cy.get(':nth-child(1) > .text-end > .btn'),
        reviewModalTitle:()=>cy.get(':nth-child(1) > .text-end > .btn'),
        viewAssessmentBtn:()=>cy.get('.modal-footer > .px-3')
    }
    
    clickUserMenu(){
       this.elements.userMenu().click();
    }

    clickActivityLogLink(){
        this.elements.activityLogLink().click();
    }

    clickReviewBtn(){
        this.elements.reviewBtn().scrollIntoView().click({force:true})
    }
    clickViewAssessmentBtn(){
        this.elements.viewAssessmentBtn().click({force:true})
    }
        
    ValidateActivityLogPage() {
       
        cy.contains('Activity Log')
    }
    filterActivityLog(){
        
    }
    reviewActivityLog(){
        
        this.clickReviewBtn()
        cy.contains('Review Observation')
    }
    viewActivityLogAssessment(){
        this.clickReviewBtn();
        this.elements.viewAssessmentBtn().should('exist')
        cy.get('.text-muted > small').should('be.visible')
        //.invoke('text').then((assessName)=>{
            // this.clickViewAssessmentBtn()
            //     cy.window().then((win) => {
            //         cy.stub(win, 'open').as('windowOpen');
            //         cy.get('@windowOpen').should('be.calledWithMatch', url => {
            //         // Match the URL with a wildcard or pattern
            //         return url.includes('https://www.ermassess.com/audits/*'); 
            //         }).as('newTabUrl');
            //         cy.get('@newTabUrl').then((newTabUrl) => {
            //         cy.visit(newTabUrl);
            //         cy.contains(assessName)
            //         cy.contains('Assessment Report')
            //         });             
            // });  
       // }) 
    }   
}
export default new ActivityLog