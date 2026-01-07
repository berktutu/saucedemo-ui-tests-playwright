import { Page, Locator } from "@playwright/test";
import { buttonLabels } from "../test-data/testData";

export class ShoppingCart {
  readonly page: Page;
  readonly products: Locator;
  readonly shoppingCartIcon: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartIcon = page.getByTestId("shopping-cart-link");
    this.products = page.getByTestId("inventory-item");
    this.continueShoppingButton = page.getByRole("button", {
      name: buttonLabels.continueShopping,
    });
  }

  getProductInTheCartByIndex(index: number): Locator {
    return this.products.nth(index);
  }

  getProductTitle(index = 0): Locator {
    return this.getProductInTheCartByIndex(index).getByTestId(
      "inventory-item-name"
    );
  }

  getProductDescription(index = 0): Locator {
    return this.getProductInTheCartByIndex(index).getByTestId(
      "inventory-item-desc"
    );
  }

  getProductPrice(index = 0): Locator {
    return this.getProductInTheCartByIndex(index).getByTestId(
      "inventory-item-price"
    );
  }

  getProductRemoveButton(index = 0): Locator {
    return this.getProductInTheCartByIndex(index).getByRole("button", {
      name: buttonLabels.removeFromCart,
    });
  }

  async getFullProductInfo(index = 0) {
    return {
      title: (await this.getProductTitle(index).textContent())?.trim(),
      description: (
        await this.getProductDescription(index).textContent()
      )?.trim(),
      price: (await this.getProductPrice(index).textContent())?.trim(),
    };
  }

  async navigateToCart() {
    await this.shoppingCartIcon.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async goToCheckout() {
    await this.page.getByRole("button", { name: "Checkout" }).click();
  }
}
