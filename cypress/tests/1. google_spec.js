describe('Google test', () => {
  it('1. visit to google and verify if deepmatter exist in the search result', () => {
    cy.setCookie('CONSENT', 'YES+GB.en-GB+V9+BX').visit(
      'https://www.google.com'
    );
    cy.get('.gLFyf')
      .type('deepmatter{enter}')
      .should('have.value', 'deepmatter');
    cy.get('.yuRUbf > a')
      .should('have.attr', 'href')
      .and('contains', 'deepmatter');
  });
});
