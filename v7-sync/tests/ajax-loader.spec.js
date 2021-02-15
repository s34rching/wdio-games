import AjaxLoaderPage from '../page-objects/ajax-loader.page';

describe('Ajax Loader Page', () => {
    it('should call the modal', () => {
        AjaxLoaderPage.open('/Ajax-Loader/index.html');
        AjaxLoaderPage.clickMeButton.waitForDisplayed();
        AjaxLoaderPage.clickMeButton.click();
        expect(AjaxLoaderPage.notificationModal).toHaveTextContaining('The waiting game can be a tricky one');
    })
})
