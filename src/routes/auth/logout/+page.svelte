<script lang="ts">
	import { page } from "$app/stores"
</script>

<pre>
    {JSON.stringify($page.data, null, 2)}
</pre>
<div class="flex flex-col items-center justify-center">
	<h1 class="text-bold my-4 text-3xl">Logout</h1>
	<h2 class="text-xl">Hi, {$page.data.username}</h2>
	<form action="/auth?/logout" method="POST" class="flex w-1/4 flex-col">
		<button
			class="my-2 flex items-center justify-center rounded-sm bg-black py-1 shadow-lg"
			type="submit"
		>
			Logout
		</button>
	</form>
</div>
