import { validateWithTypeBox } from '@nrfcloud/validate-with-typebox'
import assert from 'node:assert/strict'
import { describe, test } from 'node:test'
import { BadRequestError } from './BadRequestError.ts'
import { ConflictError } from './ConflictError.ts'
import { InternalError } from './InternalError.ts'
import { NotFoundError } from './NotFoundError.ts'
import { ProblemDetail } from './ProblemDetail.ts'
import BAD_REQUEST from './examples/BAD_REQUEST.json' with { type: 'json' }
import CONFLICT_ERROR from './examples/CONFLICT.json' with { type: 'json' }
import INTERNAL_ERROR from './examples/INTERNAL_ERROR.json' with { type: 'json' }
import NOT_FOUND_ERROR from './examples/NOT_FOUND.json' with { type: 'json' }

void describe('Error helpers', () => {
	const validator = validateWithTypeBox(ProblemDetail)
	void test('BadRequestError', () => {
		const e = BadRequestError(BAD_REQUEST)
		const result = validator(e)
		assert.equal('errors' in result, false)
	})
	void test('ConflictError', () => {
		const e = ConflictError(CONFLICT_ERROR)
		const result = validator(e)
		assert.equal('errors' in result, false)
	})
	void test('InternalError', () => {
		const e = InternalError(INTERNAL_ERROR)
		const result = validator(e)
		assert.equal('errors' in result, false)
	})
	void test('NotFoundError', () => {
		const e = NotFoundError(NOT_FOUND_ERROR)
		const result = validator(e)
		assert.equal('errors' in result, false)
	})
})
