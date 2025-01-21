describe("SignUp", () => {
  it("Should signup an existing user", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.contains("a", "Cadastrar").click()
    cy.get("input[name='nome']").type("Marcos")
    cy.get("input[name='email']").type("boynerd@outlook.com")
    cy.get("input[name='password']").type("Senha12345")
    cy.get("input[name='confirm_password']").type("Senha12345")
    cy.get('button[type="submit"]').click()
    cy.contains("p", "Falha ao cadastrar!")
  })

  // it("Should signup a new user", () => {
  //   cy.visit("https://adopet-frontend-cypress.vercel.app/")
  //   cy.contains("a", "Cadastrar").click()
  //   cy.get("input[name='nome']").type("Marcos")
  //   cy.get("input[name='email']").type("boynerd@outlook.com")
  //   cy.get("input[name='password']").type("Senha12345")
  //   cy.get("input[name='confirm_password']").type("Senha12345")
  //   cy.get('button[type="submit"]').click()
  //   cy.url().should("include", "/login")
  // })
})
