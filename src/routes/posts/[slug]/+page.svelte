<script lang="ts">
	import type { PageServerData } from "./$types"

	export let data: PageServerData
	$: ({ post } = data) // destructure the 'post' property from the data object.

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date)
	}
</script>

<div class="flex w-4/5 flex-col text-white" id="post-details">
	<hgroup>
		<h1 class="text-2xl">{post.title}</h1>
		<h2 class="my-1 font-thin">{formatDate(post.createdAt)}</h2>
	</hgroup>

	<div class="my-4">
		{post.content}
	</div>
</div>
