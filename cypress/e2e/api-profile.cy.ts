describe("request-api-profile", () => {
  it("Should request /perfil api route", () => {
    const AUTH_TOKEN = Cypress.env("AUTH_TOKEN")
    const USER_TEST_ID = Cypress.env("USER_TEST_ID")
    const API_BASE_URL = Cypress.env("API_BASE_URL")

    cy.request({
      method: "GET",
      url: API_BASE_URL + "/adotante/perfil/" + USER_TEST_ID,
      headers: {
        authorization: AUTH_TOKEN,
      },
    }).then((res) => {
      expect(res.status).to.be.equal(200),
        expect(res.body.perfil).not.empty,
        expect(res.body.perfil).to.have.property("nome")
    })
  })
})
