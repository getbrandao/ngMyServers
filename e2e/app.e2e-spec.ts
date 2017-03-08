import { NgMyServersPage } from './app.po';

describe('ng-my-servers App', function() {
  let page: NgMyServersPage;

  beforeEach(() => {
    page = new NgMyServersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
