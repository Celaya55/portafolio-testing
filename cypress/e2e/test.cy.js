describe('Pruebas a pagina web', () => {
   
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test  
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://automationexercise.com/')
  })
})
 it('caso de prueba 1', () => {
      // Visit the example Cypress page
      //generamos un numero aleatorio para que no marque duplicado
      const numeroRandom = Math.floor(Math.random() * 100000) + 1;
      cy.visit(Cypress.config('baseUrl'))    
      cy.get('#slider-carousel').should('be.visible');
      //click en login
      cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').click();
      //verificar que estamos en la pagina de login
      cy.xpath('//*[@id="form"]/div/div/div[3]/div/h2').should('be.visible');
      //escribir email y password
      cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]').type('juan')
      cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]').type(`juan@email.com${numeroRandom}`)
      //click en signup button
      cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/button').click();
})
