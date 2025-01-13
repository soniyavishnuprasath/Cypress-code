/// <reference types ="cypress"/>
it('Google Search',()=>{
    cy.visit('https://www.google.com/')
    cy.get('[name="q"]').type('Automation step by step{Enter}')
    cy.wait(3000)

    cy.contains('Images').click()

})
