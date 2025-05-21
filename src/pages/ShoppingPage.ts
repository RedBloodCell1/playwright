import { Page } from "@playwright/test";

export class ShoppingPage {
  // readonly (Good practice) here
  readonly page: Page;

  constructor(page: Page) {
    // Elements
    this.page = page;
  }

  // Methods
  async clickFirstItem() {
    await this.page.locator(".inventory_item_name").first().click();
  }
}
