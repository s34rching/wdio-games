import Basepage from "./basepage.page";

class Homepage extends Basepage {
    get contactUsLink() {
        return $('[href="Contact-Us/contactus.html"]');
    }

    contactCompany() {
        this.contactUsLink.click();
    }
}

export default new Homepage();
