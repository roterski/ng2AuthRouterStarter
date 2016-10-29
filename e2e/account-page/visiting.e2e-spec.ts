import { browser } from 'protractor';

import { ChangeMyNamePage } from '../app.po';
import { TestUser } from '../fixtures/users';

describe('Account Page: Visiting', () => {
  let page: ChangeMyNamePage;

  beforeEach(() => {
    page = new ChangeMyNamePage();
  });

  describe('when I am not logged in', () => {
    it('I should not be able to visit the page', () => {
      browser.get('/account');
      expect(browser.getCurrentUrl()).toEqual(`${page.host}/log-in`);
    });
  });

  describe('when I am logged in', () => {
    beforeEach(() => {
      page.authenticate(TestUser);
      browser.waitForAngular();
    });

    afterEach(() => {
      page.logoutLink().click();
    });

    it('I should be able to visit the page', () => {
      browser.get('/account');
      expect(browser.getCurrentUrl()).toEqual(`${page.host}/account`);
    });
  });
});
