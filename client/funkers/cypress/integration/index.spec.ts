// https://docs.cypress.io/api/introduction/api.html

describe('The index has a nice title', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.title().should('eq', 'Funkers!');
  });
});
