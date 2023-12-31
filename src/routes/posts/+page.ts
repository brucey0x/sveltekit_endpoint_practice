import type { Post } from "@prisma/client"
import type { PageLoad } from "./$types"

// Universal load function. Makes particular data available to the page as data: PageData. The destructured fetch object allows the fetching of APIs using relative URLs.
// Benefit of loading data like this is that it's server-side rendered and thus will be available for SEO.

export const load: PageLoad = async ({ fetch, depends }) => {
	const randomNumber = Math.round(Math.random() * 30)
	const response = await fetch(`/api/posts?limit=${randomNumber}`)
	const posts: Post[] = await response.json()

	depends("posts")

	return { posts }
}
