import { AngluarTourOfHeroesPage } from './app.po';

describe('angluar-tour-of-heroes App', () => {
  let page: AngluarTourOfHeroesPage;

  beforeEach(() => {
    page = new AngluarTourOfHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
