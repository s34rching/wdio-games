import Basepage from "./basepage.page";

class AjaxLoaderPage extends Basepage {
    get clickMeButton() {
        return $('#button1 > p');
    }

    get notificationModal() {
        return $('#myModalClick');
    }
}

export default new AjaxLoaderPage();
