import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root fd-dynamic-page-header')).getAttribute("title") as Promise<string>;
  }

  getHeaderTitleText(): Promise<string> {
    return browser.getTitle() as Promise<string>;
  }

  getLuigiMessage(): Promise<string> {
    return element(by.id('luigiMsg')).getText() as Promise<string>;
  }
}
