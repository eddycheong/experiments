import { MyExperimentPage } from './app.po';

describe('my-experiment App', () => {
  let page: MyExperimentPage;

  beforeEach(() => {
    page = new MyExperimentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
