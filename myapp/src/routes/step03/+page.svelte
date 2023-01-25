<script>
	// your script goes here
	let value = '';

	$: console.log(value);

	const setValue = (event) => {
		value = event.target.value;
	};
</script>

<style>
	/* your styles go here */
</style>

<input type="text" value="{value}" on:input="{setValue}" />

<input type="text" bind:value="{value}" />

