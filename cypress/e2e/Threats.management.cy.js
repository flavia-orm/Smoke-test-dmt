export default function threatsManagement () {}
describe('Threats management ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })

it('Create new threat database ', () => {
cy.get('[data-test-id="threats-database"]'). click();
cy.contains('Threats Management'). scrollIntoView(). click();
cy.get('[data-test-id="new-threat"]'). click();
cy.get('[data-test-id="name"]'). click(). type (`New threat +${new Date().getTime()}`);
cy.contains('Select...'). scrollIntoView(). click();
cy.contains('Low'). scrollIntoView(). click();
cy.contains('Select categories'). scrollIntoView(). click();
cy.contains('Webmail & Chat'). scrollIntoView(). click();
cy.get('[data-test-id="short-description"]'). click(). type ('Lorem ipsum dolor sit amet');
cy.get('[data-test-id="mitigation-link"]'). click(). type ('https://test.com');
cy.get('.ql-editor'). click(). type ('Lorem ipsum dolor sit amet');
cy.get('[data-test-id="save"]'). click();

})

it('Required field ', () => {
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('[data-test-id="new-threat"]'). click();
    cy.get('[data-test-id="save"]'). click();
    cy.contains('Name').next().get ('span').contains ('This field is required.');
    cy.contains('Name'). scrollIntoView();
})

it('View threat ', () => {
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('button[data-test-id="view"]').eq(0). click();

})

it('Edit threat ', () => {
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-threat-name"]'). click(). type('Edit threat test cypress ');
    cy.wait(2000);
    cy.get('button[data-test-id="edit"]').eq(0). click();
    cy.get('[data-test-id="name"]').should('be.visible');
    cy.get('[data-test-id="short-description"]'). click(). clear(). type (`Edit description threat +${new Date().getTime()}`);
    cy.get('[data-test-id="save"]'). click();
})

it('Add new source to threat ', () => {
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-threat-name"]').should('be.visible');
    cy.get('[data-test-id="filter-by-threat-name"]'). click(). type('Domain to source test');
    cy.wait(2000);
    cy.get('[data-test-id="edit"]'). click(); 
    cy.get('[data-test-id="new-source"]'). click(); 
    cy.get('[data-test-id="source-name"]'). click(). type (`flavia${Math.round(Math.random() * 100)}.dmt.example`)
    cy.get('[data-test-id="reference-date"]'). click();
    cy.contains('Today'). scrollIntoView(). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains("Threat Source created!").should('be.visible')
    cy.get('[data-test-id="save"]'). click();
    cy.contains('Threat Source created!').should('be.visible');
})

it('Manage domains in source / threats management  ', () => {
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-threat-name"]').should('be.visible');
    cy.get('[data-test-id="filter-by-threat-name"]'). click(). type('Domain to source test');
    cy.get('button[data-test-id="edit"]').eq(0). click();
    cy.contains('Sources'). scrollIntoView(). click();
    cy.get('button[data-test-id="manage-domains"]').eq(0). click()
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 100)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.contains('Domain added!').should('be.visible')
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 100)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.contains('Domain added!').should('be.visible')
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 100)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.contains('Domain added!').should('be.visible')
})


it('Delete one domain to source / threats management ', () => {
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-threat-name"]'). click(). type('Delete one domain ');
    cy.get('[data-test-id="edit"]'). click();
    cy.contains('Sources'). scrollIntoView();
    cy.get('[data-test-id="manage-domains"]'). click();
    cy.get('button[data-test-id="delete"]').eq(1). click();
    cy.get('[data-test-id="confirm"]').should('be.visible');
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Source domains removed!').should('be.visible')
})

it('Delete all selected domains to source / threats management ', () => {
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-threat-name"]'). click(). type('Domain to source test');
    cy.get('button[data-test-id="edit"]').eq(0). click();
    cy.contains('Sources'). scrollIntoView();
    cy.get('[data-test-id="manage-domains"]').should('be.visible');
    cy.get('button[data-test-id="manage-domains"]').eq(0). click();
    cy.get('input[data-test-id="checkbox"]').eq(0). click();
    cy.get('[data-test-id="delete-all-selected"]'). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Source domains removed!').should('be.visible');
})

it('Delete threat', ()=>{
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Threats Management'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-threat-name"]'). click(). type('New threat');
    cy.get('button[data-test-id="delete"]').eq(0). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Threat deleted!').should('be.visible')
})
})