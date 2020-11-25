describe('Deepmatter test', function () {
  beforeEach(() => {
    cy.visit('https://www.deepmatter.io/');
    cy.get('#cookieNotice')
      .find('[type="button"]')
      .eq(0)
      .click({ force: true });
  });
  it('1. Select “Investors” from “Investors” dropdown and verify the URL is “https://www.deepmatter.io/investors/”', () => {
    cy.get('#dropdown1240').click();
    cy.get('.dropdown-item')
      .contains('Investors')
      .click()
      .url()
      .should('include', 'https://www.deepmatter.io/investors/');
  });
  it('2. Enter an invalid email address and verify that the error text contains “Please enter a valid email address”', () => {
    // Navigate to the “Subscription centre” (bottom of the page)
    cy.get('#c3327ec4-c554-4de3-fa79-f7e182ae4372')
      .type('invalidEmail')
      .should('have.value', 'invalidEmail');
    cy.get('.umbraco-forms-navigation > .btn').click();
    cy.get('.field-validation-error').should(
      'have.text',
      'Please enter a valid email address'
    );
  });
  it('3. Navigate to “About us” section and take a screenshot.', () => {
    // Navigate to “About us” section 4. Take a screenshot.
    cy.get('.quick-links').find('a').contains('About us').click();
    cy.screenshot();
  });
  // Additional test which could be automated on the deepmatter site.
  it('4. Navigate to Subscription deepmatter.io', () => {
    cy.get('.card-footer > .btn')
      .eq(0)
      .click()
      .url()
      .should('include', '/digitalglassware/')
      .get('[title="Free Demo"]')
      .eq(0)
      .click()
      .url()
      .should('include', 'free-demo/')
      .get('h1')
      .contains('Free Demonstration of DigitalGlassware™')
      .should('be.visible');
  });
});

// Are there any changes to the site which could be made to make automation easier?
