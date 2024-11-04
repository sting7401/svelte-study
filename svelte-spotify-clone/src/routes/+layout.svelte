<script lang="ts">
	import '../app.css';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import NProgress from 'nprogress';
	import { hideAll } from 'tippy.js';
	import 'modern-normalize/modern-normalize.css';
	import 'nprogress/nprogress.css';
	import '$lib/css/app.css';
	import '$lib/scss/main.scss';
	import type { LayoutData } from './$types';
	import { Navigation, Header } from '$components';

	NProgress.configure({ showSpinner: false });

	export let data: LayoutData;

	let topBar: HTMLElement;
	let scrollY: number;
	let headerOpacity = 0;

	$: if (topBar) {
		headerOpacity = scrollY / topBar.offsetHeight < 1 ? scrollY / topBar.offsetHeight : 1;
	}
	$: user = data.user;

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
		hideAll();
	});
</script>

<svelte:window bind="scrollY" />

<svelte:head>
	<title>Spotify {$page.data.title ? `- ${$page.data.title}` : ''}</title>
</svelte:head>

{#if user}
	<a href="#mainContent" class="skip-link"> Skip to content</a>
{/if}

<div id="main" class="main">
	{#if user}
		<div id="sideBar" class="side-bar">
			<Navigation desktop={true} />
		</div>
	{/if}
	<div id="content" class="content">
		{#if user}
			<div id="topbar" class="top-bar bg-gradient-to-t from-black/20" bind:this={topBar}>
				<div
					class="top-bar__bg"
					style:background-color={$page.data.color ? $page.data.color : 'var(--header-color)'}
					style:opacity={`${headerOpacity}`}
				>
					<Header />
				</div>
			</div>
		{/if}

		<main id="mainContent" class="main__content" class:logged-in={user}>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	.main {
		display: flex;

		:global(html.no-js) {
			@include breakpoint.down('md') {
				display: block;
			}
		}

		.content {
			width: 100%;
		}

		&__content {
			padding: functions.rem(30) functions.rem(15) functions.rem(60);

			@include breakpoint.up('md') {
				padding: functions.rem(30) functions.rem(30) functions.rem(60);
			}

			&.logged-in {
				padding-top: calc(functions.rem(30) + var(--header-height));

				:global(html.no-js) {
					& {
						@include breakpoint.down('md') {
							padding-top: functions.rem(30);
						}
					}
				}
			}
		}
	}

	.side-bar {
		display: none;
		z-index: 105;

		@include breakpoint.up('md') {
			display: block;
			width: var(--sidebar-width);
		}
	}

	.top-bar {
		@include mixins.flex($ai: center);
		@include mixins.pos($ps: fixed, $zi: 100);

		width: 100%;
		height: var(--header-height);
		padding: 0 functions.rem(15);

		:global(html.no-js) {
			& {
				position: sticky;
				top: 0;
				height: auto;
				padding: functions.rem(10) functions.rem(20);
				background-color: var(--header-color);

				:global(html.no-js) {
					@include breakpoint.down('md') {
						position: fixed;
					}
				}
			}
		}

		&__bg {
			@include mixins.flex($ai: center);
			@include mixins.pos($tp: 0, $lt: 0, $zi: -1);
			@include mixins.wh100;
		}

		@include breakpoint.up('md') {
			padding: 0 functions.rem(30);
			width: calc(100% - var(--sidebar-width));
		}
	}
</style>
