<script lang="ts">
	import type { PageData } from "./$types"

	// async function subscribe(event: Event) {
	// 	const form = event.target as HTMLFormElement
	// 	const data = new FormData(form)

	// 	try {
	// 		const response = await fetch("/api/newsletter", {
	// 			method: "POST",
	// 			body: data
	// 		})

	// 		if (response.ok) {
	// 			console.log("Form successfully submitted")
	// 			form.reset()
	// 		} else {
	// 			console.log("Form submission failed")
	// 		}
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }

	// async function getPosts() {
	// 	// Call own API for posts JSON
	// 	const response = await fetch("/api/posts")
	// 	const posts: Post[] = await response.json()
	// 	return posts
	// }

	export let data: PageData

	$: ({ posts } = data) // reactive destructuring of posts. The parentheses are necessary.
</script>

<div class="mx-8 flex flex-col text-white">
	<h1 class="text-xl">Posts</h1>

	<p class="my-4">Showing {posts.length} posts:</p>

	{#each posts as { slug, title, createdAt }}
		<div class="my-1 flex">
			<ul>
				<a href="/posts/{slug}">
					<li>
						{title}
					</li>
					<li class="text-sm font-thin italic">
						Created on {new Date(createdAt).toLocaleString("en-US", {
							dateStyle: "long"
						})}.
					</li>
				</a>
			</ul>
		</div>
	{/each}

	<!-- <div class="mt-4">
		{#await getPosts()}
			<p>Loading...</p>
		{:then posts}
			<p class="my-4">Showing {posts.length} posts:</p>
			{#each posts as { slug, title }}
				<ul class="my-2 font-light hover:text-purple-500">
					<li class="">
						<a href="/posts/{slug}" class="">{title}</a>
					</li>
				</ul>
			{/each}
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</div> -->
</div>

<!-- <div class="flex flex-col items-center justify-center text-white">
	<h1 class="text-2xl text-white">Welcome!</h1>

	<h1 class="my-2 mt-8 text-xl shadow">Newsletter</h1>

	<form on:submit|preventDefault={subscribe} class="flex w-1/4 flex-col">
		<input
			type="email"
			name="email"
			id=""
			placeholder="your@email.here"
			class="rounded-sm border-none px-2 py-1 text-black shadow-lg"
		/>
		<button
			class="my-2 flex items-center justify-center rounded-sm bg-black py-1 shadow-lg"
			type="submit"
		>
			Subscribe
		</button>
	</form>
</div> -->
