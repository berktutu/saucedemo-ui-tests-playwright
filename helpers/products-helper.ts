import { Page } from "@playwright/test";
import { ProductsPage } from "../page-objects/productsPage";

export async function addFirstItemToCart(page: Page) {
  const productsPage = new ProductsPage(page);
  await productsPage.productButtons.first().click();
}
