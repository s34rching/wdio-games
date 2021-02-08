describe('"waitForExist', function() {
    beforeEach(function() {
        browser.url("/Ajax-Loader/index.html");
    })

    it('should retrieve button after it is loaded', async function() {
        this.timeout(20000);
        const isExists = await browser.waitForExist("//p[text()='CLICK ME!']", 10000, false);
        expect(isExists).to.be.true;
    });
});


