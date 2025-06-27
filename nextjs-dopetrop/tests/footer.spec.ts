import { test, expect } from '@playwright/test';

test.describe('Footer Component', () => {
  test('displays main footer sections', async ({ page }) => {
    await page.goto('/');
    
    // Check for the main footer sections
    await expect(page.getByRole('heading', { name: /links to important stuff/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /an informative text blurb/i })).toBeVisible();
  });

  test('displays footer link lists', async ({ page }) => {
    await page.goto('/');
    
    // Check that footer links are present
    const footerLinks = page.locator('#footer a[href="#"]');
    await expect(footerLinks).toHaveCount({ min: 16 }); // Multiple link lists + "Find out more" button
    
    // Check specific link text content
    await expect(page.getByRole('link', { name: /neque amet dapibus/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /sed mattis quis rutrum/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /accumsan suspendisse/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /eu varius vitae magna/i }).first()).toBeVisible();
  });

  test('displays informative text blurb section', async ({ page }) => {
    await page.goto('/');
    
    // Check the blurb heading
    await expect(page.getByRole('heading', { name: /an informative text blurb/i })).toBeVisible();
    
    // Check the descriptive text
    await expect(page.getByText(/duis neque nisi, dapibus sed mattis quis/i)).toBeVisible();
    
    // Check the "Find out more" button
    await expect(page.getByRole('link', { name: /find out more/i })).toBeVisible();
  });

  test('displays copyright information', async ({ page }) => {
    await page.goto('/');
    
    // Check copyright text
    await expect(page.getByText(/untitled\. all rights reserved\./i)).toBeVisible();
    
    // Check HTML5 UP link
    const html5Link = page.getByRole('link', { name: /html5 up/i });
    await expect(html5Link).toBeVisible();
    await expect(html5Link).toHaveAttribute('href', 'http://html5up.net');
  });

  test('footer is present on all pages', async ({ page }) => {
    const pages = ['/', '/left-sidebar', '/right-sidebar', '/no-sidebar'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Footer should be visible on every page
      await expect(page.locator('#footer')).toBeVisible();
      await expect(page.getByRole('heading', { name: /links to important stuff/i })).toBeVisible();
      await expect(page.getByText(/untitled\. all rights reserved\./i)).toBeVisible();
    }
  });

  test('footer links have proper structure', async ({ page }) => {
    await page.goto('/');
    
    // Check that footer has proper container structure
    await expect(page.locator('#footer .container')).toHaveCount(2);
    
    // Check that link lists have proper structure
    const linkLists = page.locator('#footer ul.link-list');
    await expect(linkLists).toHaveCount(4); // Should have 4 link list columns
    
    // Each link list should have multiple items
    for (let i = 0; i < 4; i++) {
      const listItems = linkLists.nth(i).locator('li');
      await expect(listItems).toHaveCount(4); // Each list has 4 items
    }
  });

  test('copyright section has proper menu structure', async ({ page }) => {
    await page.goto('/');
    
    // Check copyright section structure
    const copyrightMenu = page.locator('#copyright ul.menu');
    await expect(copyrightMenu).toBeVisible();
    
    const menuItems = copyrightMenu.locator('li');
    await expect(menuItems).toHaveCount(2); // Copyright and Design credit
  });
});