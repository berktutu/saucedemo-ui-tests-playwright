# Logout Functionality test cases of SauceDemo

**Note:** Additional test cases, such as logging out from pages with high risk or security could be included. However, because the logout functionality is global and the SauceDemo application does not have any security precautions, extensive or selective testing is not needed.

### Test Info

| Field            | Description                 |
| ---------------- | --------------------------- |
| Test Case ID     | TC-LOGOUT-01                |
| Title            | Logout from the application |
| Module / Feature | Logout                      |
| Type             | Functional                  |
| Priority         | P1                          |
| Preconditions    | User is logged in           |
| Test Data        | N/A                         |
| Environment      | https://www.saucedemo.com   |

---

### Test Steps

| Step No | Action                        | Expected Result                                    |
| ------- | ----------------------------- | -------------------------------------------------- |
| 1       | Click the hamburger menu icon | Navigation menu is displayed                       |
| 2       | Click the Logout option       | User is logged out and navigated to the login page |

---

### Actual Result

User is logged out and navigated to the login page

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| Test Case ID     | TC-LOGOUT-02                                                          |
| Title            | Prevent application access after logout using browser back navigation |
| Module / Feature | Logout                                                                |
| Type             | Functional                                                            |
| Priority         | P1                                                                    |
| Preconditions    | User is logged in                                                     |
| Test Data        | N/A                                                                   |
| Environment      | https://www.saucedemo.com                                             |

---

### Test Steps

| Step No | Action                        | Expected Result                                                             |
| ------- | ----------------------------- | --------------------------------------------------------------------------- |
| 1       | Click the hamburger menu icon | Navigation menu is displayed                                                |
| 2       | Click the Logout option       | User is logged out and navigated to the login page                          |
| 3       | Use the browser back button   | Access is not granted to the application and user remains on the login page |

---

### Actual Result

Access is not granted to the application and user remains on the login page

---

### Status

Pass ✅

---
