import { dev } from "$app/environment"
import db from "$lib/database"
import { prisma } from "@lucia-auth/adapter-prisma"
import { lucia } from "lucia"
import { sveltekit } from "lucia/middleware"

export const auth = lucia({
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
	adapter: prisma(db, {
		user: "user",
		key: "key",
		session: "session"
	}),
	getUserAttributes: (data) => {
		return {
			username: data.username,
			id: data.id
		}
	}
})

// This creates a typescript alias, where Auth inherits the type of the auth var.
export type Auth = typeof auth
