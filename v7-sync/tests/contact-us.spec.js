import ContactUsPage from '../page-objects/contact-us.page';
import { generateUserData } from '../service/data-providers';

describe('"Contact Us"', () => {
    let userData

    beforeEach(() => {
        browser.url('/Contact-Us/contactus.html');

        userData = generateUserData();
    })

    it('should be able to submit a successful submission via contact us form', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            message: userData.message
        });

        expect(ContactUsPage.replyHeader).toBeVisible();
    });

    it('should be able to see proper submission text', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            message: userData.message
        });

        expect(ContactUsPage.replyHeader).toHaveTextContaining('Thank You for your Message!');
    });

    it('should NOT be able to submit a form with missing first name', () => {
        ContactUsPage.sendMessageToCompany({
            lastName: userData.lastName,
            email: userData.email,
            message: userData.message,
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });

    it('should NOT be able to submit a form with missing last name', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: userData.firstName,
            email: userData.email,
            message: userData.message,
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });

    it('should NOT be able to submit a form with missing email', () => {
        ContactUsPage.sendMessageToCompany({
            firstName: userData.firstName,
            lastName: userData.lastName,
            message: userData.message,
        });

        expect(ContactUsPage.emptyFieldError).toBeVisible();
    });
});
