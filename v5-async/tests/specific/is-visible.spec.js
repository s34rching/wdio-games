describe('"isVisible"', function() {
    beforeEach(async function() {
        await browser.url("/Hidden-Elements/index.html");
    })

    it('should consider element is not visible if its "display" property set to "none"', async function() {
        const isDisplayed = await browser.isVisible('#not-displayed')
        expect(isDisplayed).to.equal(false)
    });

    it('should consider element is not visible if its visibility is set to "hidden"', async function() {
        const isDisplayed = await browser.isVisible('#visibility-hidden')
        expect(isDisplayed).to.equal(false)
    });

    it('should consider element is not visible if its opacity is set to "zero"', async function() {
        const isDisplayed = await browser.isVisible('#zero-opacity')
        expect(isDisplayed).to.equal(false)
    });

    it('should consider element is visible', async function() {
        const isDisplayed = await browser.isVisible('h1')
        expect(isDisplayed).to.equal(true)
    });
});
