const { expect } = require('@playwright/test');

class PaymentPage {
  constructor(page) {
    this.page = page;
  }

  async expectSelectedAmount(amount) {
    // This checks visible page text. Replace with a precise order-summary locator
    // (for example a data-testid) once the live DOM has been inspected.
    await expect(this.page.locator('body')).toContainText(String(amount));
  }
}

module.exports = { PaymentPage };
