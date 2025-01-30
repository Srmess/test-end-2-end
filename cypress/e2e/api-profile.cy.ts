describe("request-api-profile", () => {
  it("Should request /perfil api route", () => {
    console.log(Cypress.env())

    cy.request({
      method: "GET",
      url:
        Cypress.env("API_BASE_URL") +
        "/adotante/perfil/" +
        Cypress.env("USER_ID"),
      headers: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200),
        expect(res.body.perfil).not.empty,
        expect(res.body.perfil).to.have.property("nome")
    })
  })
})
