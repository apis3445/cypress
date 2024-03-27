describe("test login", function () {
    it("Login demo", function () {

        cy.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        cy.visit("https://effizientedemo.azurewebsites.net");

        // Taking a screenshot
        cy.screenshot(); // screenshot

        // Clicking on a specific element and navigating to another URL
        cy.get("#company").type('Demo');
        cy.get("#user").type('Demo');
        cy.get("#password").type('Demo');
        cy.get("#login").click();

        cy.screenshot();
    });
});
