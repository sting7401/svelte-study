<script>
	let count = $state(0);
	let highValue = $state(false);

	const increment = (event) => {
		event.preventDefault();
		count += 1;
	};
	const incrementDerived = $derived(increment);

	$effect(() => {
		if (count > 3) {
			highValue = true;
		} else {
			highValue = false
		}
	});
</script>

<button onclick={incrementDerived}>
	count is {count}
	{highValue ? 'high' : 'low'}
</button>
