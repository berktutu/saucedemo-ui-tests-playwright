export const validUsers: Record<
  string,
  { username: string; password: string }
> = {
  standardUser: {
    username: "standard_user",
    password: "secret_sauce",
  },
};

export const userInformations: Record<
  string,
  { firstName: string; lastName: string; postalCode: string }
> = {
  validInfo: {
    firstName: "John",
    lastName: "Smith",
    postalCode: "60311",
  },
};

export const links = {
  productsPageLink: "https://www.saucedemo.com/inventory.html",
  cartLink: "https://www.saucedemo.com/cart.html",
  checkoutInformationLink: "https://www.saucedemo.com/checkout-step-one.html",
  checkoutOverviewLink: "https://www.saucedemo.com/checkout-step-two.html",
  checkoutCompleteLink: "https://www.saucedemo.com/checkout-complete.html",
} as const;
