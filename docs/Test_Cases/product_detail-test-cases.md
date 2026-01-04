# Item page test cases of SauceDemo

**Note:** Only the presence of product information and product images can be verified, as there is no reference document to prove the correctness of these informations. Accuracy of the data on the page can not be tested.

### Test Info

| Field            | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| Test Case ID     | TC-PDETAIL-01                                                  |
| Title            | Verify clicking a product navigates to the Product detail page |
| Module / Feature | Product detail                                                 |
| Type             | Functional                                                     |
| Priority         | P1                                                             |
| Preconditions    | User is logged in and on Products page                         |
| Test Data        | N/A                                                            |
| Environment      | https://www.saucedemo.com                                      |

---

### Test Steps

| Step No | Action                                          | Expected Result                                       |
| ------- | ----------------------------------------------- | ----------------------------------------------------- |
| 1       | Click the name of the first product in the list | User is navigated to the selected Product detail page |

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
| Test Case ID     | TC-PDETAIL-02                                                    |
| Title            | Verify product detail page displays complete product information |
| Module / Feature | Product detail                                                   |
| Type             | Functional                                                       |
| Priority         | P1                                                               |
| Preconditions    | User is logged in and on Products page                           |
| Test Data        | N/A                                                              |
| Environment      | https://www.saucedemo.com                                        |

---

### Test Steps

| Step No | Action                                          | Expected Result                                |
| ------- | ----------------------------------------------- | ---------------------------------------------- |
| 1       | Click the name of the first product in the list | User is navigated to the selected product page |
| 2       | Verify the product name is displayed            | Product name is visible                        |
| 3       | Verify the product description is displayed     | Product description is visible                 |
| 4       | Verify the product price is displayed           | Product price is visible                       |
| 5       | Verify the product image is displayed           | Product image is visible                       |
| 6       | Verify the "Add to Cart" button is displayed    | "Add to Cart" button is visible                |

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
| Test Case ID     | TC-PDETAIL-03                                                              |
| Title            | Verify product details match between Products page and Product detail page |
| Module / Feature | Product detail                                                             |
| Type             | Functional                                                                 |
| Priority         | P1                                                                         |
| Preconditions    | User is logged in and on Products page                                     |
| Test Data        | N/A                                                                        |
| Environment      | https://www.saucedemo.com                                                  |

---

### Test Steps

| Step No | Action                                                                     | Expected Result                                |
| ------- | -------------------------------------------------------------------------- | ---------------------------------------------- |
| 1       | Note the product name, description, price, and image on the Products page  | -                                              |
| 2       | Click the name of the same product                                         | User is navigated to the selected product page |
| 3       | Verify product name, description, price, and image match the Products page | Product information matches                    |

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
| Test Case ID     | TC-PDETAIL-04                                             |
| Title            | Verify Add to Cart button behavior on Product detail page |
| Module / Feature | Product detail                                            |
| Type             | Functional                                                |
| Priority         | P1                                                        |
| Preconditions    | User is logged in and on Products page                    |
| Test Data        | N/A                                                       |
| Environment      | https://www.saucedemo.com                                 |

---

### Test Steps

| Step No | Action                                          | Expected Result                  |
| ------- | ----------------------------------------------- | -------------------------------- |
| 1       | Click the name of the first product in the list | Product detail page is displayed |
| 2       | Click the "Add to Cart" button                  | Button label changes to "Remove" |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                          |
| ---------------- | ---------------------------------------------------- |
| Test Case ID     | TC-PDETAIL-05                                        |
| Title            | Verify Remove button behavior on Product detail page |
| Module / Feature | Product detail                                       |
| Type             | Functional                                           |
| Priority         | P1                                                   |
| Preconditions    | User is logged in and on Products page               |
| Test Data        | N/A                                                  |
| Environment      | https://www.saucedemo.com                            |

---

### Test Steps

| Step No | Action                                          | Expected Result                            |
| ------- | ----------------------------------------------- | ------------------------------------------ |
| 1       | Click the name of the first product in the list | Product detail page is displayed           |
| 2       | Click the "Add to Cart" button                  | Button label changes to "Remove"           |
| 3       | Click the "Remove" button                       | Button label changes back to "Add to Cart" |

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
| Test Case ID     | TC-PDETAIL-06                                                           |
| Title            | Verify user can navigate back to Products page from Product detail page |
| Module / Feature | Product detail                                                          |
| Type             | Functional                                                              |
| Priority         | P1                                                                      |
| Preconditions    | User is logged in and on Products page                                  |
| Test Data        | N/A                                                                     |
| Environment      | https://www.saucedemo.com                                               |

---

### Test Steps

| Step No | Action                                          | Expected Result                         |
| ------- | ----------------------------------------------- | --------------------------------------- |
| 1       | Click the name of the first product in the list | Product detail page is displayed        |
| 2       | Verify "Back to products" button is visible     | Back to Products button is visible      |
| 3       | Click the "Back to products" button             | User is navigated back to Products page |

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
| Test Case ID     | TC-PDETAIL-07                                                                |
| Title            | Verify product button state is retained on Product detail page after refresh |
| Module / Feature | Product detail                                                               |
| Type             | Functional                                                                   |
| Priority         | P2                                                                           |
| Preconditions    | User is logged in and on Products page                                       |
| Test Data        | N/A                                                                          |
| Environment      | https://www.saucedemo.com                                                    |

---

### Test Steps

| Step No | Action                                          | Expected Result                  |
| ------- | ----------------------------------------------- | -------------------------------- |
| 1       | Click the name of the first product in the list | Product detail page is displayed |
| 2       | Click the "Add to Cart" button                  | Button label changes to "Remove" |
| 3       | Refresh the page                                | Button label remains "Remove"    |

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
| Test Case ID     | TC-PDETAIL-08                                                            |
| Title            | Verify product button state is retained after returning to Products page |
| Module / Feature | Product detail                                                           |
| Type             | Functional                                                               |
| Priority         | P2                                                                       |
| Preconditions    | User is logged in and on Products page                                   |
| Test Data        |                                                                          |
| Environment      | https://www.saucedemo.com                                                |

---

### Test Steps

| Step No | Action                                          | Expected Result                  |
| ------- | ----------------------------------------------- | -------------------------------- |
| 1       | Click the name of the first product in the list | Product detail page is displayed |
| 2       | Click the "Add to Cart" button                  | Button label changes to "Remove" |
| 3       | Click the "Back to products" button             | Products page is displayed       |
| 4       | Verify product button state                     | Button label remains "Remove"    |

---

### Actual Result

()

---

### Status

()

---
