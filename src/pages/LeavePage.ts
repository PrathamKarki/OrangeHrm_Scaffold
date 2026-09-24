import {Page, Locator} from '@playwright/test';

export class LeavePage{
    readonly page: Page;
    readonly leaveLink: Locator;
    readonly applyTab: Locator;


    constructor(page: Page){
        this.page = page;
        this.leaveLink = page.getByRole('link', {name: 'Leave'});
        this.applyTab = page.getByRole('link', {name: 'Apply'});

    }

    async goToLeave(){
        await this.leaveLink.click();
    }

   async goToApply(){
    await this.applyTab.click();
   }
}