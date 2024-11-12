<script>
	let textareaRef = $state();

	const handle = () => {
		textareaRef.focus();
		textareaRef.click();
	};

	const handelText = () => {
		console.log(textareaRef.value);
	};
</script>

<button onclick={handle}>클릭</button>

<textarea
	name=""
	id=""
	cols="30"
	rows="10"
	bind:this={textareaRef}
	oninput={handelText}
	onclick={handelText}
></textarea>
