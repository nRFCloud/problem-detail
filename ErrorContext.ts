export const ErrorContext = (type: string): URL =>
	new URL(`https://nrfcloud.com/error/${type}`)
