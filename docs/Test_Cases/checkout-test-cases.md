# Checkout functionality test cases of SauceDemo

**Note:** The First Name, Last Name, and Postal Code fields accept numbers, special characters, and unlimited-length input. Although these behaviors may be acceptable for this application, they were not tested in depth. Additional tests for the First Name field were designed using Equivalence Partitioning and were not duplicated for the Last Name field, as both fields share the same validation rules and input characteristics. Further test cases could be designed for scenarios such as input length boundaries and script injection. However, since this is a demo application, low-level security testing was considered out of scope and therefore not included.

**Note:** The tax calculation with multiple products could be tested. But, the tax policy is unknown. Therefore, it can not be tested.

### Test Info

| Field            | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-01                                                 |
| Title            | Verify user can proceed to checkout with a product in the cart |
| Module / Feature | Checkout                                                       |
| Type             | Functional                                                     |
| Priority         | P1                                                             |
| Preconditions    | User is on Shopping Cart page and has an added product         |
| Test Data        | N/A                                                            |
| Environment      | https://www.saucedemo.com                                      |

---

### Test Steps

| Step No | Action                      | Expected Result                                      |
| ------- | --------------------------- | ---------------------------------------------------- |
| 1       | Click the "Checkout" button | User is navigated to Checkout: Your Information page |

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
| Test Case ID     | TC-CHECKOUT-02                                                         |
| Title            | Verify user can proceed to checkout with multiple products in the cart |
| Module / Feature | Checkout                                                               |
| Type             | Functional                                                             |
| Priority         | P1                                                                     |
| Preconditions    | User is on Shopping Cart page and has 2 added products in the cart     |
| Test Data        | N/A                                                                    |
| Environment      | https://www.saucedemo.com                                              |

---

### Test Steps

| Step No | Action                      | Expected Result                                      |
| ------- | --------------------------- | ---------------------------------------------------- |
| 1       | Click the "Checkout" button | User is navigated to Checkout: Your Information page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Test Case ID     | TC-CHECKOUT-03                                               |
| Title            | Verify user cannot proceed to checkout with an empty cart    |
| Module / Feature | Checkout                                                     |
| Type             | Functional                                                   |
| Priority         | P1                                                           |
| Preconditions    | User is on Shopping Cart page and has no product in the cart |
| Test Data        | N/A                                                          |
| Environment      | https://www.saucedemo.com                                    |

---

### Test Steps

| Step No | Action                      | Expected Result                                                          |
| ------- | --------------------------- | ------------------------------------------------------------------------ |
| 1       | Click the "Checkout" button | User remains on Cart page and receives an appropriate empty cart message |

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
| Test Case ID     | TC-CHECKOUT-04                                                  |
| Title            | Verify Checkout: Your Information page displays required fields |
| Module / Feature | Checkout                                                        |
| Type             | Functional                                                      |
| Priority         | P1                                                              |
| Preconditions    | User is on Shopping Cart page and has an added product          |
| Test Data        | N/A                                                             |
| Environment      | https://www.saucedemo.com                                       |

---

### Test Steps

| Step No | Action                              | Expected Result                                      |
| ------- | ----------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button          | User is navigated to Checkout: Your Information page |
| 2       | Verify First Name field is visible  | Field is visible                                     |
| 3       | Verify Last Name field is visible   | Field is visible                                     |
| 4       | Verify Postal Code field is visible | Field is visible                                     |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-05                                                                    |
| Title            | Verify Cancel and Continue buttons are visible on Checkout: Your Information page |
| Module / Feature | Checkout                                                                          |
| Type             | Functional                                                                        |
| Priority         | P1                                                                                |
| Preconditions    | User is on Shopping Cart page and has an added product                            |
| Test Data        | N/A                                                                               |
| Environment      | https://www.saucedemo.com                                                         |

---

### Test Steps

| Step No | Action                              | Expected Result                                      |
| ------- | ----------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button          | User is navigated to Checkout: Your Information page |
| 2       | Verify "Cancel" button is visible   | "Cancel" button is visible                           |
| 3       | Verify "Continue" button is visible | "Continue" button is visible                         |

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
| Test Case ID     | TC-CHECKOUT-06                                         |
| Title            | Verify Cancel button navigates back to Shopping Cart   |
| Module / Feature | Checkout                                               |
| Type             | Functional                                             |
| Priority         | P1                                                     |
| Preconditions    | User is on Shopping Cart page and has an added product |
| Test Data        | N/A                                                    |
| Environment      | https://www.saucedemo.com                              |

---

### Test Steps

| Step No | Action                     | Expected Result                                      |
| ------- | -------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button | User is navigated to Checkout: Your Information page |
| 2       | Click on "Cancel" button   | User is navigated back to the Shopping Cart page     |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                               |
| ---------------- | --------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-07                                            |
| Title            | Verify proceeding to Overview page with valid information |
| Module / Feature | Checkout                                                  |
| Type             | Functional                                                |
| Priority         | P1                                                        |
| Preconditions    | User is on Shopping Cart page and has an added product    |
| Test Data        | John / Smith / 60311                                      |
| Environment      | https://www.saucedemo.com                                 |

---

### Test Steps

| Step No | Action                                              | Expected Result                                      |
| ------- | --------------------------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button                          | User is navigated to Checkout: Your Information page |
| 2       | Fill the First Name field with a valid username     | First Name field accepts input                       |
| 3       | Fill the Last Name field with a valid last name     | Last Name field accepts input                        |
| 4       | Fill the Postal Code field with a valid postal code | Postal Code field accepts input                      |
| 5       | Click on "Continue" button                          | User is navigated to the Overview page               |

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
| Test Case ID     | TC-CHECKOUT-08                                              |
| Title            | Verify error when proceeding with all required fields empty |
| Module / Feature | Checkout                                                    |
| Type             | Functional                                                  |
| Priority         | P1                                                          |
| Preconditions    | User is on Shopping Cart page and has an added product      |
| Test Data        |                                                             |
| Environment      | https://www.saucedemo.com                                   |

---

### Test Steps

| Step No | Action                     | Expected Result                                         |
| ------- | -------------------------- | ------------------------------------------------------- |
| 1       | Click on Checkout button   | User is navigated to Checkout: Your Information page    |
| 2       | Leave all 3 fields empty   | -                                                       |
| 3       | Click on "Continue" button | Error message is displayed and user remains on the page |

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
| Test Case ID     | TC-CHECKOUT-09                                           |
| Title            | Verify error when proceeding with empty First Name field |
| Module / Feature | Checkout                                                 |
| Type             | Functional                                               |
| Priority         | P1                                                       |
| Preconditions    | User is on Shopping Cart page and has an added product   |
| Test Data        | Smith / 60311                                            |
| Environment      | https://www.saucedemo.com                                |

---

### Test Steps

| Step No | Action                                              | Expected Result                                         |
| ------- | --------------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                          | User is navigated to Checkout: Your Information page    |
| 2       | Leave the First Name field empty                    | -                                                       |
| 3       | Fill the Last Name field with a valid last name     | -                                                       |
| 4       | Fill the Postal Code field with a valid postal code | -                                                       |
| 5       | Click on "Continue" button                          | Error message is displayed and user remains on the page |

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
| Test Case ID     | TC-CHECKOUT-10                                          |
| Title            | Verify error when proceeding with empty Last Name field |
| Module / Feature | Checkout                                                |
| Type             | Functional                                              |
| Priority         | P1                                                      |
| Preconditions    | User is on Shopping Cart page and has an added product  |
| Test Data        | John / 60311                                            |
| Environment      | https://www.saucedemo.com                               |

---

### Test Steps

| Step No | Action                                              | Expected Result                                         |
| ------- | --------------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                          | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with a valid username     | -                                                       |
| 3       | Leave the Last Name field empty                     | -                                                       |
| 4       | Fill the Postal Code field with a valid postal code | -                                                       |
| 5       | Click on "Continue" button                          | Error message is displayed and user remains on the page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                               |
| ---------------- | --------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-11                                            |
| Title            | Verify error when proceeding with empty Postal Code field |
| Module / Feature | Checkout                                                  |
| Type             | Functional                                                |
| Priority         | P1                                                        |
| Preconditions    | User is on Shopping Cart page and has an added product    |
| Test Data        | John / Smith                                              |
| Environment      | https://www.saucedemo.com                                 |

---

### Test Steps

| Step No | Action                                    | Expected Result                                         |
| ------- | ----------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with valid data | -                                                       |
| 3       | Fill the Last Name field with valid data  | -                                                       |
| 4       | Leave the Postal Code field empty         | -                                                       |
| 5       | Click on "Continue" button                | Error message is displayed and user remains on the page |

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
| Test Case ID     | TC-CHECKOUT-12                                                |
| Title            | Verify error when proceeding with numeric input in First Name |
| Module / Feature | Checkout                                                      |
| Type             | Functional                                                    |
| Priority         | P1                                                            |
| Preconditions    | User is on Shopping Cart page and has an added product        |
| Test Data        | 85327 / Smith / 60311                                         |
| Environment      | https://www.saucedemo.com                                     |

---

### Test Steps

| Step No | Action                                      | Expected Result                                         |
| ------- | ------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                  | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with invalid data | -                                                       |
| 3       | Fill the Last Name field with valid data    | -                                                       |
| 4       | Fill the Postal Code field with valid data  | -                                                       |
| 5       | Click on "Continue" button                  | Error message is displayed and user remains on the page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-13                                                          |
| Title            | Verify error when proceeding with special character input in First Name |
| Module / Feature | Checkout                                                                |
| Type             | Functional                                                              |
| Priority         | P1                                                                      |
| Preconditions    | User is on Shopping Cart page and has an added product                  |
| Test Data        | ##!@@ / Smith / 60311                                                   |
| Environment      | https://www.saucedemo.com                                               |

---

### Test Steps

| Step No | Action                                      | Expected Result                                         |
| ------- | ------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                  | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with invalid data | -                                                       |
| 3       | Fill the Last Name field with valid data    | -                                                       |
| 4       | Fill the Postal Code field with valid data  | -                                                       |
| 5       | Click on "Continue" button                  | Error message is displayed and user remains on the page |

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
| Test Case ID     | TC-CHECKOUT-14                                                     |
| Title            | Verify error when proceeding with alphanumeric input in First Name |
| Module / Feature | Checkout                                                           |
| Type             | Functional                                                         |
| Priority         | P1                                                                 |
| Preconditions    | User is on Shopping Cart page and has an added product             |
| Test Data        | John666 / Smith / 60311                                            |
| Environment      | https://www.saucedemo.com                                          |

---

### Test Steps

| Step No | Action                                      | Expected Result                                         |
| ------- | ------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                  | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with invalid data | -                                                       |
| 3       | Fill the Last Name field with valid data    | -                                                       |
| 4       | Fill the Postal Code field with valid data  | -                                                       |
| 5       | Click on "Continue" button                  | Error message is displayed and user remains on the page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-15                                                   |
| Title            | Verify error when proceeding with whitespace input in First Name |
| Module / Feature | Checkout                                                         |
| Type             | Functional                                                       |
| Priority         | P1                                                               |
| Preconditions    | User is on Shopping Cart page and has an added product           |
| Test Data        | " " / Smith / 60311                                              |
| Environment      | https://www.saucedemo.com                                        |

---

### Test Steps

| Step No | Action                                      | Expected Result                                         |
| ------- | ------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                  | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with invalid data | -                                                       |
| 3       | Fill the Last Name field with valid data    | -                                                       |
| 4       | Fill the Postal Code field with valid data  | -                                                       |
| 5       | Click on "Continue" button                  | Error message is displayed and user remains on the page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-16                                                    |
| Title            | Verify error when proceeding with alphabetic input in Postal Code |
| Module / Feature | Checkout                                                          |
| Type             | Functional                                                        |
| Priority         | P1                                                                |
| Preconditions    | User is on Shopping Cart page and has an added product            |
| Test Data        | John / Smith / WRONG                                              |
| Environment      | https://www.saucedemo.com                                         |

---

### Test Steps

| Step No | Action                                       | Expected Result                                         |
| ------- | -------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                   | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with valid data    | -                                                       |
| 3       | Fill the Last Name field with valid data     | -                                                       |
| 4       | Fill the Postal Code field with invalid data | -                                                       |
| 5       | Click on "Continue" button                   | Error message is displayed and user remains on the page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| Test Case ID     | TC-CHECKOUT-17                                                           |
| Title            | Verify error when proceeding with special character input in Postal Code |
| Module / Feature | Checkout                                                                 |
| Type             | Functional                                                               |
| Priority         | P1                                                                       |
| Preconditions    | User is on Shopping Cart page and has an added product                   |
| Test Data        | John / Smith / ##!@@                                                     |
| Environment      | https://www.saucedemo.com                                                |

---

### Test Steps

| Step No | Action                                       | Expected Result                                         |
| ------- | -------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                   | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with valid data    | -                                                       |
| 3       | Fill the Last Name field with valid data     | -                                                       |
| 4       | Fill the Postal Code field with invalid data | -                                                       |
| 5       | Click on "Continue" button                   | Error message is displayed and user remains on the page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-17                                                    |
| Title            | Verify error when proceeding with whitespace input in Postal Code |
| Module / Feature | Checkout                                                          |
| Type             | Functional                                                        |
| Priority         | P1                                                                |
| Preconditions    | User is on Shopping Cart page and has an added product            |
| Test Data        | John / Smith / " "                                                |
| Environment      | https://www.saucedemo.com                                         |

---

### Test Steps

| Step No | Action                                       | Expected Result                                         |
| ------- | -------------------------------------------- | ------------------------------------------------------- |
| 1       | Click on "Checkout" button                   | User is navigated to Checkout: Your Information page    |
| 2       | Fill the First Name field with valid data    | -                                                       |
| 3       | Fill the Last Name field with valid data     | -                                                       |
| 4       | Fill the Postal Code field with invalid data | -                                                       |
| 5       | Click on "Continue" button                   | Error message is displayed and user remains on the page |

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
| Test Case ID     | TC-CHECKOUT-18                                          |
| Title            | Verify Checkout: Overview page displays product details |
| Module / Feature | Checkout                                                |
| Type             | Functional                                              |
| Priority         | P1                                                      |
| Preconditions    | User is on Shopping Cart page and has an added product  |
| Test Data        | N/A                                                     |
| Environment      | https://www.saucedemo.com                               |

---

### Test Steps

| Step No | Action                                              | Expected Result                                      |
| ------- | --------------------------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button                          | User is navigated to Checkout: Your Information page |
| 2       | Fill all required fields with valid data            | -                                                    |
| 3       | Click on "Continue" button                          | User is navigated to the Overview page               |
| 4       | Verify item name, quantity, and price are displayed | Product details are visible                          |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-19                                                      |
| Title            | Verify Checkout: Overview page displays multiple products correctly |
| Module / Feature | Checkout                                                            |
| Type             | Functional                                                          |
| Priority         | P1                                                                  |
| Preconditions    | User is on Shopping Cart page and has 2 added products in the cart  |
| Test Data        | N/A                                                                 |
| Environment      | https://www.saucedemo.com                                           |

---

### Test Steps

| Step No | Action                                               | Expected Result                                      |
| ------- | ---------------------------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button                           | User is navigated to Checkout: Your Information page |
| 2       | Fill all required fields with valid data             | -                                                    |
| 3       | Click on "Continue" button                           | User is navigated to the Overview page               |
| 4       | Verify item details of items on the page are visible | Product details are visible                          |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-20                                                             |
| Title            | Verify Checkout: Overview page displays payment, shipping, and price total |
| Module / Feature | Checkout                                                                   |
| Type             | Functional                                                                 |
| Priority         | P1                                                                         |
| Preconditions    | User is on Shopping Cart page and has an added product                     |
| Test Data        | N/A                                                                        |
| Environment      | https://www.saucedemo.com                                                  |

---

### Test Steps

| Step No | Action                                                                    | Expected Result                                                    |
| ------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1       | Click on "Checkout" button                                                | User is navigated to Checkout: Your Information page               |
| 2       | Fill all required fields with valid data                                  | -                                                                  |
| 3       | Click on "Continue" button                                                | User is navigated to the Overview page                             |
| 4       | Verify Payment Information is visible and present on the page             | Payment Information is visible and present on the page             |
| 5       | Verify Shipping Information is visible and present on the page            | Shipping Information is visible and present on the page            |
| 6       | Verify Price information including tax is visible and present on the page | Price information including tax is visible and present on the page |

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
| Test Case ID     | TC-CHECKOUT-21                                           |
| Title            | Verify product total price matches sum of product prices |
| Module / Feature | Checkout                                                 |
| Type             | Functional                                               |
| Priority         | P1                                                       |
| Preconditions    | User is on Shopping Cart page and has an added product   |
| Test Data        | N/A                                                      |
| Environment      | https://www.saucedemo.com                                |

---

### Test Steps

| Step No | Action                                                              | Expected Result                                      |
| ------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button                                          | User is navigated to Checkout: Your Information page |
| 2       | Fill all required fields with valid data                            | -                                                    |
| 3       | Click on "Continue" button                                          | User is navigated to the Overview page               |
| 4       | Verify price total is matching with the product's price in the cart | Prices are matching                                  |

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
| Test Case ID     | TC-CHECKOUT-22                                         |
| Title            | Verify tax is calculated and added correctly           |
| Module / Feature | Checkout                                               |
| Type             | Functional                                             |
| Priority         | P1                                                     |
| Preconditions    | User is on Shopping Cart page and has an added product |
| Test Data        | N/A                                                    |
| Environment      | https://www.saucedemo.com                              |

---

### Test Steps

| Step No | Action                                    | Expected Result                                      |
| ------- | ----------------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button                | User is navigated to Checkout: Your Information page |
| 2       | Fill all required fields with valid data  | -                                                    |
| 3       | Click on "Continue" button                | User is navigated to the Overview page               |
| 4       | Verify Item Total + Tax is equal to Total | Total price is calculated correctly                  |

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
| Test Case ID     | TC-CHECKOUT-23                                         |
| Title            | Verify cancel process on Checkout: Overview page       |
| Module / Feature | Checkout                                               |
| Type             | Functional                                             |
| Priority         | P1                                                     |
| Preconditions    | User is on Shopping Cart page and has an added product |
| Test Data        | N/A                                                    |
| Environment      | https://www.saucedemo.com                              |

---

### Test Steps

| Step No | Action                                   | Expected Result                                                          |
| ------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| 1       | Click on "Checkout" button               | User is navigated to Checkout: Your Information page                     |
| 2       | Fill all required fields with valid data | -                                                                        |
| 3       | Click on "Continue" button               | User is navigated to the Overview page                                   |
| 4       | Click on "Cancel" button                 | Checkout process is canceled and user is navigated back to Products page |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-24                                                          |
| Title            | Verify Cancel and Finish buttons remain visible with multiple items     |
| Module / Feature | Checkout                                                                |
| Type             | Functional                                                              |
| Priority         | P1                                                                      |
| Preconditions    | User is on Shopping Cart page with all products added from products (6) |
| Test Data        | N/A                                                                     |
| Environment      | https://www.saucedemo.com                                               |

---

### Test Steps

| Step No | Action                                                               | Expected Result                                               |
| ------- | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| 1       | Click on "Checkout" button                                           | User is navigated to Checkout: Your Information page          |
| 2       | Fill all required fields with valid data                             | -                                                             |
| 3       | Click on Continue button                                             | User is navigated to the Overview page                        |
| 4       | Verify Cancel and Finish buttons are visible and present on the page | Cancel and Finish buttons are visible and present on the page |

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
| Test Case ID     | TC-CHECKOUT-25                                          |
| Title            | Verify finishing checkout successfully with one product |
| Module / Feature | Checkout                                                |
| Type             | Functional                                              |
| Priority         | P1                                                      |
| Preconditions    | User is on Shopping Cart page and has an added product  |
| Test Data        | N/A                                                     |
| Environment      | https://www.saucedemo.com                               |

---

### Test Steps

| Step No | Action                                   | Expected Result                                                |
| ------- | ---------------------------------------- | -------------------------------------------------------------- |
| 1       | Click on "Checkout" button               | User is navigated to Checkout: Your Information page           |
| 2       | Fill all required fields with valid data | -                                                              |
| 3       | Click on "Continue" button               | User is navigated to the Overview page                         |
| 4       | Click on "Finish" button                 | User gets notification that the checkout process is successful |

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
| Test Case ID     | TC-CHECKOUT-26                                                |
| Title            | Verify finishing checkout successfully with multiple products |
| Module / Feature | Checkout                                                      |
| Type             | Functional                                                    |
| Priority         | P1                                                            |
| Preconditions    | User is on Shopping Cart page and has 2 added products        |
| Test Data        | N/A                                                           |
| Environment      | https://www.saucedemo.com                                     |

---

### Test Steps

| Step No | Action                                   | Expected Result                                                |
| ------- | ---------------------------------------- | -------------------------------------------------------------- |
| 1       | Click on "Checkout" button               | User is navigated to Checkout: Your Information page           |
| 2       | Fill all required fields with valid data | -                                                              |
| 3       | Click on "Continue" button               | User is navigated to the Overview page                         |
| 4       | Click on "Finish" button                 | User gets notification that the checkout process is successful |

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
| Test Case ID     | TC-CHECKOUT-27                                         |
| Title            | Verify Back Home button is visible and functional      |
| Module / Feature | Checkout                                               |
| Type             | Functional                                             |
| Priority         | P1                                                     |
| Preconditions    | User is on Shopping Cart page and has an added product |
| Test Data        | N/A                                                    |
| Environment      | https://www.saucedemo.com                              |

---

### Test Steps

| Step No | Action                                   | Expected Result                                                |
| ------- | ---------------------------------------- | -------------------------------------------------------------- |
| 1       | Click on "Checkout" button               | User is navigated to Checkout: Your Information page           |
| 2       | Fill all required fields with valid data | -                                                              |
| 3       | Click on "Continue" button               | User is navigated to the Overview page                         |
| 4       | Click on "Finish" button                 | User gets notification that the checkout process is successful |
| 5       | Verify "Back Home" button is visible     | "Back Home" button is visible                                  |
| 6       | Click on "Back Home" button              | "Back Home" button navigates the user to the Products page     |

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
| Test Case ID     | TC-CHECKOUT-28                                         |
| Title            | Verify cart is reset after checkout completion         |
| Module / Feature | Checkout                                               |
| Type             | Functional                                             |
| Priority         | P1                                                     |
| Preconditions    | User is on Shopping Cart page and has an added product |
| Test Data        | N/A                                                    |
| Environment      | https://www.saucedemo.com                              |

---

### Test Steps

| Step No | Action                                   | Expected Result                                                |
| ------- | ---------------------------------------- | -------------------------------------------------------------- |
| 1       | Click on "Checkout" button               | User is navigated to Checkout: Your Information page           |
| 2       | Fill all required fields with valid data | -                                                              |
| 3       | Click on "Continue" button               | User is navigated to the Overview page                         |
| 4       | Click on "Finish" button                 | User gets notification that the checkout process is successful |
| 5       | Click on "Back Home" button              | "Back Home" button navigates the user to the Products page     |
| 6       | Click on shopping cart icon              | User is navigated to the Shopping Cart page                    |
| 7       | Verify the state of the shopping cart    | Shopping cart is empty                                         |

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
| Test Case ID     | TC-CHECKOUT-29                                                        |
| Title            | Verify refresh does not cause exit on Checkout: Your Information page |
| Module / Feature | Checkout                                                              |
| Type             | Functional                                                            |
| Priority         | P1                                                                    |
| Preconditions    | User is on Shopping Cart page and has an added product                |
| Test Data        | N/A                                                                   |
| Environment      | https://www.saucedemo.com                                             |

---

### Test Steps

| Step No | Action                     | Expected Result                                      |
| ------- | -------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button | User is navigated to Checkout: Your Information page |
| 2       | Refresh the page           | User remains on the Checkout: Your Information page  |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-30                                             |
| Title            | Verify refresh does not cause exit Checkout: Overview page |
| Module / Feature | Checkout                                                   |
| Type             | Functional                                                 |
| Priority         | P1                                                         |
| Preconditions    | User is on Shopping Cart page and has an added product     |
| Test Data        | N/A                                                        |
| Environment      | https://www.saucedemo.com                                  |

---

### Test Steps

| Step No | Action                                   | Expected Result                                      |
| ------- | ---------------------------------------- | ---------------------------------------------------- |
| 1       | Click on "Checkout" button               | User is navigated to Checkout: Your Information page |
| 2       | Fill all required fields with valid data | -                                                    |
| 3       | Click on "Continue" button               | User is navigated to the Overview page               |
| 4       | Refresh the page                         | User remains on the Checkout: Overview page          |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-31                                             |
| Title            | Verify refresh does not cause exit Checkout: Complete page |
| Module / Feature | Checkout                                                   |
| Type             | Functional                                                 |
| Priority         | P1                                                         |
| Preconditions    | User is on Shopping Cart page and has an added product     |
| Test Data        | N/A                                                        |
| Environment      | https://www.saucedemo.com                                  |

---

### Test Steps

| Step No | Action                                   | Expected Result                                                |
| ------- | ---------------------------------------- | -------------------------------------------------------------- |
| 1       | Click on "Checkout" button               | User is navigated to Checkout: Your Information page           |
| 2       | Fill all required fields with valid data | -                                                              |
| 3       | Click on "Continue" button               | User is navigated to the Overview page                         |
| 4       | Click on "Finish" button                 | User gets notification that the checkout process is successful |
| 5       | Refresh the page                         | User remains on the Checkout: Complete page                    |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| Test Case ID     | TC-CHECKOUT-32                                                             |
| Title            | Verify that the Checkout: Your Information page displays the correct title |
| Module / Feature | Checkout                                                                   |
| Type             | Functional                                                                 |
| Priority         | P3                                                                         |
| Preconditions    | User is on Shopping Cart page and has an added product                     |
| Test Data        | N/A                                                                        |
| Environment      | https://www.saucedemo.com                                                  |

---

### Test Steps

| Step No | Action                      | Expected Result                                            |
| ------- | --------------------------- | ---------------------------------------------------------- |
| 1       | Click the "Checkout" button | User is navigated to the “Checkout: Your Information” page |
| 2       | Observe the page title      | Title “Checkout: Your Information” is displayed            |

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
| Test Case ID     | TC-CHECKOUT-33                                                     |
| Title            | Verify that the Checkout: Overview page displays the correct title |
| Module / Feature | Checkout                                                           |
| Type             | Functional                                                         |
| Priority         | P3                                                                 |
| Preconditions    | User is on Shopping Cart page and has an added product             |
| Test Data        | John / Smith / 60311                                               |
| Environment      | https://www.saucedemo.com                                          |

---

### Test Steps

| Step No | Action                                            | Expected Result                                            |
| ------- | ------------------------------------------------- | ---------------------------------------------------------- |
| 1       | Click the "Checkout" button                       | User is navigated to the “Checkout: Your Information” page |
| 2       | Enter valid user information and click "Continue" | User is navigated to the Overview page                     |
| 3       | Observe the page title                            | Title “Checkout: Overview” is displayed                    |

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
| Test Case ID     | TC-CHECKOUT-34                                                     |
| Title            | Verify that the Checkout: Complete page displays the correct title |
| Module / Feature | Checkout                                                           |
| Type             | Functional                                                         |
| Priority         | P3                                                                 |
| Preconditions    | User is on Shopping Cart page and has an added product             |
| Test Data        | John / Smith / 60311                                               |
| Environment      | https://www.saucedemo.com                                          |

---

### Test Steps

| Step No | Action                                            | Expected Result                                            |
| ------- | ------------------------------------------------- | ---------------------------------------------------------- |
| 1       | Click the "Checkout" button                       | User is navigated to the “Checkout: Your Information” page |
| 2       | Enter valid user information and click "Continue" | User is navigated to the Overview page                     |
| 3       | Click the "Finish" button                         | User is navigated to the Checkout Complete page            |
| 4       | Observe the page title                            | Title “Checkout: Complete” is displayed                    |

---

### Actual Result

()

---

### Status

()

---
