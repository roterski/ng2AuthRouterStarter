import { browser } from 'protractor';

import { ChangeMyNamePage } from '../app.po';
import { TestUser } from '../fixtures/users';

describe('Authentication: Logging In', () => {
  let page: ChangeMyNamePage;

  beforeEach(() => {
    page = new ChangeMyNamePage();
  });

  describe('when I go to root url', () => {
    beforeEach(() => {
      browser.get('/');
    });

    it('I should see log in link', () => {
      expect(page.loginLink().isPresent()).toEqual(true);
    });

    it('I should see sign up link', () => {
      expect(page.signupLink().isPresent()).toEqual(true);
    });

    it('I should not be able to go to account page', () => {
      browser.get('/account');
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/log-in');
    });

    describe('and when I click log in link', () => {
      beforeEach(() => {
        page.loginLink().click();
      });

      it('I should see email input field', () => {
        expect(page.emailInputField().isPresent()).toEqual(true);
      });

      it('I should see password input field', () => {
        expect(page.passwordInputField().isPresent()).toEqual(true);
      });

      it('I should be on login page', () => {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/log-in');
      });

      describe('and when I fill in email and password and submit', () => {
        beforeEach(() => {
          page.emailInputField().sendKeys(TestUser.email);
          page.passwordInputField().sendKeys(TestUser.password);
          page.submitButton().click();
        });

        afterEach(() => {
          page.logoutLink().click();
        });

        it('I should see Log Out link', () => {
          expect(page.logoutLink().isPresent()).toEqual(true);
        });

        it('I should be redirected to root', () => {
          expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
        });

        it('I should be able to go to account page', () => {
          browser.waitForAngular();
          browser.get('/account');
          expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/account');
        });
      });
    });
  });
});
