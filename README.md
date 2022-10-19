# API Tests -> Jest & Supertest 🧦

[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)

This project is an API tests example using JavaScript, [Jest](https://jestjs.io/docs/en/getting-started) and [SuperTest](https://github.com/visionmedia/supertest).

We are using [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as the source of our HTTP requests.

## Features 🧪

-   JavaScript
-   Jest
-   SuperTest
-   Prettier

## Requirements 📚

-   node >= ^16.x - [Node installation](https://nodejs.org/en/download/)
-   npm >= ^8.x - [NPM installation](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

Run API tests:

```bash
npm run test
```

Wanted Answer:

```text
 PASS  tests/users.test.js
  POST /users
    √ should return 201 and check user with name 'TestAPI' and email 'testapi@mail.com' exists (866ms)
  GET /users/{id}
    √ should return 200 and check user name is 'Clementina DuBuque' (725ms)
  PUT /users/{id}
    √ should return 200 and check user was update to 'TestAPI' and email 'testapi@mail.com (788ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        *
Ran all test suites.
```

## Watch tests while running 👨‍💻

It's also possible to watch the Jest tests while it's running:
```bash
npm run test:watch
```
