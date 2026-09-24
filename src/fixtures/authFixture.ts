import {test as base, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';
export { expect } from '@playwright/test';

type MyFixtures = {
    loggedInPage : Page;
}

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({page}, use) =>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(testData.validLogin.username, testData.validLogin.password);

        await use(page)
    }
});