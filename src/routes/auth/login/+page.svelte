<script lang="ts">
	import { enhance } from "$app/forms"
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="my-4 text-3xl">Login</h1>

	<p>Welcome, XYZ?</p>

	<form
		method="POST"
		class="my-4 flex w-1/4 flex-col items-stretch justify-center gap-2"
		use:enhance
	>
		<label for="username">Username</label>
		<input name="username" id="username" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" />
		<button type="submit" class="rounded-sm border border-white bg-black p-1">Log in</button>
	</form>
</div>
