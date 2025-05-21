import { Locator, Page } from "@playwright/test";

export class LoginPage {
  // readonly (Good practice) here
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    // Elements
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }

  // Methods
  async goToURL() {
    await this.page.goto(`${process.env.SAUCEDEMO_URL}`);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
