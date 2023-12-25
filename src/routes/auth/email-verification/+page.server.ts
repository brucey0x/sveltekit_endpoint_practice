import { sendEmailVerificationLink } from "$lib/server/email"
import { generateEmailVerificationToken } from "$lib/server/token"
import type { Actions } from "@sveltejs/kit"
import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../../$types"
import { fail } from "@sveltejs/kit"

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (!session) throw redirect(302, "/auth/login")
	if (session.user.email_verified) {
		throw redirect(302, "/")
	}
}

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.auth.validate()
		if (!session) throw redirect(302, "/auth/login")
		if (session.user.email_verified) {
			throw redirect(302, "/")
		}
		try {
			const token = await generateEmailVerificationToken(session.user.userId)
			await sendEmailVerificationLink(token)
			return {
				success: true
			}
		} catch {
			return fail(500, { message: "An unknown error occurred" })
		}
	}
}
