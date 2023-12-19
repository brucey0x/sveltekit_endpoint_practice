import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

type Post = {
	title: string
	body: string | null
}

async function getPosts() {
	const response = await fetch("https://dummyjson.com/posts")
	const { posts } = await response.json()
	return posts as Post[]
}

function slugify(text: string) {
	return text
		.replace(/\s+/g, "-") // Replaces one or more spaces with a single hyphen
		.replace(/[^a-zA-Z0-9-]+/g, "") // Removes sequences of non-alphanumeric characters and preserve hyphen
		.replace(/-+/g, "-") // Replaces one or more hyphens with a single hyphen
		.toLowerCase() // Converts to lowercase
}

async function main() {
	const posts = await getPosts()

	for (const post of posts) {
		await db.post.create({
			data: {
				title: post.title,
				content: post.body,
				slug: slugify(post.title)
			}
		})
	}
}

main()
