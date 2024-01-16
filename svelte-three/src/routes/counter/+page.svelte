<script>
	import { countStore } from './store.js';

	let count = $state(0);
	let derivedClick = $derived(derivedEvent());
	let numberValue = $state(false);

	$effect(() => {
		if (count >= 5) {
			numberValue = true;
		} else {
			numberValue = false;
		}
	});

	function derivedEvent() {
		return count * 2;
	}

	function handleClick(event) {
		event.preventDefault();
		count += 1;
	}

	function handleMinusClick(event) {
		event.preventDefault();
		count -= 1;
	}
</script>

<button type="button" onclick={handleClick}>+</button>
<button type="button" onclick={handleMinusClick}> - </button>

<p>{count}</p>
<p>{$countStore}</p>

{#if numberValue}
	<p>derived : {derivedClick}</p>
{/if}
