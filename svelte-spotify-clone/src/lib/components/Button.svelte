<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Element = $$Generic<'button' | 'a'>;

	interface ButtonComponentElements {
		button: HTMLButtonAttributes;
		a: HTMLAnchorAttributes;
	}

	type $$Props = ButtonComponentElements[Element] & {
		element: Element;
		variant?: 'solid' | 'outline' | 'danger';
		className?: string;
	};
	export let element: Element;
	export let variant: 'solid' | 'outline' | 'danger' = 'solid';
	export let className = '';
</script>

<svelte:element
	this={element}
	class="button {!variant ? '' : `button--${variant}`} {className}"
	on:click
	{...$$restProps}
>
	<slot><!-- optional fallback --></slot>
</svelte:element>

<style lang="scss">
	.button {
		display: inline-block;
		padding: functions.rem(7) functions.rem(15);
		border: none;
		border-radius: functions.rem(20);
		font-weight: 600;
		font-size: functions.rem(14);
		text-decoration: none;
		box-sizing: border-box;

		&--solid {
			background-color: var(--accent-color);
			color: var(--color-000);
			border: functions.rem(2) solid var(--accent-color);
		}

		&--outline {
			color: var(--color-fff);
			border: functions.rem(2) solid var(--color-fff);
		}

		&--danger {
			background-color: var(--error);
			color: var(--color-fff);
			border: functions.rem(2) solid var(--error);
		}

		&--transparent {
			color: var(--color-fff);
		}

		&:disabled {
			opacity: 0.8;
			cursor: not-allowed;
		}

		&:hover {
			&.button--solid,
			&.button--danger {
				background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
			}

			&.button--outline {
				background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
			}
		}

		&:active {
			&.button--solid,
			&.button--danger {
				background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
			}

			&.button--outline {
				background-image: linear-gradient(rgba(255, 255, 255, 0.2) 0 0);
			}
		}
	}
</style>
