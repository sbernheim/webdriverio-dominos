const locatorPage = require("../pageobjects/store.locator.page")
const locationResultsPage = require("../pageobjects/location.results.page")
const menuPage = require("../pageobjects/menu.page")
const checkoutPage = require("../pageobjects/checkout.page")
const paymentPage = require("../pageobjects/payment.page")
const confirmationPage = require("../pageobjects/confirmation.page")

const utils = require("../utils/browser.util")
const applitools = require("../utils/applitools.util")
const constants = require("../utils/constants.util")

const batchName = "Carryout pay at store"

describe("Should create a carryout order", () => {
  before("setting up Applitools configuration", async () => {
    await applitools.setUpConfiguration(constants.appName, batchName)
  })

  beforeEach("setting up test information", async function () {
    const testName = this.currentTest.title
    await applitools.setUpTest(testName)
  })

  it("open store locator", async () => {
    await locatorPage.open()
  })

  it("search locations", async () => {
    await locatorPage.clickOnCarryoutButton()
  })

  it("provides customer information", async () => {
    await applitools.checkWindowEyes("customer selects carryout")
    await locatorPage.provideCustomerCarryoutAddress()
  })

  it("selects store pickup", async () => {
    await locationResultsPage.selectOrderType()
  })

  it("select items to order", async () => {
    await utils.waitForLoading()
    await menuPage.selectMenuItems()
  })

  it("checkout the items to order", async () => {
    await checkoutPage.checkoutWithItems()
  })

  it("enters customer details", async () => {
    await paymentPage.enterCustomerDetails()
  })

  it("enters payment type", async () => {
    await paymentPage.enterPaymentDetails()
    await applitools.checkWindowEyes("entering customer's carryout payment")
  })

  it("place an order", async () => {
    await paymentPage.placeOrder()
  })

  it("validates order", async () => {
    await confirmationPage.validateConfirmationPage()
  })

  afterEach("cleaning up test", async () => {
    await applitools.closeEyes()
  })

  after("publishing results", async () => {
    await applitools.cleaning()
  })
})
