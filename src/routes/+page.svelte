<script lang="ts">
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement
		const data = new FormData(form)

		try {
			const response = await fetch("/api/newsletter", {
				method: "POST",
				body: data
			})

			if (response.ok) {
				console.log("Form successfully submitted")
				form.reset()
			} else {
				console.log("Form submission failed")
			}
		} catch (error) {
			console.error(error)
		}
	}
</script>

<div class="flex flex-col items-center justify-center text-white">
	<h1 class="text-2xl text-white">Welcome!</h1>

	<h1 class="my-2 mt-8 text-xl shadow">Newsletter</h1>

	<form on:submit|preventDefault={subscribe} class="flex w-1/4 flex-col">
		<input
			type="email"
			name="email"
			id=""
			placeholder="your@email.here"
			class="rounded-sm border-none px-2 py-1 text-black shadow-lg"
		/>
		<button
			class="my-2 flex items-center justify-center rounded-sm bg-black py-1 shadow-lg"
			type="submit"
		>
			Subscribe
		</button>
	</form>
</div>
