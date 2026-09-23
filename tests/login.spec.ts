import {test, expect} from '@playwright/test';

// test scenarion 1: Login with valid credentails
test("Successful login with valid credentials", async({page})=>{
    await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL(/dashboard/);
})

// test scenario 2: Login with invalid credentials 
test("Login with invalid credentials", async({page})=>{
    await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('wronguser');
    await page.getByPlaceholder('Password').fill('WrongPassword');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
})

// test scenarion 3: Login with empty field
test("Login with empty field", async({page})=>{
    await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('');
    await page.getByPlaceholder('Password').fill('');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText('Required').first()).toBeVisible();
})