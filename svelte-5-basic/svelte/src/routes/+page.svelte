<script lang="ts">
	import type { PageData } from './$types';

	let { data }: PageData = $props();
</script>

<p>{data === null ? '' : data}</p>
