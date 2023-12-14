<script lang="ts">
	import { page } from "$app/stores"
	import "../app.css"
</script>

<svelte:head>
	<!-- Update the title based on the post the page may be on -->
	<title>{$page.data.post?.title}</title>
</svelte:head>

<div class="h-screen w-screen overflow-auto bg-gradient-to-br from-slate-900 to-pink-400">
	<nav class="text text-bold m-8 flex flex-row gap-4 font-semibold text-white">
		<ul class="flex gap-4">
			<li>
				<a href="/" class="group hover:text-purple-500">Home</a>
			</li>
			<li>
				<a href="/posts" class="group hover:text-purple-500">Posts</a>
			</li>
		</ul>
	</nav>

	<div class="m-8">
		<slot />
	</div>
</div>
