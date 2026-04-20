import { test, expect } from '@playwright/test';

test.describe('Projects', () => {
  test('puede ver la lista de proyectos', async ({ page }) => {
    await page.goto(
      'http://localhost:3000/projects'
    );

    await expect(
      page.getByRole('heading', {
        name: /lista de proyectos/i
      })
    ).toBeVisible();

    await expect(
      page.locator(
        '.project-table tbody tr'
      )
    ).toHaveCount(2); // si tienes 2 mocks
  });
});