import db from "$lib/database"
import type { Post } from "@prisma/client"
import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params, parent }): Promise<{ post: Post }> => {
	const parentData = await parent()
	console.log(parentData)

	const post = await db.post.findUnique({
		where: {
			slug: params.slug
		}
	})

	if (!post) {
		throw error(404, "post not found")
	}

	return { post }
}
