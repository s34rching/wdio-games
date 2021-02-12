class ContactUsPage {
    get firstNameField() {
        return $('[name="first_name"]')
    }

    get lastNameField() {
        return $('[name="last_name"]')
    }

    get emailField() {
        return $('[name="email"]')
    }

    get messageField() {
        return $('[name="message"]')
    }

    get submitButton() {
        return $('[type="submit"]')
    }

    get replyHeader() {
        return $('#contact_reply h1')
    }

    async sendMessageToCompany({ firstName, lastName, email, message }) {
        if (firstName) {
            await this.firstNameField.setValue(firstName)
        }
        if (lastName) {
            await this.lastNameField.setValue(lastName)
        }
        if (email) {
            await this.emailField.setValue(email)
        }
        if (message) {
            await this.messageField.setValue(message)
        }
        await this.submitButton.click()
    }

    async waitForSuccessMessage() {
        return browser.waitUntil(async function() {
            const replyText = await browser.getText('#contact_reply h1');
            return replyText === 'Thank You for your Message!';
        })
    }

    async waitForEmptyFieldError() {
        return browser.waitUntil(async function() {
            const errorText = await browser.getText('body')
            const matches = errorText.match('Error: all fields are required')[0]
            return !!(matches)
        })
    }
}

module.exports = new ContactUsPage();
