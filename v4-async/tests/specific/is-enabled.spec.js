describe('"isEnabled"', function() {
    beforeEach(async function() {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        await browser.setViewportSize({ width: 1200, height: 800 })
        await browser.pause(2000);
    })

    it('disabled drop-down option should NOT be enabled', async function() {
        const isEnabledDropDownOption = await browser.isEnabled("option[value='orange']");
        expect(isEnabledDropDownOption).to.be.false;
    });

    it('enabled drop-down option should be enabled', async function() {
        const isEnabledDropDownOption = await browser.isEnabled("option[value='grape']");
        expect(isEnabledDropDownOption).to.be.true;
    });

    it('enabled checkbox should be enabled', async function() {
        const isEnabledCheckbox = await browser.isEnabled("input[value='option-2']");
        expect(isEnabledCheckbox).to.be.true;
    });

    it('disabled radio button should NOT be enabled', async function() {
        const isEnabledRadioOption = await browser.isEnabled("input[value='cabbage']");
        expect(isEnabledRadioOption).to.be.false;
    });

    it('enabled radio button should be enabled', async function() {
        const isEnabledRadioOption = await browser.isEnabled("input[value='pumpkin']");
        expect(isEnabledRadioOption).to.be.true;
    });
});
