export default function Reports () {}
describe('Reports ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })

it('Search domains report ', () => {
    cy.get('[data-test-id="support"]'). click();
    cy.contains('Reports'). scrollIntoView(). click();
    cy.get('[data-test-id="search-domains"]'). click(). type (cypress.env('domains'));
    cy.get('[data-test-id="search"]'). click();
})

})