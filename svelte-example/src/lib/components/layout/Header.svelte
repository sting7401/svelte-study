<script lang="ts">
	import type { HeaderLink } from '../../types/Header';
	import HeaderDrawer from './HeaderDrawer.svelte';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import ShoppingBagIcon from '$lib/icons/ShoppingBagIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import HomeIcon from '$lib/icons/HomeIcon.svelte';
	import ProductIcon from '$lib/icons/ProductIcon.svelte';

	const headerLinks: HeaderLink[] = [
		{ name: 'Home', link: '/home', icon: HomeIcon },
		{ name: 'Products', link: '/products', icon: ProductIcon }
	];

	let isMenuOpened = false;

	const open = () => {
		isMenuOpened = true;
	};
</script>

<header>
	<div class="px-10 py-6 border-b border-gray-300 flex items-center justify-between">
		<div class="flex flex-1 gap-16 items-center">
			<Logo />
			{#each headerLinks as link}
				<span class="cursor-pointer hidden md:block">{link.name}</span>
			{/each}
		</div>
		<button> <ShoppingBagIcon /></button>

		<button class="block md:hidden" on:click={open}>
			<MenuIcon />
		</button>
	</div>

	<div class="md:hidden">
		<HeaderDrawer
			{headerLinks}
			{isMenuOpened}
			on:close={() => {
				isMenuOpened = false;
			}}
		/>
	</div>
</header>
