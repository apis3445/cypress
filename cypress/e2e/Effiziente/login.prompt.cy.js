describe("test login", function () {
    it("Login demo with cypress prompt", function () {

      cy.prompt(
        [
          'visit https://effizientedemo.azurewebsites.net',
          'type "Demo" in the copmany field',
          'type "Demo" in the user field',
          'type {{password}} in the password field',
          'click the login button',
          'verify we are redirected to the dashboard',
        ],
        {
          placeholders: { password: 'Demo' },
        }
      )
    })
})