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
}

module.exports = new ContactUsPage();
