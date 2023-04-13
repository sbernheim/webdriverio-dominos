const properties = require("../properties/test.properties")

const waitForLoading = async () => {
  await browser.pause(properties.waitingTime)
}

module.exports.waitForLoading = waitForLoading
