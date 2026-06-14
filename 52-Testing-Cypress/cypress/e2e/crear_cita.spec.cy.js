/// <reference types="cypress" />

describe('Validar fomulario', () => {
    it('Submit al formulario y mostrar la alerta de Error', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('[data-cy="mascota-input"]').type('Momo')

        cy.get('[data-cy="mascota-input"]').type('Momo')
        cy.get('[data-cy="propietario-input"]').type('Jhafet')
        cy.get('[data-cy="telefono-input"]').type('7771324659')
        cy.get('[data-cy="fecha-input"]').type('2026-06-10')
        cy.get('[data-cy="hora-input"]').type('18:42:00')
        cy.get('[data-cy="sintomas-input"]').type('Deserunt consequat in dolore anim dolore magna dolore aute ad eu.')
        cy.get('[data-cy="submit-cita"]')
            .click()

        cy.get('[data-cy="citas-heading"')
            .invoke('text').should('equal', 'Administra tus Citas ')

        cy.get('[data-cy="alerta"]').invoke('text').should('equal', 'Se agregó correctamente')
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success')

    })
})