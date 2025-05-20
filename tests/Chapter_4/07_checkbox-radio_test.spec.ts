// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("checkbox and radio", async ({ page }) => {
  // Navigate to sauce demo
  await page.goto("https://jqueryui.com/checkboxradio/");

  const iframe = await page.frameLocator('[class="demo-frame"]');

  await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked();

  await iframe.locator('[for="radio-1"]').click();

  await expect(iframe.locator('[for="radio-1"]')).toBeChecked();
});
