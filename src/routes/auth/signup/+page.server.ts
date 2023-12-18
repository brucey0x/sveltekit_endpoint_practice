import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

// Check if someone's logged in, if so, redirect to root.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate()
	if (session) {
		throw redirect(302, "/")
	} else {
		return {}
	}
}
