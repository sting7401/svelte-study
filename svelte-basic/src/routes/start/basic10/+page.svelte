<script>
	let textareaRef;

	const handle = () => {
		textareaRef.focus();
		textareaRef.click();
	};

	const handelText = () => {
		console.log(textareaRef.value);
	};
</script>

<style>
</style>

<button on:click="{handle}">클릭</button>

<textarea
	name=""
	id=""
	cols="30"
	rows="10"
	bind:this="{textareaRef}"
	on:input="{handelText}"
	on:click="{handelText}"></textarea>
