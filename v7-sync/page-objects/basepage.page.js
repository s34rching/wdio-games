export default class Basepage {
    get productsIframe() {
        return $('#frame');
    }

    open(url) {
        browser.url(url);
    }

    switchWindow(targetWindowParam) {
        return browser.switchWindow(targetWindowParam);
    }

    switchToFrame(iframeObj) {
        iframeObj.waitForDisplayed();
        browser.switchToFrame(iframeObj);
    }
}
