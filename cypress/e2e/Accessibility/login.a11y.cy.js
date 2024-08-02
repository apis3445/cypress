import 'wick-a11y';
describe("test login", function () {
    it("Login demo", function () {

        cy.visit("https://shop.webdriver.io/");
        cy.get("h1").should('be.visible')
        cy.checkAccessibility();
    })
})