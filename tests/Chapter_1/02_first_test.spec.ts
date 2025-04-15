// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("My first playwright TS automation test", async ({ page }) => {
  // Navigate to google
  await page.goto("https://www.saucedemo.com/");

  await expect(page).toHaveTitle("Swag Labs");
});
