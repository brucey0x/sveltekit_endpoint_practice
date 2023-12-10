<script>
	import "../app.css"
</script>

<div class="h-screen w-screen overflow-auto bg-gradient-to-br from-yellow-300 to-rose-300">
	<nav class="m-4 flex flex-row gap-4 text-xl">
		<a href="/">Home</a>
		<a href="/posts">Posts</a>
	</nav>

	<div class="">
		<slot />
	</div>
</div>
