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
//Page element Selectors
  elements = {
    userMenu: () =>cy.get('#collasible-nav-dropdown'),
    actionItemDropdown:()=>cy.get("a[class='px-2 mt-1 me-1 nav-link'] span"),
    newActionItemBtn:()=>cy.contains('button','New Action Item'),
    status:()=>cy.get('#status'),
    titleField:()=>cy.get('#item'),
    descriptionField:()=>cy.get('.bg-light > .form-control'),
    dateField:()=>cy.xpath("//input[@placeholder='Enter Due Date']"),
    updatedAtFilter:()=>cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    completionDateFilter:()=>cy.get(':nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    assignedByFilter:()=>cy.get(':nth-child(6) > .rbt > div > .rbt-input-main'),
    assignedToFilter:()=>cy.get(':nth-child(7) > .rbt > div > .rbt-input-main'),
    filterByEntity:()=>cy.get(':nth-child(8) > .rbt > div > .rbt-input-main'),
    filterByAssessment:()=>cy.get(':nth-child(9) > .rbt > div > .rbt-input-main'),
    searchbyId:()=>cy.get(':nth-child(10) > .form-control'),
    searchByTitle:()=>cy.get(':nth-child(10) > .form-control'),
    assignedToField:()=>cy.get(':nth-child(5) > .rbt > .rbt-input-multi'),
    tagsField:()=>cy.xpath("//input[@placeholder='Select or create a tag ...']"),
    createActionItemBtn:()=>cy.contains('button','Create Action Item'),
    editActionItemBtn:()=>cy.xpath("//span[@class='material-icons-outlined md-16'][normalize-space()='edit']"),
    updateActionItemBtn:()=>cy.xpath("//button[normalize-space()='Update']"),
    backCancelBtn:()=>cy.get('.sticky-bottom > .me-1'),
    deleActionItemBtn:()=>cy.get(':nth-child(1) > .text-end > .btn-outline-danger > .material-icons'),
    resetFilterBtn:()=>cy.get('div > .me-2:nth-child(1)'),
    confirmDelActionItem:()=>cy.get('.btn-danger'),
    closeDelModalBtn:()=>cy.get('.btn-close'),
    actionItemTitle:()=>cy.get('h1'),
    exportActionItemDropdown:()=>cy.contains('Export'),
    exportActionItemExcel:()=>cy.get(':nth-child(4) > .me-2'),
    exportActionItemWord:()=>cy.get(':nth-child(3) > .me-2'),
    exportActionItemPDF:()=>cy.get(':nth-child(2)'),
    selectAssignee:()=> cy.get('#subscribers-typeahead-item-0 > .rbt-highlight-text'),
    selectTag:()=>cy.get('#tags-typeahead-item-0'),
    updateDatePicker:()=>cy.get('.action-item-datepicker'),
    historyBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'history')]"),
    commentsBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'comment')]"),
    editActionItemsfromViewAllPageBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'edit')]"),
    delActionItemsfromViewAllPageBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'delete_outline')]"),
    commentField:()=>cy.get('#comment'),
    postCommentBtn:()=>cy.get('form > .col-12 > .float-end'),
    updateCommentBtn:()=>cy.contains('button','Update'),
    editActionItemCommentBtn:()=>cy.get('.mb-3 > :nth-child(2) > .d-flex > div > .btn-outline-secondary > .material-icons-outlined'),
    delCommentBtn:()=>cy.get('.d-flex > div > .ms-2 > .material-icons'),
    statusFilter:()=>cy.get('#dropdown-done'),
    levelFilter:()=>cy.get('#dropdown-level'),
    chooseFileField:()=>cy.get('#file'),
    updatedDateFilter:()=>cy.get(':nth-child(4) >.react-datepicker-wrapper >.react-datepicker__input-container >.form-control'),
    assignedByFilter:()=>cy.get(':nth-child(6) > .rbt > div > .rbt-input-main'),
    notificationsToggleBtn:()=>cy.get('#actionItemEmailSwitch'),
    successMSG:()=>cy.get('.d-flex > :nth-child(2) > .mb-3')
  };

  //Page Element Actions

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
  clickExportActionItemsDropDown(){
    this.elements.exportActionItemDropdown().click({force:true})
  }

  clickActionItemCommentsBtn(){
  this.elements.commentsBtn().click({force:true})
  }
  clickOnNotificationToggle(){
    this.elements.notificationsToggleBtn().click({force:true})
    }

//Class  Function Objects

openActionItemsPage(){
  // this.clickActionItemDropDown()
  cy.contains('Action Items')
  cy.url().should('contain','/action-items')
}

createActionItem(title,desc,assignedTo,tag){
  this.elements.newActionItemBtn().scrollIntoView().click({force:true});
  this.elements.titleField().type(title +randomNum,{delay:0});
  this.elements.descriptionField().type(desc + randomNum,{delay:0});
  this.elements.dateField().clear().type(formattedDate,{delay:0});
  this.elements.assignedToField().type(assignedTo,{delay:0});
  this.elements.selectAssignee().click({force:true});
  this.elements.tagsField().type(tag);
  this.elements.selectTag().click({force: true});
  this.elements.createActionItemBtn().click({force: true});
  cy.contains(title + randomNum);
}

createAuditLevelActionItem(name,assignedTo,tag){
  cy.intercept('GET','**/*').as('loaded')  
    //debaseUrl + '/audits/     https://de.ermassess.com/api/v1/audits/65701cd201bd8
    cy.wait('@loaded')
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
    this.elements.editActionItemBtn().first().scrollIntoView().click({force:true})
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
    this.elements.updateDatePicker().clear().type(formatedDate,{delay:0})
    // cy.get(':nth-child(2) > .mt-2').attachFile('CypressAuditReport.pdf', {
    //   action: 'drag-drop',
    // });
    this.elements.updateActionItemBtn().click({force:true})
    cy.contains(title + randomNum)
}


filterActionItems(assigner,assignee,name){
  //this.clickActionItemDropDown();
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
  //this.elements.editActionItemBtn().click({force:true})
  cy.contains('button','Upload').scrollIntoView().click()
  //rename uploaded file name
  const filename = 'fileName'+ randomNum + '.pdf'
  this.elements.chooseFileField().attachFile({filePath:'File.pdf',fileName:filename}, {action: 'drag-drop'})
  cy.xpath("//button[normalize-space()='Upload evidence file']").click({force:true})
  cy.wait(2800)
  cy.contains(filename)
  this.elements.updateActionItemBtn().click({force:true})
}

DeleteEvidenceFile(){
  this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
  //this.elements.editActionItemBtn().click({force:true})
  cy.contains('Evidence files').scrollIntoView()
  cy.get('.text-trancate').invoke('text').then((filename)=>{
    cy.get(':nth-child(10) > :nth-child(3) > .border > .material-icons').first().click({force:true})
    cy.contains('button','Delete').click({force:true})
    cy.wait(200)
    cy.contains(filename).should('not.exist')
  })
  }

  exportActionItemsExcel(OrgName){
    this.clickExportActionItemsDropDown()
    this.elements.exportActionItemDropdown().click()
    cy.wait(2000)
    cy.intercept('GET','**/*').as('export')
    this.elements.exportActionItemExcel().click({force:true})
    cy.wait('@export')
    cy.verifyDownload(OrgName + ' - Action Items.xlsx') 
  }

  exportActionItemsPDF(){
    this.clickExportActionItemsDropDown()
    this.elements.exportActionItemPDF().click({force:true})
    cy.verifyDownload('PixelEdge Test Automation - Action Items.pdf')
  }

  exportActionItemsWord(){
    this.clickExportActionItemsDropDown()
    this.elements.exportActionItemWord().click({force:true})
    cy.verifyDownload('PixelEdge Test Automation - Action Items.docx')
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

  validateActionItemOverDueStatus(){
    this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
    // Create a Date object to get today's date
    const today = new Date();
    // Add 5 days to the current date
    today.setDate(today.getDate() - 2);
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const formatedDate = `${month}/${day}/${year}`
    cy.get('.action-item-datepicker').clear().type(formatedDate)
    this.elements.updateActionItemBtn().click({force:true})
    cy.get('.bg-danger').should('contain','Overdue')

  }

  turnOffNotifications(message){
    this.clickOnNotificationToggle();
    this.elements.successMSG().contains(message)
    cy.wait(1000)
    this.elements.notificationsToggleBtn().should('not.be.checked')
  }

  turnOnNotifications(message){
    
      this.clickOnNotificationToggle();
      this.elements.successMSG().contains(message)
      this.elements.notificationsToggleBtn().should('be.checked') 
  }

  viewMyActionItems(assignedTo){
    this.elements.userMenu().click({force:true})
    cy.contains('My Action Items').click({force:true})
    this.elements.assignedToFilter().should('have.value',assignedTo)
  }
} 
export default new ActionItems()





  
  
  
  
  
  
 

