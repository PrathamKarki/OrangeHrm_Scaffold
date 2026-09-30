# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Successful login with valid credentials
- Location: tests\login.spec.ts:7:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

Call log:
  - Expect "toHaveURL" with timeout 15000ms
    22 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  - Target page, context or browser has been closed

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage } from '../src/pages/LoginPage';
  3  | import { DashboardPage } from '../src/pages/DashboardPage';
  4  | import { testData } from '../src/utils/testData';
  5  | 
  6  | // test scenarion 1: Login with valid credentails
  7  | test("Successful login with valid credentials", async({page})=>{
  8  |    const loginPage = new LoginPage(page);
  9  | 
  10 |     await loginPage.goto();
  11 |     await loginPage.login(testData.validLogin.username, testData.validLogin.password);
  12 | 
> 13 |     await expect(page).toHaveURL(/dashboard/, {timeout: 15000});
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  14 | })
  15 | 
  16 | 
  17 | // test scenario 2: Login with invalid credentials 
  18 | test("Login with invalid credentials", async({page})=>{
  19 |    const invalidLogin = new LoginPage(page);
  20 |    await invalidLogin.goto();
  21 |    await invalidLogin.login(testData.invalidLogin.username, testData.invalidLogin.password);
  22 | 
  23 |    await expect(page.getByText('Invalid credentials')).toBeVisible({timeout: 15000});
  24 |    
  25 | })
  26 | 
  27 | // test scenario 3: Login with empty field
  28 | test("Login with empty field", async({page})=>{
  29 |     const emptyLoginField = new LoginPage(page); 
  30 | 
  31 |     await emptyLoginField.goto();
  32 |     await emptyLoginField.login('', '');
  33 |     await expect(page.getByText('Required').first()).toBeVisible({ timeout: 15000 });
  34 | })
  35 | 
  36 | 
  37 | // test scenario 4: logout redirects to the login page
  38 | 
  39 | test("logout redirects to the login page", async({page})=>{
  40 | 
  41 |     const loginPage = new LoginPage(page);
  42 |     const dashboardpage = new DashboardPage(page);
  43 |     await loginPage.goto();
  44 |     await loginPage.login(testData.validLogin.username, testData.validLogin.password);
  45 |     await dashboardpage.logout();
  46 | 
  47 |     await expect(page).toHaveURL(/login/, {timeout: 15000});
  48 |     
  49 | 
  50 | });
```