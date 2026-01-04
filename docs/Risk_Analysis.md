# Risk Analysis - SauceDemo

**Note**: Some risks will not be mitigated but accepted. This is due to external dependencies and low security precautions.

| Feature / Area      | Risk Description                                                        | Likelihood | Impact   | Mitigation Strategy                                                                   |
| ------------------- | ----------------------------------------------------------------------- | ---------- | -------- | ------------------------------------------------------------------------------------- |
| Environment         | Application becomes unavailable or shut down                            | Medium     | Critical | **Risk accepted** due to lack of control over the external test environment           |
| Login               | Authentication fails for a valid user                                   | Low        | High     | Execute login smoke test and valid login functional test                              |
| Navbar              | Navbar menu fails to open                                               | Low        | Critical | Create and execute dedicated test cases for navbar functionality                      |
| Logout              | Application remains accessible after logout via browser back navigation | Medium     | High     | Test browser back behavior after logout                                               |
| Products            | Incorrect product information is displayed                              | Medium     | Medium   | **Risk accepted** due to lack of authoritative product data for validation            |
| Products            | Products fail to load on the page                                       | Low        | High     | Include smoke and product visibility tests                                            |
| Products            | Product action button state does not update correctly                   | Medium     | Medium   | Add test cases validating add/remove button state changes                             |
| Sort                | Products are not sorted according to the selected option                | Low        | Medium   | Add test cases covering all available sort options                                    |
| Product Detail Page | Navigation to product detail page fails                                 | Low        | Medium   | Add test cases verifying navigation to the product detail page                        |
| Shopping Cart       | Shopping cart icon does not update correctly                            | Medium     | Medium   | Test add and remove scenarios and verify cart icon counter                            |
| Shopping Cart       | Incorrect product is removed from the cart                              | Low        | High     | Test item removal with multiple products in the cart and avoid index-based validation |
| Checkout            | Checkout is allowed with an empty cart                                  | High       | Critical | Execute negative checkout test scenarios                                              |
| Checkout            | Inadequate security controls during checkout                            | High       | Critical | **Risk accepted** due to the application being a demo environment                     |
| Checkout            | Checkout proceeds with invalid customer information                     | High       | Critical | **Risk accepted** as data validation testing is out of scope for the demo application |
| Checkout            | Incorrect price, tax, or total calculation                              | Low        | High     | Verify item prices, tax calculation, and total amount on checkout                     |
| UI Layout           | Error messages are not displayed correctly                              | Medium     | Medium   | Report UI layout issues as bugs even if functional tests pass                         |
| Application         | Page state breaks after refresh or navigation                           | Medium     | High     | Include test cases covering page refresh and navigation scenarios                     |
