/// <reference types="cypress" />

/// <reference types="cypress" />

//
 
describe('fazer login', () => {

  it('fazer login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('fazer login com usuario invalido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#user-name').type('123456')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('h3[data-test="error"]')
      .contains('Epic sadface: Username and password do not match any user in this service')
      .should('be.visible')
  })

  it('fazer login com senha invalido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()

    cy.get('h3[data-test="error"]')
      .contains('Epic sadface: Username and password do not match any user in this service')
      .should('be.visible')
  })

  it('fazer login com senha e usuario invalido', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')

    cy.get('#user-name').type('standard_user123')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()

    cy.get('h3[data-test="error"]')
      .contains('Epic sadface: Username and password do not match any user in this service')
      .should('be.visible')
  })
})
