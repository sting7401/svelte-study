<script lang="ts">
	import { Home, Search, ListMusic, Menu, X, type Icon } from 'lucide-svelte';
	import { IconButton } from '$components';
	import type { ComponentType } from 'svelte';
	import logo from '$images/Spotify_Logo_RGB_White.png';
	import { page } from '$app/stores';
	import { tick } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	export let desktop: boolean;

	let isMobileMenuOpen = false;
	$: isOpen = desktop || isMobileMenuOpen;

	let openMenuButton: IconButton;
	let closeMenuButton: IconButton;
	let lastFocusElement: HTMLAnchorElement;

	const menuitems: { path: string; label: string; icon: ComponentType<Icon> }[] = [
		{
			path: '/',
			label: 'HOME',
			icon: Home
		},
		{
			path: '/search',
			label: 'Search',
			icon: Search
		},
		{
			path: '/playlists',
			label: 'Playlists',
			icon: ListMusic
		}
	];

	const openMenu = async () => {
		isMobileMenuOpen = true;
		await tick();
		closeMenuButton.getButton().focus();
	};

	const closeMenu = async () => {
		isMobileMenuOpen = false;
		await tick();
		openMenuButton.getButton().focus();
	};

	const moveFocusToBottom = (event: KeyboardEvent) => {
		if (desktop) return;
		if (event.key === 'Tab' && event.shiftKey) {
			event.preventDefault();

			lastFocusElement.focus();
		}
	};
	const moveFocusToTop = (event: KeyboardEvent) => {
		if (desktop) return;
		if (event.key === 'Tab' && !event.shiftKey) {
			event.preventDefault();

			closeMenuButton.getButton().focus();
		}
	};

	const handleEsc = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeMenu();
		}
	};

	beforeNavigate(() => {
		isMobileMenuOpen = false;
	});
</script>

<svelte:head>
	{#if !desktop && isMobileMenuOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<div class="nav-content" class:desktop class:mobile={!desktop}>
	{#if !desktop && isMobileMenuOpen}
		<div
			class="overlay"
			on:click={openMenu}
			transition:fade={{ duration: 300 }}
			aria-hidden={!isOpen}
		/>
	{/if}
	<nav aria-label="Main">
		{#if !desktop}
			<IconButton
				icon={Menu}
				label="Open menu"
				type="button"
				bind:this={openMenuButton}
				on:click={openMenu}
				aria-expanded={!isOpen}
				class="menu-button"
			/>
		{/if}
		<div
			class="nav-content__inner"
			class:is-hidden={!isOpen}
			style:opacity={isOpen ? '1' : '0'}
			on:keyup={handleEsc}
		>
			{#if !desktop}
				<IconButton
					icon={X}
					label="Close menu"
					type="button"
					bind:this={closeMenuButton}
					on:click={closeMenu}
					aria-expanded={!isOpen}
					on:keydown={moveFocusToBottom}
					class="close-menu-button"
				/>
			{/if}
			<img src={logo} alt="Spotify" class="logo" />
			<ul>
				{#each menuitems as item, index}
					{@const iconProps = {
						focusable: 'false',
						'aria-hidden': 'true',
						color: 'var(--text-color)',
						size: 26,
						strokeWidth: 2
					}}
					<li class:active={item.path === $page.url.pathname}>
						{#if menuitems.length === index + 1}
							<a bind:this={lastFocusElement} href={item.path} on:keydown={moveFocusToTop}>
								<svelte:component this={item.icon} {...iconProps} />
								{item.label}</a
							>
						{:else}
							<a href={item.path}>
								<svelte:component this={item.icon} {...iconProps} />
								{item.label}</a
							>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</div>

<style lang="scss">
	.overlay {
		@include mixins.pos($ps: fixed, $tp: 0, $lt: 0, $zi: 99);
		@include mixins.wh100;

		background-color: var(--sidebar-color);
		opacity: 0.75;

		@include breakpoint.up('md') {
			display: none;
		}
	}
	.nav-content {
		.logo {
			max-width: functions.rem(100);
			width: functions.rem(130);
		}

		&__inner {
			overflow: auto;
			min-width: var(--sidebar-width);
			height: 100vh;
			padding: functions.rem(20);
			background-color: var(--sidebar-color);

			:global(html.no-js) {
				& {
					@include breakpoint.down('md') {
						display: block;
						height: auto;
					}
				}
			}

			ul {
				margin: functions.rem(20) 0 0;
			}

			li {
				&._active {
					a {
						opacity: 1;
					}
				}
			}

			a {
				display: flex;
				align-items: center;
				margin: functions.rem(10) 0;
				padding: functions.rem(5);
				opacity: 0.7;
				font-size: functions.rem(14);
				color: var(--text-color);
				font-weight: 500;
				transition: opacity 0.2s ease;

				&:hover,
				&:focus {
					opacity: 1;
				}

				:global(svg) {
					margin-right: functions.rem(12);
				}
			}
		}

		&.desktop {
			position: sticky;
			top: 0;
			.nav-content-inner {
				@include breakpoint.up('md') {
					display: block;
				}
			}
		}

		&.mobile .nav-content__inner {
			@include mixins.pos($ps: fixed, $tp: 0, $lt: 0, $zi: 100);

			transition: all 0.2s ease;

			&.is-hidden {
				transform: translateX(-100%);
				opacity: 0;
			}

			@include breakpoint.down('md') {
				display: block;
			}
		}

		:global(.menu-button) {
			@include breakpoint.up('md') {
				display: none;
			}
		}

		:global(.close-menu-button) {
			@include mixins.pos($rt: functions.rem(20), $tp: functions.rem(20));
		}
	}
</style>
