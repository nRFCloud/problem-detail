# `@nrfcloud/problem-detail`

<https://github.com/nRFCloud/problem-detail/pkgs/npm/problem-detail>

Helper function for implementing <https://datatracker.ietf.org/doc/rfc9457/>.

Use problem detail to carry machine-readable details of errors in HTTP response
content.

## Installation

The package is published to the
[GitHub Packages registry](https://github.com/nRFCloud/problem-detail/pkgs/npm/problem-detail).
Releases are also published to
[npm](https://www.npmjs.com/package/@nrfcloud/problem-detail).

To install it, point the `@nrfcloud` scope to it in your project's `.npmrc` and
[authenticate](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages)
with a token that has the `read:packages` scope:

```
@nrfcloud:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm i (--save-prod|--save-dev) @nrfcloud/problem-detail
```

## Usage

```typescript
import { formatTypeBoxErrors } from "@nrfcloud/validate-with-typebox";
import { HttpStatusCode, ProblemDetailError } from "@nrfcloud/problem-detail";
import type { ValueError } from "@sinclair/typebox/errors";
import type { MaybeResult } from "../domain/MaybeResult.ts";

export const validateJSON = <T>(
  json: Record<string, unknown>,
  validatejson: (json: Record<string, any>) =>
    | { value: T }
    | {
        errors: ValueError[];
      },
): MaybeResult<T> => {
  const maybeValid = validatejson(json);
  if ("errors" in maybeValid)
    return {
      error: new ProblemDetailError({
        title: "Invalid JSON response",
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        detail: `Response validation failed: ${formatTypeBoxErrors(maybeValid.errors)}!`,
      }),
    };

  return { result: maybeValid.value };
};
```

## TypeScript 6 and 7

This repo
[runs TypeScript 6 and 7 side by side](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0),
[so that eslint works](https://github.com/typescript-eslint/typescript-eslint/issues/10940#issuecomment-4922812181).
