// Import playwright module
import { test, expect } from "@playwright/test";

/**
 * Author Testers Talk
 */
test("Handling Alert popups in Playwright ", async ({ page }) => {
  // Go to URL
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/"
  );

  page.once("dialog", (dialog) => {
    dialog.accept();
    console.log(dialog.message());
  });

  await page.getByText("See a sample confirm", { exact: true }).click();
});

test("Handling Prompt popups in Playwright", async ({ page }) => {
  // Go to URL
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/"
  );

  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.type());
    await dialog.accept("hi");
  });

  await page.getByText(" See a sample prompt", { exact: true }).click();

  await page.waitForTimeout(2000);
});
