import { test, expect } from "@playwright/test";

test.describe("Tickets", () => {
  test("puede ver la lista de tickets", async ({ page }) => {
    await page.goto("http://localhost:3000/tickets");

    await expect(
      page.getByRole("heading", { name: /backlog/i })
    ).toBeVisible();

    const tickets = page.locator("h4");

    await expect(tickets.first()).toBeVisible();

    expect(await tickets.count()).toBeGreaterThan(0);
  });
});