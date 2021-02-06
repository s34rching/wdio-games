describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
    it("should open 'Contact Us' page", async function() {
        await browser.setViewportSize({ width: 1200, height: 800 });
        await browser.url('/');
        await browser.click("#contact-us");
        const title = await browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com')
        await browser.pause(3000);
    });

    it("link to 'Contact Us' page should have proper color", async function() {
        await browser.url('/');
        const linkColor = await browser.getCssProperty("#contact-us", 'color');
        expect(linkColor.value).to.equal('rgba(51,122,183,1)')
    });

    it("should open 'Login Portal'", async function() {
        await browser.url('/');
        await browser.click('#login-portal');
        const title = await browser.getTitle();
        title.should.equal('WebDriverUniversity.com')
        await browser.pause(3000);
    });
});
