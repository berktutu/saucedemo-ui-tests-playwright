import { test, expect } from "@playwright/test";
import { Navbar } from "../page-objects/navbar";
import { links } from "../test-data/testData";
import { loginAsValidUser } from "../helpers/login-helper";

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

  test("Verify logout option is available in navbar", async ({ page }) => {
    const navbar = new Navbar(page);

    await navbar.openNavMenu();

    await expect(navbar.logoutOption).toBeVisible();
  });
});
