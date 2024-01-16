<script>
	import '$lib/css/app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="app font-body text-fw-blue">
	<Header>header</Header>
	<main>
		<slot />
	</main>

	<Footer></Footer>
</div>
