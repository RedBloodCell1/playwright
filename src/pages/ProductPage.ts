import { Page, expect } from "@playwright/test";

export class ProductPage {
  // readonly (Good practice) here
  readonly page: Page;

  constructor(page: Page) {
    // Elements
    this.page = page;
  }

  // Methods
  async validateItemName(itemName: string) {
    await expect(this.page.locator(".inventory_details_name")).toHaveText(
      itemName
    );
  }
}
