class ConfirmationPage {
  get confirmationPageDiv() {
    return $("div[id='orderConfirmationPage']")
  }

  async validateConfirmationPage() {
    const div = await this.confirmationPageDiv
    await expect(div).toBeExisting()
  }
}

module.exports = new ConfirmationPage()
