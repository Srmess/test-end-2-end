// Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.
// Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
// Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
// Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.

describe("exercises module 2", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
  })

  it("should do the visits exercises", () => {
    cy.title().should("contain", "AdoPet"),
      cy.contains("p", "Quem ama adota!").should("be.visible")
    cy.contains(
      "p",
      "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
    ).should("be.visible")
  })

  it("should login with a different flow", () => {
    cy.get("a.header__message").click()
    cy.url().should("contain", "/login")
    cy.get("input[name='email']").type("boynerd@outlook.com")
    cy.get("input[name='password']").type("Senha12345")
    cy.get("button[type='submit']").click()
    cy.url().should("contain", "/home")
  })
})
