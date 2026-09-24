import {test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { testData } from '../src/utils/testData';

// test scenarion 1: Login with valid credentails
test("Successful login with valid credentials", async({page})=>{
   const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.validLogin.username, testData.validLogin.password);

    await expect(page).toHaveURL(/dashboard/, {timeout: 15000});
})


// test scenario 2: Login with invalid credentials 
test("Login with invalid credentials", async({page})=>{
   const invalidLogin = new LoginPage(page);
   await invalidLogin.goto();
   await invalidLogin.login(testData.invalidLogin.username, testData.invalidLogin.password);

   await expect(page.getByText('Invalid credentials')).toBeVisible({timeout: 15000});
   
})

// test scenario 3: Login with empty field
test("Login with empty field", async({page})=>{
    const emptyLoginField = new LoginPage(page); 

    await emptyLoginField.goto();
    await emptyLoginField.login('', '');
    await expect(page.getByText('Required').first()).toBeVisible({ timeout: 15000 });
})


// test scenario 4: logout redirects to the login page

test("logout redirects to the login page", async({page})=>{

    const loginPage = new LoginPage(page);
    const dashboardpage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(testData.validLogin.username, testData.validLogin.password);
    await dashboardpage.logout();

    await expect(page).toHaveURL(/login/, {timeout: 15000});
    

});