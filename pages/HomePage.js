class HomePage {
  constructor(page) {
    this.page = page;
    // Example locator. Prefer a verified data-testid or href from the live page.
    this.nokCashBanner = page.getByText(/nokcash/i).first();
  }

  async open() {
    await this.page.goto('/');
  }

  async clickNokCashBanner() {
    await this.nokCashBanner.waitFor({ state: 'visible' });
    await this.nokCashBanner.click();
  }
}

module.exports = { HomePage };
