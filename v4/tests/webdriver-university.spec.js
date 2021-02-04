describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
    it("should open 'Contact Us' page", function() {
        return browser
            .setViewportSize({ width: 1200, height: 800 })
            .url('http://www.webdriveruniversity.com/')
            .getTitle().then(function(title) {
                console.log('Title is: ' + title);
            })
            .click("#contact-us")
            .pause(3000)
    });

    it("should open 'Login Portal'", function() {
        return browser
            .url('http://www.webdriveruniversity.com/')
            .click('#login-portal')
            .getTitle()
            .then(function(title) {
                console.log('Title is: ' + title);
            });
    });
});
