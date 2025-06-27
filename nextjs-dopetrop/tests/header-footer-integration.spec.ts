import { test, expect } from '@playwright/test';

test.describe('Header and Footer Integration', () => {
  test('complete page functionality with header and footer', async ({ page }) => {
    await page.goto('/');
    
    // Verify page loads correctly
    await expect(page).toHaveTitle(/Dopetrope by HTML5 UP/);
    
    // Header tests
    await expect(page.getByRole('link', { name: /dopetrope/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /left sidebar/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /right sidebar/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /no sidebar/i })).toBeVisible();
    
    // Test dropdown functionality
    const dropdownTrigger = page.getByRole('button', { name: /dropdown/i });
    await expect(dropdownTrigger).toBeVisible();
    
    // Open dropdown and test links
    await dropdownTrigger.click();
    await expect(page.getByRole('link', { name: /lorem ipsum dolor/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /magna phasellus/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /etiam dolore nisl/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /veroeros feugiat/i })).toBeVisible();
    
    // Main page content
    await expect(page.getByRole('heading', { name: /howdy\. this is dopetrope\./i })).toBeVisible();
    
    // Footer tests
    await expect(page.getByRole('heading', { name: /links to important stuff/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /an informative text blurb/i })).toBeVisible();
    await expect(page.getByText(/duis neque nisi, dapibus sed mattis quis/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /html5 up/i })).toBeVisible();
    await expect(page.getByText(/untitled\. all rights reserved\./i)).toBeVisible();
    
    // Test navigation functionality
    await page.getByRole('link', { name: /left sidebar/i }).click();
    await expect(page).toHaveURL('/left-sidebar');
    
    // Verify header and footer are still present on different page
    await expect(page.getByRole('link', { name: /dopetrope/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /links to important stuff/i })).toBeVisible();
    
    // Navigate back to home via logo
    await page.getByRole('link', { name: /dopetrope/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('header navigation works across all pages', async ({ page }) => {
    const pages = [
      { name: 'Left Sidebar', url: '/left-sidebar' },
      { name: 'Right Sidebar', url: '/right-sidebar' },
      { name: 'No Sidebar', url: '/no-sidebar' }
    ];
    
    for (const { name, url } of pages) {
      await page.goto('/');
      
      // Navigate to the page
      await page.getByRole('link', { name: new RegExp(name, 'i') }).click();
      await expect(page).toHaveURL(url);
      
      // Verify header and footer are present
      await expect(page.getByRole('link', { name: /dopetrope/i })).toBeVisible();
      await expect(page.getByRole('heading', { name: /links to important stuff/i })).toBeVisible();
    }
  });

  test('footer links are functional', async ({ page }) => {
    await page.goto('/');
    
    // Test footer link lists are present
    const footerLinks = page.locator('#footer a[href="#"]');
    await expect(footerLinks).toHaveCount({ min: 16 }); // Multiple link lists + "Find out more" button
    
    // Test HTML5 UP link
    const html5Link = page.getByRole('link', { name: /html5 up/i });
    await expect(html5Link).toHaveAttribute('href', 'http://html5up.net');
    
    // Test "Find out more" buttons exist
    const findOutMoreButtons = page.getByRole('link', { name: /find out more/i });
    await expect(findOutMoreButtons).toHaveCount(4); // 3 in portfolio + 1 in footer
  });

  test('responsive design - header and footer on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Header should still be visible and functional on mobile
    await expect(page.getByRole('link', { name: /dopetrope/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /dropdown/i })).toBeVisible();
    
    // Footer should still be visible on mobile
    await expect(page.getByRole('heading', { name: /links to important stuff/i })).toBeVisible();
    await expect(page.getByText(/untitled\. all rights reserved\./i)).toBeVisible();
    
    // Navigation should still work
    await page.getByRole('link', { name: /left sidebar/i }).click();
    await expect(page).toHaveURL('/left-sidebar');
  });
});