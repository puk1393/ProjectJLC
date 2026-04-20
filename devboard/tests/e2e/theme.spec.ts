import { test, expect } from '@playwright/test';

test.describe('Theme Switch', () => {
  test('puede cambiar entre tema claro y oscuro', async ({ page }) => {
    await page.goto('http://localhost:3000');

    const themeButton = page.getByRole(
      'button',
      { name: /oscuro|claro/i }
    );

    // Estado inicial
    await expect(
      page.locator('.layout')
    ).toHaveClass(/layout dark/);

    // Cambiar a claro
    await themeButton.click();

    await expect(
      page.locator('.layout')
    ).toHaveClass(/layout light/);

    // Volver a oscuro
    await themeButton.click();

    await expect(
      page.locator('.layout')
    ).toHaveClass(/layout dark/);
  });
});