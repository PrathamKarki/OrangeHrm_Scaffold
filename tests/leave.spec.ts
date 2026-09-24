import {test, expect} from '../src/fixtures/authFixture';
import { LeavePage } from '../src/pages/LeavePage';


//test scenario: 
test("Apply leave shows message when no leave balance available ", async({loggedInPage})=>{
    const leavePage = new LeavePage(loggedInPage);

    await leavePage.goToLeave();
    await leavePage.goToApply();

    await expect(loggedInPage.getByText('No Leave Types with Leave Balance')).toBeVisible({timeout: 15000});
})