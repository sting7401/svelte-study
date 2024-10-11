<script>
	import { page } from '$app/stores';
</script>

<p class="grid min-h-[300px] place-content-center bg-slate-300">
	{$page.status}: {$page?.error.message}

	<a href="/products">프로덕트</a>
</p>
