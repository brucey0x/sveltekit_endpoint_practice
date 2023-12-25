import { dev } from "$app/environment"
import db from "$lib/database"
import { prisma } from "@lucia-auth/adapter-prisma"
import { lucia } from "lucia"
import { sveltekit } from "lucia/middleware"

export const auth = lucia({
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
	adapter: prisma(db, {
		user: "user", // model User {}
		key: "key", // model Key {}
		session: "session" // model Session {}
	}),
	getUserAttributes: (data) => {
		return {
			username: data.username,
			email: data.email,
			email_verified: data.email_verified // might need to adjust if stored as an integer
		}
	}
})

// This creates a typescript alias, where Auth inherits the type of the auth var.
export type Auth = typeof auth
