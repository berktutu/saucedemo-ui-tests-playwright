# Navbar test cases of SauceDemo

**Note:** Additional test cases, such as using navbar from pages with high risk or security could be included. However, because the navbar works globally and the SauceDemo application does not have any security precautions, extensive or selective testing is not needed. Navbar functioning is already covered on Products and Item pages.

**Note:** Users can logout using the navbar. The logout functionality is already covered by it's own dedicated test cases. To avoid repetitive testing it will not be covered here.

**Note:** Reset App State is not tested because it is not made for users.

### Test Info

| Field            | Description                                 |
| ---------------- | ------------------------------------------- |
| Test Case ID     | TC-NAVBAR-01                                |
| Title            | Verify navbar menu can be opened and closed |
| Module / Feature | Navbar                                      |
| Type             | Functional                                  |
| Priority         | P1                                          |
| Preconditions    | User is logged in and on Products page      |
| Test Data        | N/A                                         |
| Environment      | https://www.saucedemo.com                   |

---

### Test Steps

| Step No | Action                                     | Expected Result          |
| ------- | ------------------------------------------ | ------------------------ |
| 1       | Click the hamburger menu icon              | Navbar menu is displayed |
| 2       | Click the close icon in the navigation bar | Navbar menu is collapsed |

---

### Actual Result

Navbar menu opened and closed successfully.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                |
| ---------------- | ------------------------------------------ |
| Test Case ID     | TC-NAVBAR-02                               |
| Title            | Navigate to Products page using the navbar |
| Module / Feature | Navbar                                     |
| Type             | Functional                                 |
| Priority         | P1                                         |
| Preconditions    | User is logged in and on Products page     |
| Test Data        | N/A                                        |
| Environment      | https://www.saucedemo.com                  |

---

### Test Steps

| Step No | Action                                              | Expected Result                        |
| ------- | --------------------------------------------------- | -------------------------------------- |
| 1       | Click on a product to open the product details page | Item's page is displayed               |
| 2       | Click the hamburger menu icon in the navigation bar | Navbar menu is displayed               |
| 3       | Click the "All Items" option                        | User is navigated to the Products page |

---

### Actual Result

Successfully navigated to the Products page.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                             |
| ---------------- | --------------------------------------- |
| Test Case ID     | TC-NAVBAR-03                            |
| Title            | Navigate to About page using the navbar |
| Module / Feature | Navbar                                  |
| Type             | Functional                              |
| Priority         | P2                                      |
| Preconditions    | User is logged in and on Products page  |
| Test Data        | N/A                                     |
| Environment      | https://www.saucedemo.com               |

---

### Test Steps

| Step No | Action                        | Expected Result                             |
| ------- | ----------------------------- | ------------------------------------------- |
| 1       | Click the hamburger menu icon | Navbar menu is displayed                    |
| 2       | Click the "About" option      | User is navigated to the Sauce Labs website |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                 |
| ---------------- | ------------------------------------------- |
| Test Case ID     | TC-NAVBAR-04                                |
| Title            | Verify logout option is available in navbar |
| Module / Feature | Navbar                                      |
| Type             | Functional                                  |
| Priority         | P1                                          |
| Preconditions    | User is logged in and on Products page      |
| Test Data        | N/A                                         |
| Environment      | https://www.saucedemo.com                   |

---

### Test Steps

| Step No | Action                          | Expected Result                             |
| ------- | ------------------------------- | ------------------------------------------- |
| 1       | Click the hamburger menu icon   | Navbar menu is displayed                    |
| 2       | Verify the Logout option exists | Logout option is visible in the navbar menu |

---

### Actual Result

Logout option is visible in the navbar menu.

---

### Status

Pass ✅

---
