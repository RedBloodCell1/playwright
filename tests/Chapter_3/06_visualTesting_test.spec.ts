// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("Visual Testing Comparison", async ({ page }) => {
  // Navigate to sauce demo
  await page.goto("https://github.com/login");

  await expect(page).toHaveScreenshot("GithubLoginPage.png");

  //   await page.locator("#login_field").fill("Boombot Super");

  //   await expect(page).toHaveScreenshot("GithubLoginPage.png");

  const element = page.locator('[class="auth-form-body mt-3"]');

  await expect(element).toHaveScreenshot("GtihubLoginForm.png");
});
