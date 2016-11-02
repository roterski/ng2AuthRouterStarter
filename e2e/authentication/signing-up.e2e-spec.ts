import { browser } from 'protractor';

import { ChangeMyNamePage } from '../app.po';
import { TestUser, generateNewTestUser } from '../fixtures/users';

describe('Authentication: Signing Up', () => {
  let page: ChangeMyNamePage;

  beforeEach(() => {
    page = new ChangeMyNamePage();
  });

  describe('successfully', () => {
    describe('when I go to root url', () => {
      beforeEach(() => {
        browser.get('/');
      });

      it('I should see sign up link', () => {
        expect(page.signupLink().isPresent()).toEqual(true);
      });

      it('I should not be able to go to account page', () => {
        browser.get('/account');
        expect(browser.getCurrentUrl()).toEqual(`${page.host}/log-in`);
      });

      describe('and when I click sign up link', () => {
        beforeEach(() => {
          page.signupLink().click();
        });

        it('I should see email input field', () => {
          expect(page.emailInputField().isPresent()).toEqual(true);
        });

        it('I should see password input field', () => {
          expect(page.passwordInputField().isPresent()).toEqual(true);
        });

        it('I should be on sign up page', () => {
          expect(browser.getCurrentUrl()).toEqual(`${page.host}/sign-up`);
        });

        describe('and when I fill in email and password and submit', () => {
          beforeEach(() => {
            let testUser = generateNewTestUser();
            page.emailInputField().sendKeys(testUser.email);
            page.passwordInputField().sendKeys(testUser.password);
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
    describe('when I navigate to sign up form', () => {
      beforeEach(() => {
        browser.get('/sign-up');
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
          let testUser = generateNewTestUser();
          page.emailInputField().sendKeys(testUser.email);
          page.passwordInputField().sendKeys('a');
          page.submitButton().click();
        });

        it('I should see form error about password', () => {
          expect(page.formErrors().getText()).toEqual('Password is too short (minimum is 8 characters)');
        });

        it('I should see password is too short error message', () => {
          expect(page.passwordFieldErrors().getText()).toEqual('is too short (minimum is 8 characters)');
        });
      });

      describe('when email is incorrect', () => {
        beforeEach(() => {
          page.emailInputField().sendKeys('test@bad.email.adr3ss');
          page.passwordInputField().sendKeys(TestUser.password);
          page.submitButton().click();
        });

        it('I should see form error about email', () => {
          expect(page.formErrors().getText()).toEqual('Email is not an email');
        });

        it('I should see email is incorrect', () => {
          expect(page.emailFieldErrors().getText()).toEqual('is not an email');
        });
      });
    });
  });
});
