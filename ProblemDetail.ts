import {
	Type,
	type Static,
	type TEnum,
	type TLiteral,
	type TObject,
	type TOptional,
	type TString,
} from '@sinclair/typebox'
import { HttpStatusCode, StatusCode } from './HttpStatusCode.ts'

export const Context = 'https://datatracker.ietf.org/doc/rfc9457/'

/**
 * Problem Details Object
 *
 * @see https://datatracker.ietf.org/doc/rfc9457/
 */
export const ProblemDetail: TObject<{
	'@context': TLiteral<typeof Context>
	'@id': TOptional<TString>
	type: TOptional<TString>
	status: TOptional<TEnum<typeof HttpStatusCode>>
	title: TString
	detail: TOptional<TString>
}> = Type.Object(
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
		description: 'See see https://datatracker.ietf.org/doc/rfc9457/',
	},
)

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
