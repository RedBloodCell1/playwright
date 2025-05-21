import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { ShoppingPage } from "../pages/ShoppingPage";

import { loadTestData } from "../utils/JsonHelper";
import { TestData } from "../interface/testdata.interface";

export const test = base.extend<{
  saveLogs: void;
  loginPage: LoginPage;
  productPage: ProductPage;
  shoppingPage: ShoppingPage;
  testData: TestData;
}>({
  saveLogs: [
    async ({}, use) => {
      console.log("Global before is running...");

      await use();

      console.log("Global afterEach is running...");
    },
    { auto: true },
  ],
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
  shoppingPage: async ({ page }, use) => {
    const shoppingPage = new ShoppingPage(page);
    await use(shoppingPage);
  },
  testData: async ({}, use) => {
    const data = await loadTestData();
    await use(data);
  },
});

export { expect } from "@playwright/test";
