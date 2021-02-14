describe('"isVisibleWithinViewport"', function() {
    beforeEach(async function() {
        await browser.url("/Hidden-Elements/index.html");
    })

    it('should consider element is not visible within viewport if its "display" property set to "none"', async function() {
        const isVisibleWithinViewport = await browser.isVisibleWithinViewport('#not-displayed')
        expect(isVisibleWithinViewport).to.equal(false)
    });

    it('should consider element is not visible within viewport  if its visibility is set to "hidden"', async function() {
        const isVisibleWithinViewport = await browser.isVisibleWithinViewport('#visibility-hidden')
        expect(isVisibleWithinViewport).to.equal(false)
    });

    it('should consider element is not visible within viewport  if its opacity is set to "zero"', async function() {
        const isVisibleWithinViewport = await browser.isVisibleWithinViewport('#zero-opacity')
        expect(isVisibleWithinViewport).to.equal(false)
    });

    it('should consider element is visible within viewport if it is visible', async function() {
        const isVisibleWithinViewport = await browser.isVisibleWithinViewport('h1')
        expect(isVisibleWithinViewport).to.equal(true)
    });
});
