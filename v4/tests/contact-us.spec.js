describe('"Contact Us"', function() {
    beforeEach(async function() {
        await browser.url('/Contact-Us/contactus.html');
    })

    it('should be able to submit a successful submission via contact us form', async function() {
        await browser.setValue('[name="first_name"]', 'ads')
        await browser.setValue('[name="last_name"]', 'ads')
        await browser.setValue('[name="email"]', 'ads')
        await browser.setValue('[name="message"]', 'ads')
    });

    it('should NOT be able to submit a successful submission via contact us form as all fields are required', async function() {

    });

    it('should NOT be able to submit a successful submission via contact us form as all fields are required', async function() {

    });

    it('should NOT be able to submit a successful submission via contact us form as all fields are required', async function() {

    });
});
