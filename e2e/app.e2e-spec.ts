import { browser } from 'protractor';

import { ChangeMyNamePage } from './app.po';

describe('ChangeMyName App', function() {
  let page: ChangeMyNamePage;

  beforeEach(() => {
    page = new ChangeMyNamePage();
  });

  it('should display message saying app works', () => {
    browser.get('/');
    expect(page.getParagraphText()).toEqual('ChangeMyName');
  });
});
