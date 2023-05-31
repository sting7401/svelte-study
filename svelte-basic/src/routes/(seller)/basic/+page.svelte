<script>
	export let data;
</script>

<style>
</style>

<h2>{data.user.name}</h2>
<ul class="mt-5 divide-y divide-blue-200">
	{#each data.posts as post}
		<li class="p-2">
			<a href="/basic/{post.id}">{post.title}</a>
		</li>
	{/each}
</ul>
