<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';


	console.log(data);

	interface Props {
		data: PageData;
		title?: string;
		notices?: string;
	}

	let { data, title = data.slug || '', notices = data.list || '' }: Props = $props();

	const endpoint = 'https://jsonplaceholder.typicode.com/posts';
	let posts = $state([]);

	onMount(async () => {
		const response = await fetch(endpoint);
		const result = await response.json();
		posts = result;
	});
</script>

<!-- <div>
	<h1>title: {data.post.title}</h1>
	<div>content: {data.post.content}</div>
</div> -->

{#await posts}
	<p>...waiting</p>
{:then posts}
	{#each posts as article}
		<div>
			<p>{article.title}</p>
		</div>
	{/each}
{:catch error}
	<p>An error occurred!</p>
{/await}
