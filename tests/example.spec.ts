import { test, expect } from '@playwright/test';


test('Get started link naviagest us to docs', async({page})=> {

  await page.goto('https://playwright.dev/');

  await page.getByRole('link', {name: 'Get Started' }).click()

  await expect(page).toHaveURL(/.*intro/)
  
})