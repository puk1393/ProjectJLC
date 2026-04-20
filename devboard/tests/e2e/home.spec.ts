import { test, expect } from '@playwright/test';

test('homepage carga', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/DevBoard/i);
});