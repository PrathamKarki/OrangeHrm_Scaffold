import {test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { LeavePage } from '../src/pages/LeavePage';

//test scenario: 
test("Apply leave shows message when no leave balance available ", async({page})=>{
    const loginPage = new LoginPage(page);
    const leavePage = new LeavePage(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/, {timeout: 15000});
    await leavePage.goToLeave();
    await leavePage.goToApply();

    await expect(page.getByText('No Leave Types with Leave Balance')).toBeVisible({timeout: 15000});
})