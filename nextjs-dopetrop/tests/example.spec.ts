import { test, expect } from '@playwright/test';

test('application loads with correct title', async ({ page }) => {
  await page.goto('/');

  // Expect the page title to match our app
  await expect(page).toHaveTitle(/Dopetrope by HTML5 UP/);
});

test('home page displays main banner', async ({ page }) => {
  await page.goto('/');

  // Check for main banner heading
  await expect(page.getByRole('heading', { name: /howdy\. this is dopetrope\./i })).toBeVisible();
  
  // Check for banner description
  await expect(page.getByText(/a responsive template by html5 up/i)).toBeVisible();
});
