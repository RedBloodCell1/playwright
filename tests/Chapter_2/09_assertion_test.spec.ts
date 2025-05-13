import { test, expect } from "@playwright/test";

test("Assertion", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.youtube.com/");

  // visible, editable, enabled, empty
  await expect(
    page.getByPlaceholder("Search", { exact: true }).first()
  ).toBeVisible();
  await expect(
    page.getByPlaceholder("Search", { exact: true }).first()
  ).toBeEditable();
  await expect(
    page.getByPlaceholder("Search", { exact: true }).first()
  ).toBeEnabled();
  await expect(
    page.getByPlaceholder("Search", { exact: true }).first()
  ).toBeEmpty();

  // verify URL, title, text, count

  await page
    .getByPlaceholder("Search", { exact: true })
    .first()
    .fill("youtube");

  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(
    "https://www.youtube.com/results?search_query=youtube"
  );

  await expect(page).toHaveTitle("youtube - YouTube");

  //   await expect(
  //     page.locator("[class='title style-scope ytd-guide-entry-renderer']").first()
  //   ).toHaveText("Home");

  await expect(
    page.locator("[class='title style-scope ytd-guide-entry-renderer']")
  ).toHaveCount(18);

  await page.waitForTimeout(5000);
});
