import { test, expect } from "@playwright/test";
import { Navbar } from "../page-objects/navbar";
import { links } from "../test-data/testData";
import { loginAsValidUser } from "../helpers/login-helper";

let navbar: Navbar;

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
  navbar = new Navbar(page);
});

test.describe("Logout Tests", () => {
  test("Logout from the application", async ({ page }) => {
    await navbar.openNavMenu();

    await navbar.logout();

    await expect(page).toHaveURL(links.mainLink);
  });

  test("Prevent application access after logout using browser back navigation", async ({
    page,
  }) => {
    await navbar.openNavMenu();

    await navbar.logout();

    await page.goBack();
    await expect(page).toHaveURL(links.mainLink);
  });
});
