const ContactUsPage = require('../page-objects/contact-us.page');

describe('"Contact Us"', function() {
    beforeEach(function() {
        browser.url('/Contact-Us/contactus.html');
    })

    it.only('should be able to submit a successful submission via contact us form', function() {
        ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            email: user.email,
            message: user.message
        });

        // await ContactUsPage.waitForSuccessMessage();
        // const isVisible = await ContactUsPage.replyHeader.isVisible();
        // expect(isVisible).to.be.true;
    });

    it('should NOT be able to submit a form with missing first name', async function() {
        await ContactUsPage.sendMessageToCompany({
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        expect(await ContactUsPage.waitForEmptyFieldError()).to.be.true;
    });

    it('should NOT be able to submit a form with missing last name', async function() {
        await ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        expect(await ContactUsPage.waitForEmptyFieldError()).to.be.true;
    });

    it('should NOT be able to submit a form with missing email', async function() {
        await ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            message: 'The most exiting thing!',
        });

        expect(await ContactUsPage.waitForEmptyFieldError()).to.be.true;
    });
});
