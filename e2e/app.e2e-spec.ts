import { MyServersPage } from './app.po';

describe('my-servers App', function() {
  let page: MyServersPage;

  beforeEach(() => {
    page = new MyServersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
