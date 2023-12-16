<script lang="ts">
	import { invalidate } from "$app/navigation"
	import type { PageData } from "./$types"

	export let data: PageData

	$: ({ posts } = data) // reactive destructuring of posts. The parentheses are necessary.

	function handleReset() {
		// This invalidates the 'depends' in the load function in `src/routes/posts/+page.ts`
		invalidate("posts")
	}
</script>

<div class="flex flex-col items-start text-white">
	<h1 class="text-2xl">Browse posts</h1>
	<p class="my-4">You can browse posts here.</p>

	<button class="w-1/6 border p-1" on:click={handleReset}>Reset</button>

	<p class="my-4 text-lg">Showing {posts.length} posts:</p>

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
</div>
