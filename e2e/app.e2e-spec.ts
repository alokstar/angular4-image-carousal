import { ImageCarousalPage } from './app.po';

describe('image-carousal App', () => {
  let page: ImageCarousalPage;

  beforeEach(() => {
    page = new ImageCarousalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
