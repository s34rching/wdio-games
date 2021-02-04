describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
    it("should open 'Contact Us' page", async function() {
        await browser.setViewportSize({ width: 1200, height: 800 })
        await browser.url('http://www.webdriveruniversity.com/')
        await browser.click("#contact-us")
        await browser.pause(3000)
    });

    it("should open 'Login Portal'", async function() {
        await browser.url('http://www.webdriveruniversity.com/')
        await browser.click('#login-portal')
        await browser.pause(3000)
    });
});
