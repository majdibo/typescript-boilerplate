# TypeScript Boilerplate

[![Build and test status](https://github.com/majdibo/typescript-boilerplate/workflows/Lint%20and%20test/badge.svg)](https://github.com/majdibo/typescript-boilerplate/actions?query=workflow%3A%22Build+and+test%22)

TypeScript project boilerplate with modern tooling, for Node.js programs, libraries and browser modules. Get started quickly and right-footed 🚀

* Includes [TypeScript 4](https://www.typescriptlang.org/)
* Optionally uses [esbuild](https://esbuild.github.io/) for bundling for browsers (and Node.js)
* Linting with [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
* Testing with [Jest](https://jestjs.io/docs/getting-started) and [ts-jest](https://www.npmjs.com/package/ts-jest)
* Publishing to npm
* Continuous integration ([GitHub Actions](https://docs.github.com/en/actions)
* Automatic API documentation with [TypeDoc](https://typedoc.org/guides/doccomments/)

## Getting Started

```bash
# Clone the repository (you can also click "Use this template")
git clone https://github.com/majdibo/typescript-boilerplate.git your_project_name
cd your_project_name

# Edit `package.json` and `tsconfig.json` to your liking
...

# Install dependencies
yarn install

# Now you can run various yarn commands:
yarn cli
yarn lint
yarn test
yarn build-all
yarn ts-node <filename>
yarn esbuild-browser
...
```

* Take a look at all the scripts in [`package.json`](https://github.com/majdibo/typescript-boilerplate/blob/main/package.json)
* For publishing to npm, use `yarn publish` (or `npm publish`)

## esbuild

[esbuild](https://esbuild.github.io/) is an extremely fast bundler that supports a [large part of the TypeScript syntax](https://esbuild.github.io/content-types/#typescript). This project uses it to bundle for browsers (and Node.js if you want).

```bash
# Build for browsers
yarn esbuild-browser:dev
yarn esbuild-browser:watch

# Build the cli for node
yarn esbuild-node:dev
yarn esbuild-node:watch
```

You can generate a full clean build with `yarn build-all` (which uses both `tsc` and `esbuild`).

* `package.json` includes `scripts` for various esbuild commands: [see here](https://github.com/majdibo/typescript-boilerplate/blob/main/package.json#L23)
* `esbuild` has a `--global-name=xyz` flag, to store the exports from the entry point in a global variable. See also the [esbuild "Global name" docs](https://esbuild.github.io/api/#global-name).
* esbuild for the browser uses the IIFE (immediately-invoked function expression) format, which executes the bundled code on load


## Tests with Jest

You can write [Jest tests](https://jestjs.io/docs/getting-started) :

```typescript
import { greet } from './main'

test('assert 1 equals 1', () => {
  expect(1).toBe(1)
});
```

Run the tests with `yarn test`, no separate compile step is necessary.

* See also the [Jest documentation](https://jestjs.io/docs/getting-started).
* The tests can be automatically run in CI (GitHub Actions): [`.github/workflows/lint-and-test.yml`](https://github.com/majdibo/typescript-boilerplate/blob/main/.github/workflows/lint-and-test.yml)

## Documentation, published with CI

You can auto-generate API documentation from the TypeScript source files using [TypeDoc](https://typedoc.org/guides/doccomments/). The generated documentation can be published to GitHub pages through the CI.

Generate the documentation, using `src/main.ts` as entrypoint (configured in package.json):

```bash
yarn docs
```

The resulting HTML is saved in `docs/`.

You can publish the documentation through CI as [GitHub pages](https://pages.github.com/): See [`.github/workflows/deploy-gh-pages.yml`](https://github.com/majdibo/typescript-boilerplate/blob/main/.github/workflows/deploy-gh-pages.yml)

This is the documentation for this boilerplate project: https://majdibo.github.io/typescript-boilerplate/

## References

* [Bootstrapping a typescript node.js project](https://www.metachris.com/2021/03/bootstrapping-a-typescript-node.js-project/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [tsconfig docs](https://www.typescriptlang.org/tsconfig)
* [esbuild docs](https://esbuild.github.io/)
* [typescript-eslint docs](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
* [Jest docs](https://jestjs.io/docs/getting-started)
* [GitHub Actions](https://docs.github.com/en/actions)
