import type { Static } from '@sinclair/typebox'
import { ErrorContext } from './ErrorContext.ts'
import { HttpStatusCode } from './HttpStatusCode.ts'
import {
	ProblemDetail,
	Context as ProblemDetailContext,
} from './ProblemDetail.ts'

export const InternalError = ({
	id,
	title,
	detail,
}: {
	id?: string
	title?: string
	detail?: string
}): Static<typeof ProblemDetail> => ({
	'@context': ProblemDetailContext,
	'@id': id,
	type: ErrorContext('InternalError').toString(),
	status: HttpStatusCode.INTERNAL_SERVER_ERROR,
	title: title ?? 'An internal error occurred.',
	detail,
})
