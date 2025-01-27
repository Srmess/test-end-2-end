describe("visitations", () => {
  it("should click button 'Ver pets disponíveis para adoção'", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/"),
      cy.contains("a", "Ver pets disponíveis para adoção").click()
  })

  it("should click header buttons", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/"),
      cy.get("a[aria-label='Tela inicial']").click()
    cy.url().should("contain", "/")
    cy.get("a[aria-label='Ir para Mensagens']").click()
    cy.url().should("contain", "/login")
  })

  it("should visit /login", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/login"),
      cy.contains("p", "Já tem conta? Faça seu login")
  })

  it("should visit /home", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/home"),
      cy.contains("p", "Olá! Veja os amigos disponíveis para adoção!")
    cy.get(".header__message").click()
  })
})
