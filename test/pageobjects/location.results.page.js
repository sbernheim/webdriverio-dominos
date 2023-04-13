class LocationResults {
  get storePickUpButton() {
    return $(".js-orderCarryoutNow")
  }

  async selectOrderType() {
    const button = await this.storePickUpButton
    await expect(button).toBeExisting()
    await button.click()
  }
}

module.exports = new LocationResults()
