import ContactUsPage from '../page-objects/contact-us.page';
const { tests } = require('../config/main-config');

const { firstName, lastName, email, message } = tests;

describe('"Contact Us"', () => {
    beforeEach(() => {
        browser.url('/Contact-Us/contactus.html');
    })

    it('should be able to submit a successful submission via contact us form', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        });

        expect(ContactUsPage.replyHeader).toBeVisible();
    });

    it('should be able to see proper submission text', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        });

        expect(ContactUsPage.replyHeader).toHaveTextContaining('Thank You for your Message!');
    });

    it('should NOT be able to submit a form with missing first name', () => {
        ContactUsPage.sendMessageToCompany({
            lastName: lastName,
            email: email,
            message: message,
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });

    it('should NOT be able to submit a form with missing last name', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: firstName,
            email: email,
            message: message,
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });

    it('should NOT be able to submit a form with missing email', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: firstName,
            lastName: lastName,
            message: message,
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });
});
