// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Record at cursor test", async ({ page }) => {
  // Navigate to sauce demo
  await page.goto("https://www.saucedemo.com/");

  // Insert username and password
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  // Click login button
  await page.locator("id=login-button").click();

  // Assertion (Validate)
  await expect(page).toHaveTitle("Swag Labs");

  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
  await expect(
    page.locator(
      '[data-test="item-4-title-link"] [data-test="inventory-item-name"]'
    )
  ).toContainText("Sauce Labs Backpack");
  await expect(
    page.locator(
      '[data-test="item-0-title-link"] [data-test="inventory-item-name"]'
    )
  ).toContainText("Sauce Labs Bike Light");
  await expect(
    page.locator(
      '[data-test="item-1-title-link"] [data-test="inventory-item-name"]'
    )
  ).toContainText("Sauce Labs Bolt T-Shirt");
});
