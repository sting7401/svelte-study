<script>
	let width = $state(10);
	let height = $state(10);

	const area = $derived(size());

	function size() {
		return width * height;
	}

	$effect(() => {
		console.log(area);

		setTimeout(() => {
			width = 20;
			height = 20;
		}, 1000);
	});
</script>

<div>{area}</div>
