export default function SourcesSumary () {}
describe('Source Sumary ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })

it('Create new source summary', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="new-source"]'). click();
    cy.get('[data-test-id="source-name"]'). click(). type ('flavia.test.cypress')
    cy.get('[data-test-id="reference-date"]'). click();
    cy.contains('Today'). scrollIntoView(). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains("Threat Source created!").should('be.visible'); 
})

it('Required fields new source', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="new-source"]'). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Source name').next().get ('span').contains ('This field is required.');
    cy.contains('Reference date').next().get ('span').contains ('This field is required.');
})

it('Manage domains to source summary', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('Add domains cypress','{enter}');
    cy.wait(3000);
    cy.get('button[data-test-id="manage-domains"]').eq(0). click();
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 100)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.get('[data-test-id="add-new-domain"]').should('be.visible');
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 80)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.get('[data-test-id="add-new-domain"]').should('be.visible');
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 50)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.get('[data-test-id="add-new-domain"]').should('be.visible');
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 70)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.contains("Domain added!").should('be.visible'); 
})

it('Add two equal domains error message', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('Add domains cypress','{enter}');
    cy.wait(3000);
    cy.get('button[data-test-id="manage-domains"]').eq(0). click();
    cy.get('[data-test-id="add-new-domain"]'). click(). type('flavia22.dmt.example');
    cy.get('[data-test-id="add"]'). click();
    cy.contains('Domain added!').should('be.visible');
    cy.get('[data-test-id="add-new-domain"]'). click(). type('flavia22.dmt.example');
    cy.get('[data-test-id="add"]'). click();
    cy.contains("Domain 'flavia22.dmt.example' already exists").should('be.visible'); 
})


it('Export domains to csv / source summary',()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('gabriel - test source','{enter}');
    cy.wait(3000);
    cy.get('button[data-test-id="manage-domains"]').eq(0). click();   
    cy.get('[data-test-id="export-domains-to-csv"]'). click();
})

it('Manage threats to source summary', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('Add threats cypress','{enter}');
    cy.wait(3000);
    cy.get('button[data-test-id="manage-threats"]').eq(0). click();
    cy.contains('Select...'). scrollIntoView(). click();
    cy.contains('Flávia test ²²'). scrollIntoView(). click();
    cy.get('[data-test-id="add"]'). click();
    cy.contains('Threat linked!').should('be.visible');
    cy.contains('Select...'). scrollIntoView(). click();
    cy.contains('name edit'). scrollIntoView(). click();
    cy.get('[data-test-id="add"]'). click();
    cy.contains('Threat linked!').should('be.visible');
})

it('Delete a source summary', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('321231321asdasd','{enter}');
    cy.wait(3000);
    cy.get('button[data-test-id="delete"]').eq(0). click();
    cy.get('[data-test-id="confirm"]').should('be.visible');
    cy.get('[data-test-id="confirm"]'). click();
    cy.wait(2000);
    cy.contains('It is not possible to delete 321231321asdasd because it has threats and/or domains related to it').should('be.visible')
})

it('Delete one threat to manage threats / source summary', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('Add threats cypress','{enter}');
    cy.wait(3000);
    cy.get('button[data-test-id="manage-threats"]').eq(0). click(); 
    cy.wait(3000);
    cy.get('button[data-test-id="delete"]').eq(1). click();
    cy.get('[data-test-id="confirm"]').should('be.visible');
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Threat removed!').should('be.visible');
}) 

it('Delete all selected threat to manage threats / source summary ', () => {
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('Add threats cypress','{enter}');
    cy.wait(3000);
    cy.get('button[data-test-id="manage-threats"]').eq(0). click(); 
    cy.wait(3000);
    cy.get('input[data-test-id="checkbox"]').eq(0). click();
    cy.get('[data-test-id="delete-all-selected"]').should('be.visible');
    cy.get('[data-test-id="delete-all-selected"]'). click();
    cy.get('[data-test-id="confirm"]').should('be.visible');
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Threat removed!').should('be.visible');
})

it('Delete one domain to manage domains / source summary', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('Add domains cypress','{enter}');
    cy.wait(2000);
    cy.get('button[data-test-id="manage-domains"]').eq(0). click();
    cy.wait(2000);
    cy.get('button[data-test-id="delete"]').eq(1). click();
    cy.get('[data-test-id="confirm"]').should('be.visible');
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Source domains removed!').should('be.visible');
})

it('Delete all selected domains to manage domains / source summary ', () => {
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('Add domains cypress','{enter}');
    cy.wait(2000);
    cy.get('button[data-test-id="manage-domains"]').eq(0). click();
    cy.wait(2000);
    cy.get('input[data-test-id="checkbox"]').eq(0). click();
    cy.get('[data-test-id="delete-all-selected"]').should('be.visible');
    cy.get('[data-test-id="delete-all-selected"]'). click();
    cy.get('[data-test-id="confirm"]').should('be.visible');
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Source domains removed!').should('be.visible');
    
})

it('Delete a source summary', ()=>{
    cy.get('[data-test-id="threats-database"]').should('be.visible');
    cy.get('[data-test-id="threats-database"]'). click();
    cy.contains('Sources Summary'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-source-name"]'). click(). type ('flavia.test.cypress','{enter}');
    cy.wait(2000);
    cy.get('button[data-test-id="delete"]').eq(0). click();
    cy.get('[data-test-id="confirm"]').should('be.visible');
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains('Source deleted!').should('be.visible')
})
})