export default function AppAwareCategories () {}
describe('AppAware Categories ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })

it('Create new AppAware category ', () => {
    cy.wait(6000);
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('AppAware Categories'). scrollIntoView(). click();
    cy.get('[data-test-id="new-appaware-category"]'). click();
    cy.get('[data-test-id="name"]'). click(). type ('Category cypress test');
    cy.get('[data-test-id="save"]'). click();
    cy.contains("AppAware Category created!").should('be.visible'); 
})

it('Required field ', () => {
    cy.wait(5000);
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('AppAware Categories'). scrollIntoView(). click();
    cy.get('[data-test-id="new-appaware-category"]'). click();
    cy.get('[data-test-id="save"]'). click();
    cy.contains('Name').next().get ('span').contains ('This field is required.'); 

})

it('Edit AppAware category ', () => {
    cy.wait(5000);
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('AppAware Categories'). scrollIntoView(). click();
    cy.get('[data-test-id="search-appaware-categories"]'). click(). type('Edit cypress');
    cy.wait(3000);
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="name"]'). click(). clear(). type(`Edit cypress +${new Date().getTime()}`);
    cy.get('[data-test-id="save"]'). click();
    cy.contains("AppAware Category updated!").should('be.visible'); 
})

it('Delete AppAware category ', () => {
    cy.wait(5000);
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('AppAware Categories'). scrollIntoView(). click();
    cy.get('[data-test-id="search-appaware-categories"]'). click(). type('Category cypress test');
    cy.wait(3000);
    cy.get('button[data-test-id="delete"]'). eq(0). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains("AppAware Category deleted!").should('be.visible'); 
})
})