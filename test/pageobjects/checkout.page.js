class CheckoutPage {
  get selectCheckout() {
    return $('div[id="js-myOrderPage"] a')
  }

  get continueCheckoutBtn() {
    return $('[data-quid="continue-checkout-btn"]')
  }

  get genericOverLay() {
    return $('[data-quid="generic-overlay-close"]')
  }

  async closeUpsell() {
    const genericOverlay = await this.genericOverLay
    await genericOverlay.click()
  }

  async checkoutWithItems() {
    const checkout = await this.selectCheckout
    await checkout.click()
    await this.closeUpsell()
    const continueCheck = await this.continueCheckoutBtn
    await continueCheck.click()
  }
}

module.exports = new CheckoutPage()
