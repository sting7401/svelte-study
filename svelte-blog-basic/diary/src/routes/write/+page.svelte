<script>
	import TextAreaAutosize from '$lib/components/TextAreaAutosize.svelte';
	import { writing } from '$lib/store/store'; // 스토어 가져오기
	import { formatDate } from '$lib/utils/formatDate';

	let value = $state('');

	$effect(() => {
		writing.set(value);
	});
</script>

<main>
	<div class="p-2.5">
		<!-- TextAreaAutosize component with value binding -->
		<TextAreaAutosize bind:value minRows={4} maxRows={40} placeholder="글쓰기를 시작하세요." />

		<!-- Display the formatted date -->
		<div>
			<span>{formatDate()}</span>
		</div>
	</div>
</main>
