import { NgBhwPage } from './app.po';

describe('ng-bhw App', () => {
  let page: NgBhwPage;

  beforeEach(() => {
    page = new NgBhwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
