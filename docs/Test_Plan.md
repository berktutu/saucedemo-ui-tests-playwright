# Test Plan – SauceDemo

## 1. Introduction

This test plan document describes the approach and scope for test automation of the **SauceDemo** application (https://www.saucedemo.com). The purpose of this plan is to ensure that critical user flows function correctly and consistently through automated UI testing.

This document is prepared as part of a **Test automation portfolio project** and showcases application of testing practices.

---

## 2. Scope

### 2.1 Inside the Scope

Listed areas are covered by automation testing using **Playwright**:

- Login / Logout
- Product list / Product details
- Shopping cart functionality
- Checkout process
- Navigation between pages
- Application UI

Tests are focused on user behavior and user flows.

### 2.2 Out of Scope

Listed points are excluded from the testing scope:

- API
- Performance testing
- Cross device testing
- Database
- Correctnes of details
- Security testing

Some of these are out of the scope. Because SauceDemo application does not have features to test it.

---

## 3. Test Levels

The following test levels are included:

- System Testing
- End to End Testing (E2E)

---

## 4. Test Approach

### 4.1 Automation Test Strategy

- All tests are automated
- Tests have goal to simulate real user interactions and flows
- User facing locators are preferred as much as possible
- Usage of page object model approach to have better structure
- Tests have purpose to be repeatable

### 4.2 Manual Test

Manual testing is done only because of exploratory reasons.

---

## 5. Test Environment

- Application: https://www.saucedemo.com
- Environment Type: Public

### 5.1 Browsers

Tests are executed on:

- Chrome
- Webkit
- Firefox

---

## 6. Test Data Management

- Test data for authentication is provided by SauceDemo
- Additional test data such as user information for checkout is required

---

## 7. Entry and Exit Criteria

### 7.1 Entry Criteria

Testing can start when:

- Application is accessible and stable (It already is)
- Test cases are written and checked
- Automation framework is set up

### 7.2 Exit Criteria

Testing can be considered completed when:

- Smoke tests pass
- All test cases are executed
- Bug report is done
- Test execution results are registered

---

## 8. Risks and Assumptions

### 8.1 Risks

- SauceDemo might be unstable due to being public
- The application might get shut down
- Application behavior may change without notice
- Application might get behind a paidwall

### 8.2 Assumptions

- No backend changes
- Low security functionalities due to being a demo application
- Application has been available publicly for some time. Therefore, it might keep being available publicly

---

## 9. Test Deliverables

- Test Plan Document
- Requirements Document (Prepared with assumptions)
- Risk Analysis
- Automation Plan
- Requirement Traceability Matrix
- Test Scenarios
- Test Cases
- Test execution order
- Automated test scripts
- Bug reports

---

## 10. Test Schedule

Schedule is flexible due to being a portfolio project.

---
