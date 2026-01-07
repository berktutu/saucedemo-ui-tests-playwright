import { Page, Locator } from "@playwright/test";
import { buttonLabels } from "../test-data/testData";

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
    await product.getByRole("button", { name: buttonLabels.addToCart }).click();
  }

  async addProductsToCart(...indexes: number[]) {
    for (const index of indexes) {
      await this.addProductToCart(index);
    }
  }

  async removeProductFromCart(index = 0) {
    const product = this.getProductByIndex(index);
    await product
      .getByRole("button", { name: buttonLabels.removeFromCart })
      .click();
  }

  async getFullProductInfo(index = 0) {
    return {
      title: (await this.getProductTitle(index).textContent())?.trim(),
      description: (
        await this.getProductDescription(index).textContent()
      )?.trim(),
      price: (await this.getProductPrice(index).textContent())?.trim(),
      imgAlt: await this.getProductImage(index).getAttribute("alt"),
    };
  }
}
