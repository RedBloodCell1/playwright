import { test, expect } from "@playwright/test";

test("Read ENV file config", async ({ page }) => {
  await page.goto(`${process.env.SAUCEDEMO_URL}`);

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");

  await page.locator("id=login-button").click();

  await expect(page).toHaveTitle("Swag Labs");
});
