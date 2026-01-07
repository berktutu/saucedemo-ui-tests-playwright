import { test, expect } from "@playwright/test";
import { links, buttonLabels } from "../test-data/testData";
import { ProductsPage } from "../page-objects/productsPage";
import { loginAsValidUser } from "../helpers/login-helper";
import { ProductDetailPage } from "../page-objects/productDetail";
import { Navbar } from "../page-objects/navbar";
import { ShoppingCart } from "../page-objects/shoppingCart";

let productsPage: ProductsPage;
let productDetailPage: ProductDetailPage;
let navbar: Navbar;
let shoppingCart: ShoppingCart;

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
  productsPage = new ProductsPage(page);
  productDetailPage = new ProductDetailPage(page);
  navbar = new Navbar(page);
  shoppingCart = new ShoppingCart(page);
});

test.describe("Product Detail Page Tests", () => {
  test("Verify clicking a product navigates to the Product detail page", async ({
    page,
  }) => {
    await productsPage.getProductTitle().click();
    await expect(page).toHaveURL(/inventory-item/);
  });

  test("Verify product detail page displays complete product information", async ({}) => {
    await productsPage.getProductTitle().click();

    await expect(productDetailPage.title).toBeVisible();
    await expect(productDetailPage.description).toBeVisible();
    await expect(productDetailPage.price).toBeVisible();
    await expect(productDetailPage.img).toBeVisible();
    await expect(productDetailPage.addToCartButton).toBeVisible();
  });

  test("Verify product details match between Products page and Product detail page", async ({}) => {
    const productsPageInfo = await productsPage.getFullProductInfo();

    await productsPage.getProductTitle().click();

    const productDetailPageInfo = await productDetailPage.getFullProductInfo();

    expect(productDetailPageInfo.title).toBe(productsPageInfo.title);
    expect(productDetailPageInfo.description).toBe(
      productsPageInfo.description
    );
    expect(productDetailPageInfo.price).toBe(productsPageInfo.price);
    expect(productDetailPageInfo.imgAlt).toBe(productsPageInfo.imgAlt);
  });

  test('Verify "Add to Cart" button changes back to "Remove" on Product detail page', async ({}) => {
    await productsPage.getProductTitle().click();

    await expect(productDetailPage.removeFromCartButton).not.toBeVisible();

    await productDetailPage.addProduct();

    await expect(productDetailPage.addToCartButton).not.toBeVisible();
    await expect(productDetailPage.removeFromCartButton).toBeVisible();
  });

  test('Verify "Remove" button changes back to "Add to Cart" on Product detail page', async ({}) => {
    await productsPage.getProductTitle().click();

    await productDetailPage.addProduct();

    await expect(productDetailPage.removeFromCartButton).toBeVisible();

    await productDetailPage.removeProduct();

    await expect(productDetailPage.addToCartButton).toBeVisible();
    await expect(productDetailPage.removeFromCartButton).not.toBeVisible();
  });

  test("Verify user can navigate back to Products page from Product detail page", async ({
    page,
  }) => {
    await productsPage.getProductTitle().click();

    await expect(productDetailPage.backToProductsButton).toBeVisible();
    await productDetailPage.goBackToProducts();

    await expect(page).toHaveURL(links.productsPageLink);
  });
});
