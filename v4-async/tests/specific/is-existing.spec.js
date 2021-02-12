describe('"isExisting"', function() {
    beforeEach(async function() {
        await browser.url("/Hidden-Elements/index.html");
    })

    it('should find element if if its "display" property set to "none"', async function() {
        const isExisting = await browser.isExisting('#not-displayed')
        expect(isExisting).to.equal(true)
    });

    it('should find element if its visibility is set to "hidden"', async function() {
        const isExisting = await browser.isExisting('#visibility-hidden')
        expect(isExisting).to.equal(true)
    });

    it('should find element if its opacity is set to "zero"', async function() {
        const isExisting = await browser.isExisting('#zero-opacity')
        expect(isExisting).to.equal(true)
    });

    it('should find displayed element', async function() {
        const isExisting = await browser.isExisting('h1')
        expect(isExisting).to.equal(true)
    });

    it('should NOT find element if it is not exist on the page', async function() {
        const isExisting = await browser.isExisting('#green-turtle')
        expect(isExisting).to.equal(false)
    });
});
