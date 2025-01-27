interface LoginParams {
  email: string
  password: string
}

interface SignupParams {
  name: string
  email: string
  password: string
  confirmPasword: string
}

declare namespace Cypress {
  interface Chainable<Subject> {
    login({ email, password }: LoginParams): void
    signUp({ name, email, password, confirmPasword }: SignupParams): void
  }
}

Cypress.Commands.add("login", ({ email, password }) => {
  cy.get("[data-test='input-loginEmail']").type(email)
  cy.get("[data-test='input-loginPassword']").type(password)
  cy.get("[data-test='submit-button']").click()
})

Cypress.Commands.add("signUp", ({ name, email, password, confirmPasword }) => {
  cy.get("input[name='nome']").clear().type(name)
  cy.get("input[name='email']").clear().type(email)
  cy.get("input[name='password']").clear().type(password)
  cy.get("input[name='confirm_password']").clear().type(confirmPasword)
  cy.get('button[type="submit"]').click()
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
