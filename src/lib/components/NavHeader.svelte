<script lang="ts">
	import { page } from "$app/stores"
</script>

<nav class="text text-bold m-8 flex flex-row gap-4 font-semibold text-white">
	<ul class="flex gap-4">
		<li>
			<a href="/" class="group hover:text-purple-500">Home</a>
		</li>
		<li>
			<a href="/posts" class="group hover:text-purple-500">Posts</a>
		</li>
		{#if !$page.data.userId}
			<li>
				<a href="/auth/login" class="group hover:text-purple-500">Login</a>
			</li>
		{:else}
			<li>
				<a href="/auth/logout" class="group hover:text-purple-500">Logout</a>
			</li>
		{/if}
	</ul>
</nav>
