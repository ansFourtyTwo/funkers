describe('The index page', () => {
  it('has a nice title', () => {
    cy.visit('/');
    cy.title().should('eq', 'Funkers!');
  });

  it('has a navigation bar on the side', () => {
    cy.visit('/');
    cy.get('div#sidebar').should('exist');
  });
});
