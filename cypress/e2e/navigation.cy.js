describe('Navigation Test', () => {
    it('should navigate to the correct page', () => {
      cy.visit('https://www.demoblaze.com/');
      cy.get('#cartur').click(); // Click the "cart" button
      cy.url().should('include', '/cart'); // Verify the URL contains "/cart"
    });
  });
  