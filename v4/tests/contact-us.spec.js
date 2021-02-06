describe('"Contact Us"', function() {
    beforeEach(async function() {
        await browser.url('/Contact-Us/contactus.html');
    })

    it('should be able to submit a successful submission via contact us form', async function() {
        await browser.setValue('[name="first_name"]', 'John')
        await browser.setValue('[name="last_name"]', 'Doe')
        await browser.setValue('[name="email"]', 'john_doe@domain.com')
        await browser.setValue('[name="message"]', 'The most exiting thing!')
        await browser.click('[type="submit"]')
        await browser.pause(3000)
    });

    it('should NOT be able to submit a form with missing first name', async function() {
        await browser.setValue('[name="first_name"]', '')
        await browser.setValue('[name="last_name"]', 'Doe')
        await browser.setValue('[name="email"]', 'john_doe@domain.com')
        await browser.setValue('[name="message"]', 'The most exiting thing!')
        await browser.click('[type="submit"]')
        await browser.pause(3000)
    });

    it('should NOT be able to submit a form with missing last name', async function() {
        await browser.setValue('[name="first_name"]', 'John')
        await browser.setValue('[name="last_name"]', '')
        await browser.setValue('[name="email"]', 'john_doe@domain.com')
        await browser.setValue('[name="message"]', 'The most exiting thing!')
        await browser.click('[type="submit"]')
        await browser.pause(3000)
    });

    it('should NOT be able to submit a form with missing email', async function() {
        await browser.setValue('[name="first_name"]', 'John')
        await browser.setValue('[name="last_name"]', 'Doe')
        await browser.setValue('[name="email"]', '')
        await browser.setValue('[name="message"]', 'The most exiting thing!')
        await browser.click('[type="submit"]')
        await browser.pause(3000)
    });
});
