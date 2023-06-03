<script>
	import { createEventDispatcher } from 'svelte';

	const dispatcher = createEventDispatcher();

	const disHover = () => {
		dispatcher('disHover', { text: '이벤트 타입' });
	};
</script>

<button type="button" on:click={disHover}>
	<slot><!-- optional fallback --></slot>
</button>
