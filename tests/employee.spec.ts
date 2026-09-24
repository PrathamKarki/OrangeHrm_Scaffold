import {test, expect} from '../src/fixtures/authFixture';
import { EmployeePage } from '../src/pages/EmployeePage';
import { LoginPage } from '../src/pages/LoginPage';
import { testData } from '../src/utils/testData';

// test scenarion: Employe List page loads successfully 

test("Employee List page loads successfully", async({loggedInPage})=>{
    
    const employeePage = new EmployeePage(loggedInPage);

    await employeePage.goToEmployeeList();
    await expect(loggedInPage).toHaveURL(/viewEmployeeList/)
});



// test scenario: Search for the available employee
test("Search for the available employee", async({loggedInPage})=>{
    const employeePage = new EmployeePage(loggedInPage);
    const searchedName = testData.searchEmployee;

    await employeePage.goToEmployeeList();
    await employeePage.searchEmployee(searchedName);
    await expect(loggedInPage.getByText('Peter Mac')).toBeVisible({timeout: 15000});

});


// test scenario: View the employee detail page

test("View employee detail page", async({loggedInPage})=>{
    const employeePage = new EmployeePage(loggedInPage);
    const searchedName = testData.searchEmployee;

    await employeePage.goToEmployeeList();
    await employeePage.searchEmployee(searchedName);
    await employeePage.openEmployeeDetails();

    await expect(loggedInPage.getByRole('heading', {name: 'Personal Details'})).toBeVisible({timeout: 15000});
    
})


// test scenario: add new employee successfully
test("Add new employee successfully", async({loggedInPage})=>{
    const employeePage = new EmployeePage(loggedInPage);
    const firstName = testData.newEmployee.firstName; 
    const lastName = testData.newEmployee.lastName;

    await employeePage.goToEmployeeList();

    await employeePage.addEmployee();
    await employeePage.addEmployeeData(firstName, '', lastName);

    await expect(loggedInPage).toHaveURL(/viewPersonalDetails/, {timeout: 15000})
})