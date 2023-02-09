<script>
	let textareaRef;

	const click = () => {
		textareaRef.focus();
		textareaRef.click();
	};

	const handle = () => {
		console.log('hand');
	};
</script>

<style>
</style>

<button on:click="{click}">click</button>

<textarea
	name=""
	id=""
	cols="30"
	rows="10"
	bind:this="{textareaRef}"
	on:click="{handle}"></textarea>
