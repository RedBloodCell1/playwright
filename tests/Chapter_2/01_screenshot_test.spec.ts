// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Screenshot test", async ({ page }) => {
  // Navigate to sauce demo
  await page.goto("https://www.saucedemo.com/");

  // Element Screenshot
  await page
    .locator(".login_logo")
    .screenshot({ path: "./screenshots/ElementScreenshot.jpg" });

  // Page Screenshot\
  await page.screenshot({
    path: "./screenshots/PageScreenshot.jpg",
  });

  // FullPage Screenshot
  await page.screenshot({
    path: "./screenshots/FullPageScreenshot.jpg",
    fullPage: true,
  });
});
