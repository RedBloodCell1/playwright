import { test } from "../../src/fixture/TestFixture";

test("POM", async ({ page, loginPage, shoppingPage, productPage }) => {
  await loginPage.goToURL();
  await loginPage.login(`${process.env.USERNAME2}`, `${process.env.PASSWORD2}`);

  await shoppingPage.clickFirstItem();

  await productPage.validateItemName("Sauce Labs Backpack");
  await page.waitForTimeout(2000);
});
