import { Page, Locator } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly productsList: Locator;
  readonly products: Locator;
  readonly productsAddButton: Locator;
  readonly productsRemoveButton: Locator;
  readonly productTitles: Locator;
  readonly productDescriptions: Locator;
  readonly productPrices: Locator;
  readonly productImages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsList = page.getByTestId("inventory-list");
    this.products = page.getByTestId("inventory-item");
    this.productsAddButton = this.products.getByRole("button", {
      name: "Add to cart",
    });
    this.productsRemoveButton = this.products.getByRole("button", {
      name: "Remove",
    });
    this.productTitles = page.getByTestId("inventory-item-name");
    this.productDescriptions = page.getByTestId("inventory-item-desc");
    this.productPrices = page.getByTestId("inventory-item-price");
    this.productImages = this.products.getByRole("img");
  }

  getItemByIndex(index: number): Locator {
    return this.products.nth(index);
  }

  async addProductToCart(index = 0) {
    const product = this.getItemByIndex(index);
    await product.getByRole("button", { name: "Add to cart" }).click();
  }

  async removeProductFromCart(index = 0) {
    const product = this.getItemByIndex(index);
    await product.getByRole("button", { name: "Remove" }).click();
  }
}
