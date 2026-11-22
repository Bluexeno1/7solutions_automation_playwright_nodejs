# Locator setup checklist

Inspect the live website and update these page object locators:

| Element | File | Current example |
|---|---|---|
| NokCash banner | `pages/HomePage.js` | `getByText(/nokcash/i)` |
| Top-up amount input | `pages/TopUpPage.js` | `input[type="number"]` |
| Continue button | `pages/TopUpPage.js` | Accessible button name |
| Payment amount | `pages/PaymentPage.js` | Body text assertion |

Prefer `getByTestId`, `getByLabel`, `getByRole` or a specific locator based on the inspected DOM.
