import { Page, Locator } from "@playwright/test";
import { buttonLabels } from "../test-data/testData";

export class ProductDetailPage {
  readonly page: Page;
  readonly productContainer: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly price: Locator;
  readonly addToCartButton: Locator;
  readonly removeFromCartButton: Locator;
  readonly img: Locator;
  readonly backToProductsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productContainer = page.getByTestId("inventory-item");
    this.title = this.productContainer.getByTestId("inventory-item-name");
    this.description = this.productContainer.getByTestId("inventory-item-desc");
    this.price = this.productContainer.getByTestId("inventory-item-price");
    this.addToCartButton = this.productContainer.getByRole("button", {
      name: buttonLabels.addToCart,
    });
    this.removeFromCartButton = this.productContainer.getByRole("button", {
      name: buttonLabels.removeFromCart,
    });
    this.img = this.productContainer.getByRole("img");
    this.backToProductsButton = page.getByTestId("back-to-products");
  }

  async addProduct() {
    await this.addToCartButton.click();
  }

  async removeProduct() {
    await this.removeFromCartButton.click();
  }

  async goBackToProducts() {
    await this.backToProductsButton.click();
  }

  async getFullProductInfo() {
    return {
      title: (await this.title.textContent())?.trim(),
      description: (await this.description.textContent())?.trim(),
      price: (await this.price.textContent())?.trim(),
      imgAlt: await this.img.getAttribute("alt"),
    };
  }
}
