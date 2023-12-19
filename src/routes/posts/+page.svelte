<script lang="ts">
	import { invalidate } from "$app/navigation"

	function handleReset() {
		// This invalidates the 'depends' in the load function in `src/routes/posts/+page.ts`
		invalidate("posts")
	}
</script>

<div class="flex flex-col items-start text-white">
	<h1 class="text-2xl">Browse posts</h1>
	<p class="my-4">Select a post on the left to read.</p>

	<button class="w-1/6 border p-1" on:click={handleReset}>Reset posts</button>
</div>
