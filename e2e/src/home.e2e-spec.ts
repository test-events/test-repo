import { HomePage } from './home.po';
import { browser, logging } from 'protractor';

describe('Home Page App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display current path', () => {
    page.navigateTo();
    expect(page.getCurrentPathText()).toEqual('Home');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
