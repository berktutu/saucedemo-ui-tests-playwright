import { Page, Locator } from "@playwright/test";
import { validUsers } from "../test-data/testData";

export class LoginPage {
  readonly page: Page;
  readonly errorMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMsg = page.getByTestId("error");
  }

  async attemptLogin(username: string, password: string) {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
