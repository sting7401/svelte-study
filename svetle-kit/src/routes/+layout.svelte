<script lang="ts">
	import '$lib/css/app.css';
	import { page } from '$app/stores';

	import { Header } from '$components';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<Header />
<main class="flex flex-col justify-center w-full">
	<div class="main-container w-full max-w-[1240px]">
		<slot><!-- optional fallback --></slot>
	</div>
</main>

<style>
</style>
