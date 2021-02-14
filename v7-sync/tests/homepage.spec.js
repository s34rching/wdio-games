xdescribe("Verify whether webdriveruniversity links on homepage work correctly", function() {
    it("should open 'Contact Us' page", async function() {
        await browser.setViewportSize({ width: 1200, height: 800 });
        await browser.url('/');
        await browser.click("#contact-us");

        const tabIds = await browser.getTabIds();
        await browser.switchTab(tabIds[1])

        const title = await browser.getTitle();
        title.should.equal('WebDriver | Contact Us')
        await browser.close()
    });

    it("should open 'Login Portal'", async function() {
        await browser.url('/');
        await browser.click('#login-portal');

        const tabIds = await browser.getTabIds();
        await browser.switchTab(tabIds[1])

        const title = await browser.getTitle();
        title.should.equal('WebDriver | Login Portal')
        await browser.close()
    });
});
