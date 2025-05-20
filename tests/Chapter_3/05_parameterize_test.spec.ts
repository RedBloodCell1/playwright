// Import playwright module

import { test, expect } from "@playwright/test";

const trials = ["standard_user", "standard_userr"];

for (const trial of trials) {
  test(`Parameterize ${trial}`, async ({ page }) => {
    // Navigate to sauce demo
    await page.goto("https://www.saucedemo.com/");

    // Insert username and password
    await page.getByPlaceholder("Username").fill(trial);
    await page.locator('[data-test="password"]').fill("secret_sauce");

    // Click login button
    await page.locator("id=login-button").click();

    // Assertion (Validate)
    await expect(page).toHaveTitle("Swag Labs");
  });
}

// Write a test
