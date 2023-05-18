<script lang="ts">
	import Home from '$lib/pages/Home.svelte';
	import Setting from '$lib/pages/Setting.svelte';
	import { onMount } from 'svelte';

	let page: string;

	const onRouteChange: () => void = () => {
		const path = String(window.location.hash.slice(1));

		if (path === '/home') {
			page = 'home';
		} else if (path === '/setting') {
			page = 'setting';
		} else {
			window.location.hash = '/home';
		}
	};

	onMount((): void => {
		onRouteChange();
	});
</script>

<svelte:window on:hashchange={onRouteChange} />

<nav>
	<ul>
		<li><a href="#/">home</a></li>
		<li><a href="#/setting">setting</a></li>
	</ul>
</nav>

{#if page === 'home'}
	<Home />
{:else if page === 'setting'}
	<Setting />
{/if}

<style>
</style>
