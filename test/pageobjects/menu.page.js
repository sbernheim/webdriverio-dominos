class Menu {
  get titleDrinks() {
    return $('[data-quid="entree-title-drinks"]')
  }

  get buttonCoke() {
    return $('a[data-dpz-track-evt-name="Order CTA | Coke®"]')
  }

  get selectorAddToOrder() {
    return $('div[class="product-builder__footer"] button:nth-child(2)')
  }

  async selectMenuItems() {
    const title = await this.titleDrinks
    await expect(title).toBeExisting()
    await this.titleDrinks.click()
    const button = await this.buttonCoke
    await expect(button).toBeExisting()
    await button.click()
    const selector = await this.selectorAddToOrder
    await expect(selector).toBeExisting()
    await selector.click()
  }
}

module.exports = new Menu()
