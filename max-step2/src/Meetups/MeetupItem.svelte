<script>
	import Badge from './../Ui/Badge.svelte';
	import { createEventDispatcher } from 'svelte';

	import Button from '../Ui/Button.svelte';

	export let id = null;
	export let title = null;
	export let subtitle = null;
	export let imageUrl = null;
	export let desc = null;
	export let contactEmail = null;
	export let address = null;
	export let isFavor;

	const dispatch = createEventDispatcher();
</script>

<style>
	article {
		border: 1px solid #ddd;
		margin-top: 1rem;
	}

	.content {
		height: 4rem;
	}
</style>

<article>
	<header>
		<h1>
			{title}
			{#if isFavor}
				<Badge>Favorite</Badge>
			{/if}
		</h1>
		<h2>{subtitle}</h2>
	</header>

	<div class="image">
		<img src="{imageUrl}" alt="title" />
	</div>
	<div class="content">
		<p>{desc}</p>
		<p>{address}</p>
	</div>
	<footer>
		<Button href="mailto:{contactEmail}">ContactEmail</Button>
		<Button
			type="button"
			mode="outline"
			color="{isFavor ? null : 'succes'}"
			on:click="{() => dispatch('toggleFavorite', id)}"
			>{isFavor ? 'Unfavorite' : 'Favorite'}</Button
		>
		<Button type="button">show</Button>
	</footer>
</article>
