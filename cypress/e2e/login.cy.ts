describe("login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get("[data-test='login-button'].initial__link").click()
  })

  it("should login correctly a user", () => {
    cy.get("[data-test='input-loginEmail']").type("ana@email.com")
    cy.get("[data-test='input-loginPassword']").type("Senha123")
    cy.get("[data-test='submit-button']").click()
    cy.url().should("include", "/home")
  })

  it("should submit wrong format data", () => {
    cy.get("[data-test='input-loginEmail']").type("wrongemail")
    cy.get("[data-test='input-loginPassword']").type("wrongpassword")
    cy.get("[data-test='submit-button']").click()
    cy.contains("p.error", "Por favor, verifique o email digitado").should(
      "be.visible"
    )
    cy.contains(
      "p.error",
      "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres"
    ).should("be.visible")
  })
})
