export default function domain () {}
describe('Domain ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })

it('Login user', () => {
    cy.get('#username'). type('flavia@80lines.com',{log: false});
    cy.get('#password'). type('@80Lines', {log: false});
    cy.contains('Continue'). scrollIntoView(). click();

})

it('Search valid domain ', () => {
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('cabot--staging.my.salesforce.com/'). type('{enter}');
})

it('Search invalid domain', () => {
    cy.get('[data-test-id="enter-a-domain"]').should('be.visible');
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('gdfshbtrs').type('{enter}');
})

it('Add main note to domain ', () => {
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes.dmt.example'). type('{enter}');
    cy.get ('button[data-test-id="main-note"]'). click();
    cy.get('[data-test-id="enter-the-new-main-note"]').should('be.visible');
    cy.get('[data-test-id="enter-the-new-main-note"]').click().wait(2000).clear().type(`Testing Main Note +${new Date().getTime()}`);
    cy.get('button[data-test-id="save"]').eq(1). click();
    cy.contains('Main note changed!').should('be.visible');
})

it('Add new note to domain ', () => {
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes.dmt.example').type('{enter}');
    cy.get('[data-test-id="add-note"]'). click();
    cy.get('[data-test-id="type-your-note-here"]'). click(). type (`Testing add new note +${new Date().getTime()}`); 
    cy.get('button[data-test-id="save"]').eq(1). click();
    cy.contains('Note added!').should('be.visible');
})

it('Required field : add note',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes.dmt.example').type('{enter}');
    cy.get('[data-test-id="add-note"]'). click();
    cy.get('button[data-test-id="save"]').eq(1). click();
    cy.contains('This field is required.');
})

it('Lock domain',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes.dmt.example').type('{enter}');
    cy.get('button[data-test-id="lock"]'). click();
    cy.get('button[data-test-id="confirm"]'). click();
})

it('Unlock domain',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes.dmt.example').type('{enter}');
    cy.get('[data-test-id="unlock"]').should('be.visible');
    cy.get('button[data-test-id="unlock"]'). click();
    cy.get('button[data-test-id="confirm"]'). click();
})

it('Rescan domain',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes.dmt.example').type('{enter}');
    cy.get('[data-test-id="rescan"]').should('be.visible');
    cy.get('button[data-test-id="rescan"]'). click();
    cy.get('button[data-test-id="confirm"]'). click();
    cy.contains('Rescan done!').should('be.visible')
})

it('Add categories to domain',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes6.dmt.example').type('{enter}');
    cy.get('[data-test-id="main-note"]').should('be.visible');
    cy.contains('Select a category...'). scrollIntoView(). click(). type ('Books & Literature');
    cy.contains('IAB1-1 - Arts & Entertainment - Books & Literature'). scrollIntoView(). click();
    cy.wait(2000)
    cy.contains('Select a category...'). scrollIntoView(). click(). type ('Fine art');
    cy.contains('IAB1-3 - Arts & Entertainment - Fine Art'). scrollIntoView(). click();
    cy.get('button[data-test-id="save"]'). click();
    cy.get('[data-test-id="type-your-note-here"]'). type('Test add categories to domain');
    cy.get('button[data-test-id="save"]').eq(1). click();
    cy.contains('Domain Updated!').should('be.visible');
})

it('Remove categories to domain',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviafernandes6.dmt.example').type('{enter}');
    cy.get('[data-test-id="main-note"]').should('be.visible');
    cy.get('button[data-test-id="delete"]').eq(1). click();
    cy.get('button[data-test-id="delete"]').eq(1). click();
    cy.get('button[data-test-id="save"]'). click();
    cy.get('[data-test-id="type-your-note-here"]'). type('Test delete categories to domain');
    cy.get('button[data-test-id="save"]').eq(1). click();
    cy.contains('Domain Updated!').should('be.visible');
})

it('Add categories to domain by phising, malware, content server / Discard changes',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type(`flavia${Math.round(Math.random() * 100)}.dmt.example`).type('{enter}');
    cy.get('[data-test-id="main-note"]').should('be.visible');
    cy.contains('Quick Add'). scrollIntoView();
    cy.get ('[data-test-id="phishing"]'). click();
    cy.get ('[data-test-id="malware"]'). click();
    cy.wait(3000);
    cy.get ('[data-test-id="content-server"]'). click();
    cy.get('[data-test-id="discard-changes"]').should('be.visible');
    cy.get ('[data-test-id="discard-changes"]'). click();
})

it('Add / remove application to domain',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type(`flavia${Math.round(Math.random() * 1000)}.dmt.example`).type('{enter}');
    cy.get('[data-test-id="main-note"]').should('be.visible');
    cy.contains('Select...'). scrollIntoView(). click(). type('Juan');
    cy.contains('Flávia App'). click();
    cy.get('button[data-test-id="delete"]').eq(0). click();
    cy.get('button[data-test-id="confirm"]'). click();
    cy.contains('Application removed!').should('be.visible');
})

it ('Export csv',()=>{
    cy.get('input[data-test-id="enter-a-domain"]').eq(0). click(). type('flaviamorais1.dmt.example').type('{enter}');
    cy.contains('History'). scrollIntoView();
    cy.get('button[data-test-id="export-csv"]'). click();
})
})