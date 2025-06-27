import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test('displays the Dopetrope logo and links to home', async ({ page }) => {
    await page.goto('/');
    
    // Check for the logo/title
    const logo = page.getByRole('link', { name: /dopetrope/i });
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('href', '/');
  });

  test('displays main navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check all main navigation links are present
    await expect(page.getByRole('link', { name: /^home$/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /left sidebar/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /right sidebar/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /no sidebar/i })).toBeVisible();
  });

  test('navigates to different pages correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to Left Sidebar page
    await page.getByRole('link', { name: /left sidebar/i }).click();
    await expect(page).toHaveURL('/left-sidebar');
    
    // Go back to home
    await page.goto('/');
    
    // Test navigation to Right Sidebar page
    await page.getByRole('link', { name: /right sidebar/i }).click();
    await expect(page).toHaveURL('/right-sidebar');
    
    // Go back to home
    await page.goto('/');
    
    // Test navigation to No Sidebar page
    await page.getByRole('link', { name: /no sidebar/i }).click();
    await expect(page).toHaveURL('/no-sidebar');
  });

  test('displays dropdown menu', async ({ page }) => {
    await page.goto('/');
    
    // Check for dropdown trigger
    const dropdownTrigger = page.getByRole('button', { name: /dropdown/i });
    await expect(dropdownTrigger).toBeVisible();
    
    // Click to open dropdown
    await dropdownTrigger.click();
    
    // Check dropdown items are visible
    await expect(page.getByRole('link', { name: /lorem ipsum dolor/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /magna phasellus/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /etiam dolore nisl/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /veroeros feugiat/i })).toBeVisible();
  });

  test('logo click returns to home from any page', async ({ page }) => {
    // Start from a different page
    await page.goto('/left-sidebar');
    
    // Click the logo
    await page.getByRole('link', { name: /dopetrope/i }).click();
    
    // Should be back at home
    await expect(page).toHaveURL('/');
  });
});