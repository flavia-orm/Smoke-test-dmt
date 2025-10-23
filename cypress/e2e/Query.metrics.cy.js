export default function QueryMetrics () {}
describe('Query Metrics ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })

it('Search domains report ', () => {
    cy.get('[data-test-id="support"]'). click();
    cy.contains('Query Metrics'). scrollIntoView(). click();
    cy.get('[data-test-id="search-domains"]'). click(). type (cypress.env('domains'));
    cy.contains('Start date'). scrollIntoView(). click();
})
})