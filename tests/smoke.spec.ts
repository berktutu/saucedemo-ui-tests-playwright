import { test, expect } from "@playwright/test";
import { links } from "../test-data/testData";
import { ProductsPage } from "../page-objects/productsPage";
import { ShoppingCart } from "../page-objects/shoppingCart";
import { CheckoutOverview } from "../page-objects/checkout";
import { loginAsValidUser } from "../helpers/login-helper";
import { addFirstItemToCart } from "../helpers/products-helper";
import { navigateToCart, goToCheckout } from "../helpers/cart-helper";
import {
  fillValidInformation,
  continueToCheckout,
  finishTheCheckout,
} from "../helpers/checkout-helper";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test.describe("@smoke Smoke tests", () => {
  test("Login with valid credentials", async ({ page }) => {
    await loginAsValidUser(page);

    await expect(page).toHaveURL(links.productsPageLink);
  });

  test("Verify products are displayed on Products page", async ({ page }) => {
    await loginAsValidUser(page);

    const productsPage = new ProductsPage(page);
    await expect(productsPage.products.first()).toBeVisible();
  });

  test("Verify added product from Products page appears in cart", async ({
    page,
  }) => {
    await loginAsValidUser(page);

    await addFirstItemToCart(page);

    await navigateToCart(page);

    const shoppingCart = new ShoppingCart(page);
    await expect(shoppingCart.products).toBeVisible();
  });

  test("Verify finishing checkout successfully with one product", async ({
    page,
  }) => {
    await loginAsValidUser(page);

    await addFirstItemToCart(page);

    await navigateToCart(page);

    await goToCheckout(page);

    await expect(page).toHaveURL(links.checkoutInformationLink);

    await fillValidInformation(page);

    await continueToCheckout(page);

    await expect(page).toHaveURL(links.checkoutOverviewLink);

    await finishTheCheckout(page);

    const checkoutOverview = new CheckoutOverview(page);
    await expect(checkoutOverview.checkoutCompleteContainer).toBeVisible();
  });
});
