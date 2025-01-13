describe('Data driven test', () => {
    const testData = [
      { username: 'Testing 68', password: 'Test@123' },
      { username: 'Test123asd', password: 'Test@123' },
    ];
  
    testData.forEach((data) => {
      it(`should login for ${data.username}`, () => {
        cy.visit('https://www.demoblaze.com/'); // Visit the URL
        cy.get('#login2').click(); // Open the login modal
        cy.get('#loginusername', { timeout: 10000 }).should('be.visible').clear().type(data.username); // Type username
        cy.get('#loginpassword').type(data.password); // Type password
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Click login button
        
        // Validate login
        cy.contains('Welcome').should('be.visible'); 
  
        // Logout to reset for the next test case
        cy.get('#logout2').click();
      });
    });
  });
  