import { test, expect } from "@playwright/test";

test("Keyboard", async ({ page }) => {
  // Navigate to URL
  await page.goto("https://www.saucedemo.com/");

  // Insert username and password
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").press("Tab");
  await page.waitForTimeout(3000);

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.waitForTimeout(5000);
  await page.locator('[data-test="password"]').fill("secret_sauce");

  // Selecting & Deleting from keyboard
  //   await page.getByPlaceholder("Username").press("Control+A");
  //   await page.getByPlaceholder("Username").press("Delete");

  await page.waitForTimeout(5000);

  await page.keyboard.press("Enter");

  await page.waitForTimeout(5000);

  // Press TAB and Enter
});
