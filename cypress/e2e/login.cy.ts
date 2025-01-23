describe("login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get("[data-test='login-button'].initial__link").click()
  })

  it("should login correctly a user", () => {
    cy.login({ email: "ana@email.com", password: "Senha123" })
    cy.url().should("include", "/home")
  })

  it("should submit wrong format data", () => {
    cy.login({ email: "wrongemail", password: "wrongpassword" })
    cy.contains("p.error", "Por favor, verifique o email digitado").should(
      "be.visible"
    )
    cy.contains(
      "p.error",
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
    ).should("be.visible")
  })
})
