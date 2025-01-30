describe("request-api-adopet", () => {
  it("Should request messages in api", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("API_BASE_URL") + "/mensagem/" + Cypress.env("USER_ID"),
      headers: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200),
        expect(res.body).not.empty,
        expect(res.body).to.have.property("msg")
    })
  })
})
