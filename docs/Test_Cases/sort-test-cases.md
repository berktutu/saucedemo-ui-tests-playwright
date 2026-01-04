# Sort functionality test cases of SauceDemo

### Test Info

| Field            | Description                            |
| ---------------- | -------------------------------------- |
| Test Case ID     | TC-SORT-01                             |
| Title            | Verify sort dropdown is visible        |
| Module / Feature | Sort                                   |
| Type             | Functional                             |
| Priority         | P2                                     |
| Preconditions    | User is logged in and on Products page |
| Test Data        | N/A                                    |
| Environment      | https://www.saucedemo.com              |

---

### Test Steps

| Step No | Action                          | Expected Result          |
| ------- | ------------------------------- | ------------------------ |
| 1       | Verify sort dropdown is visible | Sort dropdown is visible |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                       |
| ---------------- | ------------------------------------------------- |
| Test Case ID     | TC-SORT-02                                        |
| Title            | Verify sort dropdown has correct sorting options  |
| Module / Feature | Sort                                              |
| Type             | Functional                                        |
| Priority         | P2                                                |
| Preconditions    | User is logged in and on homepage (Products page) |
| Test Data        | N/A                                               |
| Environment      | https://www.saucedemo.com                         |

---

### Test Steps

| Step No | Action                           | Expected Result                                                                 |
| ------- | -------------------------------- | ------------------------------------------------------------------------------- |
| 1       | Click on the sort dropdown       | Drowpdown list is displayed                                                     |
| 2       | Verify all sorting options exist | Options: Name (A to Z), Name (Z to A), Price (low to high), Price (high to low) |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                         |
| ---------------- | --------------------------------------------------- |
| Test Case ID     | TC-SORT-03                                          |
| Title            | Verify sorting products by Name (A to Z and Z to A) |
| Module / Feature | Sort                                                |
| Type             | Functional                                          |
| Priority         | P2                                                  |
| Preconditions    | User is logged in and on homepage (Products page)   |
| Test Data        | N/A                                                 |
| Environment      | https://www.saucedemo.com                           |

---

### Test Steps

| Step No | Action                                            | Expected Result                           |
| ------- | ------------------------------------------------- | ----------------------------------------- |
| 1       | Click on the sort dropdown                        | Drowpdown list is displayed               |
| 2       | Click on the option with the text "Name (Z to A)" | Products are listed Z to A alphabetically |
| 3       | Click on the sort dropdown                        | Drowpdown list is displayed               |
| 4       | Click on the option with the text "Name (A to Z)" | Products are listed A to Z alphabetically |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                    |
| ---------------- | ---------------------------------------------- |
| Test Case ID     | TC-SORT-04                                     |
| Title            | Verify sorting products by Price (low to high) |
| Module / Feature | Sort                                           |
| Type             | Functional                                     |
| Priority         | P2                                             |
| Preconditions    | User is logged in and on the Products page     |
| Test Data        | N/A                                            |
| Environment      | https://www.saucedemo.com                      |

---

### Test Steps

| Step No | Action                                                  | Expected Result                       |
| ------- | ------------------------------------------------------- | ------------------------------------- |
| 1       | Click on the sort dropdown                              | Drowpdown list is displayed           |
| 2       | Click on the option with the text "Price (low to high)" | Products are listed low to high price |

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                    |
| ---------------- | ---------------------------------------------- |
| Test Case ID     | TC-SORT-05                                     |
| Title            | Verify sorting products by Price (high to low) |
| Module / Feature | Sort                                           |
| Type             | Functional                                     |
| Priority         | P2                                             |
| Preconditions    | User is logged in and on the Products page     |
| Test Data        | N/A                                            |
| Environment      | https://www.saucedemo.com                      |

---

### Test Steps

| Step No | Action                                                  | Expected Result                       |
| ------- | ------------------------------------------------------- | ------------------------------------- |
| 1       | Click on the sort dropdown                              | Drowpdown list is displayed           |
| 2       | Click on the option with the text "Price (high to low)" | Products are listed high to low price |

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
| Test Case ID     | TC-SORT-06                                                         |
| Title            | Verify sorting option remains after adding and removing an product |
| Module / Feature | Sort                                                               |
| Type             | Functional                                                         |
| Priority         | P2                                                                 |
| Preconditions    | User is logged in and on the Products page                         |
| Test Data        | N/A                                                                |
| Environment      | https://www.saucedemo.com                                          |

---

### Test Steps

| Step No | Action                       | Expected Result                                         |
| ------- | ---------------------------- | ------------------------------------------------------- |
| 1       | Click on the sort dropdown   | Dropdown list is displayed                              |
| 2       | Select "Price (high to low)" | Products are listed high to low price                   |
| 3       | Add one product to cart      | Product is added and sorting option remains unchanged   |
| 4       | Remove the added product     | Product is removed and sorting option remains unchanged |

---

---

### Actual Result

()

---

### Status

()

---

### Test Info

| Field            | Description                                           |
| ---------------- | ----------------------------------------------------- |
| Test Case ID     | TC-SORT-07                                            |
| Title            | Verify sorting works correctly after multiple changes |
| Module / Feature | Sort                                                  |
| Type             | Functional                                            |
| Priority         | P2                                                    |
| Preconditions    | User is logged in and on the Products page            |
| Test Data        | N/A                                                   |
| Environment      | https://www.saucedemo.com                             |

---

### Test Steps

| Step No | Action                       | Expected Result                            |
| ------- | ---------------------------- | ------------------------------------------ |
| 1       | Open the sort dropdown       | Dropdown list is displayed                 |
| 2       | Select "Name (Z to A)"       | Products are sorted Z to A alphabetically  |
| 3       | Open the sort dropdown       | Dropdown list is displayed                 |
| 4       | Select "Name (A to Z)"       | Products are sorted A to Z alphabetically  |
| 5       | Open the sort dropdown       | Dropdown list is displayed                 |
| 6       | Select "Price (low to high)" | Products are sorted from low to high price |
| 7       | Open the sort dropdown       | Dropdown list is displayed                 |
| 8       | Select "Price (high to low)" | Products are sorted from high to low price |
| 9       | Open the sort dropdown       | Dropdown list is displayed                 |
| 10      | Select "Name (A to Z)"       | Products are sorted A to Z alphabetically  |

---

### Actual Result

()

---

### Status

()

---
