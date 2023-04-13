const properties = require("../properties/test.properties")
const constants = require("../utils/constants.util")

class StoreLocatorPage {
  get carryoutButton() {
    return $('[data-quid="Carryout-input"]')
  }

  get zipCodeInput() {
    return $('[data-quid="PostalCode"]')
  }

  get cityInput() {
    return $('[data-quid="City"]')
  }

  get regionSelect() {
    return $('[data-quid="Region"]')
  }

  get searchButton() {
    return $('[type="submit"]')
  }

  async open() {
    await browser.url(properties.storeLocatorUrl)
  }

  async clickOnCarryoutButton() {
    const carryout = await this.carryoutButton
    await expect(carryout).toBeExisting()
    await carryout.click()
  }

  async provideCustomerCarryoutAddress() {
    const zipcode = await this.zipCodeInput
    await expect(zipcode).toBeExisting()
    await zipcode.clearValue()
    await zipcode.setValue(properties.zipcode)
    const city = await this.cityInput
    await expect(city).toBeExisting()
    await city.clearValue()
    await city.setValue(properties.city)
    const region = await this.regionSelect
    await expect(region).toBeExisting()
    await region.selectByAttribute(constants.SELECTOR_VALUE, properties.state)
    const searchButton = await this.searchButton
    await expect(searchButton).toBeExisting()
    await searchButton.click()
  }
}

module.exports = new StoreLocatorPage()
