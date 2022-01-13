import { AppPage } from './app.po';
import { AppPageTest } from './app.to';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let pageTest: AppPageTest;

  beforeEach(() => {
    page = new AppPage();
    pageTest = new AppPageTest();
    page.navigateTo();
  });

  it('should display welcome message', () => pageTest.verifyTitle(page));

  it('should display not luigi message text', () => {
    expect(page.getLuigiMessage()).toEqual('');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
