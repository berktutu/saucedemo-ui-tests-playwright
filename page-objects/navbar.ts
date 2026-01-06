import { Page, Locator } from "@playwright/test";

export class Navbar {
  readonly page: Page;
  readonly navbarOpenBtn: Locator;
  readonly navbarCloseBtn: Locator;
  readonly navbarMenuSlider: Locator;
  readonly logoutOption: Locator;
  readonly allItemsOption: Locator;
  readonly aboutOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navbarOpenBtn = page.getByRole("button", { name: "Open Menu" });
    this.navbarCloseBtn = page.getByRole("button", { name: "Close Menu" });
    this.navbarMenuSlider = page.locator(".bm-menu-wrap");
    this.logoutOption = page.getByTestId("logout-sidebar-link");
    this.allItemsOption = page.getByTestId("inventory-sidebar-link");
    this.aboutOption = page.getByTestId("about-sidebar-link");
  }

  async logout() {
    await this.logoutOption.click();
  }

  async openNavMenu() {
    await this.navbarOpenBtn.click();
  }

  async closeNavMenu() {
    await this.navbarCloseBtn.click();
  }
}
