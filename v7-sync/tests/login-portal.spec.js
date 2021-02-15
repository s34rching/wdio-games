import LoginPortalPage from '../page-objects/login-portal.page';
import chai from 'chai';

const chaiExpect = chai.expect;

describe('Login Portal', () => {
    it('should have correct title / chai expect', () => {
        LoginPortalPage.open('Login-Portal/index.html');
        chaiExpect(browser.getTitle()).to.equal('WebDriver | Login Portal');
    });

    it('should have correct title / wdio expect', () => {
        LoginPortalPage.open('Login-Portal/index.html');
        expect(LoginPortalPage.customBackground).toBeVisible();
    });
});
