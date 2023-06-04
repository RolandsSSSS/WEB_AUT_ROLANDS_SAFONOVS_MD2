class EmptyAppointmenrPage{
    static clickMenuIcon(){
        cy.get('#menu-toggle').click();
    }

    static validateSidebarActive(){
        cy.get('#sidebar-wrapper').should('have.class', 'active');
    }

    static clickHistory(){
        cy.contains('History').click();
    }

    static validateNoAppointmentVisible(){
        cy.contains('No appointment').should('be.visible');
    }
}

export default EmptyAppointmenrPage;