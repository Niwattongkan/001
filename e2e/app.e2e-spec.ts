import { PortlityPage } from './app.po';

describe('portlity App', () => {
  let page: PortlityPage;

  beforeEach(() => {
    page = new PortlityPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
