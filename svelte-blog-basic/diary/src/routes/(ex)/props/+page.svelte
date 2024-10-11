<script lang="ts">
	import Onclick from './Onclick.svelte';

	function handle() {
		console.log('props');
	}
</script>

<Onclick onclick={handle} />
