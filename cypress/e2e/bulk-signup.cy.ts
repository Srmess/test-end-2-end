import { users } from "../fixtures/users.json"

describe("bulk signup", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get('[data-test="register-button"]').click()
  })

  users.map(({ email, name, password, confirmPasword }) => {
    it("should register an user from bulk users json", () => {
      cy.signUp({
        name,
        email,
        password,
        confirmPasword,
      })
    })
  })
})
