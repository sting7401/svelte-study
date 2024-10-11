<script>
	import { page, navigating, updated } from '$app/stores';
	import { goto } from '$app/navigation';
	import { writing, addDiary, editDir, editId } from '$lib/store/store';

	async function clickHandler() {
		if ($page.url.pathname.startsWith('/read')) {
			goto('/read'); // home으로 이동한다.
		} else if ($page.url.pathname.startsWith('/write')) {
			// 글쓰기 로직
			if ($writing) {
				await addDiary(); // 글을 작성한 후 addDiary 함수를 호출한다.
			}
			goto('/read');
		} else if ($page.url.pathname.startsWith('/edit')) {
			// 수정 로직
			if ($writing) {
				await editDir($editId); // 글을 수정한 후 editDiary 함수를 호출한다.
			}
			// goto('/read');

			location.href = '/read';
		}
	}
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
