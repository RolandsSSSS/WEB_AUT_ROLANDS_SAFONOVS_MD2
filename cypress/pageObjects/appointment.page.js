class AppointmentPage {
    static selectFacility(facilityName){
        cy.get('#combo_facility').select(facilityName);
    }

    static checkHospitalReadmission(){
        cy.get('#chk_hospotal_readmission').check();
    }

    static selectProgram(name){
        cy.get(`input[name="programs"][value="${name}"]`)
    .check()
    }

    static setDate(){
        cy.get('span.glyphicon-calendar').click();
        cy.get('td.day').contains('30').click();
    }

    static setComment(comment){
        cy.get('#txt_comment').clear().type(comment);
    }

    static clickBookAppointment(){
        cy.contains('Book Appointment').click();
    }

    static validateValues(facilityName, hospitalReadmission, programName, date, comment){
        cy.get('#facility').should('contain', facilityName);
        cy.get('#hospital_readmission').should('contain', hospitalReadmission);
        cy.get('#program').should('contain', programName);
        cy.get('#visit_date').should('contain', date);
        cy.get('#comment').should('contain', comment);
      }
}

export default AppointmentPage;