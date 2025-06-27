import { test, expect } from '@playwright/test';

const base = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

test('home page loads', async ({ page }) => {
  await page.goto(base);
  await expect(page.getByRole('heading', { name: /howdy/i })).toBeVisible();
});
