<script>
	import { page } from '$app/stores';
</script>

<p class="min-h-[300px] bg-slate-300">{$page.status}: {$page?.error.message}</p>
