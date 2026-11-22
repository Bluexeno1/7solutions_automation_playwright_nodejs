# NokCash — Playwright + Node.js

## Stack
- Node.js
- JavaScript
- Playwright Test
- Chromium

## POM design

- `tests/nokcash.spec.js` contains the test scenarios.
- `pages/HomePage.js` contains homepage actions.
- `pages/TopUpPage.js` contains top-up page actions.
- `pages/PaymentPage.js` contains payment-page assertions.
- `config/testData.js` contains test data.
- `playwright.config.js` contains browser and test-runner settings.

## Setup (Windows CMD)

Install Node.js, or use your portable Node.js distribution. If using portable Node, run the commands from the project folder and invoke `npm.cmd` / `npx.cmd` using their full relative paths as appropriate.

```cmd
npm.cmd install
npx.cmd playwright install chromium
```

## Run

```cmd
npx.cmd playwright test
```

Run headed:

```cmd
npx.cmd playwright test --headed
```

Run one scenario:

```cmd
npx.cmd playwright test -g "NC-015"
```

Open the HTML report:

```cmd
npx.cmd playwright show-report
```

## Configuration

- `playwright.config.js` — base URL, browser, viewport, headless, slow motion and reports.
- `config/testData.js` — valid top-up amount.
- `pages/` — page locators and page actions.

The default locators are examples and must be verified against the live website before execution. Prefer stable `data-testid` attributes or specific accessible roles/names over broad text selectors.

## Scope
The tests stop at order-summary validation and do not complete or submit a real payment.
