# Requirements of SauceDemo

The requirements are based on exploration and observed application behaviour.

### REQ-01: Login

- **REQ-01.1** Users can log in using valid credentials.
- **REQ-01.2** Login is rejected when invalid credentials are provided.
- **REQ-01.3** Login is rejected when required credentials are missing.
- **REQ-01.4** An appropriate error message is displayed when login fails.
- **REQ-01.5** Written password on login page should be masked.
- **REQ-01.6** Users should be able to complete login process only using the keyboard.

### REQ-02: Logout

- **REQ-02.1** Users who are logged in can log out of the application.
- **REQ-02.2** After the logout user is redirected to the login page.
- **REQ-02.3** After the logout user can't get back on the application using browser browse back.

### REQ-03: Navigation Bar

- **REQ-03.1** The navigation bar is visible and present.
- **REQ-03.2** The navigation is interactable (it can be opened and closed).
- **REQ-03.3** Users can navigate to listed pages using the navigation bar. (About, All Items)
- **REQ-03.4** The logout option is available in the navigation bar list.

### REQ-04: Products Page

- **REQ-04.1** A list of products is displayed.
- **REQ-04.2** Product details including name, price, picture and description are displayed.
- **REQ-04.3** Products have action buttons.
- **REQ-04.4** Products can be added to the shopping cart from the product catalog.
- **REQ-04.5** Products can be removed from the shopping cart.
- **REQ-04.6** Products page retains the state of products added to the shopping cart after navigating away or refreshing the page.

### REQ-05: Product Sorting

- **REQ-05.1** Product sorting function is visible and accessible.
- **REQ-05.2** Products can be sorted alphabetically from A to Z.
- **REQ-05.3** Products can be sorted alphabetically from Z to A.
- **REQ-05.4** Products can be sorted by price from low to high.
- **REQ-05.5** Products can be sorted by price from high to low.
- **REQ-05.6** The list of products are updated according to the sorting choice.

### REQ-06: Product Detail Page

- **REQ-06.1** Users can open the selected product's page from the Products page.
- **REQ-06.2** Product details including name, price, picture and description are displayed.
- **REQ-06.3** A product can be added to the shopping cart from the product page.
- **REQ-06.4** A product can be removed from the shopping cart from the product page.
- **REQ-06.5** The product has an action button.
- **REQ-06.6** Users can navigate back to the Products page from the product detail page.
- **REQ-06.7** Item page retains the state of the product added to the shopping cart after navigating away or refreshing the page.

### REQ-07: Shopping Cart

- **REQ-07.1** Shopping cart icon is visible and accessible.
- **REQ-07.2** Shopping cart icon navigates users to Shopping Cart page.
- **REQ-07.3** The shopping cart icon displays the correct number of products.
- **REQ-07.4** The shopping cart displays the correct products.
- **REQ-07.5** Users can see the contents of the added products in the shopping cart.
- **REQ-07.6** Users can continue shopping from the shopping cart page.
- **REQ-07.7** Users can remove products from the shopping cart page.
- **REQ-07.8** Checkout button exists on the Shopping Cart page.
- **REQ-07.9** Shopping cart page retains the state of the product added to the shopping cart after refreshing the page.

### REQ-08: Checkout

- **REQ-08.1** The checkout process can be started from the shopping cart while having at least one product in the cart.
- **REQ-08.2** User information is required to proceed with checkout.
- **REQ-08.3** Users should be able to proceed to checkout after providing valid informations.
- **REQ-08.4** Checkout progression is blocked when required informations are missing.
- **REQ-08.5** An appropriate error message is displayed when required checkout information is missing.
- **REQ-08.6** Checkout process can be canceled anytime.
- **REQ-08.7** An order overview is displayed before checkout completion.
- **REQ-08.8** Users can view their product details in the cart, payment information, shipping information and price information including tax.
- **REQ-08.9** The checkout process can be completed successfully.
- **REQ-08.10** A confirmation message is displayed after successful checkout.
- **REQ-08.11** The user can return to the product page after checkout completion.
- **REQ-08.12** Shopping cart is reseted after checkout completion.
- **REQ-08.13** Checkout process pages don't get broken after refresh action.

### REQ-09: Page Titles

- **REQ-09.1** The current page title is displayed on pages except login and product page.
