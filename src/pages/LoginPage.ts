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
    if (process.env.TEST_EXECUTION_ENV == "qa") {
      await this.page.goto(`${process.env.SAUCEDEMO_URL}`);
      console.log(
        `Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`
      );
    } else if (process.env.TEST_EXECUTION_ENV == "dev") {
      await this.page.goto(`${process.env.SAUCEDEMO_URL}`);
      console.log(
        `Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`
      );
    }
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
