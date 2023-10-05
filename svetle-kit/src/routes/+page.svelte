<script>
	import { Notice } from '$components';

	const list = [
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' },
		{ link: '/', badge: '공지', text: '12월 31일 업데이트 내역 안내', date: '2023. 01. 31' }
	];
</script>

<div class="pt-40">
	<div class="flex justify-between p-20">
		<h2 class="text-18 font-w7 text-black">공지사항</h2>
		<a href="/notice">전체보기</a>
	</div>

	{#if list.length}
		<ul class="w-full">
			{#each list as { link, badge, text, date }, id}
				{#if id < 3}
					<Notice {link} {badge} {text} {date} />
				{/if}
			{/each}
		</ul>
	{:else}
		<p>게시글이 없습니다.</p>
	{/if}
</div>
