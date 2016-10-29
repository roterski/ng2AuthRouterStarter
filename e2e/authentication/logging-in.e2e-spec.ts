import { browser } from 'protractor';

import { ChangeMyNamePage } from '../app.po';
import { TestUser } from '../fixtures/users';

describe('Authentication: Logging In', () => {
  let page: ChangeMyNamePage;

  beforeEach(() => {
    page = new ChangeMyNamePage();
  });

  describe('successfully', () => {
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
        expect(browser.getCurrentUrl()).toEqual(`${page.host}/log-in`);
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
          expect(browser.getCurrentUrl()).toEqual(`${page.host}/log-in`);
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
            expect(browser.getCurrentUrl()).toEqual(`${page.host}/`);
          });

          it('I should be able to go to account page', () => {
            browser.waitForAngular();
            browser.get('/account');
            expect(browser.getCurrentUrl()).toEqual(`${page.host}/account`);
          });
        });
      });
    });
  });

  describe('unsuccessfully', () => {
    describe('when I navigate to log-in form', () => {
      beforeEach(() => {
        browser.get('/log-in');
      });

      describe('when I leave input fields empty', () => {
        beforeEach(() => {
          page.submitButton().click();
        });

        it('I should see email is required error message', () => {
          expect(page.emailFieldErrors().getText()).toEqual('is required');
        });

        it('I should see password is required error message', () => {
          expect(page.passwordFieldErrors().getText()).toEqual('is required');
        });
      });

      describe('when password is incorrect', () => {
        beforeEach(() => {
          page.emailInputField().sendKeys(TestUser.email);
          page.passwordInputField().sendKeys(TestUser.password + 'a');
          page.submitButton().click();
        });

        it('I should see invalid credentials error', () => {
          expect(page.formErrors().getText()).toEqual('Invalid login credentials. Please try again.');
        });
      });

      describe('when email is incorrect', () => {
        beforeEach(() => {
          page.emailInputField().sendKeys(TestUser.email + 'a');
          page.passwordInputField().sendKeys(TestUser.password);
          page.submitButton().click();
        });

        it('I should see invalid credentials error', () => {
          expect(page.formErrors().getText()).toEqual('Invalid login credentials. Please try again.');
        });
      });
    });
  });
});
