import { test, expect } from "@playwright/test";
import path from "path";
import { readExcelFile } from "../../src/utils/excelHelper";

const filePath = path.join(__dirname, "../../test-data/qa/TestData.xlsx");

const records = readExcelFile(filePath);

for (const record of records) {
  test(`${record.Username}`, async ({ page }) => {
    await page.goto(`${process.env.SAUCEDEMO_URL}`);
    await page.getByPlaceholder("Username").fill(`${record.Username}`);
    await page.locator('[data-test="password"]').fill(`${record.Password}`);
    await page.locator("id=login-button").click();
    await expect(page).toHaveTitle("Swag Labs");
    // await page.waitForTimeout(1500);
  });
}
