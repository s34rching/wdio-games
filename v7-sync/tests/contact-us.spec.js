const ContactUsPage = require('../page-objects/contact-us.page');

describe('"Contact Us"', () => {
    beforeEach(() => {
        browser.url('/Contact-Us/contactus.html');
    })

    it('should be able to submit a successful submission via contact us form', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!'
        });

        expect(ContactUsPage.replyHeader).toBeVisible();
    });

    it('should be able to see proper submission text', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!'
        });

        expect(ContactUsPage.replyHeader).toHaveTextContaining('Thank You for your Message!');
    });

    it('should NOT be able to submit a form with missing first name', () => {
        ContactUsPage.sendMessageToCompany({
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });

    it('should NOT be able to submit a form with missing last name', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });

    it('should NOT be able to submit a form with missing email', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            message: 'The most exiting thing!',
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });
});
