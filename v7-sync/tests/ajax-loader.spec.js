import AjaxLoaderPage from '../page-objects/ajax-loader.page';

describe('Ajax Loader Page', () => {
    beforeEach(() => {
        browser.addCommand('forceClick', function() {
            browser.execute(function(element) {
                element.click();
            }, this);
        }, true)
    })


    it('should call the modal', () => {
        AjaxLoaderPage.open('/Ajax-Loader/index.html');
        AjaxLoaderPage.clickMeButton.waitForDisplayed();
        AjaxLoaderPage.clickMeButton.click();
        expect(AjaxLoaderPage.notificationModal).toHaveTextContaining('The waiting game can be a tricky one');
    })

    it('should call the modal / ^_^', () => {
        AjaxLoaderPage.open('/Ajax-Loader/index.html');
        AjaxLoaderPage.clickMeButton.forceClick();
        expect(AjaxLoaderPage.notificationModal).toHaveTextContaining('The waiting game can be a tricky one');
    })
})
