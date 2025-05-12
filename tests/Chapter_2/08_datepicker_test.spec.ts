// Import playwright module

import { test, expect } from "@playwright/test";

// Write a test

test("datepicker", async ({ page }) => {
  // Go to URL
  await page.goto("https://jqueryui.com/datepicker/");

  const iframe = page.frameLocator('[class="demo-frame"]');

  // Hardcode date
  //   await iframe.locator("#datepicker").fill("12/02/2024");

  // Dynamic date ()
  //   await iframe.locator("#datepicker").click();
  //   await iframe.locator(".ui-datepicker-today").click();

  // Past date
  //   await iframe.locator("#datepicker").click();
  //   await iframe.locator(".ui-datepicker-prev").click();
  //   await iframe.locator("text=15").click();

  // Future date
  await iframe.locator("#datepicker").click();
  await iframe.locator(".ui-datepicker-next").click();
  await iframe.locator("text=15").click();

  await page.waitForTimeout(5000);
});
