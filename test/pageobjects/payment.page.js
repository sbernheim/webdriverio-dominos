const properties = require("../properties/test.properties")

class PaymentPage {
  get inputFirstName() {
    return $('input[id="First_Name"]')
  }
  get inputLastName() {
    return $('input[id="Last_Name"]')
  }
  get inputEmail() {
    return $('input[id="Email"]')
  }
  get inputPhone() {
    return $('input[id="Callback_Phone"]')
  }
  get paymentTypeCash() {
    return $('[data-quid="payment-cash"]')
  }
  get placeOrderButton() {
    return $('button[data-quid="payment-order-now"]')
  }

  async enterCustomerDetails() {
    const firstName = await this.inputFirstName
    await expect(firstName).toBeExisting()
    await firstName.setValue(properties.firstName)
    const lastName = await this.inputLastName
    await expect(lastName).toBeExisting()
    await lastName.setValue(properties.lastName)
    const email = await this.inputEmail
    await expect(email).toBeExisting()
    await email.setValue(properties.email)
    const phone = await this.inputPhone
    await expect(phone).toBeExisting()
    await phone.clearValue()
    await phone.addValue(properties.phone)
  }

  async enterPaymentDetails() {
    const payment = await this.paymentTypeCash
    await expect(payment).toBeExisting()
    await payment.click()
  }

  async placeOrder() {
    const button = await this.placeOrderButton
    await expect(button).toBeExisting()
    await button.click()
  }
}

module.exports = new PaymentPage()
