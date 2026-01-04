import { test, expect } from "@playwright/test";
import {
  validUsers,
  invalidUsers,
  links,
  errorMessageTexts,
} from "../test-data/testData";
import { attemptLogin } from "../helpers/login-helper";
import { LoginPage } from "../page-objects/loginPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test.describe("Login Tests", () => {
  test("Login with valid username and invalid password", async ({ page }) => {
    await attemptLogin(
      page,
      validUsers.standardUser.username,
      invalidUsers.invalidStandardUser.password
    );

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.invalidAttemptMessage
    );
  });

  test("Login with invalid username and valid password", async ({ page }) => {
    await attemptLogin(
      page,
      invalidUsers.invalidStandardUser.username,
      validUsers.standardUser.password
    );

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.invalidAttemptMessage
    );
  });

  test("Login with invalid username and invalid password", async ({ page }) => {
    await attemptLogin(
      page,
      invalidUsers.invalidStandardUser.username,
      invalidUsers.invalidStandardUser.password
    );

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.invalidAttemptMessage
    );
  });

  test("Login with username containing leading and trailing spaces", async ({
    page,
  }) => {
    await attemptLogin(
      page,
      invalidUsers.whiteSpaceStandartUser.username,
      validUsers.standardUser.password
    );

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.invalidAttemptMessage
    );
  });

  test("Login with password containing leading and trailing spaces", async ({
    page,
  }) => {
    await attemptLogin(
      page,
      validUsers.standardUser.username,
      invalidUsers.whiteSpaceStandartUser.password
    );

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.invalidAttemptMessage
    );
  });

  test("Login with empty username and valid password", async ({ page }) => {
    await attemptLogin(page, "", validUsers.standardUser.password);

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.emptyUsernameMessage
    );
  });

  test("Login with valid username and empty password", async ({ page }) => {
    await attemptLogin(page, validUsers.standardUser.username, "");

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.emptyPasswordMessage
    );
  });

  test.skip("Login with empty username and empty password", async ({
    page,
  }) => {
    await attemptLogin(page, "", "");

    const loginPage = new LoginPage(page);
    await expect(page).toHaveURL(links.mainLink);
    // The message itself is not from the application. It is to point out the app doesn't show appropriate error message. It only warns about username field being empty. It is not really big problem but might confuse users.
    await expect(loginPage.errorMsg).toHaveText(
      errorMessageTexts.emptyFieldsMessage
    );
  });

  test("Verify password field masks entered characters", async ({ page }) => {
    const passwordField = page.getByRole("textbox", { name: "Password" });
    await passwordField.fill(validUsers.standardUser.password);

    await expect(passwordField).toHaveAttribute("type", "password");
  });
});
