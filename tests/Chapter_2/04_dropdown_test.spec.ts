import { test, expect } from "@playwright/test";

test("dropdown test", async ({ page }) => {
  await page.goto("https://web.facebook.com/");
  await page.getByTestId("open-registration-form-button").click();

  // Open dropdown
  await page.getByLabel("Day").selectOption("13");
  await page.getByLabel("Month").selectOption("Dec");
  await page.getByLabel("Year").selectOption("2017");

  await expect(page.locator("#month > option")).toHaveText([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Bam",
  ]);
});
