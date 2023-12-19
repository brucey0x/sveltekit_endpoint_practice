<script lang="ts">
	import type { LayoutServerData } from "./$types"

	export let data: LayoutServerData

	$: ({ posts } = data)
</script>

<div class="col-span-1 col-start-1 mt-2 grid grid-cols-3 text-white">
	<aside>
		<nav class="my-4 w-4/5">
			<h4 class="text-2xl">Posts</h4>
			<h3 class="my-2">Showing {posts.length} posts:</h3>
			<ul class="my-4 flex flex-col gap-4">
				{#each posts as { slug, title, createdAt }}
					<li class="hover:text-purple-400 active:text-purple-500">
						<a href="/posts/{slug}">{title}</a>
						<p class="text-sm font-thin italic">
							{new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(createdAt)}
						</p>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main class="col-span-2">
		<slot />
	</main>
</div>
