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

    sendMessageToCompany({ firstName, lastName, email, message }) {
        if (firstName) {
            this.firstNameField.setValue(firstName)
        }
        if (lastName) {
            this.lastNameField.setValue(lastName)
        }
        if (email) {
            this.emailField.setValue(email)
        }
        if (message) {
            this.messageField.setValue(message)
        }
        this.submitButton.click()
    }

    waitForSuccessMessage() {
        return browser.waitUntil(function() {
            const replyText = browser.getText('#contact_reply h1');
            return replyText === 'Thank You for your Message!';
        })
    }

    waitForEmptyFieldError() {
        return browser.waitUntil(function() {
            const errorText = browser.getText('body')
            const matches = errorText.match('Error: all fields are required')[0]
            return !!(matches)
        })
    }
}

module.exports = new ContactUsPage();
