    //Get today's date
    const today = new Date();
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    //Format date in the format MM/DD/YYYY
    const formattedDate = `${month}/${day}/${year}`;
    //Format date in the format DD/MM/YYYY
    const modifiedDate = `${day}/${month}/${year}`
    //Generate a random number
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

class ActionItems {

  elements = {
    userMenu: () =>cy.get('#collasible-nav-dropdown'),
    actionItemDropdown:()=>cy.get('.action-item > .dropdown-toggle'),
    newActionItemBtn:()=>cy.contains('button','New Action Item'),
    status:()=>cy.get('#status'),
    titleField:()=>cy.get('#item'),
    descriptionField:()=>cy.get('.bg-light > .form-control'),
    dateField:()=>cy.xpath("//input[@placeholder='Enter Due Date']"),
    updatedAtFilter:()=>cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    completionDateFilter:()=>cy.get(':nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    assignedByFilter:()=>cy.get(':nth-child(5) > .rbt > div > .rbt-input-main'),
    assignedToFilter:()=>cy.get(':nth-child(6) > .rbt > div > .rbt-input-main'),
    filterByEntity:()=>cy.get(':nth-child(7) > .rbt > div > .rbt-input-main'),
    filterByAssessment:()=>cy.get(':nth-child(8) > .rbt > div > .rbt-input-main'),
    searchbyId:()=>cy.get(':nth-child(9) > .form-control'),
    searchByTitle:()=>cy.get(':nth-child(10) > .form-control'),
    assignedToField:()=>cy.get(':nth-child(5) > .rbt > .rbt-input-multi'),
    tagsField:()=>cy.xpath("//input[@placeholder='Select or create a tag ...']"),
    createActionItemBtn:()=>cy.contains('button','Create Action Item'),
    editActionItemBtn:()=>cy.get(':nth-child(1) >.text-end >.btn-outline-primary >.material-icons-outlined'),
    updateActionItemBtn:()=>cy.xpath("//button[normalize-space()='Update']"),
    backCancelBtn:()=>cy.get('.sticky-bottom > .me-1'),
    deleActionItemBtn:()=>cy.get(':nth-child(1) > .text-end > .btn-outline-danger > .material-icons'),
    resetFilterBtn:()=>cy.get('div > .me-2:nth-child(1)'),
    confirmDelActionItem:()=>cy.get('.btn-danger'),
    closeDelModalBtn:()=>cy.get('.btn-close'),
    actionItemTitle:()=>cy.get('h1'),
    exportActionItemBtn:()=>cy.contains('button','Export Action Items'),
    selectAssignee:()=> cy.get('#subscribers-typeahead-item-0 > .rbt-highlight-text'),
    selectTag:()=>cy.get('#tags-typeahead-item-0'),
    updateDatePicker:()=>cy.get('.action-item-datepicker'),
    historyBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'history')]"),
    commentsBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'comment')]"),
    editActionItemsfromViewAllPageBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'tune')]"),
    delActionItemsfromViewAllPageBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'delete_outline')]"),
    commentField:()=>cy.get('#comment'),
    postCommentBtn:()=>cy.get('form > .col-12 > .float-end'),
    updateCommentBtn:()=>cy.contains('button','Update'),
    editActionItemCommentBtn:()=>cy.get('.mb-3 > :nth-child(2) > .d-flex > div > .btn-outline-secondary > .material-icons-outlined'),
    delCommentBtn:()=>cy.get('.d-flex > div > .ms-2 > .material-icons'),
    statusFilter:()=>cy.get('#dropdown-done'),
    levelFilter:()=>cy.get('#dropdown-level'),
    chooseFileField:()=>cy.get('#file'),
    updatedDateFilter:()=>cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    assignedByFilter:()=>cy.get(':nth-child(5) > .rbt > div > .rbt-input-main'),
    notificationsToggleBtn:()=>cy.get('#actionItemEmailSwitch'),
    successMSG:()=>cy.get('.d-flex > :nth-child(2) > .mb-3')
  };

  clickActionItemDropDown() {
    this.elements.actionItemDropdown().click({force:true});
  }
  clickResetFiltersBtn(){
    this.elements.resetFilterBtn().click({force:true});
  }
  clickDeleteActionItemBtn(){
     this.elements.deleActionItemBtn().scrollIntoView().click({force:true}); 
  }

  clickConfirmDel(){
    this.elements.confirmDelActionItem().click({force:true});
  }

  clickCloseDelModal(){
    this.elements.closeDelModalBtn().click({force:true});
  }
  clickExportActionItems(){
    this.elements.exportActionItemBtn().click({force:true})
  }

  clickActionItemCommentsBtn(){
  this.elements.commentsBtn().click({force:true})
  }
  clickOnNotificationToggle(){
    this.elements.notificationsToggleBtn().click({force:true})
    }


createActionItem(title,desc,assignedTo,tag){
  this.elements.newActionItemBtn().scrollIntoView().click({force:true});
  this.elements.titleField().type(title +randomNum,{delay:0});
  this.elements.descriptionField().type(desc + randomNum,{delay:0});
  this.elements.dateField().clear().type(formattedDate);
  this.elements.assignedToField().type(assignedTo,{delay:0});
  this.elements.selectAssignee().click({force:true});
  this.elements.tagsField().type(tag);
  this.elements.selectTag().click({force: true});
  this.elements.createActionItemBtn().click({force: true});
  cy.contains(title + randomNum);

}

createAuditLevelActionItem(name,assignedTo,tag){
  cy.get('.mb-5 > :nth-child(1) > div > .float-end').click({force:true});
  this.elements.titleField().clear().type(name +randomNum,{delay:0})
  this.elements.descriptionField().type(name + randomNum)
  this.elements.dateField().clear().type(formattedDate,{delay:0})
  this.elements.assignedToField().type(assignedTo,{delay:0})
  this.elements.selectAssignee().click({force:true})
  this.elements.tagsField().type(tag,'{enter}')
  this.elements.selectTag().click({force: true})
  this.elements.createActionItemBtn().click({force: true})
  //cy.get(':nth-child(1) > .mb-0 > .material-icons-outlined').click({force:true})
  cy.contains(name + randomNum).scrollIntoView()
}
  
  updateActionItem(title,desc){
    this.elements.editActionItemBtn().scrollIntoView().click({force:true})
    this.elements.status().should('have.value',0)
    this.elements.titleField().clear().type(title + randomNum,{delay:0})
    this.elements.descriptionField().clear().type(desc + randomNum,{delay:0})
    // Create a Date object to get today's date
    const today = new Date();
    // Add 5 days to the current date
    today.setDate(today.getDate() + 5);
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const formatedDate = `${month}/${day}/${year}`
    this.elements.updateDatePicker().clear().type(formatedDate)
    // cy.get(':nth-child(2) > .mt-2').attachFile('CypressAuditReport.pdf', {
    //   action: 'drag-drop',
    // });
    this.elements.updateActionItemBtn().click({force:true})
    cy.contains(title + randomNum)
}
validateActionItemOverDueStatus(){
  cy.get('.d-flex:nth-child(1) .btn-outline-secondary > .material-icons').scrollIntoView().click({force: true});
    this.elements.editActionItemBtn().click({force:true})
    
    // Create a Date object to get today's date
    const today = new Date();
    // Add 5 days to the current date
    today.setDate(today.getDate() - 2);
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const formatedDate = `${month}/${day}/${year}`
    this.elements.updateDatePicker().clear().type(formatedDate)
    // cy.get(':nth-child(2) > .mt-2').attachFile('CypressAuditReport.pdf', {
    //   action: 'drag-drop',
    // });
    this.elements.updateActionItemBtn().click({force:true})
    cy.get('.bg-danger.bg-opacity-10.text-danger.badge.bg-primary').eq(1).should('contain','Overdue')

}


viewAllActionItems(){
  cy.location('pathname').should('eq','/action-items')
  this.elements.actionItemTitle().should('contain.text', 'Action Items');
}
filterActionItems(assigner,assignee,name){
  this.clickActionItemDropDown();
  this.clickViewAllActionItems();
  this.elements.statusFilter().should('be.visible').click({force:true})
  cy.contains('Assigned').click()
  this.elements.levelFilter().should('be.visible').click({force:true})
  cy.contains('All Level').click({force:true})
  this.elements.updatedDateFilter().should('be.visible').type(formattedDate+' - '+formattedDate) 
  this.elements.assignedByFilter().type(assigner,{delay:0})
  cy.get('#assigned-by-item-0').click({force:true})
  this.elements.assignedToFilter().type(assignee,{delay:0})
  cy.get('#assigned-to-item-0').click({force:true})
  this.elements.filterByEntity().click({force:true})
  cy.get('#entity-item-0').click({force:true})
  this.elements.filterByAssessment().click({force:true})
  cy.get('#audit-item-0').click({force:true})
  cy.contains(modifiedDate+',')
  cy.contains(name)
}
resetfFilterActionItem(){
  this.clickResetFiltersBtn()




}
viewActionItemHistory(){
  this.elements.historyBtn().scrollIntoView().click({force:true})
  cy.contains('Action Item History')
  cy.contains('Current Status')
  cy.contains('Previous Status')
  cy.contains('Time Stamp')

}
addComment(desc){
  this.clickActionItemCommentsBtn()
  this.elements.commentField().type(desc,{delay:0})
  this.elements.postCommentBtn().click({force:true})
  cy.contains(desc)
}

viewComments(){
  this.clickActionItemCommentsBtn()
  cy.contains('Action Item Comments')
}

editComment(desc){
  this.elements.commentsBtn().click({force:true})
  this.elements.editActionItemCommentBtn().click({force:true})
  this.elements.commentField().clear().type(desc,{delay:0})
  this.elements.updateCommentBtn().click({force:true})
  cy.contains(desc)
}

deleteComment(){
  this.elements.commentsBtn().click({force:true})
  this.elements.delCommentBtn().click({force:true})
  cy.contains('No action item Comments')
}
uploadEvidenceFilesToActionItem(){
  this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
  this.elements.editActionItemBtn().click({force:true})
  cy.contains('button','Upload').scrollIntoView().click()
  //rename uploaded file name
  const filename = 'fileName'+ randomNum + '.pdf'
  this.elements.chooseFileField().attachFile({filePath:'File.pdf',fileName:filename}, {action: 'drag-drop'})
  cy.xpath("//button[normalize-space()='Upload evidence file']").click({force:true})
  cy.wait(2500)
  cy.contains(filename)
}
DeleteEvidenceFile(){
  this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
  this.elements.editActionItemBtn().click({force:true})
  cy.contains('Evidence files').scrollIntoView()
  cy.get(':nth-child(9) > .flex-fill > .mt-1 > .text-trancate').invoke('text').then((filename)=>{
    cy.get(':nth-child(9) > :nth-child(3) > .border > .material-icons').click({force:true})
    cy.get('.modal-footer > .btn-primary').click({force:true})
    cy.wait(200)
    cy.contains(filename).should('not.exist')
  })
}

exportActionItems(){
   this.clickExportActionItems()
   cy.verifyDownload('Cypress Test Org - Action Items.xlsx')
}

deleteActionItem(notification){
  this.clickDeleteActionItemBtn()
  this.clickConfirmDel()
  cy.contains(notification)
}
deleteActionItemFromViewAllPage(notification){
  this.elements.delActionItemsfromViewAllPageBtn().click({force:true})
  this.clickConfirmDel()
    cy.contains(notification)
}
turnOnNotifications(message){
  this.elements.notificationsToggleBtn().should('not.be.checked').then((notChecked)=>{
  if( notChecked == true){
    this.clickOnNotificationToggle();
    this.elements.successMSG().contains(message)
    this.elements.notificationsToggleBtn().should('be.checked')
  }else
  {
    this.clickOnNotificationToggle();
    this.elements.notificationsToggleBtn().should('not.be.checked')
    this.clickOnNotificationToggle();
    this.elements.successMSG().contains(message)
    this.elements.notificationsToggleBtn().should('be.checked')
  }
  })
  
}
turnOffNotifications(){
  this.clickOnNotificationToggle();
  this.elements.successMSG().contains('Your notification preference has been updated')
  this.elements.notificationsToggleBtn().should('not.be.checked')

}
viewMyActionItems(assignedTo){
  this.elements.userMenu().click()
  cy.contains('My Action Items').cliick({force:true})
  this.elements.assignedToFilter().should('have.value',assignedTo)
 }
} 
export default new ActionItems()





  
  
  
  
  
  
 

