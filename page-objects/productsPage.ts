import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly products: Locator;
  readonly productButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.getByTestId("inventory-item");
    this.productButtons = page.getByTestId("add-to-cart-sauce-labs-bike-light");
  }
}
