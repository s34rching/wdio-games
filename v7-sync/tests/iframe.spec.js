import PoPage from '../page-objects/po.page';

describe('Iframe', () => {
    it('should verify contents on iframes', () => {
        PoPage.open('/IFrame/index.html');

        PoPage.switchToFrame(PoPage.productsIframe);
        expect(PoPage.productsCarousel).toBeVisible();
    })
});
