const ContactUsPage = require('../page-objects/contact-us.page');

describe('"Contact Us"', function() {
    beforeEach(function() {
        browser.url('/Contact-Us/contactus.html');
    })

    it('should be able to submit a successful submission via contact us form', function() {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!'
        });

        expect(ContactUsPage.replyHeader.isDisplayed()).toBe(true);
    });

    it('should be able to see proper submission text', function() {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!'
        });

        expect(ContactUsPage.replyHeader.getText()).toBe('Thank You for your Message!');
    });

    it('should NOT be able to submit a form with missing first name', function() {
        ContactUsPage.sendMessageToCompany({
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        expect(ContactUsPage.emptyFieldError.isDisplayed()).toBe(true);
    });

    it('should NOT be able to submit a form with missing last name', function() {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        expect(ContactUsPage.emptyFieldError.isDisplayed()).toBe(true);
    });

    it('should NOT be able to submit a form with missing email', function() {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            message: 'The most exiting thing!',
        });

        expect(ContactUsPage.emptyFieldError.isDisplayed()).toBe(true);
    });
});
