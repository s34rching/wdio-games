export default class Basepage {
    open(url) {
        browser.url(url);
    }

    switchWindow(targetWindowParam) {
        return browser.switchWindow(targetWindowParam);
    }
}
