# Contributing

Thank you for contributing to `@nrfcloud/problem-detail`! This is a published
library, distributed via [JSR](https://jsr.io/@nrfcloud/problem-detail).

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

## Releasing a new version

1. The
   [`semantic-release` in the Test and Release workflow](.github/workflows/test-and-release.yaml)
   determines the next version from the conventional-commit messages and
   publishes the package to [JSR](https://jsr.io/@nrfcloud/problem-detail) via
   [`@sebbo2002/semantic-release-jsr`](https://www.npmjs.com/package/@sebbo2002/semantic-release-jsr).
1. Once the new version is published, consumers can pick it up by bumping the
   dependency, e.g.
   `npx jsr add (--save-prod|--save-dev) @nrfcloud/problem-detail`.
