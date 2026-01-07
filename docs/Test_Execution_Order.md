# Test Execution Order

### Smoke Tests

| Order | Description | Test Case ID   |
| ----- | ----------- | -------------- |
| 1 ✅  | Smoke       | TC-LOGIN-01    |
| 2 ✅  | Smoke       | TC-PRODUCTS-01 |
| 3 ✅  | Smoke       | TC-SCART-15    |
| 4 ✅  | Smoke       | TC-CHECKOUT-25 |

### Test Order

| Order | Test Case ID   | Priority |
| ----- | -------------- | -------- |
| 1 ✅  | TC-LOGIN-01    | P1       |
| 2 ✅  | TC-LOGIN-02    | P1       |
| 3 ✅  | TC-LOGIN-03    | P1       |
| 4 ✅  | TC-LOGIN-04    | P1       |
| 5 ✅  | TC-LOGIN-05    | P1       |
| 6 ✅  | TC-LOGIN-06    | P1       |
| 7 ✅  | TC-LOGIN-07    | P1       |
| 8 ✅  | TC-LOGIN-08    | P1       |
| 9 ❌  | TC-LOGIN-09    | P1       |
| 10 ✅ | TC-LOGIN-10    | P1       |
| 11 ✅ | TC-NAVBAR-01   | P1       |
| 12 ✅ | TC-NAVBAR-04   | P1       |
| 13 ✅ | TC-LOGOUT-01   | P1       |
| 14 ✅ | TC-LOGOUT-02   | P1       |
| 15 ✅ | TC-PRODUCTS-01 | P1       |
| 16 ✅ | TC-PRODUCTS-02 | P1       |
| 17 ✅ | TC-PRODUCTS-03 | P1       |
| 18 ✅ | TC-PRODUCTS-04 | P1       |
| 19 ✅ | TC-PRODUCTS-05 | P1       |
| 20 ✅ | TC-PRODUCTS-06 | P1       |
| 21 ✅ | TC-PDETAIL-01  | P1       |
| 22 ✅ | TC-NAVBAR-02   | P1       |
| 23 ✅ | TC-PDETAIL-02  | P1       |
| 24 ✅ | TC-PDETAIL-03  | P1       |
| 25 ✅ | TC-PDETAIL-04  | P1       |
| 26 ✅ | TC-PDETAIL-05  | P1       |
| 27 ✅ | TC-PDETAIL-06  | P1       |
| 28    | TC-SCART-01    | P1       |
| 29    | TC-SCART-02    | P1       |
| 30    | TC-SCART-03    | P1       |
| 31    | TC-SCART-04    | P1       |
| 32    | TC-SCART-11    | P1       |
| 33    | TC-SCART-12    | P1       |
| 34    | TC-SCART-13    | P1       |
| 35    | TC-SCART-14    | P1       |
| 36    | TC-SCART-15    | P1       |
| 37    | TC-SCART-16    | P1       |
| 38    | TC-SCART-17    | P1       |
| 39    | TC-SCART-18    | P1       |
| 40    | TC-SCART-19    | P1       |
| 41    | TC-SCART-20    | P1       |
| 42    | TC-SCART-21    | P1       |
| 43    | TC-SCART-22    | P1       |
| 44    | TC-SCART-23    | P1       |
| 45    | TC-SCART-24    | P1       |
| 46    | TC-SCART-25    | P1       |
| 47    | TC-SCART-26    | P1       |
| 48    | TC-CHECKOUT-01 | P1       |
| 49    | TC-CHECKOUT-02 | P1       |
| 50    | TC-CHECKOUT-03 | P1       |
| 51    | TC-CHECKOUT-04 | P1       |
| 52    | TC-CHECKOUT-05 | P1       |
| 53    | TC-CHECKOUT-06 | P1       |
| 54    | TC-CHECKOUT-07 | P1       |
| 55    | TC-CHECKOUT-08 | P1       |
| 56    | TC-CHECKOUT-09 | P1       |
| 57    | TC-CHECKOUT-10 | P1       |
| 58    | TC-CHECKOUT-11 | P1       |
| 59    | TC-CHECKOUT-12 | P1       |
| 60    | TC-CHECKOUT-13 | P1       |
| 61    | TC-CHECKOUT-14 | P1       |
| 62    | TC-CHECKOUT-15 | P1       |
| 63    | TC-CHECKOUT-16 | P1       |
| 64    | TC-CHECKOUT-17 | P1       |
| 65    | TC-CHECKOUT-18 | P1       |
| 66    | TC-CHECKOUT-19 | P1       |
| 67    | TC-CHECKOUT-20 | P1       |
| 68    | TC-CHECKOUT-21 | P1       |
| 69    | TC-CHECKOUT-22 | P1       |
| 70    | TC-CHECKOUT-23 | P1       |
| 71    | TC-CHECKOUT-24 | P1       |
| 72    | TC-CHECKOUT-25 | P1       |
| 73    | TC-CHECKOUT-26 | P1       |
| 74    | TC-CHECKOUT-27 | P1       |
| 75    | TC-CHECKOUT-28 | P1       |
| 76    | TC-CHECKOUT-29 | P1       |
| 77    | TC-CHECKOUT-30 | P1       |
| 78    | TC-CHECKOUT-31 | P1       |
| 79    | TC-NAVBAR-03   | P2       |
| 80    | TC-PRODUCTS-07 | P2       |
| 81    | TC-PRODUCTS-08 | P2       |
| 82    | TC-PRODUCTS-09 | P2       |
| 83    | TC-PDETAIL-07  | P2       |
| 84    | TC-PDETAIL-08  | P2       |
| 85    | TC-SCART-05    | P2       |
| 86    | TC-SCART-06    | P2       |
| 87    | TC-SCART-07    | P2       |
| 88    | TC-SCART-08    | P2       |
| 89    | TC-SCART-09    | P2       |
| 90    | TC-SCART-10    | P2       |
| 91    | TC-SORT-01     | P2       |
| 92    | TC-SORT-02     | P2       |
| 93    | TC-SORT-03     | P2       |
| 94    | TC-SORT-04     | P2       |
| 95    | TC-SORT-05     | P2       |
| 96    | TC-SORT-06     | P2       |
| 97    | TC-SORT-07     | P2       |
| 98    | TC-LOGIN-11    | P3       |
| 99    | TC-PRODUCTS-10 | P3       |
| 100   | TC-SCART-27    | P3       |
| 101   | TC-CHECKOUT-32 | P3       |
| 102   | TC-CHECKOUT-33 | P3       |
| 103   | TC-CHECKOUT-34 | P3       |
