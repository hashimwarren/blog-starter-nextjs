import { test, expect } from '@playwright/test';

test('home page has correct structure', async ({ page }) => {
  await page.goto('/');

  // Check that header exists
  await expect(page.getByRole('heading', { name: /dopetrope/i })).toBeVisible();
  
  // Check that banner exists
  await expect(page.getByText('Howdy. This is Dopetrope.')).toBeVisible();
  
  // Check that intro section exists
  await expect(page.getByText('Ipsum consequat')).toBeVisible();
  await expect(page.getByText('Magna etiam dolor')).toBeVisible();
  await expect(page.getByText('Tempus adipiscing')).toBeVisible();
  
  // Check that portfolio section exists
  await expect(page.getByText('My Portfolio')).toBeVisible();
  
  // Check that blog section exists
  await expect(page.getByText('The Blog')).toBeVisible();
});

test('navigation links work', async ({ page }) => {
  await page.goto('/');

  // Test left sidebar link
  await page.click('text=Left Sidebar');
  await expect(page.getByRole('heading', { name: /left sidebar/i })).toBeVisible();

  // Go back to home
  await page.click('text=Home');
  
  // Test right sidebar link
  await page.click('text=Right Sidebar');
  await expect(page.getByRole('heading', { name: /right sidebar/i })).toBeVisible();

  // Go back to home
  await page.click('text=Home');
  
  // Test no sidebar link
  await page.click('text=No Sidebar');
  await expect(page.getByRole('heading', { name: /no sidebar/i })).toBeVisible();
});
