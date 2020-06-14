# Giphy E2E and API test
  Web automation with Webdriver.io and API automation with postman/newman

## Requirements

- Node version 10.15.3 or higher

## Quick start

Choose one of the following options:

1. Clone the git repo: 

```sh
$ `git clone https://github.com/majaklajic/giphy-automation.git
```

2. Install the dependencies:

```sh
$ npm install
```


# How to run E2E tests

Run all tests:

```sh
$ npm run test-all
```

Run all tests with Browserstack:

```sh
$ npm run test-all-browserstack
```

Run init test:

```sh
$ npm run test-init
```

Run login test:

```sh
$ npm run test-login
```

Run upload tests:

```sh
$ npm run test-upload
```

Run search tests:

```sh
$ npm run test-search
```

# How to run API tests

Run tests and generate HTML report:

```sh
$ cd api-tests/
$ npm install newman
$ npm install newman-reporter-htmlextra
$ newman run Giphy.postman_collection.json -e Giphy.postman_environment.json -r htmlextra
```
