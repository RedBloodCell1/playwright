// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Learn Locator", async ({ page }) => {
  // Navigate to sauce demo
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("button", { name: "Login" }).click();
});
