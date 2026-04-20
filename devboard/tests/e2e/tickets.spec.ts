import { test, expect } from '@playwright/test';

test.describe('Tickets', () => {
  test('puede ver la lista de tickets', async ({ page }) => {
    await page.goto('http://localhost:3000/tickets');

    await expect(
      page.getByText(/backlog/i)
    ).toBeVisible();
    
    const count =
      await page.locator('.card').count();

    expect(count).toBeGreaterThan(0);
  });
});