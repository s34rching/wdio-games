describe('"waitForVisible', function() {
    beforeEach(function() {
        browser.url("/Ajax-Loader/index.html");
    })

    it('should retrieve button after it is loaded', async function() {
        this.timeout(20000);
        const isVisible = await browser.waitForVisible("//p[text()='CLICK ME!']", 10000, false);
        expect(isVisible).to.be.true;
    });
});
