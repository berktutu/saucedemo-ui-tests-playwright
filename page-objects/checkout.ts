import { Page, Locator } from "@playwright/test";

export class CheckoutInformation {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.getByPlaceholder("First Name").fill(firstName);
    await this.page.getByPlaceholder("Last Name").fill(lastName);
    await this.page.getByPlaceholder("Zip/Postal Code").fill(postalCode);
  }

  async continueCheckout() {
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async cancelCheckout() {
    await this.page.getByRole("button", { name: "Cancel" }).click();
  }
}

export class CheckoutOverview {
  readonly page: Page;
  readonly checkoutCompleteContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutCompleteContainer = page.getByTestId(
      "checkout-complete-container"
    );
  }

  async finishCheckout() {
    await this.page.getByRole("button", { name: "Finish" }).click();
  }

  async cancelCheckout() {
    await this.page.getByRole("button", { name: "Cancel" }).click();
  }
}
