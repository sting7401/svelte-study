<script lang="ts">
	import Buttons from './Buttons.svelte';
</script>

<Buttons
	onclick={() => console.log('click')}
	onmouseover={() => console.log('hover')}
	onfocus={() => console.log('focus')}>클릭</Buttons
>
