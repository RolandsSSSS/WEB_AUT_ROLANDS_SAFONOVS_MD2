import LoginPage from "../pageObjects/login.page";
import AppointmentPage from "../pageObjects/appointment.page";
import EmptyAppointmenrPage from "../pageObjects/emptyAppointment.page";

describe('Appointment Scenarios', () => {
  const loginPage = new LoginPage();
  const appointmentPage = new AppointmentPage();
  const emptyAppointmentPage = new AppointmentPage()

  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  });

  it('Scenario 1 - Make an Appointment', () => {
    cy.contains('Make Appointment').click();

    loginPage.setUsername('John Doe');
    loginPage.setPassword('ThisIsNotAPassword');
    loginPage.clickLogin();

    AppointmentPage.selectFacility('Seoul CURA Healthcare Center');
    AppointmentPage.checkHospitalReadmission();
    AppointmentPage.selectProgram('Medicaid');
    AppointmentPage.setComment('CURA Healthcare Service')
    AppointmentPage.setDate();
    AppointmentPage.clickBookAppointment();
    AppointmentPage.validateValues('Seoul CURA Healthcare Center', 'Yes', 'Medicaid', '30/05/2023', 'CURA Healthcare Service');
  });

  it('Scenario 2 - Appointment history empty', () => {
    cy.contains('Make Appointment').click();

    loginPage.setUsername('John Doe');
    loginPage.setPassword('ThisIsNotAPassword');
    loginPage.clickLogin();

    EmptyAppointmenrPage.clickMenuIcon();
    EmptyAppointmenrPage.validateSidebarActive();
    EmptyAppointmenrPage.clickHistory();
    EmptyAppointmenrPage.validateNoAppointmentVisible();
  });
});