<script>
	import Button from '$lib/components/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
	import FaAllergies from 'svelte-icons/fa/FaAllergies.svelte';
</script>

<style>
</style>

<Button
	on:click|once="{event => {
		alert(event.detail);
	}}"
	on:hov="{event => {
		console.log(event.detail.check);
	}}"
	let:isLeftHover
	size="large"
	bgColor="#fff"
	textColor="blue"
	shadow
>
	<span style:display="inline-block" style:width="20px" slot="leftContent">
		{#if isLeftHover}
			<FaAngellist />
		{:else}
			<FaAllergies />
		{/if}
	</span>
</Button>
