<script lang="ts">
	import { enhance } from "$app/forms"
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="my-4 text-3xl">Register</h1>

	<p>Create an account to get started.</p>

	<form
		method="POST"
		action="/auth?/signup"
		class="my-4 flex w-1/4 flex-col items-stretch justify-center gap-2"
		use:enhance
	>
		<label for="username">Username</label>
		<input name="username" id="username" class="px-1 text-black" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" class="px-1 text-black" />
		<button type="submit" class="rounded-sm border border-white bg-black p-1">Signup</button>
	</form>
</div>
