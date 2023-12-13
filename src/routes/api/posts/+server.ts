import db from "$lib/database"
import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async (event) => {
	console.log(event)

	const posts = await db.post.findMany({
		take: Math.round(Math.random() * 30) // show a random number of posts
	})

	event.setHeaders({
		// "Cache-Control": "max-age=60" // set cache to refresh every minute
		"Cache-Control": "public, max-age=0, s-max-age=60" // set cache to refresh every minute
	})

	return json(posts)
}
