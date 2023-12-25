<script lang="ts">
	import { enhance } from "$app/forms"
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="my-4 text-3xl">Login</h1>

	<p>Login or create an account to get started.</p>

	<!-- <h2 class="mt-8 text-xl">Username & password</h2>
	<form
		method="POST"
		action="/auth?/login"
		class="my-4 flex w-1/4 flex-col items-stretch justify-center gap-2"
		use:enhance
	>
		<label for="username">Username</label>
		<input name="username" id="username" class="px-1 text-black" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" class="px-1 text-black" />
		<button class="mt-1 rounded-sm border border-white bg-black p-1">Log in</button>
		<button formaction="/auth?/signup" class=" rounded-sm border border-white bg-zinc-700 p-1"
			>Or, create account</button
		>
	</form> -->
	<h2 class="mt-8 text-xl">Email & password</h2>
	<form
		method="POST"
		action="/auth?/login"
		class="my-4 flex w-1/4 flex-col items-stretch justify-center gap-2"
		use:enhance
	>
		<label for="email">Email</label>
		<input name="email" id="email" class="px-1 text-black" type="email" />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" class="px-1 text-black" />
		<button class="mt-1 rounded-sm border border-white bg-black p-1">Log in</button>
		<button formaction="/auth?/signup" class=" rounded-sm border border-white bg-zinc-700 p-1"
			>Or, create account</button
		>
	</form>
</div>
