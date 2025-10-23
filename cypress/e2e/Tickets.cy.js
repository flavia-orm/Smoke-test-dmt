export default function Tickets () {}
describe('Tickets ', () => {
   
    beforeEach(() => {
    const href = cy.url()
    console.log ('href', href);
    cy.viewport(1280, 720);
    cy.visit(Cypress.env('debugUrl'));
   
})

it('See details of tickets ', () => {
    cy.get('button[data-test-id="see-details"]').eq(1). click(); 
    cy.wait(2000);
    cy.get('[data-test-id="close"]'). click(); 
})
})