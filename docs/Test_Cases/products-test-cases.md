# Products page test cases of SauceDemo

**Note:** Additional test cases, such as more detailed verification of item information, could be added. But because the SauceDemo is a demo application and the full documentation is not available. Further detailed checks are not possible.

**Note:** Only the presence of item information and product images can be verified, as there is no reference document to prove the correctness of these informations. Accuracy of the data on the page can not be tested.

### Test Info

| Field            | Description                                    |
| ---------------- | ---------------------------------------------- |
| Test Case ID     | TC-PRODUCTS-01                                 |
| Title            | Verify products are displayed on Products page |
| Module / Feature | Products                                       |
| Type             | Functional                                     |
| Priority         | P1                                             |
| Preconditions    | User is logged in and on Products page         |
| Test Data        | N/A                                            |
| Environment      | https://www.saucedemo.com                      |

---

### Test Steps

| Step No | Action                                    | Expected Result                             |
| ------- | ----------------------------------------- | ------------------------------------------- |
| 1       | Verify products are displayed on the page | Products are displayed on the Products page |

---

### Actual Result

Products are displayed on the Products page.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                               |
| ---------------- | --------------------------------------------------------- |
| Test Case ID     | TC-PRODUCTS-02                                            |
| Title            | Verify all product details are displayed on Products page |
| Module / Feature | Products                                                  |
| Type             | Functional                                                |
| Priority         | P1                                                        |
| Preconditions    | User is logged in and on Products page                    |
| Test Data        | N/A                                                       |
| Environment      | https://www.saucedemo.com                                 |

---

### Test Steps

| Step No | Action                                    | Expected Result                          |
| ------- | ----------------------------------------- | ---------------------------------------- |
| 1       | Verify product names are displayed        | Products display its name                |
| 2       | Verify product descriptions are displayed | Products display its description         |
| 3       | Verify product prices are displayed       | Products display its price               |
| 4       | Verify product images are displayed       | Products display its image               |
| 5       | Verify action buttons are displayed       | Products display an "Add to Cart" button |

---

### Actual Result

Expected product details and features were displayed.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                              |
| ---------------- | -------------------------------------------------------- |
| Test Case ID     | TC-PRODUCTS-03                                           |
| Title            | Verify "Add to Cart" button changes to "Remove" on click |
| Module / Feature | Products                                                 |
| Type             | Functional                                               |
| Priority         | P1                                                       |
| Preconditions    | User is logged in and on Products page                   |
| Test Data        | N/A                                                      |
| Environment      | https://www.saucedemo.com                                |

---

### Test Steps

| Step No | Action                                              | Expected Result                  |
| ------- | --------------------------------------------------- | -------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | Button label changes to "Remove" |

---

### Actual Result

Button label changes to "Remove" after clicking "Add to Cart" button.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| Test Case ID     | TC-PRODUCTS-04                                                    |
| Title            | Verify multiple "Add to Cart" buttons change to "Remove" on click |
| Module / Feature | Products                                                          |
| Type             | Functional                                                        |
| Priority         | P1                                                                |
| Preconditions    | User is logged in and on Products page                            |
| Test Data        | N/A                                                               |
| Environment      | https://www.saucedemo.com                                         |

---

### Test Steps

| Step No | Action                                               | Expected Result                  |
| ------- | ---------------------------------------------------- | -------------------------------- |
| 1       | Click the "Add to Cart" button on the second product | Button label changes to "Remove" |
| 2       | Click the "Add to Cart" button on the third product  | Button label changes to "Remove" |

---

### Actual Result

Button labels change to "Remove" after clicking "Add to Cart" buttons.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                          |
| ---------------- | ---------------------------------------------------- |
| Test Case ID     | TC-PRODUCTS-05                                       |
| Title            | Verify "Remove" button changes back to "Add to Cart" |
| Module / Feature | Products                                             |
| Type             | Functional                                           |
| Priority         | P1                                                   |
| Preconditions    | User is logged in and on Products page               |
| Test Data        | N/A                                                  |
| Environment      | https://www.saucedemo.com                            |

---

### Test Steps

| Step No | Action                                              | Expected Result                            |
| ------- | --------------------------------------------------- | ------------------------------------------ |
| 1       | Click the "Add to Cart" button on the first product | Button label changes to "Remove"           |
| 2       | Click the "Remove" button on the same product       | Button label changes back to "Add to Cart" |

---

### Actual Result

Button label changes back to "Add to Cart" after clicking "Remove" button.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| Test Case ID     | TC-PRODUCTS-06                                                |
| Title            | Verify multiple "Remove" buttons change back to "Add to Cart" |
| Module / Feature | Products                                                      |
| Type             | Functional                                                    |
| Priority         | P1                                                            |
| Preconditions    | User is logged in and on Products page                        |
| Test Data        | N/A                                                           |
| Environment      | https://www.saucedemo.com                                     |

---

### Test Steps

| Step No | Action                                               | Expected Result                           |
| ------- | ---------------------------------------------------- | ----------------------------------------- |
| 1       | Click the "Add to Cart" button on the second product | Button label changes to "Remove"          |
| 2       | Click the "Add to Cart" button on the third product  | Button label changes to "Remove"          |
| 3       | Click the "Remove" button for both products          | Both buttons change back to "Add to Cart" |

---

### Actual Result

Button labels change back to "Add to Cart" after clicking "Remove" buttons.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                   |
| ---------------- | --------------------------------------------- |
| Test Case ID     | TC-PRODUCTS-07                                |
| Title            | Verify Products page state after page refresh |
| Module / Feature | Products                                      |
| Type             | Functional                                    |
| Priority         | P2                                            |
| Preconditions    | User is logged in and on Products page        |
| Test Data        | N/A                                           |
| Environment      | https://www.saucedemo.com                     |

---

### Test Steps

| Step No | Action                                               | Expected Result                  |
| ------- | ---------------------------------------------------- | -------------------------------- |
| 1       | Click the "Add to Cart" button for the first product | Button label changes to "Remove" |
| 2       | Refresh the page                                     | Button label remains "Remove"    |

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
| Test Case ID     | TC-PRODUCTS-08                                                |
| Title            | Verify Products page state after returning from Shopping Cart |
| Module / Feature | Products                                                      |
| Type             | Functional                                                    |
| Priority         | P2                                                            |
| Preconditions    | User is logged in and on Products page                        |
| Test Data        | N/A                                                           |
| Environment      | https://www.saucedemo.com                                     |

---

### Test Steps

| Step No | Action                                              | Expected Result                             |
| ------- | --------------------------------------------------- | ------------------------------------------- |
| 1       | Click the "Add to Cart" button on the first product | Button label changes to "Remove"            |
| 2       | Click the shopping cart icon                        | User is navigated to the Shopping Cart page |
| 3       | Click "Continue Shopping" button                    | User is navigated back to the Products page |
| 4       | Verify previously added product's button state      | Product's button label is still "Remove"    |

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
| Test Case ID     | TC-PRODUCTS-09                                                      |
| Title            | Verify Products page state after navigating to Product Details page |
| Module / Feature | Products                                                            |
| Type             | Functional                                                          |
| Priority         | P2                                                                  |
| Preconditions    | User is logged in and on Products page                              |
| Test Data        | N/A                                                                 |
| Environment      | https://www.saucedemo.com                                           |

---

### Test Steps

| Step No | Action                                                    | Expected Result                                  |
| ------- | --------------------------------------------------------- | ------------------------------------------------ |
| 1       | Click the "Add to Cart" button for the first item         | Button label changes to "Remove"                 |
| 2       | Click on the text of previously added item                | User is navigated to the selected product's page |
| 3       | Click the "Back to Products" button                       | User is navigated back to the Products page      |
| 4       | Verify that the Products page reflects the previous state | The added item still shows the "Remove" button   |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                      |
| ---------------- | ------------------------------------------------ |
| Test Case ID     | TC-PRODUCTS-10                                   |
| Title            | Verify Products page displays correct page title |
| Module / Feature | Products                                         |
| Type             | Functional                                       |
| Priority         | P3                                               |
| Preconditions    | User is logged in and on the Products page       |
| Test Data        | N/A                                              |
| Environment      | https://www.saucedemo.com                        |

---

### Test Steps

| Step No | Action                                      | Expected Result                        |
| ------- | ------------------------------------------- | -------------------------------------- |
| 1       | Observe the page title on the Products page | The page title "Products" is displayed |

---

### Actual Result

()

---

### Status

()

---
