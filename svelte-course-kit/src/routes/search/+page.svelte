<script>
	import { page } from '$app/stores';
</script>

<h2>검색 : {$page.url.searchParams.get('q')}</h2>
