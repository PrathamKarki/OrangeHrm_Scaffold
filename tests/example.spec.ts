import { test, expect } from '@playwright/test';



test('Google homepage has correct title', async({page})=>{
  
  await page.goto('https://google.com');

  await expect(page).toHaveTitle(/Google/);

});