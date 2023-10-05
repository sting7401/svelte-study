<script context="module" lang="ts">
	console.log('한번만');

	let degree: boolean = true;
</script>

<script>
	export let member;
	console.log('실행');

	let isActive;

	const degreeActive = () => {
		isActive = false;
	};

	const setActive = () => {
		if (degree) {
			degree();
		}
		isActive = true;

		degree = degreeActive;
	};
</script>

<div on:click={setActive} class:active={isActive}>
	<h1>{member?.name}</h1>

	{#if member?.isParent}
		{#each member?.children as child}
			<svelte:self member={child} />
		{/each}
	{/if}
</div>

<style>
	div {
		margin-left: 2rem;
	}

	.active {
		color: red;
	}
</style>
