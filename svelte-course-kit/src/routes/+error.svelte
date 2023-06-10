<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>+error.svelte in the root /routes</h1>
<h2>{$page.status} : {$page.error?.message}</h2>
<h2>{$page.status} : {$page.error?.code}</h2>
<h3>code : {$page.error?.code}</h3>
