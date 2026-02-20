# `@nrfcloud/problem-detail`

<https://jsr.io/@nrfcloud/problem-detail>

Helper function for implementing
<https://datatracker.ietf.org/doc/draft-ietf-httpapi-rfc7807bis/>.

Use problem detail to carry machine-readable details of errors in HTTP response
content.

## Install with NPM

```bash
npx jsr add (--save-prod|--save-dev) @nrfcloud/problem-detail
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
