import Basepage from "./basepage.page";

class ContactUsPage extends Basepage {
    get firstNameField() {
        return $('[name="first_name"]');
    }

    get lastNameField() {
        return $('[name="last_name"]');
    }

    get emailField() {
        return $('[name="email"]');
    }

    get messageField() {
        return $('[name="message"]');
    }

    get submitButton() {
        return $('[type="submit"]');
    }

    get replyHeader() {
        return $('#contact_reply h1');
    }

    get emptyFieldError() {
        return $('body*=Error: all fields are required');
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
}

module.exports = new ContactUsPage();
