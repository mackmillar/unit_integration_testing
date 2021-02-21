// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('the number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })

  it(' the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('multiple operations be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('output as expected for a negative', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-2')
  })

  it('output as expected for a decimal', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5')
  })

  it('output as expected for a large number', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '98901')
  })

  it('output as expected for if you divide by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'undefined')
  })
})
