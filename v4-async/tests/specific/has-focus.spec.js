describe('"hasFocus', function() {
    beforeEach(async function() {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        await browser.setViewportSize({ width: 1200, height: 800 })
    })

    it('should NOT have focused element by default', async function() {
        await browser.pause(2000);

        const isFocusedByDefault = await browser.hasFocus('#checkboxes label:nth-child(5) [type]');
        expect(isFocusedByDefault, 'The checkbox should NOT have focus!').to.be.false;
    });

    it('should focus element after click', async function() {
        await browser.pause(2000);
        await browser.click('#checkboxes label:nth-of-type(1) [type]');

        const isFocusedAfterClick = await browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
        expect(isFocusedAfterClick, 'The checkbox should have focus!').to.be.true;
    });
});
