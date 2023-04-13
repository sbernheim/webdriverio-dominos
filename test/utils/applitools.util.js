const { VisualGridRunner, RunnerOptions, Eyes, Target, BatchInfo, BrowserType, DeviceName, ScreenOrientation, By } = require("@applitools/eyes-webdriverio")

const LAYOUT_BREAK_POINTS = 700
const CHROME = {
  width: 1280,
  height: 768,
}
const FIREFOX = {
  width: 1280,
  height: 768,
}
const EDGE = {
  width: 1280,
  height: 768,
}
const SAFARI = {
  width: 1280,
  height: 960,
}

let eyes
let runner
let configuration

const setUpConfiguration = async (appName, batchName) => {
  const runnerOptions = new RunnerOptions().testConcurrency(5)
  runner = new VisualGridRunner(runnerOptions)
  eyes = new Eyes(runner)

  configuration = eyes.getConfiguration()
  configuration.setApiKey(process.env.APPLITOOLS_API_KEY)
  configuration.setServerUrl(process.env.APPLITOOLS_SERVER_URL)
  configuration.setBatch(new BatchInfo(batchName))
  configuration.setAppName(appName)
  configuration.addBrowser(CHROME.width, CHROME.height, BrowserType.CHROME)
  configuration.addBrowser(FIREFOX.width, FIREFOX.height, BrowserType.FIREFOX)
  configuration.addBrowser(EDGE.width, EDGE.height, BrowserType.EDGE_CHROMIUM)
  configuration.addBrowser(SAFARI.width, SAFARI.height, BrowserType.SAFARI)
  configuration.addDeviceEmulation(DeviceName.iPhone_11, ScreenOrientation.PORTRAIT)
  configuration.addDeviceEmulation(DeviceName.Pixel_5, ScreenOrientation.PORTRAIT)
}

const checkWindowEyes = async (name) => {
  await eyes.check(name, Target.window().layoutBreakpoints(LAYOUT_BREAK_POINTS))
}

const setUpTest = async (testName) => {
  await configuration.setTestName(testName)
  await eyes.setConfiguration(configuration)
  await eyes.open(browser)
}

const closeEyes = async () => {
  await eyes.closeAsync()
}

const cleaning = async () => {
  await eyes.abortAsync()
  const results = await runner.getAllTestResults(false)
  console.log(results)
}

module.exports = {
  cleaning,
  closeEyes,
  setUpTest,
  checkWindowEyes,
  setUpConfiguration,
}
