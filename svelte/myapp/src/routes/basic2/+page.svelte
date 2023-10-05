<script>
let number = 0;

$: numberCalc = number < 0 ? 0 : number;

const increment = () => {
	number += 1;
};

const decrement = () => {
	number -= 1;
};
</script>

<style>
</style>

<p>{number}</p>
<p>{numberCalc}</p>

// 함수 제어
<button type="button" on:click|preventDefault="{increment}">+</button>
<button type="button" on:click|preventDefault="{decrement}">-</button>

// 내부 제어
<button type="button" on:click|preventDefault="{() => (number += 1)}">+</button>
<button type="button" on:click|preventDefault="{() => (number -= 1)}">-</button>
