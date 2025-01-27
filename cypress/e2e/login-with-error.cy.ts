describe("login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get("[data-test='login-button'].initial__link").click()
    cy.intercept(
      "POST",
      "https://adopet-api-i8qu.onrender.com/adotante/login",
      {
        statusCode: 400,
      }
    ).as("stubPost")
  })

  it("should submit wrong password", () => {
    cy.get('[data-test="submit-button"]').click()
    cy.contains("É necessário informar um endereço de email").should(
      "be.visible"
    )
    cy.contains("Insira sua senha").should("be.visible")
  })

  it("should throw an error even with corect credentials", () => {
    cy.login({ email: "ana@email.com", password: "Senha123" })
    cy.contains("Falha no login. Consulte suas credenciais.").should(
      "be.visible"
    )
  })
})
