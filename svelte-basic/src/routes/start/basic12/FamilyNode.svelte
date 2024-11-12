<script module>
	console.log('한번만');

	let degree;
</script>

<script lang="ts">
	import FamilyNode from './FamilyNode.svelte';
	let { member } = $props();
	console.log('실행');

	let isActive = $state();

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

<style>
	div {
		margin-left: 2rem;
	}

	.active {
		color: red;
	}
</style>


<div onclick={setActive} class:active="{isActive}">
	<h1>{member.name}</h1>

	{#if member.isParent}
		{#each member.children as child}
			<FamilyNode member="{child}" />
		{/each}
	{/if}
</div>
