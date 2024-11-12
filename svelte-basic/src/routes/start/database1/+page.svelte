<script>
	import { onMount } from 'svelte';
	import storeHobs from './store.js';

	let hobs = [];
	let hobInput = $state();
	let isLoading = $state(false);

	isLoading = true;
	let getHobs = fetch('https://svelte-max-658a0-default-rtdb.firebaseio.com/hobbies.json')
		.then((res) => {
			if (!res.ok) {
				throw new Error('failed');
			}

			return res.json();
		})
		.then((data) => {
			isLoading = false;
			storeHobs.setHob(Object.values(data));
			// hobs = Object.values(data);
			let keys = Object.keys(data);

			for (const key of data) {
				console.log(key, data[key]);
			}

			return hobs;
		})
		.catch((err) => {
			isLoading = false;
			console.log(err);
		});

	const add = () => {
		// hobs = [...hobs, hobInput.value];

		storeHobs.addHob(hobInput.value);

		fetch('https://svelte-max-658a0-default-rtdb.firebaseio.com/hobbies.json', {
			method: 'POST',
			body: JSON.stringify(hobInput.value),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				isLoading = false;
				if (!res.ok) {
					throw new Error('failed');
				}

				alert('저장');
			})
			.catch((err) => {
				isLoading = false;
				console.log(err);
			});
	};
</script>

<label for="hobId">hobs</label>
<input type="text" id="hobId" bind:this={hobInput} />
<button onclick={add}>add hobs</button>

{#if isLoading}
	<p>isLoading</p>
{/if}
<ul>
	{#each $storeHobs as item}
		<li>{item}</li>
	{/each}
</ul>

<!-- {#await getHobs}
	<p>isLoading</p>
{:then dataHobs}
	console.log(dataHobs)
	<ul>
		{#each dataHobs as item}
			<li>{item}</li>
		{/each}
	</ul>
{:catch error}
	<p>error.massage</p>
{/await} -->
