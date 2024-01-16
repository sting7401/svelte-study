<script lang="ts">
	import '@splidejs/svelte-splide/css/splide.min.css';
	import DisCountProducts from '$lib/components/layout/DisCountProducts.svelte';
	import HeroSection from '$lib/components/layout/HeroSection.svelte';
	import '$lib/styles/carousel.css';
	import FeaturedSection from '$lib/components/layout/FeaturedSection.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="fullstack wiz store" />
</svelte:head>

<div class="px-10 pb-16 bg-slate-100">
	<HeroSection />

	<DisCountProducts />

	<FeaturedSection />
</div>
