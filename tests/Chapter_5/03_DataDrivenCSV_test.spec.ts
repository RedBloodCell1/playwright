import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

type TestRecords = {
  Username: string;
  Password: string;
};

const records = parse(
  fs.readFileSync(path.join(__dirname, "../../test-data/qa/testdata.csv")),
  {
    columns: true,
    skipEmptyLines: true,
  }
) as TestRecords[];

console.log(records);

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
