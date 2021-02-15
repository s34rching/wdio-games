import Basepage from "./basepage.page";

class LoginPortalPage extends Basepage {
    get customBackground() {
        return $('.bg-bubbles');
    }
}

export default new LoginPortalPage();
