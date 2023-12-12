<script>
	import "../app.css"
</script>

<div class="h-screen w-screen overflow-auto bg-gradient-to-br from-slate-900 to-pink-400">
	<nav class="m-8 flex flex-row gap-4 text-xl text-white">
		<a href="/">Home</a>
		<a href="/posts">Posts</a>
	</nav>

	<div class="">
		<slot />
	</div>
</div>
