<script>
	import { preventDefault } from 'svelte/legacy';

	let number = $state(0);

	let arr = [1, 2, 3, 4, 5];
	let list = [{ name: 'list1' }, { name: 'list12' }, { name: 'list13' }];
	let list2 = [
		{ name: 'list1', is: true },
		{ name: 'list12', is: false },
		{ name: 'list13', is: false }
	];

	const person = {
		id: '10',
		name: 'key',
		age: 10,
		address: 'Seoul'
	};
</script>

<button type="button" onclick={preventDefault(() => (number += 1))}>+</button>
<button type="button" onclick={preventDefault(() => (number -= 1))}>-</button>

{#if number === 0}
	<p>{number}</p>
{:else if number > 0}
	<p>{number} 0 이상</p>
{:else}
	<p>{number} 0 이하</p>
{/if}

{#if number === 0 ? true : false}
	<p>{number} 0 일때만</p>
{/if}

<ul>
	{#each arr as item}
		<li>{item}</li>
	{/each}
</ul>

<ul>
	{#each list as { name }, index (index)}
		<li>{index} {name}</li>
	{/each}
</ul>

<ul>
	{#each Object.entries(person) as [key, value], index (key)}
		<li>{index} - {key}: {value}</li>
	{/each}
</ul>

<ul>
	{#each Array(5) as _, index (index)}
		<li>{index} 체크</li>
	{/each}
</ul>
