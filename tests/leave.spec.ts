import { TIMEOUT } from 'node:dns';
import {test, expect} from '../src/fixtures/authFixture';
import { LeavePage } from '../src/pages/LeavePage';


//test scenario: 
test("Apply leave page loads with leave type options ", async({loggedInPage})=>{
    const leavePage = new LeavePage(loggedInPage);

    await leavePage.goToLeave();
    await leavePage.goToApply();

    await expect(loggedInPage.getByRole('heading', {name: 'Apply Leave'})).toBeVisible({timeout: 1500});
    
})