import { test, expect } from "@playwright/test";

test("My first playwright TS automation test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  await page.locator("id=login-button").click();

  await expect(page).toHaveTitle("Swag Labs");
});
