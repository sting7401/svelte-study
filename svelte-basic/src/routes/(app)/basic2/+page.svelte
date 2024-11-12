<script>
	let number = $state(0);

	let numberCalc = $derived(number < 0 ? 0 : number);

	const increment = (e) => {
		e.preventDefault();
		number += 1;
	};

	const decrement = (e) => {
		e.preventDefault();
		number -= 1;
	};
</script>

<p>{number}</p>
<p>{numberCalc}</p>

<button type="button" onclick={increment}>+</button>
<button type="button" onclick={decrement}>-</button>

<button type="button" onclick={() => (number += 1)}>+</button>
<button type="button" onclick={() => (number -= 1)}>-</button>
