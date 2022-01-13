import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getCurrentPathText(): Promise<string> {
    return element(by.id('current-path')).getText() as Promise<string>;
  }
}
