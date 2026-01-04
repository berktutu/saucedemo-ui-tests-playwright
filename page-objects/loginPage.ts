import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly errorMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMsg = page.getByTestId("error");
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
