describe('HomeComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the logo on the home page', () => {
    cy.get('.brand-logo').should('be.visible');
  });

  it('should navigate to the home page when the logo is clicked', () => {
    cy.get('.brand-name').click();
    cy.url().should('eq', 'http://localhost:4200/');
  });

  it('should display the content section on the home page', () => {
    cy.get('.content').should('be.visible');
  });

  it('should display the input field and search button', () => {
    cy.get('input').should('be.visible');
    cy.get('button').should('be.visible').and('contain.text', 'Search');
  });

  it('should display all housing locations initially', () => {
    cy.get('app-housing-location').should('have.length', 10);
  });

  it('should filter housing locations based on the input', () => {
    cy.get('input').type('Chi');
    cy.get('button').click();
    cy.get('app-housing-location').should('have.length', 2);
  });
  it('should navigate to the details page when "Learn More" is clicked', () => {
    cy.contains('Learn More').click();
    cy.url().should('match', /\/details\/\d+/);
  });
});
