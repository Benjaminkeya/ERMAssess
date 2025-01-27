import PreActions from './PreActions';
// Import mammoth at the beginning of your file
const mammoth = require('mammoth');
//Generate a random number
var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
//Get today's date
const today = new Date();
// Format the date as MM/DD/YYYY
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const day = today.getDate().toString().padStart(2, '0');
const year = today.getFullYear();
//Format date in the format MM/DD/YYYY
const formattedDate = `${month}/${day}/${year}`;
const formattedDate2 =`${day}/${month}/${year}`;

class Assessment {
  //Page Elements
  elements = {
    newAssessBtn: () => cy.contains('button', 'New Assessment'),
    assessModal: () => cy.get('.w-fixed-640 > .border-bottom'),
    nameField: () => cy.get('#name'),
    descriptionField: () => cy.get('#description'),
    createAsessBtn: () => cy.get('form > .d-flex > :nth-child(2) > .btn-primary'),
    updateAssessBtn:()=> cy.xpath("//span[normalize-space()='tune'][1]"),
    assessmentsBtn: () => cy.get('.mx-2'),
    asessDateRangeField: () => cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control'),
    filterByEntityField: () => cy.get(':nth-child(3) > .rbt > div > .rbt-input-main'),
    firstFilteredAssessment:()=>cy.get(':nth-child(1) > :nth-child(2) > h6 > .text-decoration-none'),
    firstEntity: () => cy.get('#entity-item-0'),
    filterByProtocolField: () => cy.get(':nth-child(4) > .rbt > div > .rbt-input-main'),
    firstProtocol: () => cy.get('#protocol-typeahead-item-0'),
    firstAssessment: () => cy.get(':nth-child(2) > .rbt > div > .rbt-input-main'),
    assessmentLink: () => cy.xpath("//tbody[@class='table-group-divider']//tr[1]/td[1]/a"),
    assessmentGroupBtn: () => cy.contains('a', 'Assessment Groups'),
    newGroupBtn: () => cy.get('.px-3'),
    groupTitle: () => cy.get('#title'),
    createGroupBtn: () => cy.contains('button', 'Create Group'),
    editAssessmentGroupBtn: () => cy.xpath("(//button[@class='btn btn-outline-primary btn-sm'])[1]"),
    updateGroupBtn: () => cy.contains('button', 'Update Group'),
    delAssessmentGroupBtn1: () => cy.xpath("//tbody[@class='table-group-divider']/tr[1]/td/button/span[contains(text(),'delete')]"),
    confirmDelAssessGroupCheckboxBtn:()=> cy.get('.form-check-input'),
    delAssessmentGroupBtn2: () => cy.get("button[type='submit']"),
    assessGroupInnerText: () => cy.get('.text-muted'),
    assessExecutiveSummaryBtn: () => cy.get("button[type='button'].btn.btn-outline-primary.btn-sm"),
    assessSettings: () => cy.xpath("//span[contains(text(),'settings')]"),
    manageAssessBtn:()=>cy.get('.show.dropdown > .dropdown-menu > :nth-child(3)'),
    updateAssessBtn1: () => cy.get('.text-end > .d-flex > :nth-child(3) > .btn'),
    updateAssessBtn2: () => cy.contains('button','Update Assessment'),
    viewAssessmentReportBtn: () => cy.get('.position-relative > .material-symbols-outlined'),
    manageLockBtn: () => cy.xpath("//a[contains(@class, 'dropdown-item') and text()[contains(., 'Manage Assessment')]]"),
    showInapplicableSectionToggle: () => cy.get(':nth-child(3) > .form-check-input'),
    inapplicableSectionTitle: () => cy.get('[data-cy="section-2"] h3'),
    lockBtn: () => cy.xpath("//div[@class='d-flex flex-row align-items-center w-100 mb-3']//div[@class='form-check form-switch']//input[@type='checkbox']"),
    closeBtn: () => cy.get('.btn-close'),
    addObservationBtn:()=>cy.contains('button','Add Observation'),
    observationNameTxt:()=>cy.get('#label'),
    observationUpdateNameTxt:()=>cy.get('#observationLabel'),
    saveObservationBtn:()=>cy.xpath("//button[normalize-space()='Create Observation']"),
    saveObservation:()=>cy.get('.modal-footer > .btn-primary'),
    newObservationTab:()=>cy.get('#react-aria4606607697-\:rk\:-tab-66c2f10284c5c051763328'),
    obervationMenuBtn:()=>cy.get('#observation-set'),
    updateObservationBtn:()=>cy.get(':nth-child(1) > .dropdown-item'),
    updateObservationBtn2:()=>cy.xpath("//button[normalize-space()='Update']"),
    delObservationBtn:()=>cy.get(':nth-child(2) > .text-danger'),
    delObservationBtn2:()=>cy.contains('button','Delete'),
    confirmDelObservationCheckboxBtn:()=>cy.get('.mx-4 > :nth-child(1) > .form-check > .form-check-input'),
    markAsDoneToggle: () => cy.get("input[value='In progress']"),
    doneStatus: () => cy.contains('span','Done'),
    createAssessDropDown: () => cy.xpath("//div[@class='mb-3']//div[@class='rbt']//div//input[@placeholder='Filter by protocol']"),
    assessProtocolDropDown: () => cy.get(':nth-child(4) > .rbt > div > .rbt-input-main'),
    protocolOption: () => cy.get('#protocol-typeahead-item-0'),
    clearProtocolBtn: () => cy.get("button[aria-label='Clear']"),
    protocolFilterBtn: () => cy.xpath("//input[@placeholder='Filter by protocol']"),
    assessmentName: () => cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)'),
    assessmeentReportBtn: () => cy.get(':nth-child(1) > .text-end > .d-flex > :nth-child(1) > .btn > .material-icons-outlined'),
    assessDeleteBtn: () => cy.contains('button','Delete'),
    confirmDelAssessmentCheckboxBtn: () => cy.get('.form-check-input'),
    delAssessBtn: () => cy.get('.btn-danger'),
    manageAssessBtn: () => cy.contains('a','Manage Assessment'),
    assessNABtn: () => cy.xpath("//div[@class='form-check form-switch']//input[@name='isInapplicable']"),
    invalidFeedback: () => cy.get('.invalid-feedback'),
    message: () => cy.get('h5.mb-1 > small'),
    showComplianceQsnsBtn: () => cy.get("input[value='true']"),
    assessReportBtn: () => cy.xpath('//a[text()="Assessment Report"]'),
    executiveSummaryBtn: () => cy.get('.btn-outline-primary'),
    addExecutiveSummary: () => cy.get('.rounded > .form-control'),
    updateExecutiveSummaryBtn: () => cy.get('.modal-footer > .btn-primary'),
    //reportPdfBtn: () => cy.get(':nth-child(6) > :nth-child(2)'),
    reportPdfBtn: () => cy.xpath("//button[text()='PDF']"),
    reportDocxBtn: () => cy.xpath("//button[text()='Word Document']"),
    reportNativeDocxBtn: () => cy.xpath("//span[normalize-space()='Raw Word (DOCX)']"),
    reportCsvBtn: () => cy.xpath("//button[normalize-space()='Raw Excel (CSV)']"),
    reportCsvBtn1: () => cy.xpath("//span[normalize-space()='Export to Excel (CSV)']"),
    reportPrintBtn: () => cy.xpath("//button[contains(text(), 'Print')]"),
    //reportTitle: () => cy.get('div.scroller h3.text-capitalize'),
    reportTitle: () => cy.get(':nth-child(3) > a'),
    reportAssessmentTitle: () => cy.get(':nth-child(2) > a'),
    selectQsn: () => cy.get('[data-cy="section-0-question-0"] > :nth-child(2) > .flex-fill > :nth-child(2) > p'),
    disabledSection: () => cy.get('[data-cy="section-toggle-0"]'),
    principleFilter: () => cy.xpath("//input[@placeholder='Filter by principle']"),
    firstPrinciple: () => cy.get('#principle-typeahead-item-0'),
    sectionExpandBtn: () => cy.get('[data-cy="section-0"] > :nth-child(2) >.flex-grow-1'),
    testPropmtText: () => cy.get('#\\36 57304c8299b2'),
    selectAllBtn: () => cy.get('#\\36 572f83400e43'),
    yesBtn: () => cy.get('#\\36 572f92e61092'),
    noBtn: () => cy.get('#\\36 572f9452fb1b'),
    maybeBtn: () => cy.get('#\\36 572f95e5afd0'),
    child1TestPrompt: () => cy.get('#\\36 572fc0da1907'),
    child2TestPrompt: () => cy.get('#\\36 572fc28a98a6'),
    testPromptRadio: () => cy.get('#\\36 5730a485d3ec'),
    dateField: () => cy.get('#\\36 572f7bebfaea'),
    phoneNumberField: () => cy.get('#\\36 572f85b91587'),
    testDropdown: () => cy.get('.flex-fill > .rbt > div > .rbt-input-main'),
    dropdownOption1: () => cy.contains('Dropdown1'),
    findingsBtn: () => cy.get('#\\36 5e0624bc39c8'),
    secondParentNestedField:()=>cy.xpath("//input[@id='66599dfb210fe328201594']"),
    firstChildNestedBtn:()=>cy.xpath("//input[@id='66599e57dd1df834366083']"),
    secondChildNestedBtn1:()=> cy.xpath("//input[@id='6659a021c584e556658152']"),
    secondChildNestedBtn2:()=> cy.xpath("//input[@id='6659a03062b9e566220705']"),
    scorableRadioBtn1:()=>cy.xpath("//input[@id='669670eaba0cb964460383']"),
    scorableRadioBtn2:()=>cy.xpath("//input[@id='6696711d70cd3201729197']"),
    //Checkboxes
    checkbox1:()=>cy.get('#\\36 728a6e87c82c142038438'),
    checkbox2:()=>cy.get('#\\36 728a6e87f294130560134'),
     //Multi level Nested fields
    choice1RadioBtn:()=>cy.get('#\\36 729de8ce43c3292420383'),
    checkboxLevel2:()=>cy.get('#\\36 729dee1086f3883073573'),
    choice2RadioBtn:()=>cy.get('#\\36 729de8ce6f7f649971166'),
    dateFieldLevel2:()=>cy.get('#\\36 729df1f8dc83809107610'),
    level2TextField:()=>cy.get('#\\36 729df3ba4235242917676'),
    //List response fields
    nameField1:()=>cy.get(':nth-child(2) > #\\36 732038d22b95040890844'),
    quantity1Field:()=>cy.get(':nth-child(3) > #\\36 732038d22b95040890844'),
    //expiryDateField:()=>cy.get(':nth-child(4) > #\\36 728a77e19eaf029142807'),
    descriptionTxt:()=>cy.get(':nth-child(4) > #\\36 732038d22b95040890844'),
    addResponseBtn:()=>cy.contains('button','Add List Item'),
    nameField2:()=>cy.get('[data-rbd-draggable-id="1731332151887"] > :nth-child(2) > #\\36732038d22b95040890844'),
    riskBtns: () => cy.get('#risk'),
    multilevelChoice1:()=>cy.get('#\\36 729de8ce43c3292420383'),
    checkboxScore1:()=> cy.get('#\\36 729dee1086f3883073573'),
    complianceBtn: () => cy.get(':nth-child(3) > #compliance'),
    conformityBtn: () => cy.get('#radio-4'),
    conformityLevelLabel: () => cy.get('.float-end rounded-0 badge px-2 py-1'),
    conformityNAField: () => cy.get('#conformity-inapplicable'),
    notesField: () => cy.get('#findings'),
    causalFactors: () => cy.get('#causalFactors'),
    recommendationField: () => cy.get('#recommendation'),
    saveBtn: () => cy.contains('button', 'Save'),
    prevBtn: () => cy.contains('button', 'Previous'),
    attachFileDoc: () => cy.contains('button', 'Attach file'),
    updateFileEvidence: () => cy.get('.border-dark'),
    fileName:()=>cy.get('#name'),
    evidenceFileDesc: () => cy.get('#description'),
    updateFileEvidence1: () => cy.contains('button', 'Update File'),
    deleteEvidenceFile: () => cy.get('.border-danger'),
    deleteEvidenceFile1: () => cy.contains('button', 'Delete'),
    confirmEvidenceFileField: () => cy.get('.mx-4 > :nth-child(1) > .form-check > .form-check-input'),
    fileField: () => cy.xpath("//input[@type='file']"),
    fileDescField: () => cy.get('#description'),
    uploadFileBtn: () => cy.contains('button', 'Upload File'),
    qsnCompleteCheckmark: () => cy.get('[data-cy="section-0-question-1-check"]'),
    filesPhotosSection: () => cy.xpath("//span[contains(@class,'text-muted')][normalize-space()='1']"),
    applicabilityScreeningSection:()=>cy.contains('a', 'Applicability Screening'),
    section2NoRadioBtn:()=>cy.get('#\\36 6599c536da54479042555-no'),
    section1NoRadioBtn:()=>cy.get('#\\36 6599c6240410093755823-no'),
    section2YesRadioBtn:()=>cy.get('#\\36 6599c536da54479042555-yes'),
    section1YesRadioBtn:()=>cy.get('#\\36 6599c6240410093755823-yes'),
    saveApplicabilityScreeningBtn:()=>cy.contains('button','Save'),
    section2Link:()=>cy.get('[data-cy="section-0"] > :nth-child(2) > .flex-grow-1'),
    section1Link:()=>cy.get('[data-cy="section-1"] > :nth-child(2) > .flex-grow-1'),
    markQsnNABtn: () => cy.get("div[class='form-check form-switch'] input[name='isInapplicable']"),
    sectionNABtn: () => cy.get('[data-cy="section-toggle-0"]'),
    filesPhotosBtn: () => cy.get('[data-cy="files-photos"]'),
    bulkUploadBtn: () => cy.get('[data-cy="btn-bulk-upload"]'),
    assessSearchField: () => cy.get('.col-md-12 > .form-control'),
    uploadBulfFilesField: () => cy.get('.text-center > .mb-0'),
    attachedFiles: () => cy.get('.d-flex > .mt-2'),
    lastUploadedFile:()=>cy.get(':nth-child(18) > .d-flex > .mt-2'),
    bulkFileDesc: () => cy.get('#description'),
    submitBulkUploadedFilesBtn: () => cy.get('.sticky-bottom > .btn-primary'),
    editBulkFileBtn: () => cy.xpath("(//span[@translate='no'][normalize-space()='edit'])[1]"),
    downloadBulkFile: () => cy.xpath("//span[normalize-space()='download'][1]"),
    updateBulkFileBtn1: () => cy.contains('button', 'Update File'),
    delBulkFileBtn1: () => cy.xpath("(//span[@class='material-symbols-outlined md-16'][normalize-space()='delete'])[1]"),
    confirmDeleteCheckbox:()=>cy.get('.mx-4 > :nth-child(1) > .form-check > .form-check-input'),
    confirmDelBulkFileBtn: () => cy.get('.btn-danger'),
    fileDesc: () => cy.get('.table-group-divider > :nth-child(1) > :nth-child(2)'),
    expandGeoTagBtn: () => cy.get(':nth-child(13) > .mb-0'),
    updateGeotagBtn1: () =>cy.get('.w-50 > .border-dark > .material-symbols-outlined'),
    updateGeotagBtn2: () => cy.get("button[class='btn btn-primary btn-sm']"),
    geaotagInnerText:()=>cy.get("div[class='mt-2'] div[class='d-flex justify-content-between align-items-center'] div:nth-child(1)"), 
    deleteGeotagBtn: () => cy.get(':nth-child(1) > .w-50 > .ms-2'),
    geotagTitle: () => cy.get('#title'),
    geaotagLatitude: () => cy.get('#latitude'),
    geaotagLongitude: () => cy.get('#longitude'),
    geotagFile: () => cy.get('.container >.text-center'),
    geotagUploadedFile: () => cy.get('.d-flex > .mt-2'),
    createGeotagBtn1: () => cy.get('.text-end > .text-start'),//cy.contains('button', 'Create'),
    geaotagNextBtn: () => cy.contains('button', 'Next'),
    createLocationPhotosTab: () => cy.get('#geotag-create-tabs-tab-1'),
    updateLocationPhotosTab: () => cy.get('#geotag-update-tabs-tab-1'),
    createGeotagBtn2: () => cy.get('.sticky-bottom > .btn-primary'),
    exportGeotagBtn: () => cy.contains('button', 'Export'),
    closeGeotagModal: () => cy.get('.btn-close'),
    sectionLabel:()=>cy.get('.flex-grow-1'),
    reportBtn:()=>cy.contains('Assessment Report'),
    executiveSummaryTitle: () => cy.xpath('(//h2[@class="py-1 text-uppercase text-primary border-bottom border-primary"])'),
    summaryTableTitle: () => cy.xpath('//h2[@class="my-1 py-1 text-uppercase text-primary border-bottom border-primary"]'),
    ChartsTitle: () => cy.xpath('//h2[text()="Charts"]'),
    showChartsTitle1: () => cy.xpath('//p[normalize-space()="Distribution of Findings by Risk"]'),
    showChartsTitle2: () => cy.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[2]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/p[1]'),
    showChartsTitle3: () => cy.xpath('//p[normalize-space()="Distribution of Findings by Conformity"]'),
    showChartsTitle4: () => cy.xpath('/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/table[4]/tbody[1]/tr[1]/td[1]/div[1]/div[1]/p[1]'),
    citationTitle: () => cy.xpath('(//h5[contains(text(), "Citation:")])[1]'),
    inapplicableQuestionTitle: () => cy.xpath('//tr[contains(@id, "question")]//td[contains(text(), "NOT Applicable")]'),
    showAttachmentsTitle: () => cy.xpath("//h2[contains(text(),'Assessment Level Attachments')]"),
    showRiskMatricesHeatmapTitle: () => cy.xpath("//h2[contains(text(),'IRO Summary')]"),
    showExecutiveSummaryBtn: () => cy.get('input[name="show-executive-summary"]'),
    summaryTableBtn: () => cy.get('input[name="show-summary-table"]'),
    showChartsBtn: () => cy.get('input[name="show-charts"]'),
    showCitationsBtn: () => cy.get('input[name="show-citations"]'),
    showInapplicableBtn: () => cy.get('input[name="show-inapplicable"]'),
    inapplicableQuestion: () => cy.xpath("//p[contains(text(), 'Implementation: List observations about this topic.')]"),
    inapplicableQuestionToggle: () => cy.get('input[name="isInapplicable"][type="checkbox"]'),
    showAttachmentsBtn: () => cy.get('input[name="show-attachments"]'),
    showRiskMatricesHeatmapBtn: () => cy.get('input[name="show-risk-matrices"]'),
    // seeQuestionsLinkBtn: () => cy.xpath('(//tr/td/p[@class="mb-0"]/a[@class="mx-2"])[1]'),
    seeQuestionsLinkBtn: () => cy.get(':nth-child(2) > td > .mb-0 > .mx-2'),
    seeQuestionsContent: () => cy.get(':nth-child(2) > td > .mb-0 > :nth-child(2)'),
    seeQuestionContent1: () => cy.xpath("//li[@class='breadcrumb-item' and span[text()='Assessment Question']]"),
    seeQuestionContent2: () => cy.xpath('//div[@class="card"]//div[@class="my-2 lh-base card-title h5"]//p'),
    listViewIconBtn: () => cy.get('button.active.btn-outline-secondary'),
    commentBtn: () => cy.xpath('//button[.//span[text()="comment"]]'),
    typeComment: () => cy.get('#newComment'),
    addCommentBtn: () => cy.xpath('//span[normalize-space()="Post Comment"]'),
    closeCommentBtn: () => cy.get('.btn-close'),
    editBtn: () => cy.xpath("//button[contains(@class, 'ms-3') and contains(@class, 'btn-outline-primary') and contains(@class, 'btn-sm')]"),
    typeResponse: () => cy.xpath("//textarea[@id='657304c8299b2']"),
    saveResponseChanges: () => cy.get(':nth-child(2) > .btn-primary'),
    clickToAssessmentPageBtn: () => cy.get('a.btn.btn-primary.btn-sm'),
    clickToFilterDropdown: () => cy.xpath('//div[@class="dropdown"]/button[@class="border btn-block w-100 text-start text-muted dropdown-toggle bg-white dropdown-toggle btn btn-outline-secondary"]'),
    clickToQuestionToBestPractice: () => cy.get('.dropdown-menu > :nth-child(3)'),
    clickToQuestionToFindins: () => cy.get('.dropdown-menu > :nth-child(2)'),
    clickToAllQuestions: () => cy.get('.dropdown-menu > :nth-child(1)'),
    newActionItemBtn:()=>cy.contains('button','New Action Item'),
    titleField:()=>cy.get('#item'),
    descriptionField:()=>cy.get('#description'),
    dateField:()=>cy.get('.react-datepicker__input-container > .form-control'),
    assignedToField:()=>cy.get(':nth-child(6) > .rbt > .rbt-input-multi'),
    tagsField:()=>cy.get(':nth-child(7) > .rbt > .rbt-input-multi'),
    createActionItemBtn:()=>cy.contains('button','Create Action Item'),
    selectAssignee:()=> cy.get('.rbt-highlight-text'),
    selectTag:()=>cy.get('#tags-typeahead-item-0'),
    clickToScopeMetaData:() => cy.get('[data-cy="scope-metadata"]'),
    enterText: () => cy.xpath('//textarea[@id="65730da300aae"]'),
    clickToCheckBox: () => cy.get("input[id='66599cd6c6efe774711934']"),
    enterPhone: () => cy.xpath('//input[@id="66599cba3faea940348164"]'),
    clickToRadioBtn: () => cy.xpath('//input[@id="66599ce2a08f5915380396"]'),
    SaveMetaDataBtn: () => cy.get('button.float-end.btn.btn-primary.btn-sm'),
    assessmentNotepadButton: () => cy.get('button[class="sticky-bottom float-end fab shadow btn btn-secondary"]'),
    addAssessmentNotepadButton: () => cy.get('button[class="float-end btn btn-primary btn-sm"]'),
    inputAssessmentNotepadTitle: () => cy.get('input[placeholder="Title"][name="key"]'),
    inputAssessmentNotepadDesc: () => cy.get('textarea[placeholder="Take a note..."][name="value"]'),
    addAssessmentNotepad: () => cy.get('button[class="px-3 btn btn-primary btn-sm"]'),
    editAssessmentNotepadButton: () => cy.get('tbody tr:nth-child(1) td:nth-child(5) div:nth-child(1) div:nth-child(1) button:nth-child(1) span:nth-child(1)'),
    deleteAssessmentNotepadButton: () => cy.get('tbody tr:nth-child(1) td:nth-child(5) div:nth-child(1) div:nth-child(2) button:nth-child(1) span:nth-child(1)'),
    deleteNotepadCheckbox: () => cy.get("div[class='form-check'] input[type='checkbox']"),
    delQstnLevelNote:()=>cy.contains('button', 'Delete'),
    delAssessLevelNoteBtn:()=>cy.contains('button', 'Delete'),
    questionNotepadButton: () => cy.xpath('//div[@class="mb-3 col-lg-9 col-md-8 col-sm-12 col-12"]//h5[2]'),
    inputQuestionNotepadTitle: () => cy.xpath('//input[@placeholder="Title"]'),
    inputQuestionNotepadDesc: () => cy.xpath('//textarea[@placeholder="Take a note..."]'),
    addQuestionNotepad: () => cy.xpath('//button[normalize-space()="Add"]'),
    editQuestionNotepadButton: () => cy.xpath('//span[@class="material-symbols-outlined md-20 cursor-pointer me-1"]'),
    editQuestionNotepad: () => cy.xpath('//button[normalize-space()="Update"]'),
    deleteQuestionNotepadButton: () => cy.xpath('//span[@class="material-symbols-outlined md-20 cursor-pointer text-danger"]'),
    correctiveActionsBtn:()=>cy.contains('Corrective Actions'),
    actionItemTab: () => cy.xpath('//button[@role="tab" and @data-rr-ui-event-key="actionItems" and text()="Action Items"]'),
    selectActionItemCheckBox:()=>cy.get('[class="cursor-default table table-hover"] >thead >tr >th:first-child >div >[class="form-check-input"]'),
    actionItemEditBtn: () => cy.get('.ms-2'),
    actionItemDeleteBtn: () => cy.get('.sticky-bottom > :nth-child(1) > .border-0'),
    actionItemConfirmDeleteBtn: () => cy.get('.btn-danger'),
    // Corrective Actions
    correctiveActionItemsTab:()=>cy.contains('Corrective Actions'),
    exportExcel: () => cy.get('[class="d-flex align-items-center flex-wrap"] >button'),
    bulkUpdateBtn: () => cy.get('[class="d-flex justify-content-center align-items-center"] >button'),
    bulkUpdatePopup:()=> cy.get('.modal-body'),
    saveChangesBtn:()=>cy.get('.modal-footer >[class="btn btn-primary btn-sm"]'),
    ActionItemDate1:()=>cy.get(':nth-child(4) > .text-nowrap'),
    assessmentTeamLink:()=>cy.contains('a', 'Assessment Team'),
    signaturesLink:()=>cy.contains('a', 'Signatures'),
    delSignatureBtn1:()=>cy.get('.text-center > .btn'),
    confirmSignatoryTxt:()=>cy.get('#productName'),
    delSignatureBtn2:()=>cy.contains('button', 'Delete'),
    assigneeInnerText:()=>cy.get("small[class='text-muted']"),
    addAssessTeamMemberBtn:()=>cy.contains('button', 'Add Member'),
    addSignatureBtn:()=>cy.contains('button', 'New Signature'),
    closeLegalDisclaimerBtn:()=>cy.contains('button', 'Close'),
    signatureTitle:()=>cy.get('#title'),
    signatureCanvas:()=>cy.get('.border.w-100.rounded'),
    saveSignatureBtn:()=>cy.get('form > .d-flex > :nth-child(2) > .btn-primary'),
    memberTxt:()=>cy.get("input[placeholder='Select a user...']"),
    selectFirstMember:()=>cy.get('#subscribers-typeahead-item-0'),
    addMemberBtn:()=>cy.contains('button', 'Add Members'),
    assignMemberBtn:()=>cy.contains('button','Assign Members'),
    delAssessTeamMemberBtn1:()=>cy.contains('button', 'Delete'),
    confirmDelAssessTeamMemberCheckBtn:()=>cy.get("div[class='form-check'] input[type='checkbox']"),
    delAssessTeamMemberBtn2:()=>cy.get("button[class='ms-2 btn btn-outline-danger btn-sm']"),
    
  }

  //Page element Actions
  clickExpandSectionBtn() {
    this.elements.sectionExpandBtn().should('exist').click({ force: true })
  }

  clickFirstQsn() {
    this.elements.selectQsn().should('exist').first().click({ force: true })
    cy.wait(1500)
  }

  clickAssessmentsBtn() {
    this.elements.assessmentsBtn().click({ force: true })
  }

  clickAssessmentGroupsBtn() {
    this.elements.assessmentGroupBtn().scrollIntoView().click({ force: true })
  }
  clickToOpenAssessment() {
    this.elements.assessmentLink().scrollIntoView().click({timout:4000},{ force: true })
  }

  clickActionItemTab(){
    this.elements.correctiveActionItemsTab().should('exist').scrollIntoView().click({ force: true });
  }
  //Class Function objects
  createAssessment(AssessName, protocol, description) {
    this.elements.newAssessBtn().should('be.visible').click({ force: true });
    this.elements.nameField().type(AssessName + randomNum, { delay: 0 },{ force: true });
    this.elements.createAssessDropDown().should('exist').type(protocol, { delay: 0 },{ force: true })
    this.elements.protocolOption().should('exist').click({ force: true });
    this.elements.descriptionField().type(description, { delay: 0 },{ force: true });
    this.elements.createAsessBtn().should('exist').click({ force: true });
    cy.url().should('contain', '/audits')
    cy.contains(AssessName + randomNum)
    cy.go('back')
    cy.contains(AssessName + randomNum).should('exist');
  }

  openAssessment() {
    this.elements.assessmentName().should('exist').invoke('text').then((assessName) => {
      this.clickToOpenAssessment()
      cy.intercept('GET', '**/*').as('loaded')
      cy.wait('@loaded')
      cy.contains(assessName)
      cy.contains('Assessment Report')
    })
  }
  updateAssessment(name, description) {
    this.elements.updateAssessBtn1().first().click({ force: true });
    this.elements.nameField().clear().type(name + randomNum, { delay: 0 });
   // this.elements.clearProtocolBtn().should('exist').click();
    this.elements.descriptionField().clear().type(description, { delay: 0 });
    this.elements.updateAssessBtn2().should('exist').should('be.enabled').click({ force: true });
    cy.contains(name).should('exist');
  }
  deleteAssessment(name) {
    this.elements.assessDeleteBtn().first().should('be.visible').click({ force: true });
    this.elements.confirmDelAssessmentCheckboxBtn().click({ force: true })
    this.elements.delAssessBtn().scrollIntoView().click()
    cy.contains(name + randomNum).should('not.exist');
  }
  
  viewAssessmentReport() {
    this.elements.viewAssessmentReportBtn().click({ force: true });
    // Get the current Report URL and assert it using a regular expression pattern
    cy.url().should('match', /https:\/\/www\.ermassess\.com\/audits\/[a-zA-Z0-9]+\/reports/);
  }

  lockAssessment() {
    this.clickToOpenAssessment();
    this.elements.assessSettings().should('exist').scrollIntoView().click({ force: true });
    this.elements.manageLockBtn().click({ force: true });
    cy.intercept('PUT', '**/*').as('lock')
    this.elements.lockBtn().click({ force: true });
    cy.wait('@lock')
    this.elements.closeBtn().click({ force: true });
    this.clickExpandSectionBtn();
    this.elements.child1TestPrompt().should('be.disabled');
    this.elements.child2TestPrompt().should('be.disabled');
    this.elements.testPromptRadio().should('be.disabled');
    this.elements.dateField().should('be.disabled');
  }

  unLockAssessment() {
    this.clickToOpenAssessment()
    this.elements.assessSettings().should('exist').scrollIntoView().click({ force: true });
    this.elements.manageLockBtn().click({ force: true });
    cy.intercept('PUT', '**/*').as('unlock')
    this.elements.lockBtn().click({ force: true });
    cy.wait('@unlock')
    this.elements.closeBtn().click({ force: true });
    this.clickExpandSectionBtn();
    this.elements.child1TestPrompt().should('not.be.disabled');
    this.elements.child2TestPrompt().should('not.be.disabled');
    this.elements.testPromptRadio().should('not.be.disabled');
    this.elements.dateField().should('not.be.disabled');
  }

  assessmentMarkAsDone() {
    this.clickToOpenAssessment();
    cy.intercept('PUT', '**/*').as('done')
    this.elements.markAsDoneToggle().click({ force: true });
    cy.wait('@done')
    this.elements.doneStatus().should('have.text', 'check Done');
  }

  addAssessmentLevelNotepad(notetitle, desc, msg){
    this.clickToOpenAssessment()
    cy.intercept('GET', '**/* ').as('getNotepadData');
    this.elements.assessmentNotepadButton().click({ force: true });
    cy.wait('@getNotepadData');
    this.elements.addAssessmentNotepadButton().click({ force: true });
    this.elements.inputAssessmentNotepadTitle().clear().type(notetitle + randomNum, { delay: 0 })
    this.elements.inputAssessmentNotepadDesc().clear().type(desc, { delay: 0 })
    cy.intercept('POST', '**/* ').as('addAssessmentNotepad');
    this.elements.addAssessmentNotepad().click({ force: true });
    cy.wait('@addAssessmentNotepad');
    cy.contains(msg);
  }

  editAssessmentLevelNotepad(notetitle, msg){
    this.clickToOpenAssessment()
    cy.intercept('GET', '**/* ').as('getNotepadData');
    this.elements.assessmentNotepadButton().click({ force: true });
    cy.wait('@getNotepadData');
    this.elements.editAssessmentNotepadButton().click({ force: true });
    this.elements.inputAssessmentNotepadTitle().clear().type(notetitle + randomNum, { delay: 0 })
    cy.intercept('PUT', '**/* ').as('editAssessmentNotepad');
    this.elements.addAssessmentNotepad().click({ force: true });
    cy.wait('@editAssessmentNotepad');
    cy.contains(msg);
  }

  deleteAssessmentLevelNotepad(msg){
    this.clickToOpenAssessment()
    cy.intercept('GET', '**/* ').as('getNotepadData');
    this.elements.assessmentNotepadButton().click({ force: true });
    cy.wait('@getNotepadData');
    this.elements.deleteAssessmentNotepadButton().click({ force: true });
    this.elements.deleteNotepadCheckbox().check()
    cy.intercept('DELETE', '**/* ').as('deleteAssessmentNotepad');
    this.elements.delAssessLevelNoteBtn().click({force:true})
    cy.wait('@deleteAssessmentNotepad');
    cy.contains(msg);
  }

  addQuestionLevelNotepad(notetitle, desc, msg) {
    this.clickToOpenAssessment()
    this.clickExpandSectionBtn()
    cy.intercept('GET', '**/* ').as('getNotepadData');
    this.elements.questionNotepadButton().click({ force: true });
    cy.wait('@getNotepadData');
    this.elements.inputQuestionNotepadTitle().clear().type(notetitle + randomNum, { delay: 0 })
    this.elements.inputQuestionNotepadDesc().clear().type(desc, { delay: 0 })
    cy.intercept('POST', '**/* ').as('addQuestionNotepad');
    this.elements.addQuestionNotepad().click({ force: true });
    cy.wait('@addQuestionNotepad');
    cy.contains(msg);
  }

  editQuestionLevelNotepad(notetitle, msg){
    this.clickToOpenAssessment()
    this.clickExpandSectionBtn()
    cy.intercept('GET', '**/* ').as('getNotepadData');
    this.elements.questionNotepadButton().click({ force: true });
    cy.wait('@getNotepadData');
    this.elements.editQuestionNotepadButton().first().click({ force: true });
    this.elements.inputQuestionNotepadTitle().first().clear().type(notetitle + randomNum, { delay: 0 })
    cy.intercept('PUT', '**/* ').as('editQuestionNotepad');
    this.elements.editQuestionNotepad().click({ force: true });
    cy.wait('@editQuestionNotepad');
    cy.contains(msg);
  }

  deleteQuestionLevelNotepad(msg){
    this.clickToOpenAssessment()
    this.clickExpandSectionBtn()
    cy.intercept('GET', '**/* ').as('getNotepadData');
    this.elements.questionNotepadButton().click({ force: true });
    cy.wait('@getNotepadData');
    this.elements.deleteQuestionNotepadButton().first().click({ force: true });
    this.elements.deleteNotepadCheckbox().check()
    cy.intercept('DELETE', '**/* ').as('deleteQuestionNotepad');
    this.elements.delQstnLevelNote().click()
    cy.wait('@deleteQuestionNotepad');
    cy.contains(msg);
  }

  showInapplicableSection() {
    this.clickToOpenAssessment()
    this.elements.assessSettings().should('exist').scrollIntoView().click({ force: true });
    this.elements.manageAssessBtn().click({force:true})
    this.elements.showInapplicableSectionToggle().click({ force: true }).should('be.checked')
    cy.get('.btn-close').click()
    this.elements.section1Link().should('be.visible')

  }

  appScreening(msg) {
    this.clickToOpenAssessment()
    this.elements.applicabilityScreeningSection().should('exist').click({force:true});
    this.elements.section2NoRadioBtn().click({force:true});
    this.elements.section1NoRadioBtn().click({force:true});
    this.elements.saveApplicabilityScreeningBtn().click({force:true});
    cy.contains(msg);
    this.elements.section2Link().should('not.exist');
    this.elements.section1Link().should('not.exist');
    this.elements.applicabilityScreeningSection().click({force:true});
    // this.elements.applicabilityScreeningSection().click({force:true});
    this.elements.section2YesRadioBtn().click({force:true});
    this.elements.section1YesRadioBtn().click({force:true});
    this.elements.saveApplicabilityScreeningBtn().click({force:true});
    cy.contains(msg);
    this.elements.section2Link().should('be.visible');
    this.elements.section1Link().should('be.visible')

  }

  
  viewCorrectiveActionPage() {
    this.clickToOpenAssessment()
    this.clickActionItemTab();
    cy.url().should('contain', '/corrective-actions')
  }

  goBackToAssessmentPage() {
    this.clickToOpenAssessment()
    this.clickActionItemTab();
    this.elements.clickToAssessmentPageBtn().contains('Assessment').should('exist').click({ force: true });
    cy.url().should('not.contain', '/corrective-actions')
  }

  exportActionItemsCSV(OrgName){
    this.clickToOpenAssessment()
    this.clickActionItemTab();
    cy.intercept('GET','**/*').as('export')
    cy.contains('Export Excel').click({ force: true });
    cy.wait('@export')
    cy.verifyDownload(OrgName + ' - Action Items.xlsx') 
  }

  filterDropdown() {
    this.clickToOpenAssessment()
    this.clickActionItemTab()
    this.elements.clickToFilterDropdown().should('be.visible').click({ force: true });
    this.elements.clickToQuestionToBestPractice().contains('Questions with Best Practices').click({ force: true });
    cy.contains('Questions with Best Practices').should('exist');
    this.elements.clickToQuestionToFindins().contains('Questions with Findings').click({ force: true });
    cy.contains('Questions with Findings').should('exist');
    //cy.intercept('GET','**/*').as('getQuestions')
    this.elements.clickToAllQuestions().contains('All Questions').click({ force: true });
    //cy.wait('@getQuestions')
    cy.contains('All Questions').should('exist');
  }

  copyInformation() {
    this.clickToOpenAssessment()
    this.clickActionItemTab()
    cy.intercept('GET', '**/*').as('createActionItem');
    this.elements.newActionItemBtn().eq(0).click({ force: true });
    cy.wait('@createActionItem');
    cy.get('.cursor-pointer > :nth-child(2) > p').should('exist').should('be.visible').click({ force: true });

    // Assert the button is visible
    cy.get('#657304c8299b2 .btn-outline-secondary').should('be.visible');

    // Assert the button is clickable
    cy.get('#657304c8299b2 .btn-outline-secondary').should('not.be.disabled');

    // Stub the clipboard API
    cy.window().then((win) => {
      cy.stub(win.navigator.clipboard, 'writeText').as('clipboardWrite');
    });

    // Click the button
    cy.get('#657304c8299b2 .btn-outline-secondary').click();

    // Verify that clipboard.writeText was called with the correct content
    cy.get('@clipboardWrite').should('have.been.calledOnce');
    cy.get('@clipboardWrite').then((clipboardWrite) => {
      const copiedText = clipboardWrite.args[0][0];
      expect(copiedText).to.match(/^Test Prompt Text :/);
    });
  }

  createActionItemAndVerifyCount(title, assignedTo, tag) {
    this.clickToOpenAssessment();
    this.clickActionItemTab()
    // Get the initial count
    cy.get('.bg-primary strong').first().invoke('text').then((initialText) => {
      let initialCount = parseInt(initialText.trim(), 10);
      initialCount++
      cy.intercept('GET', '**/*').as('createActionItem');
      this.elements.newActionItemBtn().eq(0).click({ force: true });
      cy.wait('@createActionItem');
    this.elements.titleField().clear().type(title +randomNum,{delay:0});
    //this.elements.descriptionField().type(desc + randomNum,{delay:0});
    this.elements.dateField().clear().type(formattedDate,{delay:0});
    this.elements.dateField().type('{esc}');
    this.elements.assignedToField().should('be.visible').type(assignedTo,{delay:0});
    this.elements.selectAssignee().click({force:true});
    //this.elements.tagsField().scrollIntoView().should('be.visible').type(tag,{delay:0});
    //this.elements.selectTag().click({force: true});
      cy.intercept('POST', '**/*').as('created');
      this.elements.createActionItemBtn().click({ force: true });
      cy.wait('@created');
      /// Verify the count has increased by 1
      cy.get('.bg-primary strong').first()
        .should('be.visible')
        .invoke('text')
        .then((newText) => {
          let newCount = parseInt(newText.trim(), 10);
          //newCount++
          if (!!initialCount) expect(newCount).to.eq(initialCount);
          cy.contains(newCount)
        });
    });
  }

  deleteCorrectiveAction(){
    this.clickToOpenAssessment()
    this.clickActionItemTab()
    cy.intercept('GET', '**/*').as('getActionItems');
    this.elements.actionItemTab().click({ force: true });
    cy.wait('@getActionItems');
    this.elements.actionItemEditBtn().first().click({ force: true });
    this.elements.actionItemDeleteBtn().click({ force: true });
    this.elements.deleteNotepadCheckbox().check()
    cy.intercept('DELETE', '**/* ').as('deleteactionItem');
    this.elements.actionItemConfirmDeleteBtn().click()
    cy.wait('@deleteactionItem');
  }
  // Export Corrective Action
  exportCorrectiveAction(orgName,msg)
  {
    this.clickToOpenAssessment()
    this.clickActionItemTab()
    cy.intercept('GET', '**/*').as('getActionItems');
    this.elements.exportExcel().contains('Export Excel').click()
     cy.wait('@getActionItems') 
     cy.verifyDownload(orgName + ' - ' +'Action Items'+'.xlsx')
     cy.contains(msg)
  }

  bulkUpdateActionItems()
  {
    this.clickToOpenAssessment()
    this.clickActionItemTab()
    cy.intercept('GET', '**/*').as('getActionItems');
    this.elements.actionItemTab().click({ force: true });
    cy.wait('@getActionItems');
    this.elements.selectActionItemCheckBox().check({ force: true }).click();
    this.elements.bulkUpdateBtn().contains('Bulk Update').click()
    this.elements.dateField().clear().type(formattedDate,{delay:0});
    this.elements.dateField().type('{esc}');
    cy.intercept('PUT' , '**/*').as('saveBulkUpdate')
    this.elements.saveChangesBtn().contains('Save Changes').click()
    this.elements.ActionItemDate1().contains(formattedDate2)
  }

  inapplicableActionItem()
  {
    this.clickToOpenAssessment()
    this.clickExpandSectionBtn()
    cy.get('.card-header > .my-2 > div > p').invoke('text').then((QstnTxt)=>{

      cy.get('[data-cy="section-toggle-0"]').click({force:true})
      this.clickActionItemTab();
      cy.get('[class="me-2 mt-1"] >[class="form-check form-switch"] >[class="form-check-input"]').click()
       cy.contains(QstnTxt)
    })
   

      
  }

  addExecutiveSummary(addSummary) {
    this.clickToOpenAssessment()
    //this.elements.assessReportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    //this.elements.executiveSummaryBtn().should('be.visible').scrollIntoView().click({ force: true });
    cy.contains('button', 'Executive Summary').should('be.visible').scrollIntoView().click({ force: true });
    //cy.contains('Executive Summary').should('exist')
    this.elements.addExecutiveSummary().clear().type(addSummary + randomNum)
    cy.contains(addSummary + randomNum).should('exist');
    this.elements.updateExecutiveSummaryBtn().should('be.visible').scrollIntoView().click({ force: true });
  }

  defaultListView() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    //get list icon as active view and verify list icon active state
    this.elements.listViewIconBtn().should('exist');
  }

  addComments(addComment) {
    this.clickToOpenAssessment();
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    // Get all comment buttons matching the selector
    this.elements.commentBtn().then(($buttons) => {
      // Ensure only the first button is scrolled into view before clicking
      cy.wrap($buttons[0]).scrollIntoView().click({ force: true });
    });
    this.elements.typeComment().type(addComment + randomNum)
    this.elements.addCommentBtn().should('be.visible').click({ force: true });
    cy.contains(addComment + randomNum).should('exist');
    this.elements.closeCommentBtn().should('be.visible').click({ force: true });
  }

  manuscriptEditing(editResponse) {
    this.clickToOpenAssessment();
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    // Get all edit buttons matching the selector
    this.elements.editBtn().then(($buttons) => {
      // Ensure only the first button is scrolled into view before clicking
      cy.wrap($buttons[0]).scrollIntoView().click({ force: true });
    });
    this.elements.typeResponse().clear().type(editResponse + randomNum)
    cy.intercept('POST', '**/*').as('saveChanges')
    this.elements.saveResponseChanges().should('be.visible').click({ force: true });
    cy.wait('@saveChanges')
    cy.wait(2000)
    cy.contains(editResponse + randomNum).should('exist');
  }


  exportAssessmentPDFReport(orgName) {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    cy.intercept('GET', '**/* ').as('export')
    this.elements.reportPdfBtn().should('be.visible').click({ force: true });
    cy.wait('@export')
    this.elements.reportTitle().first().invoke('text').then((originalText) => {
    const modifiedText = `${orgName} ${originalText}`;
    cy.verifyDownload(modifiedText + ' Assessment Report.pdf');
    });
  }


  // reviewDownloadedPDFAssessment() {
  //   let originalPdfTitle;
  //   let originalReportTitle;

  //   this.clickToOpenAssessment();
  //   this.elements.assessReportBtn().should('be.visible').scrollIntoView().click({ force: true });
  //   cy.intercept('GET', '**/* ').as('export');
  //   cy.wait('@export');

  //   // Get the original Assessment Name from the HTML page
  //   this.elements.reportAssessmentTitle().invoke('text').then((text) => {
  //     originalPdfTitle = text.trim();
  //   });

  //   // Get the original report title from the HTML page
  //   this.elements.reportTitle().invoke('text').then((text) => {
  //     originalReportTitle = text.trim();
  //   });

  //   cy.task('readPdf', 'cypress/downloads/Audit Report.pdf').then(function (data) {
  //     const pdfContent = data.text;

  //     // Add assertions based on the content and the original titles
  //     // expect(pdfContent).to.contain('Summary Report for ' + originalPdfTitle);
  //     expect(pdfContent).to.contain(originalPdfTitle);
  //     expect(pdfContent).to.contain(originalReportTitle);
  //     expect(pdfContent).to.contain('OBSERVATIONS AND FINDINGS');
  //   });
  // }


  // exportAssessmentDocxReport() {
  //   this.clickToOpenAssessment()
  //   cy.contains('Assessment Report').should('exist').scrollIntoView().click({ force: true });
  //   cy.intercept('GET', '**/* ').as('export')
  //   this.elements.reportDocxBtn().should('be.visible').click({ force: true });
  //   cy.wait('@export')
  //   this.elements.reportTitle().invoke('text').then((originalText) => {
  //     // Replace spaces with underscores
  //     const modifiedText = originalText.replace(/ /g, '_');
  //     // Insert an underscore just before the first numeric value
  //     const modifiedTextWithUnderscore = modifiedText.replace(/(\D)(\d)/, '$1_$2');
  //     cy.verifyDownload(modifiedTextWithUnderscore + '.docx')
  //   })
  // }

  exportAssessmentDocxReport(orgName) {
    this.clickToOpenAssessment();
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    cy.intercept('GET', '**/*').as('export');
    this.elements.reportDocxBtn().should('be.visible').click({ force: true });
    cy.wait('@export');
    this.elements.reportTitle().first().invoke('text').then((originalText) => {
      const modifiedText = `${orgName} ${originalText}`;
      cy.verifyDownload(modifiedText + ' Assessment Report.docx');
    });
  }

  exportNativeDocxReport(orgName) {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    cy.intercept('POST', '**/* ').as('export');//https://de.ermassess.com/api/v1/audits/*/export
    cy.scrollTo('bottom')
    cy.get('.scroller:first').scrollTo('bottom');
    this.elements.reportNativeDocxBtn().should('exist').scrollIntoView().should('be.visible').click({ force: true });
    cy.wait('@export')
    this.elements.reportTitle().first().invoke('text').then((originalText) => {
      const modifiedText = `${orgName} ${originalText}`;
      cy.verifyDownload(modifiedText + ' Assessment Report.docx');
    // this.elements.reportTitle().first().invoke('text').then((originalText) => {

    //   // Replace spaces with underscores in orgName and insert an underscore between "Pixel" and "Edge"
    //   const modifiedOrgName = orgName.replace('PixelEdge', 'Pixel_Edge');
    //   const ReportText = `${modifiedOrgName} ${originalText}`;
    //   // Replace spaces with underscores
    //   const modifiedReportText = ReportText.replace(/ /g, '_');
    //   // Insert an underscore just after the first numeric value in orgName
    //   const ExportedReportText = modifiedReportText.replace(/(\d)(?=\D|$)/, '$1_');
    //   // Insert an underscore just before the first numeric value in the modified report text
    //   const ExportedReportTextWithUnderscore = ExportedReportText.replace(/(\D)(\d)/, '$1_$2');
    //   cy.verifyDownload(ExportedReportTextWithUnderscore + '_assessment_report.docx');
    });
  }


  // reviewDownloadedDocxAssessment() {
  //   this.clickToOpenAssessment();
  //   this.elements.assessReportBtn().should('be.visible').scrollIntoView().click({ force: true });
  //   cy.intercept('GET', '**/* ').as('export');
  //   cy.wait('@export');
  //   this.elements.reportTitle().invoke('text').then((originalText) => {
  //     const modifiedText = originalText.replace(/ /g, '_');
  //     const modifiedTextWithUnderscore = modifiedText.replace(/(\D)(\d)/, '$1_$2');
  //     const filePath = 'cypress/downloads/' + modifiedTextWithUnderscore + '.docx';
  //     cy.readFile(filePath, 'binary').then((fileContent) => {
  //       mammoth.extractRawText({ arrayBuffer: fileContent })
  //         .then((result) => {
  //           const extractedText = result.value.replace(/(<([^>]+)>)/gi, '').replace(/&nbsp;/g, ' ').trim();

  //           // Normalize newline characters
  //           const normalizedExtractedText = extractedText.replace(/\s+/g, ' ');
  //           const normalizedOriginalText = originalText.replace(/\s+/g, ' ');

  //           // Perform the assertion
  //           expect(normalizedExtractedText).to.contain(normalizedOriginalText);
  //         });
  //     });
  //   });
  // }

  exportAssessmentCsvReport(orgName) {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    cy.intercept('GET', '**/* ').as('export');
    cy.get('.scroller:first').scrollTo('bottom');
    this.elements.reportCsvBtn().should('be.visible').click({ force: true });
    cy.wait(2000)
    cy.get('.scroller:first').scrollTo('bottom');
    this.elements.reportCsvBtn1().should('be.visible').should('exist').scrollIntoView().click({ force: true });
    cy.wait('@export')
    this.elements.reportTitle().first().invoke('text').then((originalText) => {
    const modifiedText = `${orgName} ${originalText}`;
    cy.verifyDownload(modifiedText + ' Assessment Report.csv');
    });
  }

  // reviewDownloadedCSVAssessment() {
  //   this.clickToOpenAssessment();
  //   this.elements.assessReportBtn().should('be.visible').scrollIntoView().click({ force: true });
  //   cy.intercept('GET', '**/* ').as('export');
  //   cy.scrollTo('bottom');
  //   cy.wait('@export');
  //   this.elements.reportTitle().invoke('text').then((originalText) => {
  //     // Replace spaces with hyphens
  //     const modifiedText = originalText.replace(/ /g, '-');

  //     // Add assertions to verify the content of the downloaded CSV file
  //     cy.task('readCsv', 'cypress/downloads/' + modifiedText + '.csv').then(function (data) {
  //       const csvContent = data.rows;

  //       // Add assertions based on the content
  //       expect(csvContent).to.have.length.greaterThan(0); // Ensure there is at least one row

  //       // Example assertion to check header text for all columns
  //       const headers = Object.keys(csvContent[0]);

  //       // Adjust the expected headers based on your CSV file structure
  //       const expectedHeaders = ['Serial No', 'Section', 'Principle', 'QuestionId', 'Question', 'Citation', 'ObservationId', 'Compliance'
  //         , 'Risk', 'Conformity', 'Conformity points', 'Notes', 'Corrective Action', 'Recommendation', 'Causal Factors'
  //         , 'Test Prompt Text', 'Checkbox Prompt', 'Test prompt Radio2', 'Date and Time', 'Phone Number', 'Test Dropdown'
  //         , 'Question does not apply to the assessment'];

  //       expect(headers).to.deep.equal(expectedHeaders);

  //       // Example assertion based on the provided structure
  //       const firstRow = csvContent[0];
  //       expect(firstRow['Serial No']).to.equal('T-1');
  //       expect(firstRow['Question']).to.equal('Implementation: List observations about this topic.');
  //       //expect(firstRow['Question']).to.equal("Does the company program require that valves and controls to regulate mixer jacket coolants be located in such a manner that provides the operator access without jeopardizing the operator's safety?");
  //     });
  //   });
  // }


  exportAssessmentPrintReport() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.reportPrintBtn().should('be.visible').click({ force: true });
    // Wait for the print dialog to open
    cy.window().then((win) => {
      cy.wrap(win).should('have.property', 'print').then((printWindow) => {
        expect(printWindow).to.not.be.null;
      });
    });
  }

  hideExecutiveSummaryInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showExecutiveSummaryBtn().uncheck().should('not.be.checked');
    this.elements.executiveSummaryTitle({ timeout: 10000 }).should('not.exist');
  }

  viewExecutiveSummaryInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showExecutiveSummaryBtn().check().should('be.checked');
    this.elements.executiveSummaryTitle().should('exist').and('have.text', 'Executive Summary');
  }

  hideSummaryTableInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.summaryTableBtn().uncheck().should('not.be.checked');
    this.elements.summaryTableTitle({ timeout: 10000 }).should('not.exist');
  }

  viewSummaryTableInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.summaryTableBtn().check().should('be.checked');
    cy.contains('Summary Table').should('exist')
  }

  hideShowChartsInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showChartsBtn().should('exist').scrollIntoView().uncheck({ force: true }).should('not.be.checked');
    this.elements.ChartsTitle().should('not.exist');
  }

  viewShowChartsInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showChartsBtn().should('exist').scrollIntoView().check({ force: true }).should('be.checked');
    this.elements.ChartsTitle().should('exist').and('have.text', 'Charts');
    // this.elements.showChartsTitle1().should('exist').invoke('text')
    //   .then((text) => {
    //     expect(text).to.include('Distribution of Findings by');
    //     expect(text).to.include('Risk');
    //   });
    // this.elements.showChartsTitle2().should('exist').invoke('text')
    //   .then((text) => {
    //     expect(text).to.include('Distribution of Findings Across Principles and');
    //     expect(text).to.include('Risk');
    //   });
    // this.elements.showChartsTitle3().should('exist').invoke('text')
    //   .then((text) => {
    //     expect(text).to.include('Distribution of Findings by');
    //     expect(text).to.include('Conformity');
    //   });
    // this.elements.showChartsTitle4().should('exist').invoke('text')
    //   .then((text) => {
    //     expect(text).to.include('Distribution of Findings across Principles and');
    //     expect(text).to.include('Conformity');
    //   });
  }

  hideInapplicableQuestionsInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showInapplicableBtn().scrollIntoView().uncheck().should('not.be.checked');
    this.elements.inapplicableQuestionTitle({ timeout: 10000 }).should('not.exist');
  }

    viewInapplicableQuestionsInHtml() {
      this.clickToOpenAssessment();
      this.clickExpandSectionBtn();
      this.elements.selectQsn().first().should('exist').click({ force: true });
    
      // Check if QuestionNABtn is unchecked
      this.elements.markQsnNABtn().invoke('prop', 'checked').then(isChecked => {
        if (!isChecked) {
          cy.intercept('GET', '**/*').as('markedNA');
          this.elements.markQsnNABtn().check({ force: true });
          cy.wait('@markedNA').then(() => {
            cy.get('.px-4').click({ force: true });
          });
        }
      }).then(() => {
        cy.wait(1000);
        this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
        this.elements.showInapplicableBtn().scrollIntoView().check({ force: true }).should('be.checked');
        this.elements.inapplicableQuestionTitle().first().should('exist').and('have.text', 'NOT Applicable');
      });
    }

  hideCitationsInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showCitationsBtn().should('exist').scrollIntoView().uncheck({ force: true }).should('not.be.checked');
    this.elements.citationTitle({ timeout: 10000 }).should('not.exist');
  }

  viewCitationsInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showInapplicableBtn().scrollIntoView().check(({ force: true })).should('be.checked');
    this.elements.showCitationsBtn().scrollIntoView().check(({ force: true })).should('be.checked');
    this.elements.citationTitle().should('exist').and('have.text', 'Citation:');
  }

  hideAttachmentsInHtml() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showAttachmentsBtn().scrollIntoView().uncheck({ force: true }).should('not.be.checked');
    this.elements.showAttachmentsTitle({ timeout: 10000 }).should('not.exist');
  }

  viewAttachmentInHtml(desc) {
    this.clickToOpenAssessment()
    //this.assessmentBulkFileUploadSet1(desc)
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showAttachmentsBtn().check({ force: true }).should('be.checked');
    this.elements.showAttachmentsTitle().should('exist').and('have.text', 'Assessment Level Attachments');
  }

  viewRiskMatricesHeatMap() {
    this.clickToOpenAssessment()
    this.elements.reportBtn().should('exist').scrollIntoView().click({ force: true });
    this.elements.showRiskMatricesHeatmapBtn().check({ force: true }).should('be.checked');
    this.elements.showRiskMatricesHeatmapTitle().should('exist').and('have.text', 'IRO Summary');
  }

  // seeQuestionsInHTML() {
  //   this.clickToOpenAssessment()
  //   this.elements.assessReportBtn().should('be.visible').scrollIntoView().click({ force: true });
  //   cy.intercept('GET', '**/*').as('question');

  //   // Get the current URL of the page
  //   cy.url().then((originalUrl) => {

  //     // Store the text from seeQuestionContent for later comparison
  //     let seeQuestionContentText;
  //     this.elements.seeQuestionsContent().invoke('text').then((text) => {
  //       seeQuestionContentText = text.trim();
  //     });

  //     // Click on the link to open it in a new tab
  //     this.elements.seeQuestionsLinkBtn().should('be.visible')
  //       .invoke('removeAttr', 'target') // Remove the target attribute to open link in the same tab
  //       .invoke('attr', 'rel', 'noopener noreferrer') // Ensure security attributes for opening in a new tab
  //       .click({ force: true });

  //     // Get the new URL after the click and perform assertion to verify question URL
  //     cy.url().should('include', '/questions/647b22d2868da').then((newUrl) => {
  //       // Wait for the new tab to open
  //       cy.wait('@question');

  //       // Perform assertions on the content of the new tab
  //       this.elements.seeQuestionContent1().should('exist').should('be.visible').should('have.text', 'Assessment Question');

  //       // Assert the text from seeQuestionsContent matches seeQuestionContent2
  //       this.elements.seeQuestionContent2().invoke('text').should('eq', seeQuestionContentText);

  //       cy.intercept('GET', '**/*').as('report');
  //       cy.visit(originalUrl); // Go back to the original tab by visiting its URL

  //       // Wait for the new tab to open
  //       cy.wait('@report');

  //       // Check if the user is back at the original URL
  //       cy.url().should('eq', originalUrl);
  //     });
  //   });
  // }

  validateAssessmentsPage() {
    this.clickAssessmentsBtn()
    cy.url().should('contain', '/audits')
  }

  createAssessmentfromAllAssessPage(name,protocol) {
    this.clickAssessmentsBtn()
    cy.contains('button', 'New Assessment').click()
    cy.xpath("//input[@placeholder='Select an entity']").click()
    cy.get('#entity-item-0').click({force:true})
    cy.get(':nth-child(2) > .rbt > div > .rbt-input-main').type(protocol)
    cy.get('#protocol-typeahead-item-0').click()
    cy.get('#name').click();
    cy.get('#name').type(name + randomNum);
    cy.contains('button', 'Create Assessment').click()
    cy.contains(name + randomNum)
  }

  searchInAssessmentInvalid(searchKey) {
    this.clickAssessmentsBtn();
    cy.contains('a', 'Search in Assessments').click({force:true});
    cy.url().should('contain', '/search')
    cy.get('input[placeholder="Search"]').should('be.enabled').type(searchKey + randomNum);
    cy.intercept('GET', '**/*').as('search')
    cy.get('#searchContent').click({ force: true });
    cy.wait('@search')
    cy.contains('No results found').should('exist')
  }

  searchInAssessmentValid(name,desc,phone,value) {
    cy.clickTableLink(1,1);
    this.observations(desc, phone,name,value);
    PreActions.preActions();
    this.clickAssessmentsBtn();
    cy.contains('a', 'Search in Assessments').click({ force: true });
    cy.url().should('contain', '/search')
    const assessmentName = name + randomNum;
    cy.get('input[placeholder="Search"]').type(assessmentName,{delay: 0});
    cy.intercept('GET', '**/*').as('search')
    cy.get('#searchContent').click({ force: true });
    cy.wait('@search')
    cy.contains(assessmentName);
  }

  searchInAssessmentNavigate(name) {
    this.clickAssessmentsBtn();
    cy.contains('a', 'Search in Assessments').click({ force: true });
    cy.url().should('contain', '/search')
    const assessmentName = name + randomNum;
    cy.get('input[placeholder="Search"]').type(assessmentName);
    cy.intercept('GET', '**/*').as('search')
    cy.get('#searchContent').click({ force: true });
    cy.wait('@search')
    cy.intercept('GET', '**/*').as('questionPage')
    cy.get(':nth-child(1) > a > span > p').click({ force: true });
    cy.wait('@questionPage')
    cy.url().should('contain', '/questions')
  }

  filterAllAssessments(protocol) {
    this.clickAssessmentsBtn()
    //Get current date
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = currentDate.toLocaleString('en-Us', options);
    this.elements.asessDateRangeField().type(formattedDate + ' - ' + formattedDate, { delay: 0 })
    this.elements.asessDateRangeField().type("{esc}")
    this.elements.filterByEntityField().click({force:true})
    this.elements.firstEntity().click({force: true })
    this.elements.filterByProtocolField().type(protocol, { delay: 0 })
    this.elements.firstProtocol().click({force:true})
    cy.wait(1000)
    this.elements.filterByEntityField().invoke('attr','value').then((entityName) => {
      this.elements.firstFilteredAssessment().click({force:true})
      cy.contains(protocol)
      cy.contains(entityName)
    })
  }

  deleteAssessmentfromAllAssessPage() {
    this.clickAssessmentsBtn()
    cy.get('.text-decoration-none').first().click({ force: true })
    cy.contains('button', 'Settings').click({force: true})
    cy.get('.show.dropdown > .dropdown-menu > :nth-child(2)').click({ force: true })
    cy.get("div[class='form-check'] input[type='checkbox']").check({ force: true })
    cy.intercept('DELETE', '**/*').as('deletion')
    this.elements.delAssessBtn().click({ force: true })
    cy.wait('@deletion')
  }

  validateAssessmentGroupsPage() {
    cy.url().should('contain', '/groups')
  }

  createAssessmentGroup(name,msg) {
    this.elements.newGroupBtn().click({ force: true })
    //Generate a random number
    var randomNum2 = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.elements.groupTitle().type(name + randomNum2, { delay: 0 })
    cy.intercept('POST', '**/*').as('createGroup')
    this.elements.createGroupBtn().click({ force: true })
    cy.wait('@createGroup')
    //cy.contains(name + randomNum2)
    cy.contains(msg)
  }

  updateAssessmentGroup(name,msg) {
    this.elements.editAssessmentGroupBtn().should('exist').should('be.visible').as('editBtn')
    cy.get('@editBtn').click({ force: true })
    var randomNum3 = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.elements.groupTitle().clear().type(name + randomNum3, { delay: 0 })
    this.elements.updateGroupBtn().click({ force: true })
    //cy.contains(name + randomNum3)
    cy.contains(msg)
  }

  deleteAssessmentGroup() {
    this.elements.delAssessmentGroupBtn1().as('delBtn')
    cy.get('@delBtn')
      .should('exist')
      .should('be.visible')
      .click({ force: true })
    this.elements.confirmDelAssessGroupCheckboxBtn().check()  
    cy.intercept('DELETE','**/*').as('deleted')
    this.elements.delAssessmentGroupBtn2().should('be.enabled').click({ force: true });
    //cy.contains(getText).should('not.exist')
    cy.wait('@deleted')
  }

  observations(desc, phone,name1,value) {
    this.clickToOpenAssessment()
    this.elements.principleFilter().clear().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    //cy.intercept('GET','**/*').as('qstnLoaded')
    this.clickFirstQsn()
    //cy.wait('@qstnLoaded')
    this.elements.testPropmtText().clear({force:true}).type(desc, { delay: 0 })
    this.elements.selectAllBtn().scrollIntoView().click({ force: true })
    this.elements.child1TestPrompt().click({ force: true })
    this.elements.child2TestPrompt().click({ force: true })
    this.elements.testPromptRadio().click({ force: true })
    // Function to format date and time without leading zeros
    function formatDateTimeWithoutLeadingZeros(date) {
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      return `${formattedDate} ${formattedTime}`;
    }
    const expectedDateTime = new Date();
    //Function to remove leading zeros
    const formattedExpectedValue = formatDateTimeWithoutLeadingZeros(expectedDateTime);
    this.elements.dateField().scrollIntoView().clear().type(formattedExpectedValue, { delay: 0 });
    this.elements.dateField().type('{esc}', { force: true });
    this.elements.phoneNumberField().scrollIntoView().clear({force:true}).type(phone,{force:true});
    this.elements.testDropdown().should('exist').click({ force: true });
    this.elements.dropdownOption1().should('exist').click({ force: true });
    this.elements.findingsBtn().should('exist').click({ force: true });
    this.elements.secondParentNestedField().click({ force: true });
    this.elements.firstChildNestedBtn().click({ force: true });
    this.elements.secondChildNestedBtn1().click({ force: true });
    this.elements.secondChildNestedBtn2().click({ force: true });
    this.elements.scorableRadioBtn1().click({ force: true });
    this.elements.scorableRadioBtn2().click({ force: true });
    this.elements.checkbox1().check({ force: true });
    this.elements.checkbox2().check({ force: true });
    this.elements.nameField1().type(name1,{force:true});
    //  // Get current date and time
    //  const now = new Date();

    //  // Format the date and time (DD.MM.YYYY, hh:mm AM/PM)
    //  const day = ("0" + now.getDate()).slice(-2);
    //  const month = ("0" + (now.getMonth() + 1)).slice(-2); // getMonth is zero-indexed
    //  const year = now.getFullYear();
    //  const hours = now.getHours();
    //  const minutes = ("0" + now.getMinutes()).slice(-2);
    //  const period = hours >= 12 ? 'PM' : 'AM';
    //  const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    //  const formattedTime = `${formattedHours}:${minutes} ${period}`;
     
    //  // Combine to the final format
    //  //const formattedDate = `${day}.${month}.${year} ${formattedTime}`;
    //  const formattedDate = `${day}.${month}.${year}`
    //   // Log formatted date (optional)
    cy.log(formattedDate);
    //this.elements.expiryDateField().scrollIntoView().click().type(formattedDate,',','{rightarrow}',formattedTime,{force: true},{delay:0});
    this.elements.quantity1Field().scrollIntoView().type(value)
    this.elements.descriptionTxt().type(desc,{force:true});
    this.elements.addResponseBtn().click({force:true});
    //this.elements.nameField2().should('exist');
    this.elements.multilevelChoice1().click()
    this.elements.checkboxScore1().should('be.visible').click() 
    this.elements.riskBtns().scrollIntoView().should('exist').click({ force: true });
    this.elements.complianceBtn().should('exist').click({ force: true });
    this.elements.conformityBtn().should('exist').click({ force: true });
    this.elements.conformityNAField().should('exist').clear().type(desc, { delay: 0 });
    this.elements.notesField().scrollIntoView().clear().type(desc, { delay: 0 });
    this.elements.causalFactors().clear().type(desc, { delay: 0 });
    this.elements.recommendationField().scrollIntoView().clear().type(desc, { delay: 0 });
    cy.intercept('POST', '**/* ').as('observations');
    this.elements.saveBtn().click({ force: true });
    cy.wait('@observations');
    cy.contains('Observation saved successfully')
    cy.contains('Reponses saved successfully')
    this.elements.qsnCompleteCheckmark().should('exist').and('be.visible').scrollIntoView();
    this.elements.phoneNumberField().scrollIntoView().should('have.value',phone);
    this.elements.testDropdown().should('have.value','Dropdown1');
    this.elements.findingsBtn().should('be.checked');
    this.elements.secondParentNestedField().should('be.checked');
    this.elements.firstChildNestedBtn().should('be.checked');
    this.elements.secondChildNestedBtn1().should('be.checked');
    this.elements.secondChildNestedBtn2().should('be.checked');
    this.elements.scorableRadioBtn1().should('be.checked');
    this.elements.scorableRadioBtn2().should('be.checked');
    this.elements.checkbox1().should('be.checked');
    this.elements.checkbox2().should('be.checked');
    this.elements.nameField1().should('have.value',name1);
    this.elements.testPropmtText().should('have.text',desc);
    //assert 'Yes' button checked
    this.elements.yesBtn().scrollIntoView().should('be.checked');
    //assert 'No' checkbox button checked
    this.elements.noBtn().scrollIntoView().should('be.checked');
    //assert 'Maybe' checkbox button checked
    this.elements.maybeBtn().scrollIntoView().should('be.checked');
    this.elements.child1TestPrompt().scrollIntoView().should('be.checked');
    this.elements.findingsBtn().scrollIntoView().should('be.checked');
    this.elements.child2TestPrompt().scrollIntoView().should('be.checked');
    this.elements.testPromptRadio().scrollIntoView().should('be.checked');
    this.elements.dateField().scrollIntoView().should('have.value', formattedExpectedValue);
    this.elements.phoneNumberField().scrollIntoView().should('have.value', phone);
    this.elements.riskBtns().scrollIntoView().should('be.checked');
    this.elements.complianceBtn().scrollIntoView().should('be.checked');
    this.elements.conformityBtn().scrollIntoView().should('be.checked')
    this.elements.conformityNAField().should('exist').should('have.value',desc);
    this.elements.notesField().scrollIntoView().should('have.value',desc);
    this.elements.causalFactors().should('have.value',desc);
    this.elements.recommendationField().should('have.value',desc);
  }

   addObservation(name){
    this.clickToOpenAssessment();
    this.clickExpandSectionBtn();
    this.elements.addObservationBtn().click({force:true})
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.elements.observationNameTxt().should('be.visible').type(name + randomNum)
    cy.intercept('POST','**/*').as('ObservationCreated')
    this.elements.saveObservationBtn().click({force:true})
    cy.wait('@ObservationCreated')
    cy.contains(name + randomNum)
   }
   updateObservation(name){
    this.clickToOpenAssessment();
    this.clickExpandSectionBtn();
    //this.elements.newObservationTab().click({force:true})
    this.elements.obervationMenuBtn().click({force:true})
    this.elements.updateObservationBtn().click({force:true})
    var randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    this.elements.observationNameTxt().clear().type(name + randomNum)
    cy.intercept('PUT','**/*').as('ObservationUpdated')
    this.elements.updateObservationBtn2().click({force:true})
    cy.wait('@ObservationUpdated')
    cy.contains(name + randomNum)
   }
   deleteObservation(){
    this.clickToOpenAssessment();
    this.clickExpandSectionBtn();
   // this.elements.newObservationTab().click({force:true})
    this.elements.obervationMenuBtn().click({force:true})
    this.elements.delObservationBtn().click({force:true})
    this.elements.confirmDelObservationCheckboxBtn().click({force:true})
    cy.intercept('DELETE','**/*').as('DeleteObservation')
    this.elements.delObservationBtn2().click({force:true})
    cy.wait('@DeleteObservation')
    cy.contains('Observation deleted successfully')
   }

  markAssessmentNA() {
    this.clickToOpenAssessment()
    this.elements.assessSettings().should('be.visible').scrollIntoView().click({ force: true });
    this.elements.manageAssessBtn().should('be.visible').click({ force: true });
    cy.intercept('POST', '**/*').as('markedNA')
    this.elements.assessNABtn().should('be.visible').click({ force: true })
    cy.wait('@markedNA')
    this.elements.closeBtn().click({ force: true });
    cy.contains('100% Complete').should('exist')
    //cy.contains('100% Inapplicable')
  }

  

  markSectionNA() {
    this.clickToOpenAssessment()
    this.elements.principleFilter().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    cy.intercept('POST', '**/api/**').as('sectionNA')
    this.elements.sectionNABtn().click({ force: true }),
    this.elements.sectionNABtn().should('not.exist')
    //   cy.wait('@sectionNA')
    // this.clickExpandSectionBtn()
    // this.elements.selectQsn().click({ force: true })
    // this.elements.riskBtns().should('be.disabled')
    // this.elements.complianceBtn().should('be.disabled')
    // this.elements.conformityBtn().should('be.disabled')
  }

  markAuditQuestionNA() {
    this.clickToOpenAssessment()
    this.elements.principleFilter().clear().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    this.clickFirstQsn()
    cy.intercept('GET', '**/*').as('markedNA')
    this.elements.markQsnNABtn().click({ force: true })
    this.elements.saveBtn().click({ force: true });
    cy.wait('@markedNA')
    this.clickFirstQsn()
    this.elements.riskBtns().should('be.disabled')
    this.elements.complianceBtn().should('be.disabled')
    this.elements.conformityBtn().should('be.disabled')
  }

  uploadFilesToAuditQsns(desc) {
    this.clickToOpenAssessment()
    this.elements.principleFilter().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    this.clickFirstQsn()
    this.elements.attachFileDoc().scrollIntoView().click({ force: true });
    this.elements.fileField().attachFile('File.pdf', { action: 'drag-drop' });
    this.elements.fileDescField().clear().type(desc, { delay: 0 });
    cy.intercept('POST', '**/*').as('allFilesUploaded')
    this.elements.uploadFileBtn().click({ force: true });
    cy.wait('@allFilesUploaded')
    this.elements.filesPhotosSection()
      .invoke('text')
      .then((fileCount) => {
        expect(fileCount).to.have.length.of.at.least(1);
      });
  }

  updateAuditQstnFile(desc) {
    this.clickToOpenAssessment()
    this.elements.principleFilter().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    this.clickFirstQsn()
    this.elements.updateFileEvidence().scrollIntoView().click({ force: true })
    this.elements.fileName().type(desc)
    this.elements.evidenceFileDesc().clear().type(desc)
    this.elements.updateFileEvidence1().click()
    cy.contains(desc)
  }

  deleteAuditQstnFile() {
    this.clickToOpenAssessment()
    this.elements.principleFilter().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    this.clickFirstQsn()
    this.elements.deleteEvidenceFile().first().scrollIntoView().click({ force: true })
    this.elements.confirmEvidenceFileField().check()
    cy.intercept('DELETE', '**/*').as('FileDeletion')
    this.elements.deleteEvidenceFile1().click({ force: true })
    cy.wait('@FileDeletion')
  }
  
  addGeoatagToQsn(title) {
    this.clickToOpenAssessment();
    this.elements.principleFilter().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn();
    this.clickFirstQsn()
    this.elements.testPromptRadio().click({ force: true })
    this.elements.createGeotagBtn1().scrollIntoView().click({ force: true });
    // this.elements.saveObservation().click({force:true})
    // cy.wait(2200)
    // this.elements.createGeotagBtn1().scrollIntoView().click({ force: true });
    this.elements.geotagTitle().type(title + ' ' + randomNum, { delay: 0 });
    this.elements.geaotagLongitude().type('36.754324')
    this.elements.geaotagLatitude().type('-1.395362')
    this.elements.createLocationPhotosTab().click({ force: true });
    this.elements.geotagFile().attachFile('Image.jpg', { subjectType: "drag-n-drop" });
    this.elements.geotagUploadedFile().should('exist');
    this.elements.createGeotagBtn2().click({ force: true });
    cy.intercept('POST', '**/*').as('createGeotag');
    cy.wait('@createGeotag');
    cy.contains(title + ' ' + randomNum);
  }

  updateGeotag(title) {
    this.clickToOpenAssessment()
    this.elements.principleFilter().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    this.clickFirstQsn()
    this.elements.updateGeotagBtn1().first().scrollIntoView().click({ force: true })
    this.elements.geotagTitle().clear().type(title + '' + randomNum, { delay: 0 })
    this.elements.updateLocationPhotosTab().click({ force: true })
    cy.intercept('POST', '**/*').as('update')
    this.elements.updateGeotagBtn2().click({ force: true })
    cy.wait('@update')
    cy.contains(title + '' + randomNum)
  }

  exportGeotag() {
    this.clickToOpenAssessment()
    cy.get('.breadcrumb > :nth-child(3) > span').then((assessText) => {
          const assess = assessText.text().toLowerCase()
          //let modifiedAssessName = assess.toLowerCase().replace(/ /g, '-');
        this.elements.principleFilter().click({ force: true })
        this.elements.firstPrinciple().click({ force: true })
        this.clickExpandSectionBtn()
        this.clickFirstQsn()
        //cy.intercept('GET','**/*').as('export')
        this.elements.exportGeotagBtn().click({ force: true })
        //cy.wait('@export')
        this.elements.sectionLabel().first().invoke('text').then((section)=>{
        const modifiedSectionName = section.toLocaleLowerCase()
        cy.verifyDownload(assess.replace(/\+/g ,'') + '-' + modifiedSectionName.replace(/\s+/, '-').replace(/ /g, '').trim() + '.csv')
      })
    })
  }

  deleteGeotag() {
    this.clickToOpenAssessment()
    this.elements.principleFilter().click({ force: true })
    this.elements.firstPrinciple().click({ force: true })
    this.clickExpandSectionBtn()
    this.clickFirstQsn()
    //this.elements.geaotagInnerText().should('exist').scrollIntoView().then((text) => {
      cy.intercept('DELETE','**/*').as('delGeotag')
      this.elements.deleteGeotagBtn().first().scrollIntoView().click({ force: true })
      cy.wait('@delGeotag')
     // cy.contains(text.text().trim()).should('not.exist')
  ///})
  }

   assessmentBulkFileUploadSet1(desc,msg) {
    this.clickToOpenAssessment();
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({ force: true });
    this.elements.bulkUploadBtn().should('be.visible').click();
    this.elements.uploadBulfFilesField().selectFile(['file-sample.pdf', 'file-sample.docx', 'file-sample.xls','file-sample.xlsx','file-sample.txt','file-sample.jpg','file-sample.png', 'file-sample.webp', 'file-sample.csv', 'file-sample.pptx','file-sample.ppt','file-sample.gif','file-sample.mov','file-sample.vsdx','file-sample.xlsm'], { action: 'drag-drop'});
    //this.elements.uploadBulfFilesField().attachFile(['file-sample.pdf', 'file-sample.docx', 'file-sample.xls', 'file-sample.txt','file-sample.jpg'], { subjectType: 'drag-n-drop',mimeType:'application/pdf',encoding: 'utf-8' });
    cy.scrollTo('bottom')
    this.elements.lastUploadedFile().scrollIntoView()
    this.elements.bulkFileDesc().scrollIntoView().type(desc, { delay: 0 });
    this.elements.attachedFiles().should('be.exist').should('have.length', 15);
    //cy.intercept('POST', '**/*').as('allUploadRequests');
 
    this.elements.submitBulkUploadedFilesBtn().scrollIntoView().should('be.visible').click({force:true});
    //wait for files to upload and modal to close
    //cy.wait('@allUploadRequests')
    cy.wait(2000)
    cy.contains(msg).should('be.visible')
    cy.contains('file-sample.pdf');
    cy.contains('file-sample.docx');
    cy.contains('file-sample.xls')
    cy.contains('file-sample.xlsx');
    cy.contains('file-sample.txt')
    cy.contains('file-sample.jpg')
    cy.contains('file-sample.png')
    cy.contains('file-sample.webp')
    cy.contains('file-sample.csv')
    cy.contains('file-sample.pptx')
    cy.contains('file-sample.ppt')
    cy.contains('file-sample.gif')
    cy.contains('file-sample.mov')
    cy.contains('file-sample.vsdx')
    cy.contains('file-sample.xlsm')
    
  }
 
  organizationBulkFileUpload(desc) {
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({ force: true });
    this.elements.bulkUploadBtn().should('be.visible').click();
    this.elements.uploadBulfFilesField().attachFile(['file-sample1.pdf', 'file-sample2.pdf', 'file-sample3.pdf'], { subjectType: 'drag-n-drop' });
    this.elements.bulkFileDesc().scrollIntoView().type(desc, { delay: 0 });
    this.elements.attachedFiles().should('be.exist').should('have.length', 3);
    cy.intercept('POST', '**/*').as('allUploadRequests');
    this.elements.submitBulkUploadedFilesBtn().click({ force: true });
    //wait for files to upload and modal to close
    cy.wait('@allUploadRequests')
    cy.wait(5000)
    cy.contains('file-sample1.pdf');
    cy.contains('file-sample2.pdf');
    cy.contains('file-sample3.pdf');
  }

  updatefileDescription(desc) {
    this.clickToOpenAssessment()
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({ force: true });
    this.elements.editBulkFileBtn().should('be.visible').first().click({ force: true });
    this.elements.bulkFileDesc().clear().should('be.visible').clear().type(desc, { delay: 0 });
    this.elements.updateBulkFileBtn1().should('be.visible').click({ force: true });
    cy.wait(2000);
    this.elements.fileDesc().should('be.visible').invoke('text').then((description) => {
      expect(description).to.have.string(desc)
    })
  }

  downloadBulkFile() {
    this.clickToOpenAssessment();
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({ force: true });
    this.elements.downloadBulkFile().first().click({ force: true })
    //veerify file opens in new tab
    cy.window().then((newWindow) => {
      // Perform actions in the new tab
      cy.url().then((url) => {
        newWindow.location.href = url;
        cy.intercept('GET', '**/*').as('fileOpened')
        cy.wait('@fileOpened')
        //Assert page here
      });
    });
  }

  deleteBulkUploadedFile(msg) {
    cy.wait(1000)
    this.clickToOpenAssessment()
    cy.intercept('GET', '**/*').as('allRequests')
    this.elements.filesPhotosBtn().should('exist').should('be.visible').scrollIntoView().click({ force: true });
    cy.wait('@allRequests')
    cy.wait(1000)
   // cy.get(':nth-child(1) > :nth-child(1) > .text-start > .d-flex > div > .fiv-sqo').should('exist').then(rows=>{
      //cy.log(rows.length)
      for(let i = 10; i >0; i--){
          this.elements.delBulkFileBtn1().should('be.visible').first().click({ force: true })
          this.elements.confirmDeleteCheckbox().check()
          cy.intercept('DELETE','**/*').as('deleteBulkUploadedFile')
          this.elements.confirmDelBulkFileBtn().should('be.visible').click({ force: true })
          cy.contains(msg)
          cy.wait('@deleteBulkUploadedFile')
          cy.wait(1000)
          cy.reload()
      }
   // })
  }

  searchAssessment(name) {
    this.elements.assessSearchField().should('be.visible').type(name + randomNum, { delay: 0 });
    cy.wait(2000)
    this.clickToOpenAssessment()
    cy.contains(name + randomNum);
  }

  filterAssessment(name, protocol) {
    this.elements.protocolFilterBtn().should('be.visible').scrollIntoView().type(protocol, { delay: 0 });
    this.elements.protocolOption().should('be.visible').click({ force: true });
    cy.wait(2000)
    cy.contains(name).should('exist');
  }
  addAssessmentTeamMmember(name) {
    this.clickToOpenAssessment()
    this.elements.assessmentTeamLink().click()
    this.elements.addAssessTeamMemberBtn().click()
    this.elements.memberTxt().type(name, { delay: 0 })
    this.elements.selectFirstMember().click()
    this.elements.addMemberBtn().click()
  }
  deleteAssessmentTeamMmember(msg) {
    this.clickToOpenAssessment()
    this.elements.assessmentTeamLink().click()
    this.elements.delAssessTeamMemberBtn1.click({ force: true })
    this.elements.confirmDelAssessTeamMemberCheckBtn().check()
    this.elements.delAssessTeamMemberBtn2().click()
    cy.contains(msg)
    //cy.contains('Benjamin').should('not.exist')
  }
  assignMember(){
    this.clickToOpenAssessment()
    this.clickExpandSectionBtn()
    this.elements.assignMemberBtn().click({force:true})
  }
  
  addScopeMetaData(name, phone) {
    this.clickToOpenAssessment()
    this.elements.clickToScopeMetaData().should('exist').click({ force: true })
    this.elements.enterText().clear().type(name, { delay: 0 })
    this.elements.clickToCheckBox().should('exist').click({ force: true })
    this.elements.enterPhone().clear().type(phone, { delay: 0 });
    this.elements.clickToRadioBtn().scrollIntoView().should('exist').click({ force: true });
    cy.intercept('POST', '**/* ').as('metaResponse')
    this.elements.SaveMetaDataBtn().click({ force: true })
    cy.wait('@metaResponse')
    //All Asserts
    this.elements.enterText().should('have.text', name)
    this.elements.clickToCheckBox().should('be.checked')
    this.elements.enterPhone().should('have.value', phone)
    this.elements.clickToRadioBtn().should('be.checked')
  }

  addSignature(title) {
    this.clickToOpenAssessment()
    this.elements.signaturesLink().click({ force: true })
    this.elements.addSignatureBtn().click({ force: true })
    this.elements.closeLegalDisclaimerBtn().click({ force: true })
    this.elements.signatureTitle().type(title + randomNum)
    this.elements.signatureCanvas()
      .trigger('mousedown', { which: 1, force: true })
      .trigger('mousemove', { clientX: 100, clientY: 100, force: true })
      .trigger('mousemove', { clientX: 150, clientY: 150, force: true })
      .trigger('mouseup', { force: true });
    cy.intercept('POST', '**/*').as('saved')
    .click({ force: true })
    this.elements.saveSignatureBtn().trigger('mousedown').click({ force: true })
    cy.wait('@saved')
    cy.contains(title + randomNum)
  }
  deleteSignature() {
    this.clickToOpenAssessment()
    this.elements.signaturesLink().click({ force: true })
    this.elements.delSignatureBtn2().first().click()
    this.elements.assigneeInnerText().then((innerText) => {
      this.elements.confirmSignatoryTxt().type(innerText.text(), { delay: 0 })
    })
    this.elements.delSignatureBtn2().click()
  }
  applicabilityScreening(){
    
  }

}
export default new Assessment()