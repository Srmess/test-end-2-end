describe("login", () => {
  it("should login user", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/"),
      cy.contains("a", "Fazer login").click()
    cy.get("input[name='email']").type("boynerd@outlook.com")
    cy.get("input[name='password']").type("Senha12345")
  })
})
