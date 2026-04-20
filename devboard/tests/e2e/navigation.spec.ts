import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigate to tickets', async ({ page }) => {
    await page.getByRole('link', { name: /tickets/i }).click();
    await expect(page).toHaveURL(/\/tickets$/);
  });

  test('navigate to projects', async ({ page }) => {
    await page.getByRole('link', { name: /proyectos/i }).click();
    await expect(page).toHaveURL(/\/projects$/);
  });

  test('navigate to about', async ({ page }) => {
    await page.getByRole('link', { name: /acerca de/i }).click();
    await expect(page).toHaveURL(/\/about$/);
  });
});