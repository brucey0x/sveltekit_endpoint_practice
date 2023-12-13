import db from "$lib/database"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async () => {
	const posts = await db.post.findMany({
		select: {
			title: true,
			slug: true,
			createdAt: true
		},
		take: Math.max(1, Math.round(Math.random() * 30)) // show a random number of posts, but at least 1
	})
	return { posts }
}
