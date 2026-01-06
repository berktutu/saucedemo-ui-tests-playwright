# Login Functionality test cases of SauceDemo

**Note:** Additional test cases, such as entering special characters, performing multiple invalid login attempts, and verifying session timeout, could be included. However, since the SauceDemo application does not support these functionalities and valid login data is predefined, these cases cannot be executed.

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-01                                           |
| Title            | Login with valid credentials                          |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | standard_user / secret_sauce                          |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                         | Expected Result                                          |
| ------- | ---------------------------------------------- | -------------------------------------------------------- |
| 1       | Enter a valid username into the username field | Username field accepts user input                        |
| 2       | Enter a valid password into the password field | Password field accepts user input                        |
| 3       | Click the Login button                         | User is authenticated and navigated to the Products page |

---

### Actual Result

Username and password fields accept user input. User is authenticated and navigated to the Products page

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-02                                           |
| Title            | Login with valid username and invalid password        |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | standard_user / invalidpw                             |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                            | Expected Result                                                              |
| ------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Enter a valid username into the username field    | —                                                                            |
| 2       | Enter an invalid password into the password field | —                                                                            |
| 3       | Click the Login button                            | User remains on the login page and an appropriate error message is displayed |

---

### Actual Result

User remained on the login page and an appropriate error message is displayed. But text and container collision makes the readability hard.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-03                                           |
| Title            | Login with invalid username and valid password        |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | standard_user1 / secret_sauce                         |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                            | Expected Result                                                              |
| ------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Enter an invalid username into the username field | —                                                                            |
| 2       | Enter a valid password into the password field    | —                                                                            |
| 3       | Click the Login button                            | User remains on the login page and an appropriate error message is displayed |

---

### Actual Result

User remained on the login page and an appropriate error message is displayed. But text and container collision makes the readability hard.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-04                                           |
| Title            | Login with invalid username and invalid password      |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | standard_user1 / invalidpw                            |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                            | Expected Result                                                              |
| ------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Enter an invalid username into the username field | —                                                                            |
| 2       | Enter an invalid password into the password field | —                                                                            |
| 3       | Click the Login button                            | User remains on the login page and an appropriate error message is displayed |

---

### Actual Result

User remained on the login page and an appropriate error message is displayed. But text and container collision makes the readability hard.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| Test Case ID     | TC-LOGIN-05                                                |
| Title            | Login with username containing leading and trailing spaces |
| Module / Feature | Login                                                      |
| Type             | Functional                                                 |
| Priority         | P1                                                         |
| Preconditions    | User is on the login page (https://www.saucedemo.com)      |
| Test Data        | " standard_user " / secret_sauce                           |
| Environment      | https://www.saucedemo.com                                  |

---

### Test Steps

| Step No | Action                                                                    | Expected Result                                                              |
| ------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Enter a username with leading and trailing spaces into the username field | —                                                                            |
| 2       | Enter a valid password into the password field                            | —                                                                            |
| 3       | Click the Login button                                                    | User remains on the login page and an appropriate error message is displayed |

---

---

### Actual Result

User remained on the login page and an appropriate error message is displayed. But text and container collision makes the readability hard.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                                |
| ---------------- | ---------------------------------------------------------- |
| Test Case ID     | TC-LOGIN-06                                                |
| Title            | Login with password containing leading and trailing spaces |
| Module / Feature | Login                                                      |
| Type             | Functional                                                 |
| Priority         | P1                                                         |
| Preconditions    | User is on the login page (https://www.saucedemo.com)      |
| Test Data        | standard_user / " secret_sauce "                           |
| Environment      | https://www.saucedemo.com                                  |

---

### Test Steps

| Step No | Action                                                                    | Expected Result                                                              |
| ------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Enter a valid username into the username field                            | —                                                                            |
| 2       | Enter a password with leading and trailing spaces into the password field | —                                                                            |
| 3       | Click the Login button                                                    | User remains on the login page and an appropriate error message is displayed |

---

### Actual Result

User remained on the login page and an appropriate error message is displayed. But text and container collision makes the readability hard.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-07                                           |
| Title            | Login with empty username and valid password          |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | secret_sauce                                          |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                         | Expected Result                                                              |
| ------- | ---------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Leave the username field empty                 | —                                                                            |
| 2       | Enter a valid password into the password field | —                                                                            |
| 3       | Click the Login button                         | User remains on the login page and an appropriate error message is displayed |

---

### Actual Result

User remained on the login page and an appropriate error message is displayed.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-08                                           |
| Title            | Login with valid username and empty password          |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | standard_user                                         |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                         | Expected Result                                                              |
| ------- | ---------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Enter a valid username into the username field | —                                                                            |
| 2       | Leave the password field empty                 | —                                                                            |
| 3       | Click the Login button                         | User remains on the login page and an appropriate error message is displayed |

---

### Actual Result

User remained on the login page and an appropriate error message is displayed.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-09                                           |
| Title            | Login with empty username and empty password          |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | N/A                                                   |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                            | Expected Result                                                              |
| ------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1       | Leave both the username and password fields empty | —                                                                            |
| 2       | Click the Login button                            | User remains on the login page and an appropriate error message is displayed |

---

### Actual Result

User remained on the login page but appropriate error message is not displayed.

---

### Status

Fail ❌

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-LOGIN-10                                           |
| Title            | Verify password field masks entered characters        |
| Module / Feature | Login                                                 |
| Type             | Functional                                            |
| Priority         | P1                                                    |
| Preconditions    | User is on the login page (https://www.saucedemo.com) |
| Test Data        | secret_sauce                                          |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                                     | Expected Result               |
| ------- | ------------------------------------------ | ----------------------------- |
| 1       | Enter the password into the password field | Entered characters are masked |

---

### Actual Result

Entered characters are masked.

---

### Status

Pass ✅

---

### Test Info

| Field            | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| Test Case ID     | TC-LOGIN-11                                                 |
| Title            | Login with valid credentials using keyboard navigation only |
| Module / Feature | Login                                                       |
| Type             | Functional                                                  |
| Priority         | P3                                                          |
| Preconditions    | User is on the login page (https://www.saucedemo.com)       |
| Test Data        | standard_user / secret_sauce                                |
| Environment      | https://www.saucedemo.com                                   |

---

### Test Steps

| Step No | Action                                                 | Expected Result                                          |
| ------- | ------------------------------------------------------ | -------------------------------------------------------- |
| 1       | Enter valid credentials using keyboard navigation only | -                                                        |
| 2       | Submit the login form using the keyboard               | User is authenticated and navigated to the Products page |

---

### Actual Result

()

---

### Status

()

---
