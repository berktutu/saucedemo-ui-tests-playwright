export const validUsers: Record<
  string,
  { username: string; password: string }
> = {
  standardUser: {
    username: "standard_user",
    password: "secret_sauce",
  },
};

export const invalidUsers: Record<
  string,
  { username: string; password: string }
> = {
  invalidStandardUser: {
    username: "standard_user1",
    password: "invalidpw",
  },

  whiteSpaceStandartUser: {
    username: " standard_user ",
    password: " secret_sauce ",
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
  mainLink: "https://www.saucedemo.com/",
  productsPageLink: "https://www.saucedemo.com/inventory.html",
  cartLink: "https://www.saucedemo.com/cart.html",
  checkoutInformationLink: "https://www.saucedemo.com/checkout-step-one.html",
  checkoutOverviewLink: "https://www.saucedemo.com/checkout-step-two.html",
  checkoutCompleteLink: "https://www.saucedemo.com/checkout-complete.html",
} as const;

export const errorMessageTexts = {
  invalidAttemptMessage:
    "Epic sadface: Username and password do not match any user in this service",
  emptyUsernameMessage: "Epic sadface: Username is required",
  emptyPasswordMessage: "Epic sadface: Password is required",
  // Not in documentation but acceptable error message to point out UX issue
  emptyFieldsMessage: "Epic sadface: Username and password are required",
};
