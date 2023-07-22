<script lang="ts">
	import '$lib/css/app.css';
	import { page } from '$app/stores';

	import { Header } from '$components';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<main>
	<Header />

	<div class="main-container">
		<slot><!-- optional fallback --></slot>
	</div>
</main>

<style>
</style>
