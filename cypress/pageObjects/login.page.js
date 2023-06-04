class LoginPage {
    setUsername(username){
        return cy.get('#txt-username').clear().type(username);
    }

    setPassword(password){
        return cy.get('#txt-password').clear().type(password);
    }

    clickLogin(){
        cy.get('#btn-login').click();
    }
}

export default LoginPage;