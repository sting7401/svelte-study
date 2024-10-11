<script>
	import { page, navigating, updated } from '$app/stores';
	import { goto } from '$app/navigation';
</script>

<nav>
	<ul class="flex gap-10">
		<li><a href="/about">about</a></li>
		<li><a href="/blog">blog</a></li>
		<li><a href="/product">product</a></li>
		<li><a href="/docs">lang</a></li>
	</ul>
</nav>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		background-color: var(--main-color);
		color: var(--text-light);
	}

	h1 {
		font-size: 28px;
	}

	.btn {
		font-size: 18px;
	}
</style>
