import { test, expect } from "@playwright/test";
import { loginAsValidUser } from "../helpers/login-helper";
import { Navbar } from "../page-objects/navbar";
import { openNavMenu, closeNavMenu } from "../helpers/navbar-helper";
import { links } from "../test-data/testData";

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
});

test.describe("Logout Tests", () => {
  test("Logout from the application", async ({ page }) => {
    await openNavMenu(page);

    const navbar = new Navbar(page);
    await navbar.logout();

    await expect(page).toHaveURL(links.mainLink);
  });

  test("Prevent application access after logout using browser back navigation", async ({
    page,
  }) => {
    await openNavMenu(page);

    const navbar = new Navbar(page);
    await navbar.logout();

    await page.goBack();
    await expect(page).toHaveURL(links.mainLink);
  });
});
