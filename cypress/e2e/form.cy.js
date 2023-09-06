describe('my form', () => {
      beforeEach(() => {
            cy.visit('https://bloominstituteoftechnology.github.io/W_S7M3_Project/')
      })
      it('can submit a valid form', () => {
        cy.get('[data-id="name"]').type('Jamellen')
          .should('include.text', 'Jamellen')  
        cy.get('[data-id="email"]').type('watrmln@celcius.com')
        cy.get('[data-id="password"]').type('S33dle$$')
        cy.contains('agreement').click()
        cy.get('form').submit()
      })
    })