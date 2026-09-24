import {Page, Locator} from '@playwright/test';

export class EmployeePage{
    readonly page: Page;
    readonly pimLink: Locator;
    readonly employeeInfoSection : Locator;
    readonly employeeNameInput: Locator;
    readonly searchBtn: Locator;
    readonly addEmployeeTab: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly saveBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.pimLink = page.getByRole('link', {name: 'PIM'});
        this.employeeInfoSection = page.getByText('Employee Information');
        this.employeeNameInput = page.getByPlaceholder('Type for hints...').first();
        this.searchBtn = page.getByRole('button', {name: 'Search'});
        this.addEmployeeTab = page.getByRole('button', {name: 'Add'});
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.saveBtn = page.getByRole('button', {name: 'Save'});
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

    async addEmployee(){
        await this.addEmployeeTab.click();
    }

    async addEmployeeData(firstName: string, middleName: string, lastName: string){
        await this.firstNameInput.fill(firstName);
        await this.middleNameInput.fill(middleName);
        await this.lastNameInput.fill(lastName);
        await this.saveBtn.click();
    }

}