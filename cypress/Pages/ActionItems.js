    //Get today's date
    const today = new Date();
    // Format the date as MM/DD/YYYY
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    //Format date in the format MM/DD/YYYY
    const formattedDate = `${month}/${day}/${year}`;
    //Format date in the format DD/MM/YYYY
    //const modifiedDate = `${day}/${month}/${year}`
    //Generate a random number
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

class ActionItems {
//Page element Selectors
  elements = {
    userMenu: () =>cy.get('#collasible-nav-dropdown'),
    profileLink:()=>cy.contains('a','Profile'),
    actionItemsLink:()=>cy.get(':nth-child(5) > .px-2'), 
    newActionItemBtn:()=>cy.contains('button','New Action Item'),
    status:()=>cy.get('#status'),
    titleField:()=>cy.get('#item'),
    entityField:()=>cy.get('.rbt > div > .rbt-input-main'),
    firstEntity:()=>cy.get('#entity-item-0'),
    descriptionField:()=>cy.get('.bg-light > .form-control'),
    dateField:()=>cy.xpath("//input[@placeholder='Enter Due Date']"),
    updatedAtFilter:()=>cy.get(':nth-child(3) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    completionDateFilter:()=>cy.get(':nth-child(4) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    assignedByFilter:()=>cy.get(':nth-child(6) > .rbt > div > .rbt-input-main'),
    assignedToFilter:()=>cy.get(':nth-child(3) > .rbt > .typeahead-input > .form-control'),
    filterByEntity:()=>cy.get(':nth-child(1) > .rbt > .typeahead-input > .form-control'),
    filterByAssessment:()=>cy.get('.border > :nth-child(2) > .rbt > .typeahead-input > .form-control'),
    searchbyId:()=>cy.get('.text-truncate > .mt-2'),
    searchByTitle:()=>cy.get(':nth-child(10) > .form-control'),
    assignedToField:()=>cy.get(':nth-child(6) > .rbt > .rbt-input-multi'),
    tagsField:()=>cy.get(':nth-child(6) > .rbt > .rbt-input-multi'),
    createActionItemBtn:()=>cy.contains('button','Create Action Item'),
    editActionItemBtn:()=>cy.get(':nth-child(1) > .text-end > .ms-2'),
    updateActionItemBtn:()=>cy.xpath("//button[normalize-space()='Update']"),
    actionItemStatus:()=>cy.get('.bg-info.bg-opacity-10.text-info.badge.bg-primary'),
    backCancelBtn:()=>cy.get('.sticky-bottom > .me-1'),
    deleActionItemBtn:()=>cy.get('.border-0.btn.btn-outline-danger.btn-sm'),
    resetFilterBtn:()=>cy.get('div > .me-2:nth-child(1)'),
    confirmDelActionItem:()=>cy.get('.btn-danger'),
    closeDelModalBtn:()=>cy.get('.btn-close'),
    actionItemTitle:()=>cy.get('h1'),
    exportBtn:()=>cy.get('.me-2.dropdown > #protocol-filter'),
    exportActionItemBtn:()=>cy.contains('a','Export Excel'),
    selectAssignee:()=> cy.get('#subscribers-typeahead-item-0'),
    selectTag:()=>cy.get('#tags-typeahead-item-0'),
    updateDatePicker:()=>cy.xpath("//input[@placeholder='Enter Due Date']"),
    historyBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'history')]"),
    myActionItemsLink:()=>cy.xpath("//button[@id='controlled-tab-example-tab-action-items']"),
    tableRows:()=>cy.xpath("//tbody[@class='table-group-divider']/tr"),
    commentsBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'comment')]"),
    editActionItemsfromViewAllPageBtn:()=>cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/div/button/span[contains(text(),'edit')]"),
    delActionItemsfromViewAllPageBtn:()=>cy.xpath("//button[@class='border-0 btn btn-outline-danger btn-sm']"),
    confirmDeleActionItemCheckBtn:()=>cy.get('.form-check-input'),
    filesTab:()=>cy.contains('button','Files'),
    firstActionItemListed:()=>cy.get('.text-trancate'),
    expandActionItemBtn:()=>cy.get('.table-group-divider > :nth-child(1) > :nth-child(1) > .material-icons'),
    editActionItemCommentBtn1:()=>cy.get(':nth-child(1) > .text-end > .d-flex > .btn-outline-primary'),
    commentsTab:()=>cy.contains('button','Comments'),
    commentField:()=>cy.get('#comment'),
    postCommentBtn:()=>cy.get("button[class='float-end btn btn-primary btn-sm']"),
    updateCommentBtn:()=>cy.get(':nth-child(2) > .text-end > .btn'),
    editActionItemCommentBtn2:()=>cy.get('.mb-3 > :nth-child(2) > .d-flex > div > .btn-outline-primary'),
    delCommentBtn:()=>cy.get(':nth-child(2) > .d-flex > div > .ms-2'),
    deleteEvidenceFileBtn1:()=>cy.xpath("//span[normalize-space()='delete']"),
    deleteEvidenceFileBtn2:()=>cy.get("button[class='btn btn-danger btn-sm']"),
    statusFilter:()=>cy.get('#dropdown-done'),
    levelFilter:()=>cy.get('#dropdown-level'),
    selectTagFilter:()=>cy.get('.rbt-input-wrapper > div > .rbt-input-main'),
    firstTagOnDropDown:()=>cy.get('#tags-item-0'),
    moreFiltersBtn:()=>cy.get(':nth-child(4) > .dropdown > #dropdown-done'),
    chooseFileField:()=>cy.get('#file'),
    actionItemsFilesTab:()=>cy.contains('button','Files'),
    uploadEvidenceBtn1:()=>cy.contains('button','Upload'),
    uploadEvidenceBtn2:()=>cy.xpath("//button[normalize-space()='Upload evidence file']"),
    updatedDateFilter:()=>cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    assignedByFilter:()=>cy.get('.mb-3.filters-wrapper > :nth-child(2) > .rbt > .typeahead-input > .form-control'),
    firstAssigner:()=>cy.get('#assigned-by-item-0'),
    firstAssignee:()=>cy.get('#assigned-to-item-0'),
    firstEntity:()=>cy.get('#entity-item-0'),
    firstAudit:()=>cy.get('#audit-item-0'),
    notificationsToggleBtn:()=>cy.get('#protocol-filter'),
    allSwitch:()=>cy.get('#actionItemAllSwitch'),
    assignedToYouAlert:()=>cy.get('#actionItemCreateAlerts'),
    statusUpdateAlert:()=>cy.get('#actionItemStatusAlerts'),
    commentAlerts:()=>cy.get('#actionItemCommentAlerts'),
    successMSG:()=>cy.get('.d-flex > :nth-child(2) > .mb-3')
  };

  //Page Element Actions

  clickActionItemDropDown() {
    this.elements.actionItemsLink().click({force:true});
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
  
  
  clickOnNotificationToggle(){
    this.elements.notificationsToggleBtn().click({force:true})
    }

//Class  Function Objects
openActionItemsPage(){
  // this.clickActionItemDropDown()
  cy.contains('Action Items')
  cy.url().should('contain','/action-items')
}

createActionItem(title,desc,assignedTo){
  this.elements.newActionItemBtn().scrollIntoView().click({force:true});
  this.elements.titleField().type(title +randomNum,{delay:0});
  this.elements.descriptionField().type(desc + randomNum,{delay:0});
  this.elements.dateField().clear().type(formattedDate,{delay:0});
  this.elements.assignedToField().type(assignedTo,{delay:0});
  this.elements.selectAssignee().should('be.visible').click({force:true});
  // this.elements.tagsField().type(tag);
  // cy.wait(1000)
  // this.elements.selectTag().click({force: true});
  this.elements.createActionItemBtn().click({force: true});
  cy.contains(title + randomNum);
}

createActionItemfromAllActionItemPage(title,desc,assignedTo){
  this.elements.newActionItemBtn().scrollIntoView().click({force:true});
  this.elements.titleField().type(title +randomNum,{delay:0});
  this.elements.entityField().click({force:true})
  this.elements.firstEntity().click({force:true})
  this.elements.descriptionField().type(desc + randomNum,{delay:0});
  this.elements.dateField().clear().type(formattedDate,{delay:0});
  this.elements.assignedToField().type(assignedTo,{delay:0});
  this.elements.selectAssignee().should('be.visible').click({force:true});
  // this.elements.tagsField().type(tag);
  // cy.wait(1000)
  // this.elements.selectTag().click({force: true});
  this.elements.createActionItemBtn().click({force: true});
  cy.contains(title + randomNum);
}

createAuditLevelActionItem(name,assignedTo){
  cy.get('.mb-5 > :nth-child(1) > div > .float-end').click({force:true});
  this.elements.titleField().clear().type(name +randomNum,{delay:0})
  this.elements.descriptionField().type(name + randomNum);
  this.elements.dateField().clear().type(formattedDate,{delay:0});
  cy.get(':nth-child(5) > .rbt > .rbt-input-multi').type(assignedTo,{delay:0});
  this.elements.selectAssignee().should('be.visible').click({force:true});
  // cy.get(':nth-child(7) > .rbt > .rbt-input-multi').type(tag,'{enter}');
  // this.elements.selectTag().click({force: true});
  this.elements.createActionItemBtn().click({force: true});
  cy.contains(name + randomNum).scrollIntoView();
}
  
updateActionItem(title,desc){
  this.elements.editActionItemBtn().first().scrollIntoView().click({force:true})
  this.elements.status().should('have.value',0)
  this.elements.titleField().clear().type(title + randomNum,{delay:0})
  this.elements.descriptionField().clear({force:true}).type(desc + randomNum,{delay:0})
  // Create a Date object to get today's date
  const today = new Date();
  // Add 5 days to the current date
  today.setDate(today.getDate() + 5);
  // Format the date as MM/DD/YYYY
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const year = today.getFullYear();
  const formatedDate = `${month}/${day}/${year}`
  this.elements.updateDatePicker().clear({force:true}).type(formatedDate,{delay:0})
  this.elements.updateActionItemBtn().click({force:true})
  cy.contains(title + randomNum)
}
//Delete Action Item from Organization,Entity & Audit level
deleteActionItem(){
  this.elements.editActionItemBtn().first().scrollIntoView().click({force:true})
  this.clickDeleteActionItemBtn()
  cy.get('.form-check-input').check()
  cy.intercept('DELETE','*/**').as('deleteAI')
  this.clickConfirmDel()
  cy.wait('@deleteAI')
  //cy.contains(notification)
}

filterActionItems(assigner,assignee,name){
  this.elements.assignedByFilter().type(assigner,{delay:0})
  this.elements.firstAssigner().click({force:true})
  this.elements.assignedToFilter().type(assignee,{delay:0})
  this.elements.firstAssignee().click({force:true})
  this.elements.filterByEntity().click({force:true})
  this.elements.firstEntity().click({force:true})
  this.elements.filterByAssessment().click({force:true})
  this.elements.firstAudit().click({force:true})
  this.elements.statusFilter().click({force:true})
  cy.contains('Assigned').click({force:true})
  this.elements.levelFilter().click({force:true})
  cy.contains('Question Level').click({force:true})
  // this.elements.selectTagFilter().click()
  // this.elements.firstTagOnDropDown().click()
  this.elements.moreFiltersBtn().click()
  this.elements.updatedDateFilter().type(formattedDate+' - '+formattedDate) 
  this.elements.updatedDateFilter().type('{esc}')
  // Function to format date and time without leading zeros
  function formatTodayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
    }

    const formattedExpectedValue = formatTodayDate();
  //format date without leading zeros
  // const month1 = (today.getMonth() + 1).toString();
  // const day1 = today.getDate().toString();
  // const slicedYear = String(today.getFullYear()).slice(2);
  // const formattedExpectedValue = `${month1}/${day1}/${slicedYear}`;

  cy.contains(formattedExpectedValue+',')
  cy.contains(name)
}

resetfFilterActionItem(){
  this.clickResetFiltersBtn()
  //implement more tests here....
}

viewActionItemHistory(){
  this.elements.historyBtn().scrollIntoView().click({force:true})
  cy.contains('Action Item History')
  cy.contains('Current Status')
  cy.contains('Previous Status')
  cy.contains('Time Stamp')
}

addComment(desc){
  this.elements.editActionItemCommentBtn1().first().click({force:true})
  this.elements.commentsTab().click()
  this.elements.commentField().type(desc,{delay:0})
  cy.intercept('POST','**/*').as('commentPosted')
  this.elements.postCommentBtn().should('be.enabled').click({force:true})
  cy.wait('@commentPosted')
  cy.contains(desc)
}

viewComments(){
  this.elements.editActionItemCommentBtn1().first().click({force:true})
  this.elements.commentsTab().click()
  cy.contains('Add Comment')
}

editComment(desc){
  this.elements.editActionItemCommentBtn1().first().click({force:true})
  this.elements.commentsTab().click()
  this.elements.editActionItemCommentBtn2().click({force:true})
  this.elements.commentField().clear().type(desc,{delay:0})
  this.elements.updateCommentBtn().click({force:true})
  cy.contains(desc)
}

deleteComment(){
  this.elements.editActionItemCommentBtn1().first().click({force:true})
  this.elements.commentsTab().click()
  this.elements.delCommentBtn().first().click({force:true})
  cy.contains('No Action Item Comments')
}

uploadEvidenceFilesToActionItem(){
  this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
  this.elements.actionItemsFilesTab().click({force:true})
  this.elements.uploadEvidenceBtn1().scrollIntoView().click({force:true})
  //rename uploaded file name
  const filename = 'fileName'+ randomNum + '.pdf'
  this.elements.chooseFileField().attachFile({filePath:'File.pdf',fileName:filename}, {action: 'drag-drop'})
  this.elements.uploadEvidenceBtn2().click({force:true}) 
  cy.wait(2500)
  cy.contains(filename)
}

DeleteEvidenceFile(){
  this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
  this.elements.filesTab().click({force:true})
  this.elements.firstActionItemListed().then((text)=>{
    let fileName = text.text()
    this.elements.deleteEvidenceFileBtn1().first().click({force:true})
    cy.intercept('DELETE','**/*').as('FileDeleted')
    this.elements.deleteEvidenceFileBtn2().click({force:true})
    cy.wait('@FileDeleted')
    cy.contains(fileName).should('not.exist')
  })
  }

  exportActionItemsExcelCSV(OrgName){
    cy.intercept('GET','**/*').as('export')
    this.elements.exportBtn().click({force:true})
    this.elements.exportActionItemBtn().click()
    cy.wait('@export')
    cy.verifyDownload(OrgName + ' - Action Items.xlsx') 

  }

  deleteActionItemFromViewAllPage(){
    this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
    this.elements.delActionItemsfromViewAllPageBtn().click({force:true})
    this.elements.confirmDeleActionItemCheckBtn().check({force:true})
    this.clickConfirmDel({force:true})
      //cy.contains(notification)
  }

  // validateActionItemOverDueStatus(){
  //   this.elements.editActionItemsfromViewAllPageBtn().click({force:true})
  //   // Create a Date object to get today's date
  //   const today = new Date();
  //   // Add 5 days to the current date
  //   today.setDate(today.getDate() - 2);
  //   // Format the date as MM/DD/YYYY
  //   const month = (today.getMonth() + 1).toString().padStart(2, '0');
  //   const day = today.getDate().toString().padStart(2, '0');
  //   const year = today.getFullYear();
  //   const formatedDate = `${month}/${day}/${year}`
  //   this.elements.ac.clear().type(formatedDate)
  //   cy.get('.action-item-datepicker').type('{esc}')
  //   this.elements.updateActionItemBtn().click({force:true})
  //   this.elements.actionItemStatus().should('contain','Overdue')
  // }

  turnOnNotificationss(message){
      this.elements.notificationsToggleBtn().then(($btn)=>{
      if( $btn.prop('enabled')){
      this.clickOnNotificationToggle();
      this.elements.successMSG().contains(message);
      this.elements.notificationsToggleBtn().should('not.be.checked');
    }else
    {
      this.clickOnNotificationToggle();
      this.elements.successMSG().contains(message)
      this.elements.notificationsToggleBtn().should('be.checked') 
    }
    })
  }

  turnOffNotifications(message){
    this.clickOnNotificationToggle();
    cy.intercept('PUT','**/*').as('notificationsTunredOn');
    this.elements.allSwitch().click()
    cy.wait('@notificationsTunredOn');
    this.elements.successMSG().contains(message);
    this.elements.allSwitch().should('be.visible').and('not.be.checked');
    this.elements.assignedToYouAlert().should('not.be.checked')
    this.elements.statusUpdateAlert().should('not.be.checked')
    this.elements.commentAlerts().should('not.be.checked')
  }

  turnOnNotifications(message){
      this.clickOnNotificationToggle();
      cy.intercept('PUT','**/*').as('notificationsTunredOn');
      this.elements.allSwitch().click()
      cy.wait('@notificationsTunredOn');
      this.elements.successMSG().contains(message);
      this.elements.allSwitch().should('be.visible').and('be.checked');
      this.elements.assignedToYouAlert().should('be.checked')
      this.elements.statusUpdateAlert().should('be.checked')
      this.elements.commentAlerts().should('be.checked')
  }
  viewMyActionItems(profileID){
    this.elements.userMenu().should('exist').as('menu')
    cy.get('@menu').click({force:true})
    this.elements.profileLink().click({force:true})
    //Assert Expected URL
    cy.url().should('eq',Cypress.env('testEnvironments').baseUrl + '/profile/'+ profileID +'/organizations')//assert expected URL 
    this.elements.myActionItemsLink().click()
    this.elements.tableRows().then((rows)=>{
      cy.log(rows)
      cy.contains('table tbody tr', 'Benjamin Keya').find('td:nth-child(6)').then((num) => {
       expect(rows.length).to.equal(num.length)
      })

    }) 
  }
  searchActionItem(){

  }
} 
export default new ActionItems()





  
  
  
  
  
  
 

