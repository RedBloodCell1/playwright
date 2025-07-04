import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import { ShoppingPage } from "../../src/pages/ShoppingPage";
import { ProductPage } from "../../src/pages/ProductPage";

test("POM", async ({ page }) => {
  await page.setViewportSize({
    width: 1536,
    height: 695,
  });
  const loginPage = new LoginPage(page);
  const shoppingPage = new ShoppingPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goToURL();
  await loginPage.login(`${process.env.USERNAME2}`, `${process.env.PASSWORD2}`);

  await shoppingPage.clickFirstItem();

  await productPage.validateItemName("Sauce Labs Backpack");
  await page.waitForTimeout(2000);
});
