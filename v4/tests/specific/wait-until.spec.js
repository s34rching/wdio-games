describe('"waitUntil"', function() {

    beforeEach(async function() {
        await browser.url("/Accordion/index.html");
    })

    it('Verify relevant text LOADING COMPLETE appears after a period of time', async function () {
        this.timeout(20000);
        await browser.waitUntil(async function () {
            const buttonText = await browser.getText('#hidden-text');
            return buttonText === 'LOADING COMPLETE.';
        }, 20000, 'text is different!');
    });
});
