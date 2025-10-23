export default function feedsmanagement () {}
describe('Feeds management ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })

it('Create a new feed management ', () => {
    cy.get('[data-test-id="feeds-insights"]'). click();
    cy.contains('Feeds Management'). scrollIntoView(). click();
    cy.get('[data-test-id="new-feed"]'). click();
    cy.get('[data-test-id="feed-name"]'). click().type('Flávia test cypress');
    cy.get('[data-test-id="cal-id"]'). click().type('source.flavia.test');
    cy.get('[data-test-id="url"]'). click().type('www.test.com');
    cy.contains('Select a status'). scrollIntoView(). click();
    cy.contains('Discontinued'). scrollIntoView(). click();
    cy.get('[data-test-id="date-deployed-to-production"]'). click();
    cy.contains('Today'). scrollIntoView(). click();
    cy.contains('Select...'). scrollIntoView(). click();
    cy.contains('test update'). scrollIntoView(). click();
    cy.get('[data-test-id="review-url"]'). click().type ('www.testflavia.com'); 
    cy.contains('Select Webshrinker categories...'). scrollIntoView(). click();
    cy.contains('business'). scrollIntoView(). click();
    cy.get('[data-test-id="contact"]'). click().type ('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    cy.get('[data-test-id="notes"]'). click().type ('Sed mollis, neque a aliquam egestas, lectus mauris mattis odio, non suscipit elit turpis sit amet est.');
    cy.get('[data-test-id="success"]'). click();
    cy.contains("Feed created!").should('be.visible'); 
})

it('Edit a feed management ', () => {
    cy.get('[data-test-id="feeds-insights"]'). click();
    cy.contains('Feeds Management'). scrollIntoView(). click();
    cy.get('[data-test-id="search-feed-by-name"]'). click(). type('New feed edit cypress');
    cy.wait(3000);
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="contact"]'). click(). clear(). type (`Testing edit contact +${new Date().getTime()}`);
    cy.get('[data-test-id="notes"]'). click(). clear(). type (`Testing edit notes +${new Date().getTime()}`);
    cy.get('[data-test-id="success"]'). click();
    cy.contains("Feed updated!").should('be.visible');
})

it('Export csv ', () => {
    cy.get('[data-test-id="feeds-insights"]'). click();
    cy.contains('Feeds Management'). scrollIntoView(). click();
    cy.wait(3000);
    cy.get('input[data-test-id="checkbox"]').eq(1). click();
    cy.get('input[data-test-id="checkbox"]').eq(2). click();
    cy.get('[data-test-id="export-csv"]'). click();
})

it('Delete a feed management ', () => {
    cy.get('[data-test-id="feeds-insights"]'). click();
    cy.contains('Feeds Management'). scrollIntoView(). click();
    cy.get('[data-test-id="search-feed-by-name"]'). click(). type('Flávia test cypress');
    cy.wait(3000);
    cy.get('[data-test-id="delete"]'). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains("Feed deleted!").should('be.visible');
})
})