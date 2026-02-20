import type { Static } from '@sinclair/typebox'
import { ErrorContext } from './ErrorContext.ts'
import { HttpStatusCode } from './HttpStatusCode.ts'
import {
	ProblemDetail,
	Context as ProblemDetailContext,
} from './ProblemDetail.ts'

export const BadRequestError = ({
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
	type: ErrorContext('BadRequest').toString(),
	status: HttpStatusCode.BAD_REQUEST,
	title,
	detail,
})
