import { test, expect } from "@playwright/test";
import { loginAsValidUser } from "../helpers/login-helper";
import { Navbar } from "../page-objects/navbar";
import { openNavMenu, closeNavMenu } from "../helpers/navbar-helper";
import { links } from "../test-data/testData";

test.beforeEach(async ({ page }) => {
  await page.goto(links.mainLink);
  await loginAsValidUser(page);
});

test.describe("Navbar Tests", () => {
  test("Verify navbar menu can be opened and closed", async ({ page }) => {
    const navbar = new Navbar(page);
    await expect(navbar.navbarMenuSlider).toHaveAttribute(
      "aria-hidden",
      "true"
    );

    await openNavMenu(page);

    await expect(navbar.navbarMenuSlider).toHaveAttribute(
      "aria-hidden",
      "false"
    );
    await closeNavMenu(page);

    await expect(navbar.navbarMenuSlider).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  test("Verify logout option is available in navbar", async ({ page }) => {
    await openNavMenu(page);

    const navbar = new Navbar(page);
    await expect(navbar.logoutOption).toBeVisible();
  });
});
