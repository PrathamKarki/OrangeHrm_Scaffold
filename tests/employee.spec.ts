import {test, expect} from '@playwright/test';
import { EmployeePage } from '../src/pages/EmployeePage';
import { LoginPage } from '../src/pages/LoginPage';

// test scenarion: Employe List page loads successfully 

test("Employee List page loads successfully", async({page})=>{
    const loginPage = new LoginPage(page);
    const employeePage = new EmployeePage(page);

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await employeePage.goToEmployeeList();
    await expect(page).toHaveURL(/viewEmployeeList/)
})



// test scenario: Search for the available employee
test("Search for the available employee", async({page})=>{
    const loginPage = new LoginPage(page);
    const employeePage = new EmployeePage(page);
    const searchedName = 'Peter Mac Anderson';

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await employeePage.goToEmployeeList();
    await employeePage.searchEmployee(searchedName);
    await expect(page.getByText('Peter Mac')).toBeVisible({timeout: 15000});


})


// test scenario: View the employee detail page

test("View employee detail page", async({page})=>{
    const loginPage = new LoginPage(page);
    const employeePage = new EmployeePage(page);
    const searchedName = 'Peter Mac Anderson';

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await employeePage.goToEmployeeList();
    await employeePage.searchEmployee(searchedName);
    await employeePage.openEmployeeDetails();

    await expect(page.getByRole('heading', {name: 'Personal Details'})).toBeVisible({timeout: 15000});
    
})


// test scenario: add new employee successfully
test("Add new employee successfully", async({page})=>{
    const loginPage = new LoginPage(page);
    const employeePage = new EmployeePage(page);
    const firstName = 'pratham'; 
    const lastName = 'karki';

    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });  
    await employeePage.goToEmployeeList();

    await employeePage.addEmployee();
    await employeePage.addEmployeeData(firstName, '', lastName);

    await expect(page).toHaveURL(/viewPersonalDetails/, {timeout: 15000})
})