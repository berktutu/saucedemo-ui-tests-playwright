import { Page } from "@playwright/test";
import { Navbar } from "../page-objects/navbar";

export async function openNavMenu(page: Page) {
  const navbar = new Navbar(page);
  await navbar.navbarOpenBtn.click();
}

export async function closeNavMenu(page: Page) {
  const navbar = new Navbar(page);
  await navbar.navbarCloseBtn.click();
}
