<script>
	import { preventDefault } from 'svelte/legacy';

	let number = $state(0);

	let numberCalc = $derived(number < 0 ? 0 : number);

	const increment = () => {
		number += 1;
	};

	const decrement = () => {
		number -= 1;
	};
</script>

<p>{number}</p>
<p>{numberCalc}</p>

<button type="button" onclick={preventDefault(increment)}>+</button>
<button type="button" onclick={preventDefault(decrement)}>-</button>

<button type="button" onclick={preventDefault(() => (number += 1))}>+</button>
<button type="button" onclick={preventDefault(() => (number -= 1))}>-</button>
