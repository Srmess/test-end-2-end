describe("SignUp", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get('[data-test="register-button"]').click()
  })

  it("Should signup an user", () => {
    cy.signUp({
      name: "Marjorie Estiano",
      email: "marjorie2@email.com",
      password: "Senha123",
      confirmPasword: "Senha123",
    })
  })

  it("Should signup an existing user", () => {
    cy.signUp({
      name: "Marcos",
      email: "boynerd@outlook.com",
      password: "Senha12345",
      confirmPasword: "Senha12345",
    })
    cy.contains("p", "Falha ao cadastrar!")
  })

  it("Should submit wrong format data", () => {
    cy.get('[data-test="submit-button"]').click()
    cy.contains("É necessário informar um endereço de email").should(
      "be.visible"
    )
    cy.contains("Crie uma senha").should("be.visible")
    cy.contains("Repita a senha criada acima").should("be.visible")
  })
})
