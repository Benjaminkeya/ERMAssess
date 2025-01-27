class ActivityLog{
   // Page Element selectors
    elements = {
        userMenu: () => cy.get('#collasible-nav-dropdown'),
        activityLogLink:()=>cy.contains('Activity Log'),
        clearFilters:()=>cy.get('.mt-lg-4'),
        seachQsnField:()=>cy.get('.col-xl-3 > .min-input-width > .form-control'),
        audiIdfilterField:()=>cy.get('.col-xl-3 > .min-input-width > .form-control'),
        searchMemberField:()=>cy.get('.rbt-input-main'),
        dateRangeFild:()=>cy.get('.rbt-input-main'),
        filterByPropertiesBtn:()=>cy.get('.form-select'),
        reviewBtn:()=>cy.contains('button','Review'),
        reviewModalTitle:()=>cy.get(':nth-child(1) > .text-end > .btn'),
        viewAssessmentBtn:()=>cy.get('.d-inline-block > .px-3')
    }
    
    //Actions on the page elements
    clickUserMenu(){
       this.elements.userMenu().click();
    }

    clickActivityLogLink(){
        this.elements.activityLogLink().click();
    }

    clickReviewBtn(){
        this.elements.reviewBtn().first().scrollIntoView().click({force:true})
    }
    clickViewAssessmentBtn(){
        this.elements.viewAssessmentBtn().click({force:true})
    }
        
    ValidateActivityLogPage() {
       
        cy.contains('Activity Log')
    }
    filterActivityLog(){
        
    }

    //Class Function Objects
    reviewActivityLogPage(){
        this.clickReviewBtn()
        cy.contains('Review')
    }
    viewActivityLogAssessment(){
        this.clickReviewBtn();
       // this.elements.viewAssessmentBtn().should('exist')
       // cy.get('.modal-title').should('be.visible')
    //     .invoke('text').then((assessName)=>{
    //         this.clickViewAssessmentBtn()
    //             cy.window().then((win) => {
    //                 cy.stub(win, 'open').as('windowOpen');
    //                 cy.get('@windowOpen').should('be.calledWithMatch', url => {
    //                 // Match the URL with a wildcard or pattern
    //                 return url.includes('https://www.ermassess.com/audits/*'); 
    //                 }).as('newTabUrl');
    //                 cy.get('@newTabUrl').then((newTabUrl) => {
    //                 cy.visit(newTabUrl);
    //                 cy.contains(assessName)
    //                 cy.contains('Assessment Report')
    //                 });             
    //         });  
    //    }) 
    }   
}
export default new ActivityLog