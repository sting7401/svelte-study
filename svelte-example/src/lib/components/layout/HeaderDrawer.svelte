<script lang="ts">
	import type { HeaderLink } from '$lib/types/Header';
	import { createEventDispatcher } from 'svelte';

	export let isMenuOpened = false;
	export let headerLinks: HeaderLink[];

	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};
</script>

<div class="{`fixed top-0 bottom-0 left-0 right-0 z-50 invisible ${isMenuOpened && '!visible'}`} ">
	<button
		on:click={close}
		class={`w-full h-full bg-black/50 flex justify-end transition opacity-0 ${isMenuOpened && 'opacity-100'}`}
	>
	</button>
	<div
		class={`flex flex-col text-fw-blue text-lg font-medium absolute w-3/4 xsm:w-1/2 sm:w-1/3 h-full top-0 right-0 bg-white whitespace-nowrap pt-5 transition origin-right scale-x-0 ${isMenuOpened && '!scale-x-100'}`}
	>
		{#each headerLinks as link}
			<div class="px-5 w-full py-3">
				<button class="w-min gap-2 flex items-center">
					<svelte:component this={link.icon} />
					{link.name}
				</button>
			</div>
		{/each}
	</div>
</div>
