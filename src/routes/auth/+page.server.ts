import { isValidEmail } from "$lib/server/email"
import { auth } from "$lib/server/lucia"
import type { Actions } from "@sveltejs/kit"
import { fail, redirect } from "@sveltejs/kit"
import { LuciaError } from "lucia"

export const actions: Actions = {
	signup: async ({ request, locals }) => {
		const formData = await request.formData()
		const username = formData.get("username")
		const email = formData.get("email")
		const password = formData.get("password")

		// Maybe use Zod for authentication checks instead?
		if (
			username &&
			(typeof username !== "string" || username.length < 4 || username.length > 31)
		) {
			return fail(400, {
				message: "Invalid username"
			})
		}
		if (email && !isValidEmail(email)) {
			return fail(400, { message: "Invalid email" })
		}
		if (typeof password !== "string" || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: "Invalid password"
			})
		}

		// This is buggy and produces this TS error:
		// TypeError: Cannot read properties of undefined (reading 'findUnique')
		//
		// const uniqueUser = await db.user.findUnique({
		// 	where: {
		// 		username: username.toLowerCase()
		// 	}
		// })

		// if (uniqueUser) {
		// 	return fail(400, {
		// 		message: "Username already exists"
		// 	})
		// }

		try {
			if (username && !email) {
				// const user = await auth.createUser({
				// 	key: {
				// 		providerId: "username",
				// 		providerUserId: username.toLowerCase(),
				// 		password
				// 	},
				// 	attributes: {
				// 		username
				// 	}
				// })
				// const session = await auth.createSession({
				// 	userId: user.userId,
				// 	attributes: {}
				// })
				// locals.auth.setSession(session) // set session cookie
			}

			if (!username && email) {
				const user = await auth.createUser({
					key: {
						providerId: "email",
						providerUserId: email.toString().toLowerCase(),
						password
					},
					attributes: {
						email: email.toString().toLowerCase(),
						email_verified: false
					}
				})
				const session = await auth.createSession({
					userId: user.userId,
					attributes: {}
				})
				locals.auth.setSession(session)
			}
		} catch (error) {
			console.error(error)
			return fail(400, {
				message: "Could not log in user"
			})
		}
		throw redirect(302, "/")
	},
	logout: async ({ locals }) => {
		const session = await locals.auth.validate()
		if (!session) return fail(401)
		await auth.invalidateSession(session.sessionId)
		locals.auth.setSession(null)
		throw redirect(302, "/auth/login")
	},
	login: async ({ request, locals }) => {
		const formData = await request.formData()
		const username = formData.get("username")
		const email = formData.get("email")
		const password = formData.get("password")

		// Maybe use Zod for authentication checks instead?
		if (
			username &&
			(typeof username !== "string" || username.length < 4 || username.length > 31)
		) {
			return fail(400, {
				message: "Invalid username"
			})
		}
		if (email && (typeof email !== "string" || email.length < 1 || email.length > 255)) {
			return fail(400, {
				message: "Invalid email"
			})
		}
		if (typeof password !== "string" || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: "Invalid password"
			})
		}

		try {
			if (username) {
				const key = await auth.useKey("username", username.toLowerCase(), password)
				const session = await auth.createSession({
					userId: key.userId, // can use the same key because the userId is relational
					attributes: {}
				})
				locals.auth.setSession(session)
			}
			if (!username && email) {
				const key = await auth.useKey("email", email.toLowerCase(), password)
				const session = await auth.createSession({
					userId: key.userId, // can use the same key because the userId is relational
					attributes: {}
				})
				locals.auth.setSession(session)
			}
		} catch (error) {
			if (
				error instanceof LuciaError &&
				(error.message === "AUTH_INVALID_KEY_ID" ||
					error.message === "AUTH_INVALID_PASSWORD")
			) {
				return fail(400, {
					message: "Incorrect username, email or password"
				})
			}
			return fail(500, {
				message: "An unknown error occurred"
			})
		}
		throw redirect(302, "/")
	}
}
