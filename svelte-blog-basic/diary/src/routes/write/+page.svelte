<script>
	import TextAreaAutosize from '$lib/components/TextAreaAutosize.svelte';

	// Function to format date
	const formatDate = () => {
		return new Date().toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long'
		});
	};

	// Initialize value for two-way binding with TextAreaAutosize
	let value = $state('');
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
