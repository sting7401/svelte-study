<script lang="ts">
	import { Home, Search, ListMusic, type Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';
	import logo from '$images/Spotify_Logo_RGB_White.png';
	import { page } from '$app/stores';

	export let desktop: boolean;

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
</script>

<div class="nav__content" class:desktop class:mobile={!desktop}>
	<nav aria-label="Main">
		<div class="nav__content__inner">
			<img src={logo} alt="Spotify" class="logo" />
			<ul>
				{#each menuitems as item}
					<li class:active={item.path === $page.url.pathname}>
						<a href={item.path}>
							<svelte:component
								this={item.icon}
								focusable="false"
								aria-hidden="true"
								color="var(--text-color)"
								size={26}
								strokeWidth={2}
							/>
							{item.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</div>

<style lang="scss">
	.nav__content {
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
	}
</style>
