import { test, expect } from "@playwright/test";
import { links, buttonLabels } from "../test-data/testData";
import { ProductsPage } from "../page-objects/productsPage";
import { loginAsValidUser } from "../helpers/login-helper";

let productsPage: ProductsPage;

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
  productsPage = new ProductsPage(page);
});

test.describe("Products Page Tests", () => {
  test("Verify all product details are displayed on Products page", async ({}) => {
    await expect(productsPage.getProductTitle()).toBeVisible();
    await expect(productsPage.getProductTitle()).not.toHaveText("");

    await expect(productsPage.getProductDescription()).toBeVisible();
    await expect(productsPage.getProductDescription()).not.toHaveText("");

    await expect(productsPage.getProductPrice()).toBeVisible();
    await expect(productsPage.getProductPrice()).not.toHaveText("");

    await expect(productsPage.getProductImage()).toBeVisible();
  });

  test('Verify "Add to Cart" button changes to "Remove" on click', async ({}) => {
    const productButton = productsPage.getProductButton(0);

    await expect(productButton).toHaveText(buttonLabels.addToCart);
    await productsPage.addProductToCart(0);
    await expect(productButton).toHaveText(buttonLabels.removeFromCart);
  });

  test('Verify multiple "Add to Cart" buttons change to "Remove" on click', async ({}) => {
    const productButton1 = productsPage.getProductButton(0);
    const productButton2 = productsPage.getProductButton(1);

    await expect(productButton1).toHaveText(buttonLabels.addToCart);
    await expect(productButton2).toHaveText(buttonLabels.addToCart);

    for (const i of [0, 1]) {
      await productsPage.addProductToCart(i);
    }

    await expect(productButton1).toHaveText(buttonLabels.removeFromCart);
    await expect(productButton2).toHaveText(buttonLabels.removeFromCart);
  });

  test('Verify "Remove" button changes back to "Add to Cart"', async ({}) => {
    const productButton = productsPage.getProductButton(0);

    await productsPage.addProductToCart(0);
    await expect(productButton).toHaveText(buttonLabels.removeFromCart);

    await productsPage.removeProductFromCart(0);
    await expect(productButton).toHaveText(buttonLabels.addToCart);
  });

  test('Verify multiple "Remove" buttons change back to "Add to Cart"', async ({}) => {
    const productButton1 = productsPage.getProductButton(0);
    const productButton2 = productsPage.getProductButton(1);

    for (const i of [0, 1]) {
      await productsPage.addProductToCart(i);
    }

    await expect(productButton1).toHaveText(buttonLabels.removeFromCart);
    await expect(productButton2).toHaveText(buttonLabels.removeFromCart);

    for (const i of [0, 1]) {
      await productsPage.removeProductFromCart(i);
    }

    await expect(productButton1).toHaveText(buttonLabels.addToCart);
    await expect(productButton2).toHaveText(buttonLabels.addToCart);
  });
});
