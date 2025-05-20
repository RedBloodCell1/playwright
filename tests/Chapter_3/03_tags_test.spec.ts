// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test(
  "My first playwright TS automation test 1",
  { tag: ["@Smoke Testing"] },
  async ({ page }) => {
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
  }
);

test(
  "My first playwright TS automation test 2",
  { tag: ["@Smoke Testing", "@Regression Testing"] },
  async ({ page }) => {
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
  }
);

test(
  "My first playwright TS automation test 3",
  { tag: ["@Regression Testing"] },
  async ({ page }) => {
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
  }
);
