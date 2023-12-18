import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	// if (!session) throw redirect(302, "/auth/login")
	if (session)
		return {
			session,
			userId: session.user.userId,
			username: session.user.username
		}
}
