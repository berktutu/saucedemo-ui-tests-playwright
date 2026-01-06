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

let productsPage: ProductsPage;
let shoppingCart: ShoppingCart;
let checkoutInformation: CheckoutInformation;
let checkoutOverview: CheckoutOverview;

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
  productsPage = new ProductsPage(page);
  shoppingCart = new ShoppingCart(page);
  checkoutInformation = new CheckoutInformation(page);
  checkoutOverview = new CheckoutOverview(page);
});

test.describe("@smoke Smoke tests", () => {
  test("Login with valid credentials", async ({ page }) => {
    await expect(page).toHaveURL(links.productsPageLink);
  });

  test("Verify products are displayed on Products page", async ({}) => {
    await expect(productsPage.getProductByIndex(0)).toBeVisible();
  });

  test("Verify added product from Products page appears in cart", async ({}) => {
    await productsPage.addProductToCart(0);

    await shoppingCart.navigateToCart();

    await expect(shoppingCart.products).toBeVisible();
  });

  test("Verify finishing checkout successfully with one product", async ({
    page,
  }) => {
    await productsPage.addProductToCart(0);

    await shoppingCart.navigateToCart();
    await shoppingCart.goToCheckout();

    await expect(page).toHaveURL(links.checkoutInformationLink);

    await fillValidInformation(page);

    await checkoutInformation.continueCheckout();

    await expect(page).toHaveURL(links.checkoutOverviewLink);

    await checkoutOverview.finishCheckout();

    await expect(checkoutOverview.checkoutCompleteContainer).toBeVisible();
  });
});
