import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

// Check if someone's logged in, if so, redirect to root.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (session) {
		if (!session.user.email_verified) throw redirect(302, "/auth/email-verification")
		redirect(302, "/")
		return {
			// Might need to modify this return function based on whether a user signs in with username or email.
			username: session.user.username,
			userId: session.user.userId,
			email: session.user.email,
			email_verified: session.user.email_verified
		}
	}
}
