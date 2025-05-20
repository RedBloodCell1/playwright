// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Multiple Browser/tabs", async ({ page, browser }) => {
  // Navigate to sauce demo
  await page.goto("https://www.saucedemo.com/");

  // Insert username and password
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  // Click login button
  await page.locator("id=login-button").click();

  // Assertion (Validate)
  await expect(page).toHaveTitle("Swag Labs");

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  // Navigate to sauce demo
  await page2.goto("https://www.saucedemo.com/");

  // Insert username and password
  await page2.getByPlaceholder("Username").fill("standard_user");
  await page2.locator('[data-test="password"]').fill("secret_sauce");

  // Click login button
  await page2.locator("id=login-button").click();

  // Assertion (Validate)
  await expect(page2).toHaveTitle("Swag Labs");

  // Create new tab

  const newTab = await context2.newPage();

  // Navigate to sauce demo
  await newTab.goto("https://www.saucedemo.com/");

  // Insert username and password
  await newTab.getByPlaceholder("Username").fill("standard_user");
  await newTab.locator('[data-test="password"]').fill("secret_sauce");

  // Click login button
  await newTab.locator("id=login-button").click();

  // Assertion (Validate)
  await expect(newTab).toHaveTitle("Swag Labs");

  // Create new tab
});
