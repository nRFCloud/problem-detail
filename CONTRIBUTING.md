# Contributing

Thank you for contributing to `@nrfcloud/problem-detail`! This is a published
library, distributed via
[NPM](https://www.npmjs.com/package/@nrfcloud/problem-detail).

## Development setup

Ensure you
[have GitHub push access](https://nordicsemi.atlassian.net/wiki/spaces/MFLT/pages/1727136233/Nordic+Engineering+Tools+Setup+go+eng-tools#nRFCloud-Organization).

1. Get your environment set up by running `npm ci`.
1. Make your changes locally in a git clone of the repo in your own branch.
1. As you go, commit along the way so that you get type checking, testing, etc.
   to run.

## Testing

> [!NOTE]  
> If something in this section does not work, check out the commands in
> [`.github/workflows/test-and-release.yaml`](.github/workflows/test-and-release.yaml),
> which runs the type check and the tests for every commit.

1. Run `npx tsc` to type-check the project. This uses the
   [TypeScript 7](https://www.npmjs.com/package/typescript) compiler against the
   settings in [`tsconfig.json`](tsconfig.json).
1. Run `npm test` to run the unit tests. This uses the built-in Node.js test
   runner against the `*.spec.ts` files (e.g.
   [`errors.spec.ts`](errors.spec.ts), [`examples.spec.ts`](examples.spec.ts)).

## Squash your commits

1. Finally, create a commit that packages up all the changes.
1. Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
   (e.g. `fix:`, `feat:`, etc.) to prefix the title.
1. Reference any applicable Jira tickets (e.g. `NPE-123`) in the commit message.
1. Push your branch and create a pull request.
1. Get the code reviewed.
1. Once approved and CI passes, rebase or squash away!

## Building the NPM package

The package is published as compiled JavaScript with type declarations in the
`npm/` folder, which is created by the `prepublishOnly` hook:

1. [`.npm/compile.ts`](.npm/compile.ts) transpiles the TypeScript sources using
   [`@swc/core`](https://www.npmjs.com/package/@swc/core) and rewrites the `.ts`
   import specifiers to `.js`.
1. [TypeScript 7](https://www.npmjs.com/package/typescript) emits the type
   declarations, using [`.npm/tsconfig.npm.json`](.npm/tsconfig.npm.json).

Run `npm run prepublishOnly` to build it locally.

## Releasing a new version

1. The
   [`semantic-release` in the Test and Release workflow](.github/workflows/test-and-release.yaml)
   determines the next version from the conventional-commit messages and
   publishes the package to
   [NPM](https://www.npmjs.com/package/@nrfcloud/problem-detail) via
   [`@semantic-release/npm`](https://www.npmjs.com/package/@semantic-release/npm).
1. Once the new version is published, consumers can pick it up by bumping the
   dependency, e.g. `npm i (--save-prod|--save-dev) @nrfcloud/problem-detail`.
