import assert from 'assert'
import { describe, it } from 'node:test'
import type { MaybeResult } from './MaybeResult.ts'
import {
	assertProblem,
	assertResult,
	isProblem,
	isResult,
} from './MaybeResult.ts'
import { ProblemDetailError } from './ProblemDetail.ts'

const ok: MaybeResult<number> = { result: 42 }
const err: MaybeResult<number> = {
	error: new ProblemDetailError({
		type: 'https://example.com/error',
		title: 'Error',
		status: 400,
	}),
}

void describe('isResult', () => {
	void it('returns true for a Result', () => {
		assert.strictEqual(isResult(ok), true)
	})

	void it('returns false for a ProblemResult', () => {
		assert.strictEqual(isResult(err), false)
	})
})

void describe('isProblem', () => {
	void it('returns true for a ProblemResult', () => {
		assert.strictEqual(isProblem(err), true)
	})

	void it('returns false for a Result', () => {
		assert.strictEqual(isProblem(ok), false)
	})
})

void describe('assertResult', () => {
	void it('does not throw for a Result', () => {
		assert.doesNotThrow(() => assertResult(ok))
	})

	void it('throws TypeError for a ProblemResult', () => {
		assert.throws(() => assertResult(err), TypeError)
	})
})

void describe('assertProblem', () => {
	void it('does not throw for a ProblemResult', () => {
		assert.doesNotThrow(() => assertProblem(err))
	})

	void it('throws TypeError for a Result', () => {
		assert.throws(() => assertProblem(ok), TypeError)
	})
})
