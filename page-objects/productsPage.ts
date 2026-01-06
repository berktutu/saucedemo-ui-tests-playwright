import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.getByTestId("inventory-item");
  }

  getProductByIndex(index: number): Locator {
    return this.products.nth(index);
  }

  getProductTitle(index = 0): Locator {
    return this.getProductByIndex(index).getByTestId("inventory-item-name");
  }

  getProductDescription(index = 0): Locator {
    return this.getProductByIndex(index).getByTestId("inventory-item-desc");
  }

  getProductPrice(index = 0): Locator {
    return this.getProductByIndex(index).getByTestId("inventory-item-price");
  }

  getProductImage(index = 0): Locator {
    return this.getProductByIndex(index).getByRole("img");
  }

  getProductButton(index = 0): Locator {
    return this.getProductByIndex(index).getByRole("button");
  }

  async addProductToCart(index = 0) {
    const product = this.getProductByIndex(index);
    await product.getByRole("button", { name: "Add to cart" }).click();
  }

  async removeProductFromCart(index = 0) {
    const product = this.getProductByIndex(index);
    await product.getByRole("button", { name: "Remove" }).click();
  }
}
