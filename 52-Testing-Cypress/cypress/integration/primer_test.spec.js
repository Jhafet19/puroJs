/// <reference types="cypress" />
describe('Carga la pagina princioal', () => {
    it('Carga la pagina principal', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria')
        cy.get('[data-cy="titulo-proyecto"]').should('exist')

        //Verificar 
        cy.get('[data-cy="titulo-proyecto"]').invoke('text').should('equal', 'Administrador de Pacientes de Veterinaria')
    })
})