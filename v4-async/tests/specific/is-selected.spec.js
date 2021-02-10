describe('"isEnabled"', function() {
    beforeEach(async function() {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        await browser.setViewportSize({ width: 1200, height: 800 })
        await browser.pause(2000);
    })

    it('selected drop-down option should be selected', async function() {
        const isSelected = await browser.isSelected("option[value='java']");
        expect(isSelected).to.be.true;
    });

    it('non-selected drop-down option should NOT be selected', async function() {
        const isSelected = await browser.isSelected("option[value='maven']");
        expect(isSelected).to.be.false;
    });

    it('checked checkbox should be selected', async function() {
        const isSelected = await browser.isSelected("input[value='option-3']");
        expect(isSelected).to.be.true;
    });

    it('non-checked checkbox should NOT be selected', async function() {
        const isSelected = await browser.isSelected("input[value='option-2']");
        expect(isSelected).to.be.false;
    });

    it('checked radio button should be selected', async function() {
        const isSelected = await browser.isSelected("input[value='pumpkin']");
        expect(isSelected).to.be.true;
    });

    it('non-checked radio button should NOT be selected', async function() {
        const isSelected = await browser.isSelected("input[value='lettuce']");
        expect(isSelected).to.be.false;
    });
});
