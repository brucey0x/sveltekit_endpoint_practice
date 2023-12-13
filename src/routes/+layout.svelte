<script>
	import "../app.css"
</script>

<div class="h-screen w-screen overflow-auto bg-gradient-to-br from-slate-900 to-pink-400">
	<nav class="m-8 flex flex-row gap-4 text-xl text-white">
		<ul class="flex gap-4">
			<li>
				<a href="/" class="group hover:text-purple-500">Home</a>
			</li>
			<li>
				<a href="/posts" class="group hover:text-purple-500">Posts</a>
			</li>
		</ul>
	</nav>

	<div class="">
		<slot />
	</div>
</div>
