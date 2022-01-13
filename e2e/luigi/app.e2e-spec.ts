import { AppPage } from './app.po';
import { AppPageTest } from '../src/app.to';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let pageTest: AppPageTest;

  beforeEach(() => {
    page = new AppPage();
    pageTest = new AppPageTest();
    browser.waitForAngularEnabled(false); // don't wait for angular on the luigi wrapper page
    page.navigateTo();  // navigate to the luigi wrapper page
    browser.switchTo().frame(element(by.xpath("//iframe[starts-with(@src, 'http://localhost:4200')]")).getWebElement()); // navigate to the micro-frontend
    browser.waitForAngularEnabled(true); // wait for angular on the micro-frontend
  });

  // luigi wrapper tests
  it('should display the luigi title', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect(page.getHeaderTitleText()).toEqual('Hello DxpMicroFrontendNgx');
  });

  // micro-frontend in luigi tests
  it('should display the micro-frontend title', () => pageTest.verifyTitle(page));

  it('should display luigi message text', () => {
    expect(page.getLuigiMessage()).toEqual('Hello Luigi!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
