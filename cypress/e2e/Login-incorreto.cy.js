describe('Página de login', () => {
    beforeEach(() => {
       cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode: 400, }).as ('stubPost')
    });

    it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })


     it ('Deve falahar mesmo que os campos sejam preenchidos corretamente ', () => {
        cy.login('ana@email.com', 'Senha123');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
     })

})