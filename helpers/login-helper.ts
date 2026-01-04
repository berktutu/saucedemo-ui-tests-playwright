import { Page } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { validUsers } from "../test-data/testData";

export async function loginAsValidUser(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.login(
    validUsers.standardUser.username,
    validUsers.standardUser.password
  );
}
