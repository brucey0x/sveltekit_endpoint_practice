import db from "$lib/database"
import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async (event) => {
	console.log(event)

	const posts = await db.post.findMany({
		take: Math.max(1, Math.round(Math.random() * 30)) // show a random number of posts, but at least 1 
	})

	event.setHeaders({
		// "Cache-Control": "max-age=60" // set cache to refresh every minute
		"Cache-Control": "public, max-age=0, s-max-age=60" // set cache to refresh every minute
	})

	return json(posts)
}
