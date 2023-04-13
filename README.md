## CoE e2e WEB

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![tested with webdriver.io](https://img.shields.io/badge/tested%20with-webdriver.io-%23ea5906)](https://webdriver.io/)

CoE WEB validation in Domino's using [Webdriver.io](https://webdriver.io/) and [Mocha Framework](https://mochajs.org/) and [Applitools](https://applitools.com/)

#### System Requirements

- [NVM](https://www.npmjs.com/) To assist managing multiple active [NodeJS](https://nodejs.org/en/) versions
- [NodeJS](https://nodejs.org/en/) version: `v18.15.0`

#### To build

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

### To run the project

```bash
npx wdio run wdio.conf.js
```

#### To run the project in [Applitools](https://applitools.com/)

```bash
export APPLITOOLS_API_KEY=${YOUR_APPLITOOLS_API_KEY}
export APPLITOOLS_SERVER_URL=${YOUR_APPLITOOLS_SERVER_URL}
```

where:

- `${YOUR_APPLITOOLS_API_KEY}` is something like: `Ag4hfEVDIMykuCpWk61ppg3VJ9fkK0uht100HXnvGPlag220` (Check with your service provider if you do not have it)
- `${YOUR_APPLITOOLS_SERVER_URL}` is your Applitools API service

To generate [Allure Reports](https://webdriver.io/docs/allure-reporter/)

```bash
allure generate && allure open
```

#### Read this as reference

- https://josdem.io/techtalk/ux/webdriverio_getting_started/
- https://josdem.io/techtalk/ux/applitools_getting_started/
