import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('link', { name: 'Forgotten Password', exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').press('Shift+Home');
  await page.getByPlaceholder('First Name').fill('anruag');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});