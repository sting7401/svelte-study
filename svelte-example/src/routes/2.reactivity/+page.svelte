<script>
	let count = 0;

	const handleClick = () => {
		count += 1;
	};

	$: reActive = count * 2;
	$: reActiveDouble = reActive * 2;
	$: if (count > 2) {
		alert('반응성');
		count = 0;
	}
</script>

<button type="button" on:click={handleClick}>
	클릭 {count}
	{count >= 1 ? 'start' : 'end'}
</button>

<p>{reActive} {reActiveDouble}</p>

<style>
</style>
