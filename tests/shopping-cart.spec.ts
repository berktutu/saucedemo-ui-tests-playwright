import { test, expect } from "@playwright/test";
import { links, buttonLabels } from "../test-data/testData";
import { ProductsPage } from "../page-objects/productsPage";
import { loginAsValidUser } from "../helpers/login-helper";
import { ProductDetailPage } from "../page-objects/productDetail";
import { ShoppingCart } from "../page-objects/shoppingCart";

let productsPage: ProductsPage;
let productDetailPage: ProductDetailPage;
let shoppingCart: ShoppingCart;

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
  productsPage = new ProductsPage(page);
  productDetailPage = new ProductDetailPage(page);
  shoppingCart = new ShoppingCart(page);
});

test.describe("Shopping Cart Tests", () => {
  test("Verify shopping cart icon is visible and present on Products page", async ({}) => {
    await expect(shoppingCart.shoppingCartIcon).toBeVisible();
  });

  test("Verify shopping cart icon is visible and present on a Product page", async ({}) => {
    await productsPage.getProductTitle().click();
    await expect(shoppingCart.shoppingCartIcon).toBeVisible();
  });

  test("Verify shopping cart icon navigates to Shopping Cart page from Products Page", async ({
    page,
  }) => {
    await shoppingCart.shoppingCartIcon.click();
    await expect(page).toHaveURL(links.cartLink);
  });

  test("Verify shopping cart icon navigates to Shopping Cart page from a Product page", async ({
    page,
  }) => {
    await productsPage.getProductTitle().click();

    await shoppingCart.shoppingCartIcon.click();

    await expect(page).toHaveURL(links.cartLink);
  });

  test("Verify added product details are displayed in the shopping cart", async ({}) => {
    await productsPage.addProductToCart();

    await shoppingCart.shoppingCartIcon.click();

    await expect(shoppingCart.getProductTitle()).toBeVisible();
    await expect(shoppingCart.getProductDescription()).toBeVisible();
    await expect(shoppingCart.getProductPrice()).toBeVisible();
    await expect(shoppingCart.getProductRemoveButton()).toBeVisible();
  });

  test("Verify added product details match with Products page", async ({}) => {
    const productsPageProductInfo = await productsPage.getFullProductInfo();

    await productsPage.addProductToCart();

    await shoppingCart.shoppingCartIcon.click();

    const shoppingCartProductInfo = await shoppingCart.getFullProductInfo();

    expect(shoppingCartProductInfo.title).toBe(productsPageProductInfo.title);
    expect(shoppingCartProductInfo.description).toBe(
      productsPageProductInfo.description
    );
    expect(shoppingCartProductInfo.price).toBe(productsPageProductInfo.price);
  });

  test("Verify multiple products display correct details in cart", async ({}) => {
    const productsPageFirstProductInfo = await productsPage.getFullProductInfo(
      0
    );
    const productsPageSecondProductInfo = await productsPage.getFullProductInfo(
      1
    );

    await productsPage.addProductsToCart(0, 1);

    await shoppingCart.navigateToCart();

    const shoppingCartPageFirstProductInfo =
      await shoppingCart.getFullProductInfo(0);
    const shoppingCartPageSecondProductInfo =
      await shoppingCart.getFullProductInfo(1);

    expect(shoppingCartPageFirstProductInfo.title).toBe(
      productsPageFirstProductInfo.title
    );

    expect(shoppingCartPageSecondProductInfo.title).toBe(
      productsPageSecondProductInfo.title
    );
  });

  test('Verify "Continue Shopping" button is visible and functional on Shopping Cart page', async ({
    page,
  }) => {
    await shoppingCart.navigateToCart();

    await expect(shoppingCart.continueShoppingButton).toBeVisible();

    await shoppingCart.continueShopping();

    await expect(page).toHaveURL(links.productsPageLink);
  });
});
