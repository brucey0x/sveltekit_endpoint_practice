<script lang="ts">
	import type { PageData } from "./$types"

	export let data: PageData

	$: ({ posts } = data) // reactive destructuring of posts. The parentheses are necessary.
</script>

<div class="flex flex-col items-start text-white">
	<h1 class="self-center text-2xl">Posts</h1>

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
