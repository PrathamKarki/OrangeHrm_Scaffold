import {Page, Locator} from "@playwright/test";


export class DashboardPage{
    readonly page: Page;
    readonly logoutBtn: Locator;
    readonly avatarIcon: Locator;

    constructor(page: Page){
        this.page = page;
        this.avatarIcon = page.locator('.oxd-userdropdown-img');
        this.logoutBtn = page.getByRole('menuitem', {name: 'Logout'});
        
    }

    async logout(){
        await this.avatarIcon.click();
        await this.logoutBtn.click();
    }

}