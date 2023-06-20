<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import 'modern-normalize/modern-normalize.css';
	import '$lib/css/app.css';
	import '$lib/scss/main.scss';
	import type { LayoutData } from './$types';
	import { LogoutButton, Navigation, Header } from '$components';

	export let data: LayoutData;

	let topBar: HTMLElement;
	let scrollY: number;
	let headerOpacity = 0;

	$: if (topBar) {
		headerOpacity = scrollY / topBar.offsetHeight < 1 ? scrollY / topBar.offsetHeight : 1;
	}
	$: user = data.user;
</script>

<svelte:window bind="scrollY" />

<div id="main" class="main">
	{#if user}
		<div id="sideBar" class="side-bar">
			<Navigation dasktop={false} />
		</div>
	{/if}
	<div id="content" class="content">
		{#if user}
			<div id="topbar" class="top-bar" bind:this={topBar}>
				<div
					class="top-bar__bg"
					style="background-color: var(--header-color)"
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

		.content {
		}

		&__content {
			padding: functions.rem(30) functions.rem(15) functions.rem(60);

			@include breakpoint.up('md') {
				padding: functions.rem(30) functions.rem(30) functions.rem(60);
			}

			&.logged-in {
				padding-top: calc(functions.rem(30) + var(--header-height));
			}
		}
	}

	.side-bar {
		display: none;
		z-index: 105;

		@include breakpoint.up('md') {
			display: block;
		}
	}

	.top-bar {
		@include mixins.flex($ai: center);
		@include mixins.pos($ps: fixed, $zi: 100);

		width: 100%;
		height: var(--header-height);
		padding: 0 functions.rem(15);

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
