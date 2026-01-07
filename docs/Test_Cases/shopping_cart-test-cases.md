# Shopping cart test cases of SauceDemo

### Test Info

| Field            | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| Test Case ID     | TC-SCART-01                                                       |
| Title            | Verify shopping cart icon is visible and present on Products page |
| Module / Feature | Shopping Cart                                                     |
| Type             | Functional                                                        |
| Priority         | P1                                                                |
| Preconditions    | User is logged in and on Products page                            |
| Test Data        | N/A                                                               |
| Environment      | https://www.saucedemo.com                                         |

---

### Test Steps

| Step No | Action                                                                        | Expected Result                                                |
| ------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1       | Verify the visibility and presence of the shopping cart icon on Products page | Shopping cart icon is visible and present on the Products page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| Test Case ID     | TC-SCART-02                                                        |
| Title            | Verify shopping cart icon is visible and present on a Product page |
| Module / Feature | Shopping Cart                                                      |
| Type             | Functional                                                         |
| Priority         | P1                                                                 |
| Preconditions    | User is logged in and on Products page                             |
| Test Data        | N/A                                                                |
| Environment      | https://www.saucedemo.com                                          |

---

### Test Steps

| Step No | Action                                                                                    | Expected Result                                                        |
| ------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 1       | Click on the name of the first product in the list                                        | User is navigated to the selected product page                         |
| 2       | Verify the visibility and presence of the shopping cart icon on the selected product page | Shopping cart icon is visible and present on the selected product page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-03                                                                  |
| Title            | Verify shopping cart icon navigates to Shopping Cart page from Products Page |
| Module / Feature | Shopping Cart                                                                |
| Type             | Functional                                                                   |
| Priority         | P1                                                                           |
| Preconditions    | User is logged in and on Products page                                       |
| Test Data        | N/A                                                                          |
| Environment      | https://www.saucedemo.com                                                    |

---

### Test Steps

| Step No | Action                       | Expected Result                         |
| ------- | ---------------------------- | --------------------------------------- |
| 1       | Click the shopping cart icon | User is navigated to Shopping Cart page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-04                                                                   |
| Title            | Verify shopping cart icon navigates to Shopping Cart page from a Product page |
| Module / Feature | Shopping Cart                                                                 |
| Type             | Functional                                                                    |
| Priority         | P1                                                                            |
| Preconditions    | User is logged in and on Products page                                        |
| Test Data        | N/A                                                                           |
| Environment      | https://www.saucedemo.com                                                     |

---

### Test Steps

| Step No | Action                                          | Expected Result                                |
| ------- | ----------------------------------------------- | ---------------------------------------------- |
| 1       | Click the name of the first product in the list | User is navigated to the selected product page |
| 2       | Click the shopping cart icon                    | User is navigated to Shopping Cart page        |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-05                                                                            |
| Title            | Verify shopping cart icon is updated correctly after adding a product on Products page |
| Module / Feature | Shopping Cart                                                                          |
| Type             | Functional                                                                             |
| Priority         | P2                                                                                     |
| Preconditions    | User is logged in and on Products page                                                 |
| Test Data        | N/A                                                                                    |
| Environment      | https://www.saucedemo.com                                                              |

---

### Test Steps

| Step No | Action                                              | Expected Result                                           |
| ------- | --------------------------------------------------- | --------------------------------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | Shopping cart icon is updated correctly with a count of 1 |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-06                                                                                    |
| Title            | Verify shopping cart icon is updated correctly after adding multiple products on Products page |
| Module / Feature | Shopping Cart                                                                                  |
| Type             | Functional                                                                                     |
| Priority         | P2                                                                                             |
| Preconditions    | User is logged in and on Products page                                                         |
| Test Data        | N/A                                                                                            |
| Environment      | https://www.saucedemo.com                                                                      |

---

### Test Steps

| Step No | Action                                               | Expected Result        |
| ------- | ---------------------------------------------------- | ---------------------- |
| 1       | Click the "Add to Cart" button on the first product  | Cart icon updates to 1 |
| 2       | Click the "Add to Cart" button on the second product | Cart icon updates to 2 |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-07                                                                              |
| Title            | Verify shopping cart icon gets updated correctly after removing an item on Products page |
| Module / Feature | Shopping Cart                                                                            |
| Type             | Functional                                                                               |
| Priority         | P2                                                                                       |
| Preconditions    | User is logged in and on Products page                                                   |
| Test Data        | N/A                                                                                      |

---

### Test Steps

| Step No | Action                                              | Expected Result        |
| ------- | --------------------------------------------------- | ---------------------- |
| 1       | Click the "Add to Cart" button on the first product | Cart icon updates to 1 |
| 2       | Remove the same product                             | Cart icon resets to 0  |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                         |
| ---------------- | --------------------------------------------------- |
| Test Case ID     | TC-SCART-08                                         |
| Title            | Verify removing items one by one updates cart count |
| Module / Feature | Shopping Cart                                       |
| Type             | Functional                                          |
| Priority         | P2                                                  |
| Preconditions    | User is logged in and on Products page              |
| Test Data        | N/A                                                 |
| Environment      | https://www.saucedemo.com                           |

---

### Test Steps

| Step No | Action                                               | Expected Result        |
| ------- | ---------------------------------------------------- | ---------------------- |
| 1       | Click the "Add to Cart" button on the first product  | Cart icon updates to 1 |
| 2       | Click the "Add to Cart" button on the second product | Cart icon updates to 2 |
| 3       | Remove the first product                             | Cart icon updates to 1 |
| 4       | Remove the remaining product                         | Cart icon updates to 0 |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| Test Case ID     | TC-SCART-09                                                 |
| Title            | Verify adding product from a Product page updates cart icon |
| Module / Feature | Shopping Cart                                               |
| Type             | Functional                                                  |
| Priority         | P2                                                          |
| Preconditions    | User is logged in and on Products page                      |
| Test Data        | N/A                                                         |
| Environment      | https://www.saucedemo.com                                   |

---

### Test Steps

| Step No | Action                                          | Expected Result                                |
| ------- | ----------------------------------------------- | ---------------------------------------------- |
| 1       | Click the name of the first product in the list | User is navigated to the selected product page |
| 2       | Add the product to the cart                     | Cart icon updates to 1                         |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| Test Case ID     | TC-SCART-10                                                   |
| Title            | Verify removing product from a Product page updates cart icon |
| Module / Feature | Shopping Cart                                                 |
| Type             | Functional                                                    |
| Priority         | P2                                                            |
| Preconditions    | User is logged in and on Products page                        |
| Test Data        | N/A                                                           |
| Environment      | https://www.saucedemo.com                                     |

---

### Test Steps

| Step No | Action                                          | Expected Result                                |
| ------- | ----------------------------------------------- | ---------------------------------------------- |
| 1       | Click the name of the first product in the list | User is navigated to the selected product page |
| 2       | Add the product to the cart                     | Cart icon updates to 1                         |
| 3       | Remove the product from the cart                | Cart icon updates to 0                         |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| Test Case ID     | TC-SCART-11                                                     |
| Title            | Verify added product details are displayed in the shopping cart |
| Module / Feature | Shopping Cart                                                   |
| Type             | Functional                                                      |
| Priority         | P1                                                              |
| Preconditions    | User is logged in and on Products page                          |
| Test Data        | N/A                                                             |
| Environment      | https://www.saucedemo.com                                       |

---

### Test Steps

| Step No | Action                                              | Expected Result                                         |
| ------- | --------------------------------------------------- | ------------------------------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | -                                                       |
| 2       | Click the shopping cart icon                        | Shopping Cart page opens                                |
| 3       | Verify product details are present                  | Name, description, price, and Remove button are visible |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-SCART-12                                           |
| Title            | Verify added product details match with Products page |
| Module / Feature | Shopping Cart                                         |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is logged in and on Products page                |
| Test Data        | N/A                                                   |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                                                                | Expected Result          |
| ------- | ------------------------------------------------------------------------------------- | ------------------------ |
| 1       | Note the product name, description, price, and of the first item on the Products page | -                        |
| 2       | Click the "Add to Cart" button on the first product                                   | -                        |
| 3       | Click the shopping cart icon                                                          | Shopping Cart page opens |
| 4       | Compare item details                                                                  | Details match            |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                              |
| ---------------- | -------------------------------------------------------- |
| Test Case ID     | TC-SCART-13                                              |
| Title            | Verify multiple products display correct details in cart |
| Module / Feature | Shopping Cart                                            |
| Type             | Functional                                               |
| Priority         | P1                                                       |
| Preconditions    | User is logged in and on Products page                   |
| Test Data        | N/A                                                      |
| Environment      | https://www.saucedemo.com                                |

---

### Test Steps

| Step No | Action                                                                                    | Expected Result                  |
| ------- | ----------------------------------------------------------------------------------------- | -------------------------------- |
| 1       | Note the product name, description, price, and of the first item on the Products page     | -                                |
| 2       | Click the "Add to Cart" button on the first product                                       |                                  |
| 3       | Note the product name, description, price, and of the second product on the Products page | -                                |
| 4       | Click the "Add to Cart" button on the second product                                      |                                  |
| 5       | Click the shopping cart icon                                                              | Shopping Cart page opens         |
| 6       | Verify item details                                                                       | Each product matches its details |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-14                                                                     |
| Title            | Verify Continue Shopping button is visible and functional on Shopping Cart page |
| Module / Feature | Shopping Cart                                                                   |
| Type             | Functional                                                                      |
| Priority         | P1                                                                              |
| Preconditions    | User is logged in and on Products page                                          |
| Test Data        | N/A                                                                             |
| Environment      | https://www.saucedemo.com                                                       |

---

### Test Steps

| Step No | Action                                                  | Expected Result                             |
| ------- | ------------------------------------------------------- | ------------------------------------------- |
| 1       | Click the shopping cart icon                            | User is navigated to Shopping Cart page     |
| 2       | Verify the visibility of the "Continue Shopping" button | Button is visible                           |
| 3       | Click on "Continue Shopping" button                     | Button redirects user back to Products page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Test Case ID     | TC-SCART-15                                             |
| Title            | Verify added product from Products page appears in cart |
| Module / Feature | Shopping Cart                                           |
| Type             | Functional                                              |
| Priority         | P1                                                      |
| Preconditions    | User is logged in and on Products page                  |
| Test Data        | N/A                                                     |
| Environment      | https://www.saucedemo.com                               |

---

### Test Steps

| Step No | Action                                              | Expected Result                     |
| ------- | --------------------------------------------------- | ----------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | -                                   |
| 2       | Click the shopping cart icon                        | Added product is listed in the cart |

---

### Actual Result

Product appears in the cart.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| Test Case ID     | TC-SCART-16                                                      |
| Title            | Verify multiple added products from Products page appear in cart |
| Module / Feature | Shopping Cart                                                    |
| Type             | Functional                                                       |
| Priority         | P1                                                               |
| Preconditions    | User is logged in and on Products page                           |
| Test Data        | N/A                                                              |
| Environment      | https://www.saucedemo.com                                        |

---

### Test Steps

| Step No | Action                                               | Expected Result                       |
| ------- | ---------------------------------------------------- | ------------------------------------- |
| 1       | Click the "Add to Cart" button on the first product  | -                                     |
| 2       | Click the "Add to Cart" button on the second product | -                                     |
| 3       | Click the shopping cart icon                         | Added products are listed in the cart |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| Test Case ID     | TC-SCART-17                                                    |
| Title            | Verify removed product from Products page disappears from cart |
| Module / Feature | Shopping Cart                                                  |
| Type             | Functional                                                     |
| Priority         | P1                                                             |
| Preconditions    | User is logged in and on Products page                         |
| Test Data        | N/A                                                            |
| Environment      | https://www.saucedemo.com                                      |

---

### Test Steps

| Step No | Action                                              | Expected Result                     |
| ------- | --------------------------------------------------- | ----------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | -                                   |
| 2       | Click the shopping cart icon                        | Added product is listed in the cart |
| 3       | Click the Continue Shopping button                  | User is redirected to Products page |
| 4       | Click the "Remove" button on the first product      | -                                   |
| 5       | Click the shopping cart icon                        | Product is removed from the cart    |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                            |
| ---------------- | ------------------------------------------------------ |
| Test Case ID     | TC-SCART-18                                            |
| Title            | Verify added product from Product page appears in cart |
| Module / Feature | Shopping Cart                                          |
| Type             | Functional                                             |
| Priority         | P1                                                     |
| Preconditions    | User is logged in and on Products page                 |
| Test Data        | N/A                                                    |
| Environment      | https://www.saucedemo.com                              |

---

### Test Steps

| Step No | Action                                          | Expected Result                       |
| ------- | ----------------------------------------------- | ------------------------------------- |
| 1       | Click the name of the first product in the list | User is navigated to the product page |
| 2       | Click the "Add to Cart" button                  | -                                     |
| 3       | Click the shopping cart icon                    | Added product is listed in the cart   |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| Test Case ID     | TC-SCART-19                                                   |
| Title            | Verify removed product from Product page disappears from cart |
| Module / Feature | Shopping Cart                                                 |
| Type             | Functional                                                    |
| Priority         | P1                                                            |
| Preconditions    | User is logged in and on Products page                        |
| Test Data        | N/A                                                           |
| Environment      | https://www.saucedemo.com                                     |

---

### Test Steps

| Step No | Action                                          | Expected Result                       |
| ------- | ----------------------------------------------- | ------------------------------------- |
| 1       | Click the name of the first product in the list | User is navigated to the product page |
| 2       | Click the "Add to Cart" button                  | -                                     |
| 3       | Click the shopping cart icon                    | Added product is listed in the cart   |
| 4       | Click the "Continue Shopping" button            | User is redirected to Products page   |
| 5       | Click the name of the first product in the list | User is navigated to the product page |
| 6       | Click the "Remove" button                       | -                                     |
| 7       | Click the shopping cart icon                    | Product is removed from the cart      |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                     |
| ---------------- | ----------------------------------------------- |
| Test Case ID     | TC-SCART-20                                     |
| Title            | Verify removing a product on Shopping Cart page |
| Module / Feature | Shopping Cart                                   |
| Type             | Functional                                      |
| Priority         | P1                                              |
| Preconditions    | User is logged in and on Products page          |
| Test Data        | N/A                                             |
| Environment      | https://www.saucedemo.com                       |

---

### Test Steps

| Step No | Action                                              | Expected Result                         |
| ------- | --------------------------------------------------- | --------------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | -                                       |
| 2       | Click the shopping cart icon                        | User is navigated to Shopping Cart page |
| 3       | Click the "Remove" button for the added product     | Product is removed from the cart        |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Test Case ID     | TC-SCART-21                                             |
| Title            | Verify removing multiple products on Shopping Cart page |
| Module / Feature | Shopping Cart                                           |
| Type             | Functional                                              |
| Priority         | P1                                                      |
| Preconditions    | User is logged in and on Products page                  |
| Test Data        | N/A                                                     |
| Environment      | https://www.saucedemo.com                               |

---

### Test Steps

| Step No | Action                                               | Expected Result              |
| ------- | ---------------------------------------------------- | ---------------------------- |
| 1       | Click the "Add to Cart" button on the first product  | -                            |
| 2       | Click the "Add to Cart" button on the second product | -                            |
| 3       | Click the shopping cart icon                         | Shopping Cart page opens     |
| 4       | Remove the first product                             | Correct product is removed   |
| 5       | Remove the second product                            | Remaining product is removed |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Test Case ID     | TC-SCART-22                                             |
| Title            | Verify Checkout button is visible on Shopping Cart page |
| Module / Feature | Shopping Cart                                           |
| Type             | Functional                                              |
| Priority         | P1                                                      |
| Preconditions    | User is logged in and on Products page                  |
| Test Data        | N/A                                                     |
| Environment      | https://www.saucedemo.com                               |

---

### Test Steps

| Step No | Action                                                | Expected Result                                    |
| ------- | ----------------------------------------------------- | -------------------------------------------------- |
| 1       | Click the shopping cart icon                          | Shopping Cart page opens                           |
| 2       | Verify the visibility and presence of Checkout button | Checkout button is visible and present on the page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-23                                                                         |
| Title            | Verify Checkout and Continue Shopping buttons remain visible with multiple products |
| Module / Feature | Shopping Cart                                                                       |
| Type             | Functional                                                                          |
| Priority         | P1                                                                                  |
| Preconditions    | User is logged in and on Products page                                              |
| Test Data        | N/A                                                                                 |
| Environment      | https://www.saucedemo.com                                                           |

---

### Test Steps

| Step No | Action                                                   | Expected Result                                 |
| ------- | -------------------------------------------------------- | ----------------------------------------------- |
| 1       | Add all products on the Products page (6 products total) | -                                               |
| 2       | Verify the visibility of Continue Shopping button        | Continue Shopping button is visible and present |
| 3       | Verify the visibility of Checkout button                 | Checkout button is visible and present          |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-24                                                            |
| Title            | Verify shopping cart state remains after page refresh on Products page |
| Module / Feature | Shopping Cart                                                          |
| Type             | Functional                                                             |
| Priority         | P1                                                                     |
| Preconditions    | User is logged in and on Products page                                 |
| Test Data        | N/A                                                                    |
| Environment      | https://www.saucedemo.com                                              |

---

### Test Steps

| Step No | Action                                              | Expected Result                     |
| ------- | --------------------------------------------------- | ----------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | -                                   |
| 2       | Refresh the page                                    | -                                   |
| 3       | Click the shopping cart icon                        | Added product is listed in the cart |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-25                                                           |
| Title            | Verify shopping cart state remains after page refresh on Product page |
| Module / Feature | Shopping Cart                                                         |
| Type             | Functional                                                            |
| Priority         | P1                                                                    |
| Preconditions    | User is logged in and on Products page                                |
| Test Data        | N/A                                                                   |
| Environment      | https://www.saucedemo.com                                             |

---

### Test Steps

| Step No | Action                                       | Expected Result                               |
| ------- | -------------------------------------------- | --------------------------------------------- |
| 1       | Click the name of the first item in the list | User is navigated to the selected item's page |
| 2       | Click "Add to cart"                          | -                                             |
| 3       | Refresh the page                             | -                                             |
| 4       | Click the shopping cart icon                 | Added product is listed in the cart           |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| Test Case ID     | TC-SCART-26                                                                 |
| Title            | Verify shopping cart state remains after page refresh on Shopping Cart page |
| Module / Feature | Shopping Cart                                                               |
| Type             | Functional                                                                  |
| Priority         | P1                                                                          |
| Preconditions    | User is logged in and on Products page                                      |
| Test Data        | N/A                                                                         |
| Environment      | https://www.saucedemo.com                                                   |

---

### Test Steps

| Step No | Action                                              | Expected Result                         |
| ------- | --------------------------------------------------- | --------------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | -                                       |
| 2       | Click the shopping cart icon                        | User is navigated to Shopping Cart page |
| 3       | Refresh the page                                    | Shopping cart state remains the same    |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-SCART-27                                           |
| Title            | Verify Shopping Cart page displays correct page title |
| Module / Feature | Shopping Cart                                         |
| Type             | Functional                                            |
| Priority         | P3                                                    |
| Preconditions    | User is logged in and on the Products page            |
| Test Data        | N/A                                                   |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                       | Expected Result                             |
| ------- | ---------------------------- | ------------------------------------------- |
| 1       | Click the shopping cart icon | User is navigated to the Shopping Cart page |
| 2       | Observe the page title       | Page title “Your Cart” is visible           |

---

### Actual Result

()

---

### Status

()

---
