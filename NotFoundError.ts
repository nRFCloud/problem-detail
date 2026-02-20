import type { Static } from '@sinclair/typebox'
import { ErrorContext } from './ErrorContext.ts'
import { HttpStatusCode } from './HttpStatusCode.ts'
import {
	ProblemDetail,
	Context as ProblemDetailContext,
} from './ProblemDetail.ts'

export const NotFoundError = ({
	id,
	title,
	detail,
}: {
	id?: string
	title: string
	detail?: string
}): Static<typeof ProblemDetail> => ({
	'@context': ProblemDetailContext,
	'@id': id,
	type: ErrorContext('NotFound').toString(),
	status: HttpStatusCode.NOT_FOUND,
	title,
	detail,
})
