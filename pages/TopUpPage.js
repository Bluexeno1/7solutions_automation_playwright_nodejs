class TopUpPage {
  constructor(page) {
    this.page = page;
    // Example locators. Replace with verified selectors from the live page.
    this.amountInput = page.locator('input[type="number"]').first();
    this.continueButton = page.getByRole('button', {
      name: /continue|next|payment|ดำเนินการ|ถัดไป/i
    }).first();
  }

  async expectLoaded() {
    await this.page.getByText(/nokcash/i).first().waitFor({ state: 'visible' });
  }

  async enterAmount(amount) {
    await this.amountInput.waitFor({ state: 'visible' });
    await this.amountInput.fill(String(amount));
  }

  async continueToPayment() {
    await this.continueButton.click();
  }
}

module.exports = { TopUpPage };
