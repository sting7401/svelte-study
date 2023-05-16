<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type = '';
	export let text = '버튼';
	export let size = '';
	export let shadow = false;
	export let bgColor = 'inherit';
	export let textColor = 'inherit';
	export let disabled = false;

	$: bColor = bgColor || '';
	$: tColor = textColor || '';

	let isLeftHover: boolean;

	// console.log($$restProps)

	const dispatch = createEventDispatcher();

	const hov = () => {
		dispatch('hov', {
			check: true
		});
	};
</script>

<button
	on:click
	on:submit
	type={type ? 'submit' || 'reset' : 'button'}
	{disabled}
	class:size-lg={size === 'large'}
	class:size-sm={size === 'small'}
	style:--buttonBgColor={bgColor}
	style:--buttonTextColor={textColor}
	class:has-left={$$slots.leftContent}
	class:shadow
	{...$$restProps}
>
	{#if $$slots.leftContent}
		<div
			class="left-content"
			on:mouseenter={() => {
				isLeftHover = true;
			}}
			on:mouseleave={() => {
				isLeftHover = false;
			}}
		>
			<slot name="leftContent"><!-- optional fallback --></slot>
		</div>
	{/if}
	<slot {isLeftHover}>{text}</slot>
</button>

<style lang="scss">
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0;
		border-radius: 0.5rem;
		background-color: var(--buttonBgColor);
		color: var(--buttonTextColor);
		cursor: pointer;

		.left-content {
			margin-right: function.rem(10);
		}

		&:hover {
			font-weight: bold;
			color: variables.$red;
		}

		&:disabled {
			opacity: 0.8;
			cursor: not-allowed;
		}

		&.size {
			&-sm {
				padding: 1rem 2rem;
			}

			&-lg {
				padding: 1.5rem 2.5rem;
			}
		}

		&.shadow {
			box-shadow: 0 0 1rem color.$blackOpacity3;
		}
	}
</style>
