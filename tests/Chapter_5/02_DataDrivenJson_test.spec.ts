import { test, expect } from "@playwright/test";
import testData from "../../test-data/qa/testdata.json";

type TestData = {
  Jason: {
    Username: String;
    Password: String;
  };
  Brandy: {
    Username: String;
    Password: String;
  };
};

const typedTestData = testData as TestData;

for (const key in typedTestData) {
  console.log(key);
  const data = typedTestData[key as keyof TestData];
  console.log(data);

  test(`${data.Username}`, async ({ page }) => {
    await page.goto(`${process.env.SAUCEDEMO_URL}`);
    await page.getByPlaceholder("Username").fill(`${data.Username}`);
    await page.locator('[data-test="password"]').fill(`${data.Password}`);
    await page.locator("id=login-button").click();
    await expect(page).toHaveTitle("Swag Labs");
    // await page.waitForTimeout(1500);
  });
}
