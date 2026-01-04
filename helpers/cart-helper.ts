import { Page } from "@playwright/test";
import { ShoppingCart } from "../page-objects/shoppingCart";

export async function navigateToCart(page: Page) {
  const shoppingCart = new ShoppingCart(page);
  await shoppingCart.shoppingCartIcon.click();
}

export async function goToCheckout(page: Page) {
  const shoppingCart = new ShoppingCart(page);
  await shoppingCart.goToCheckout();
}
