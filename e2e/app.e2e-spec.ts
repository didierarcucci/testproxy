import { TestproxyPage } from './app.po';

describe('testproxy App', () => {
  let page: TestproxyPage;

  beforeEach(() => {
    page = new TestproxyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
