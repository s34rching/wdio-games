import Homepage from '../page-objects/homepage.page';

describe('Homepage', () => {
    beforeEach(() => {
        browser.url('/');
    })

    it('should have correct title', () => {
        expect(browser.getTitle()).toBe('WebDriverUniversity.com');
    })

    it('should target opening "Contact Us" form in a new tab', () => {
        Homepage.contactCompany();
        Homepage.switchWindow("/Contact-Us/contactus.html");
        expect(browser.getTitle()).toBe("WebDriver | Contact Us");
    })
});
