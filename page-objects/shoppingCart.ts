import { Page, Locator } from "@playwright/test";

export class ShoppingCart {
  readonly page: Page;
  readonly products: Locator;
  readonly shoppingCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartIcon = page.getByTestId("shopping-cart-link");
    this.products = page.getByTestId("inventory-item");
  }

  async navigateToCart() {
    await this.shoppingCartIcon.click();
  }

  async goToCheckout() {
    await this.page.getByRole("button", { name: "Checkout" }).click();
  }
}
