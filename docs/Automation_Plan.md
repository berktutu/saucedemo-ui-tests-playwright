# Automation Plan - SauceDemo

## Tool Selection (Playwright)

Why Playwright was choosen?

- Playwright is used in this project due to its modern structure and capabilities
- Supports multiple browsers (Chromium, Webkit, Firefox)
- Playwright supports JavaScript / TypeScript and is a powerful tool
- Started learning Playwright due to having better knowledge of Typscript than other languages
- Strong built-in locators such as user facing locators which helps applying a good practice

---

## Automation Scope

Included:

- Smoke tests
- Functional UI tests
- Cross Browser tests

Excluded:

- Performance tests
- API tests
- Security tests
- Accessibility tests

---

## Practices

- Explicit waits are avoided due to Playwright auto-waiting feature
- User-facing locators are preferred whenever possible
- Tests are mostly independent
- Tests validate user behavior and actions

---

## Test Execution Plan

- CI integration is planned using Github Actions
- Run smoke tests to test the stability of the application
- Tests are ordered by priority (P1,P2,P3)

---

## Framework Design

- The Page Object Model is used to separate test logic from UI interactions
- The Page Object Model helps the code to be more maintainable
- Tests focus on behavior and assertions, improving readability and maintainability

---

## Continuous Integration (CI)

- Continuous Integration is implemented using GitHub Actions
- The workflow runs automated tests on repository
- Playwright reports are configured to use **html** and **github** reporters
- A GitHub Actions workflow is defined using a YAML configuration file
- The HTML report allows local inspection of test results, while the GitHub reporter provides clear feedback directly in the workflow logs

---
