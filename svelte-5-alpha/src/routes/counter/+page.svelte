<script>
	let count = $state(0);
	let derivedClick = $derived(derivedEvent());
	let numberValue = $state(false);

	$effect(() => {
		if (count >= 5) {
			numberValue = true;
		} else {
			numberValue = false;
		}

		console.log(numberValue);
	});

	function derivedEvent() {
		return count * 2;
	}

	function handleClick() {
		count += 1;
	}

	function handleMinusClick() {
		count -= 1;
	}
</script>

<button onclick={handleClick}>+</button>
<button onclick={handleMinusClick}> - </button>

<p>{count}</p>

{#if numberValue}
	<p>derived : {derivedClick}</p>
{/if}
