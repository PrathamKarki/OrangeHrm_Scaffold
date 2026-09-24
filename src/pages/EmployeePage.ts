import {Page, Locator} from '@playwright/test';

export class EmployeePage{
    readonly page: Page;
    readonly pimLink: Locator;
    readonly employeeInfoSection : Locator;
    readonly employeeNameInput: Locator;
    readonly searchBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.getByRole('link', {name: 'PIM'});
        this.employeeInfoSection = page.getByText('Employee Information');
        this.employeeNameInput = page.getByPlaceholder('Type for hints...').first();
        this.searchBtn = page.getByRole('button', {name: 'Search'})
    }

      async goToEmployeeList () {
        await this.pimLink.click();
    }

    async openEmployeeDetails(){
        await this.page.getByText('Peter Mac').click();
    }

     async searchEmployee(employeeName: string){
        await this.employeeInfoSection.click();
        await this.employeeNameInput.fill(employeeName);
        await this.searchBtn.click();
    }

}