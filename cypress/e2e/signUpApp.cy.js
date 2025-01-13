describe('signUp',()=>{
it('fill the form and submit',()=>{
cy.visit('https://www.demoblaze.com/');
cy.get('#signin2').click();
cy.get('#sign-username').type(`Testing ${Math.floor(Math.random() * 100)}`);
cy.get('#sign-password').type('Test@123');
cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})
})