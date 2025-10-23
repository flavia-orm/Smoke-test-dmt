export default function AppAwareAppplications () {}
describe('AppAware Applications ', () => {
   
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('/')
      })
      

it('Create new Application ', () => {
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('Applications'). scrollIntoView(). click();
    cy.get('[data-test-id="new-app"]'). click();
    cy.get('[data-test-id="app-name"]'). click(). type(`New app cypress ${Math.round(Math.random() * 280)}`);
    cy.get('[data-test-id="description"]'). click(). type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    cy.contains('Select a Category'). scrollIntoView(). click();
    cy.contains('BUSINESS'). scrollIntoView(). click();
    cy.get('[data-test-id="home-page-url"]'). click(). type('www.test.com');
    cy.get('[data-test-id="logo"]'). click().type('https://yt3.googleusercontent.com/iD0oePTGV8tZwEEP_WEG2rvyNiQAVfmjhawFMCj17ARjjmw-J70k9NDjSE5QTzD9Vk3ayBU=s900-c-k-c0x00ffffff-no-rj');
    cy.get('[data-test-id="icon"]'). click().type('https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png');
    cy.get('[data-test-id="favicon"]'). click().type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3Hhd3gabp4xhZBw9LaqCFt0DqLKzzU8BeC4p63uVcb0TgcYQ8bchmFzgSM8SR_LbtTU&usqp=CAU') 
    cy.get('[data-test-id="success"]'). click();
    cy.contains("Application created!").should('be.visible');
})

it('Edit Application ', () => {
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('Applications'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-application"]'). click(). type('Add domain cypress');
    cy.wait(3000);
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="description"]'). click().clear(). type (`Testing edit description +${new Date().getTime()}`);
    cy.get('[data-test-id="success"]'). click();
    cy.contains("Application updated!").should('be.visible');
})

it('Add domains to application ', () => {
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('Applications'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-application"]'). click(). type('Add domain cypress');
    cy.wait(3000);
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="add"]').should('be.visible');
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 1000)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.contains("Domain added!").should('be.visible');
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 1000)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.contains("Domain added!").should('be.visible');
    cy.get('[data-test-id="add-new-domain"]'). click(). type(`flavia${Math.round(Math.random() * 1000)}.dmt.example`);
    cy.get('[data-test-id="add"]'). click();
    cy.contains("Domain added!").should('be.visible');
})

it('Delete one domain ', () => {
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('Applications'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-application"]'). click(). type('Add domain cypress');
    cy.wait(3000);
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="add"]').should('be.visible');
    cy.get('button[data-test-id="delete"]').eq(0). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains("Application domains removed!").should('be.visible');
})

it('Delete all selected domains ', () => {
    cy.get('[data-test-id="appaware"]'). click();
    cy.contains('Applications'). scrollIntoView(). click();
    cy.get('[data-test-id="filter-by-application"]'). click(). type('Add domain cypress');
    cy.wait(3000);
    cy.get('[data-test-id="edit"]'). click();
    cy.get('[data-test-id="add"]').should('be.visible');
    cy.get('input[data-test-id="checkbox"]').eq(0). click();
    cy.get('[data-test-id="delete-selected"]').should('be.visible');
    cy.get('[data-test-id="delete-selected"]'). click();
    cy.get('[data-test-id="confirm"]'). click();
    cy.contains("Application domains removed!").should('be.visible');
})
})