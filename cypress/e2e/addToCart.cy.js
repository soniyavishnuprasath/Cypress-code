describe('add a product to cart',()=>{
    it('add to cart',()=>{
        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.get('#loginusername', { timeout: 10000 }).should('be.visible').clear().type('Testing 68');
        cy.get('#loginpassword',{ timeout: 10000 }).should('be.visible').clear().type('Test@123');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get(':nth-child(8) > .card > .card-block > .card-title > .hrefch').click();
        cy.get('.col-sm-12 > .btn',{ timeout: 10000 }).should('be.visible').click();
        cy.on('window:alert', (alertMessage) => {
            expect(alertMessage).to.equal('Product added.');
          });
          
        
    })
})