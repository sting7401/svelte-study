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
