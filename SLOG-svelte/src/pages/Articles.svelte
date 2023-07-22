<script>
	import ArticleAddForm from '../lib/components/ArticleAddForm.svelte';
	import ArticleHeader from '../lib/components/ArticleHeader.svelte';
	import ArticleList from '../lib/components/ArticleList.svelte';
	import ArticleEditForm from '../lib/components/ArticleEditForm.svelte';
</script>

<ArticleHeader />
<main class="slog-main">
	<ArticleEditForm />
	<ArticleList />
</main>
