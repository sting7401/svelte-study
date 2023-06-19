<script lang="ts">
	import type { Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface $$Props extends HTMLButtonAttributes {
		icon: ComponentType<Icon>;
		label: string;
	}

	export let icon: ComponentType<Icon>;
	export let label: string;

	let button: HTMLButtonElement;

	export function getButton() {
		return button;
	}
</script>

<button bind:this={button} on:click on:mouseover on:focus on:keydown {...$$restProps}>
	<svelte:component this={icon} color="var(--text-color)" aria-hidden="true" focusable="false" />
	<span class="visually-hidden">{label}</span>
</button>

<style lang="scss">
	button {
		@include mixins.flex($jc: center, $ai: center);

		width: functions.rem(38);
		height: functions.rem(38);
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;

		:global(svg) {
			vertical-align: middle;
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}

		&:active {
			background-color: var(--menu-background-color);
		}
	}
</style>
