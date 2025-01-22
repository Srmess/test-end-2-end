describe("SignUp", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get('[data-test="register-button"]').click()
  })

  it("Should signup an user", () => {
    cy.get('[data-test="input-name"]').type("Marjorie Estiano")
    cy.get('[data-test="input-email"]').type("marjorie2@email.com")
    cy.get('[data-test="input-password"]').type("Senha123")
    cy.get('[data-test="input-confirm-password"]').type("Senha123")
    cy.get('[data-test="submit-button"]').click()
  })

  it("Should signup an existing user", () => {
    cy.get("input[name='nome']").type("Marcos")
    cy.get("input[name='email']").type("boynerd@outlook.com")
    cy.get("input[name='password']").type("Senha12345")
    cy.get("input[name='confirm_password']").type("Senha12345")
    cy.get('button[type="submit"]').click()
    cy.contains("p", "Falha ao cadastrar!")
  })

  it("Should submit wrong format data", () => {
    cy.get('[data-test="submit-button"]').click()
    cy.get('[data-test="submit-button"]').click()
    cy.contains("É necessário informar um endereço de email").should(
      "be.visible"
    )
    cy.contains("Crie uma senha").should("be.visible")
    cy.contains("Repita a senha criada acima").should("be.visible")
  })
})
