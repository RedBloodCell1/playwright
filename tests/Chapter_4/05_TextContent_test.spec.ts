// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Get text and attribute", async ({ page }) => {
  // Navigate to sauce demo
  await page.goto("https://github.com/RedBloodCell1");

  const name = await page.locator('[itemprop="name"]').textContent();

  console.log(name?.trim());

  const classAtr = await page
    .locator('[itemprop="name"]')
    .getAttribute("class");

  console.log(classAtr);
});
