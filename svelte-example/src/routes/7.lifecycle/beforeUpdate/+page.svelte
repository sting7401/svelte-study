<script>
	import Eliza from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';

	let div;
	let autoscroll;

	const eliza = new Eliza();
	let comments = [{ author: 'eliza', text: '' }];

	const add = event => {
		if (event.key === 'Enter') {
			comments = [
				...comments,
				{ author: 'me', text: event.target.value },
			];

			event.target.value = '';

			const reply = eliza.transform(event.target.value);

			comments = [...comments, { author: 'eliza', text: reply }];
		}
	};
</script>

<div class="p-10">
	<h1>봇</h1>

	<div>
		{#each comments as item}
			<div class="bg-slate-400 rounded-md">
				<p class="text-slate-50">{item.text}</p>
			</div>
		{/each}
	</div>

	<div>
		<input type="text" on:keydown={add} />
	</div>
</div>

<style>
</style>
