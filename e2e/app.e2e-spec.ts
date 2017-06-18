import { TrustpilotWidgetPage } from './app.po';

describe('trustpilot-widget App', () => {
  let page: TrustpilotWidgetPage;

  beforeEach(() => {
    page = new TrustpilotWidgetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
