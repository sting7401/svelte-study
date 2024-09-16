<script>
	// Extracting properties from $props() once
	let { value = $bindable(), minRows = 1, maxRows = undefined } = $props();

	// Reactive statements to calculate minHeight and maxHeight
	let minHeight;
	let maxHeight;

	$effect(() => {
		minHeight = `${1 + minRows * 1.2}em`;
		maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : 'auto';
	});
</script>

<div class="container">
	<pre aria-hidden="true" style="min-height: {minHeight}; max-height: {maxHeight}; opacity : 0;">
        {value + '\n'}
    </pre>
	<textarea
		bind:value
		placeholder="글쓰기를 시작하세요."
		class="w-full rounded-lg bg-slate-300/80 p-[0.5rem]"
	></textarea>
</div>

<style>
	.container {
		position: relative;
	}

	pre,
	textarea {
		font-family: inherit;
		padding: 0.5em;
		box-sizing: border-box;
		border: 1px solid #eee;
		line-height: 1.2;
		overflow: hidden;
	}

	textarea {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		resize: none;
	}
</style>
