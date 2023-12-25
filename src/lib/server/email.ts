export const sendEmailVerificationLink = async (token: string) => {
	// This should be modifiable to the root path.
	const url = `http://localhost:5173/auth/email-verification/${token}`
	console.log(`Your email verification link: ${url}`)
}

export const sendPasswordResetLink = async (token: string) => {
	const url = `http://localhost:5173/auth/password-reset/${token}`
	console.log(`Your email verification link: ${url}`)
}

export const isValidEmail = (maybeEmail: unknown): maybeEmail is string => {
	if (typeof maybeEmail !== "string") return false
	if (maybeEmail.length > 255) return false
	const emailRegExp = /^.+@.+$/
	return emailRegExp.test(maybeEmail)
}
