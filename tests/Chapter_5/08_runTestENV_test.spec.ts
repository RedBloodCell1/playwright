import { test } from "../../src/fixture/TestFixture";

test("ENV", async ({
  page,
  loginPage,
  shoppingPage,
  productPage,
  testData,
}) => {
  await loginPage.goToURL();
  await loginPage.login(
    String(testData.User?.Username),
    String(testData.User?.Password)
  );

  await shoppingPage.clickFirstItem();

  await productPage.validateItemName("Sauce Labs Backpack");
  await page.waitForTimeout(2000);
});
