const ContactUsPage = require('../page-objects/contact-us.page');

describe('"Contact Us"', function() {
    beforeEach(async function() {
        await browser.url('/Contact-Us/contactus.html');
    })

    usersData.forEach((user) => {
        it('should be able to submit a successful submission via contact us form', async function() {
            await ContactUsPage.sendMessageToCompany({
                firstName: 'John',
                lastName: 'Doe',
                email: user.email,
                message: user.message
            });

            const reply = await browser.getText('#contact_reply h1');
            expect(reply).to.equal('Thank You for your Message!');
        });
    })

    it('should NOT be able to submit a form with missing first name', async function() {
        await ContactUsPage.sendMessageToCompany({
            lastName: 'Doe',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        const isExisting = await browser.isExisting('#contact_reply h1');
        expect(isExisting).to.be.false;
    });

    it('should NOT be able to submit a form with missing last name', async function() {
        await ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            email: 'john_doe@domain.com',
            message: 'The most exiting thing!',
        });

        const isExisting = await browser.isExisting('#contact_reply h1');
        expect(isExisting).to.be.false;
    });

    it('should NOT be able to submit a form with missing email', async function() {
        await ContactUsPage.sendMessageToCompany({
            firstName: 'John',
            lastName: 'Doe',
            message: 'The most exiting thing!',
        });

        const errorText = await browser.getText('body');
        expect(errorText).to.include('Error: all fields are required');
    });
});
