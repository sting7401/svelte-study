<script lang="ts">
	import { ButtonVariant } from '$lib/types/Button.ts';

	export let dClass = '';
	export let variant: ButtonVariant;
	export let onClick = () => {};
</script>

<button
	class={`flex gap-1 items-center justify-center rounded-lg py-3 text-sm font-sans normal-case font-medium ${dClass} ${variant === ButtonVariant.PRIMARY ? 'bg-fw-white text-white' : 'border border-fw-blue text-fw-blue'}`}
	on:click={onClick}
>
	<slot><!-- optional fallback --></slot>
</button>
