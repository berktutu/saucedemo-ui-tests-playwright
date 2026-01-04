import { Page } from "@playwright/test";
import {
  CheckoutInformation,
  CheckoutOverview,
} from "../page-objects/checkOut";
import { validUsers, userInformations, links } from "../test-data/testData";

export async function fillValidInformation(page: Page) {
  const checkoutInformation = new CheckoutInformation(page);
  await checkoutInformation.fillInformation(
    userInformations.validInfo.firstName,
    userInformations.validInfo.lastName,
    userInformations.validInfo.postalCode
  );
}

export async function continueToCheckout(page: Page) {
  const checkoutInformation = new CheckoutInformation(page);
  await checkoutInformation.continueCheckout();
}

export async function finishTheCheckout(page: Page) {
  const checkoutOverview = new CheckoutOverview(page);
  await checkoutOverview.finishCheckout();
}
