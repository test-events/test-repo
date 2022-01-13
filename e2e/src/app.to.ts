import { AppPage } from './app.po';

export class AppPageTest {
    verifyTitle(page: AppPage) {
        expect(page.getTitleText()).toEqual('Angular Micro-Frontend Template');
    }
}