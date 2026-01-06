# Bug Reports - SauceDemo

| Field                  | Details                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Test Case**          | **TC-LOGIN-09**                                                                                            |
| **Title**              | UX Issue: Login Page - Only username error message is displayed when both fields are empty                 |
| **Summary**            | When both username and password are empty, only the username field shows an error message                  |
| **Environment**        | Chrome / Windows / Desktop<br>URL: (https://www.saucedemo.com)<br>Automation: Playwright                   |
| **Steps to Reproduce** | 1. Navigate to the login page<br>2. Leave both username and password fields empty<br>3. Click Login button |
| **Expected Result**    | Error message should indicate that **both username and password fields are empty**                         |
| **Actual Result**      | Error message indicates **only the username field is empty**                                               |
| **Severity**           | Minor                                                                                                      |
| **Priority**           | Low                                                                                                        |
| **Notes / References** | ![Screenshot](screenshots/tc-login-09.png)                                                                 |
