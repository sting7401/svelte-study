<script lang="ts">
	import '/src/app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let y: number = $state(0);
	let innerHeight: number = $state(0);
	let innerWidth: number = $state(0);

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<div class="relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base">
	<div
		class={'fixed bottom-0 z-[10] flex w-full p-10 duration-200' +
			(y > 0 ? 'opacity-full pointer-events-auto' : 'pointer-events-none opacity-0')}
	>
		<button type="button" onclick={goTop}
			><i class="fa-solid fa-arrow-up aspect-square grid place-items-center"></i></button
		>
	</div>
	<Header {y}></Header>
	<slot><!-- optional fallback --></slot>

	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
