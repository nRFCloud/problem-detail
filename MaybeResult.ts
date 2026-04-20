import type { ProblemDetailError } from './ProblemDetail.ts'

export type Result<T> = { result: T }
export type ProblemResult = { error: ProblemDetailError }
export type MaybeResult<T> = ProblemResult | Result<T>

export const isResult = <T>(result: MaybeResult<T>): result is Result<T> =>
	!('error' in result)

export const isProblem = <T>(result: MaybeResult<T>): result is ProblemResult =>
	'error' in result

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function assertResult(
	result: MaybeResult<unknown>,
): asserts result is Result<unknown> {
	if (!isResult(result))
		throw new TypeError('Expected result to be a Result<T> type')
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function assertProblem(
	result: MaybeResult<unknown>,
): asserts result is ProblemResult {
	if (!isProblem(result))
		throw new TypeError('Expected result to be a ProblemResult type')
}
