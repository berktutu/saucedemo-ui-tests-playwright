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
});
