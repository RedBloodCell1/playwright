// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Mouse action", async ({ page }) => {
  // Navigate to URL
  await page.goto("https://web.facebook.com/");

  //   await page.getByTestId("open-registration-form-button").click({button:'left'});
  //   await page.getByTestId("open-registration-form-button").click({button:'middle'});
  //   await page.getByTestId("open-registration-form-button").click({button:'right'});

  await page.getByTestId("open-registration-form-button").hover();

  await page.waitForTimeout(5000);
});
