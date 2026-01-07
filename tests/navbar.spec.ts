import { test, expect } from "@playwright/test";
import { Navbar } from "../page-objects/navbar";
import { links } from "../test-data/testData";
import { loginAsValidUser } from "../helpers/login-helper";
import { ProductsPage } from "../page-objects/productsPage";
import { ProductDetailPage } from "../page-objects/productDetail";

let navbar: Navbar;
let productsPage: ProductsPage;
let productDetailPage: ProductDetailPage;

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
  navbar = new Navbar(page);
  productsPage = new ProductsPage(page);
  productDetailPage = new ProductDetailPage(page);
});

test.describe("Navbar Tests", () => {
  test("Verify navbar menu can be opened and closed", async ({}) => {
    await expect(navbar.navbarMenuSlider).toHaveAttribute(
      "aria-hidden",
      "true"
    );

    await navbar.openNavMenu();

    await expect(navbar.navbarMenuSlider).toHaveAttribute(
      "aria-hidden",
      "false"
    );
    await navbar.closeNavMenu();

    await expect(navbar.navbarMenuSlider).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  test("Verify logout option is available in navbar", async ({}) => {
    await navbar.openNavMenu();

    await expect(navbar.logoutOption).toBeVisible();
  });

  test("Navigate to Products page using the navbar", async ({ page }) => {
    await productsPage.getProductTitle().click();

    await navbar.openNavMenu();

    await expect(navbar.navbarMenuSlider).toHaveAttribute(
      "aria-hidden",
      "false"
    );

    await navbar.allItemsOption.click();

    await expect(page).toHaveURL(links.productsPageLink);
  });
});
