<script>
	let textareaRef = $state();

	const click = () => {
		textareaRef.focus();
		textareaRef.click();
	};

	const handle = () => {
		console.log('hand');
	};
</script>

<button onclick={click}>click</button>

<textarea name="" id="" cols="30" rows="10" bind:this={textareaRef} onclick={handle}></textarea>
