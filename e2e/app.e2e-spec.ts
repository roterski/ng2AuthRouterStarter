import { ChangeMyNamePage } from './app.po';

describe('ChangeMyName App', function() {
  let page: ChangeMyNamePage;

  beforeEach(() => {
    page = new ChangeMyNamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
