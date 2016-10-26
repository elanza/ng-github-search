import { NgGithubSearchPage } from './app.po';

describe('ng-github-search App', function() {
  let page: NgGithubSearchPage;

  beforeEach(() => {
    page = new NgGithubSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
