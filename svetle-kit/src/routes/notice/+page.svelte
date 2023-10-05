<script>
	import { page } from '$app/stores';

	import { Notice, Tab } from '$components';

	const list = [
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' }
	];

	const tabLists = [
		{ target: 'tabAll', text: '전체', check: true },
		{ target: 'tabApp', text: 'APP', check: false },
		{ target: 'tabStore', text: 'STORE', check: false },
		{ target: 'tabMake', text: 'MAKE', check: false },
		{ target: 'tabTci', text: 'TCI', check: false }
	];
</script>

<h2 class="hidden">{$page.data.title}</h2>

<Tab {tabLists} />

<ul class="w-full mt-40">
	{#each list as { link, badge, text, date }, id}
		<Notice {link} {badge} {text} {date} />
	{/each}
</ul>
