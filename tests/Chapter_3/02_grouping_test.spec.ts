// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test.describe("Smoke Testing", () => {
  test("Test 1", async ({ page }) => {
    // Navigate to sauce demo
    await page.goto("https://www.saucedemo.com/");

    // Insert username and password
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");

    // Click login button
    await page.locator("id=login-button").click();

    await page.waitForTimeout(5000);

    // Assertion (Validate)
    await expect(page).toHaveTitle("Swag Labs");
  });
});

test.describe("Regression Testing", () => {
  test("Test 2", async ({ page }) => {
    // Navigate to sauce demo
    await page.goto("https://www.saucedemo.com/");

    // Insert username and password
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");

    // Click login button
    await page.locator("id=login-button").click();

    await page.waitForTimeout(5000);

    // Assertion (Validate)
    await expect(page).toHaveTitle("Swag Labs");
  });

  test("Test 3", async ({ page }) => {
    // Navigate to sauce demo
    await page.goto("https://www.saucedemo.com/");

    // Insert username and password
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");

    // Click login button
    await page.locator("id=login-button").click();

    await page.waitForTimeout(5000);

    // Assertion (Validate)
    await expect(page).toHaveTitle("Swag Labs");
  });
});
