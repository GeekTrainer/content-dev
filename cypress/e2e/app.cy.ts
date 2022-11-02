/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
    it('should have Pets header', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
  
      // Find a link with an href attribute containing "about" and click it
      cy.get('h1').contains('Pets')
    })

    // check if page has a textbox with id of name
    it('should have a textbox with id of name', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#name').should('exist')
    })
  })
  
  // Prevent TypeScript from reading file as legacy script
  export {}