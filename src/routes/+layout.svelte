<script lang="ts">
	import { page } from "$app/stores"
	import NavHeader from "$lib/components/NavHeader.svelte"
	import "../app.css"
</script>

<svelte:head>
	<title>{$page.data.post?.title ?? "Endpoint Practice"}</title>
</svelte:head>

<div
	class="h-screen w-screen overflow-auto bg-gradient-to-br from-slate-900 to-pink-400 text-white"
>
	<NavHeader />
	<div class="m-8">
		<slot />
	</div>
</div>
