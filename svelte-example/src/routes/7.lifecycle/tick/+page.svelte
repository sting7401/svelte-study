<script>
	import { tick } from 'svelte';

	let textareaRef;
	let text = 'select the number of';

	const selectText = async event => {
		if (event.key !== 'Tab') return;
		event.preventDefault();
		const { selectionStart, selectionEnd, value } = textareaRef;
		const selection = value.slice(selectionStart, selectionEnd);

		const changeText = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text =
			value.slice(0, selectionStart) +
			changeText +
			value.slice(selectionEnd);

		await tick();

		textareaRef.selectionStart = selectionStart;
		textareaRef.selectionEnd = selectionEnd;
	};
</script>

<textarea
	name=""
	bind:value={text}
	bind:this={textareaRef}
	id=""
	cols="30"
	rows="10"
	on:keydown={selectText}
/>

<style>
</style>
