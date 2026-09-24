import {Page, Locator} from '@playwright/test';

export class EmployeePage{
    readonly page: Page;
    readonly hamburgerIcon: Locator;
    readonly pimLink: Locator;
    readonly employeeInfoSection : Locator;
    readonly employeeNameInput: Locator;
    readonly searchBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.hamburgerIcon = page.locator('.oxd-topbar-header-hamburger');
        this.pimLink = page.getByRole('link', {name: 'PIM'});
        this.employeeInfoSection = page.getByText('Employee Information');
        this.employeeNameInput = page.getByPlaceholder('Type for hints...')
        this.searchBtn = page.getByRole('button', {name: 'Search'})
    }

      async goToEmployeeList () {
        await this.hamburgerIcon.click();
        await this.pimLink.click();
    }

     async searchEmployee(employeeName: string){
        this.employeeInfoSection.click();
        this.employeeNameInput.fill(employeeName);
        this.searchBtn.click();
    }

}