<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '$lib/scss/main.scss';
	import type { LayoutData } from './$types';
	import { LogoutButton, Navigation } from '$components';

	export let data: LayoutData;

	$: user = data.user;
</script>

<div id="main" class="main">
	{#if user}
		<div id="sideBar">
			<Navigation dasktop={true} />
		</div>
	{/if}
	<div id="content">
		<main id="mainContent" class="main__content">
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	.main {
		display: flex;
		&__content {
			padding: functions.rem(30) functions.rem(15) functions.rem(60);

			@include breakpoint.up('md') {
				padding: functions.rem(30) functions.rem(30) functions.rem(60);
			}
		}
	}
</style>
