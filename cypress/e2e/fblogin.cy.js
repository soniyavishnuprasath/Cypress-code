
it.skip('FBLogin',()=>{
    cy.visit('https://www.facebook.com/')
    cy.get('[data-testid="royal_email"]').type('soni.neverfear@gmail.com')
    cy.wait(2000)
    cy.get('[data-testid="royal_pass"]').type('12345')
    cy.wait(2000)
    cy.get('[data-testid="royal_login_button"]').click()
})
it.only('SignUp',()=>{
    cy.visit('https://www.facebook.com/signup')
    
})
//not able to accessfb page