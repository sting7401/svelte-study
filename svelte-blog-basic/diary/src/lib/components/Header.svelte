<script>
	import { page, navigating, updated } from '$app/stores';
	import { goto } from '$app/navigation';

	const clickHandler = () => {
		switch ($page.url.pathname) {
			case '/read':
				break;
			case '/write':
				break;
			case '/edit':
				break;
			default:
				break;
		}

		goto('/');
	};
</script>

<header>
	<h1>Diary {$page.url.pathname}</h1>

	{#if $page.url.pathname.startsWith('/read')}
		<button class="btn" onclick={clickHandler}>완료</button>
	{:else if $page.url.pathname.startsWith('/write')}
		<button class="btn" onclick={clickHandler}>완료</button>
	{:else if $page.url.pathname.startsWith('/edit')}
		<button class="btn" onclick={clickHandler}>완료</button>
	{/if}
</header>
<nav>
	<ul class="flex gap-10">
		<li><a href="/">home</a></li>
		<li><a href="/read">read</a></li>
		<li><a href="/write">write</a></li>
		<li><a href="/edit">edit</a></li>
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
