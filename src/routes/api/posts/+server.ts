import db from "$lib/database"
import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async ({ url }) => {
	// Extract these searchParams from the url
	const limit = Number(url.searchParams.get("limit") ?? 30)
	const order = url.searchParams.get("order") ?? "asc"

	// filter db search based on searchParams, making the API more interactive
	const posts = await db.post.findMany({
		orderBy: {
			id: order
		},
		take: limit
	})

	return json(posts)
}
