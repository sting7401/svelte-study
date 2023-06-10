<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>product/[id]</h1>

<h1>{$page.status}: {$page.error?.message}</h1>

<h3>code {$page.error?.code}</h3>
