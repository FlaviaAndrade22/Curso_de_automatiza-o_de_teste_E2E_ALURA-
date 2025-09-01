describe('Página de login', () => {
    beforeEach(() => {
       cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });

    it('Deve preencher os campos do formulário corretamente para logar um usuário existente', () => {

        cy.login('ana@email.com','Senha123')
    })
})