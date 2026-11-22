const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { TopUpPage } = require('../pages/TopUpPage');
const { PaymentPage } = require('../pages/PaymentPage');
const { validTopUpAmount } = require('../config/testData');

test.describe('NokCash top-up flow', () => {
  test('NC-002 NokCash banner opens the top-up page', async ({ page }) => {
    const homePage = new HomePage(page);
    const topUpPage = new TopUpPage(page);

    await homePage.open();
    await homePage.clickNokCashBanner();
    await topUpPage.expectLoaded();
  });

  test('NC-006 a valid top-up amount can be entered', async ({ page }) => {
    const homePage = new HomePage(page);
    const topUpPage = new TopUpPage(page);

    await homePage.open();
    await homePage.clickNokCashBanner();
    await topUpPage.expectLoaded();
    await topUpPage.enterAmount(validTopUpAmount);
    await topUpPage.continueToPayment();
  });

  test('NC-015 payment order summary shows the selected amount', async ({ page }) => {
    const homePage = new HomePage(page);
    const topUpPage = new TopUpPage(page);
    const paymentPage = new PaymentPage(page);

    await homePage.open();
    await homePage.clickNokCashBanner();
    await topUpPage.expectLoaded();
    await topUpPage.enterAmount(validTopUpAmount);
    await topUpPage.continueToPayment();
    await paymentPage.expectSelectedAmount(validTopUpAmount);
  });
});
