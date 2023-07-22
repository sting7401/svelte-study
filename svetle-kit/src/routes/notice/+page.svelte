<script>
	import { page } from '$app/stores';

	import { Notice } from '$components';

	const list = [
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' }
	];
</script>

<h2>{$page.data.title}</h2>

<ul class="w-full">
	{#each list as { link, badge, text, date }, id}
		<Notice {link} {badge} {text} {date} />
	{/each}
</ul>
