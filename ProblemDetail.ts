import { Type, type Static, type TObject } from '@sinclair/typebox'
import { StatusCode } from './HttpStatusCode.ts'

const Context =
	'https://datatracker.ietf.org/doc/draft-ietf-httpapi-rfc7807bis/'

/**
 * Can be used to throw an error with a Problem Detail object.
 */
export class ProblemDetailError extends Error {
	public readonly problem: Static<typeof ProblemDetail>
	constructor(problem: Omit<Static<typeof ProblemDetail>, '@context'>) {
		super(problem.title)
		this.problem = { '@context': Context, ...problem }
		this.name = 'ProblemDetailError'
	}
}

/**
 * Problem Details Object
 *
 * @see https://datatracker.ietf.org/doc/draft-ietf-httpapi-rfc7807bis/
 */
export const ProblemDetail: TObject = Type.Object(
	{
		'@context': Type.Literal(Context),
		'@id': Type.Optional(Type.String()),
		type: Type.Optional(Type.String()),
		status: Type.Optional(StatusCode),
		title: Type.String(),
		detail: Type.Optional(Type.String()),
	},
	{
		title: 'Problem Detail',
		description:
			'See see https://datatracker.ietf.org/doc/draft-ietf-httpapi-rfc7807bis/',
	},
)
