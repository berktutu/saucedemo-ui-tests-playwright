import { test, expect } from "@playwright/test";
import { links } from "../test-data/testData";
import { ProductsPage } from "../page-objects/productsPage";
import { ShoppingCart } from "../page-objects/shoppingCart";
import {
  CheckoutOverview,
  CheckoutInformation,
} from "../page-objects/checkout";
import { fillValidInformation } from "../helpers/checkout-helper";
import { loginAsValidUser } from "../helpers/login-helper";

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
});

test.describe("@smoke Smoke tests", () => {
  test("Login with valid credentials", async ({ page }) => {
    await expect(page).toHaveURL(links.productsPageLink);
  });

  test("Verify products are displayed on Products page", async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await expect(productsPage.products.first()).toBeVisible();
  });

  test("Verify added product from Products page appears in cart", async ({
    page,
  }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart(0);

    const shoppingCart = new ShoppingCart(page);
    await shoppingCart.navigateToCart();

    await expect(shoppingCart.products).toBeVisible();
  });

  test("Verify finishing checkout successfully with one product", async ({
    page,
  }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.addProductToCart(0);

    const shoppingCart = new ShoppingCart(page);
    await shoppingCart.navigateToCart();
    await shoppingCart.goToCheckout();

    await expect(page).toHaveURL(links.checkoutInformationLink);

    await fillValidInformation(page);

    const checkoutInformation = new CheckoutInformation(page);
    await checkoutInformation.continueCheckout();

    await expect(page).toHaveURL(links.checkoutOverviewLink);

    const checkoutOverview = new CheckoutOverview(page);
    await checkoutOverview.finishCheckout();

    await expect(checkoutOverview.checkoutCompleteContainer).toBeVisible();
  });
});
