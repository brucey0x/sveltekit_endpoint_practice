import db from "$lib/database"
import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals }) => {
	const posts = await db.post.findMany({
		select: {
			title: true,
			slug: true,
			createdAt: true
		},
		take: Math.max(1, Math.round(Math.random() * 30)) // show a random number of posts, but at least 1
	})

	const session = await locals.auth.validate()
	if (!session) throw redirect(302, "/auth/login")
	return {
		posts,
		userId: session.user.userId,
		username: session.user.username
	}
}
