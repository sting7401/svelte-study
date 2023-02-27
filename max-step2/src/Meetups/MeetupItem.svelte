<script>
	import { createEventDispatcher } from 'svelte';
	import meetups from './meetup-store.js';
	import Badge from './../Ui/Badge.svelte';
	import Button from '../Ui/Button.svelte';

	export let id;
	export let title;
	export let subtitle;
	export let imageUrl;
	export let desc;
	export let contactEmail;
	export let address;
	export let isFavor;

	const dispatch = createEventDispatcher();

	const toggleFavor = () => {
		meetups.toggleFav(id);
	};
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

<article >
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
		<Button type="button" on:click="{() => dispatch('edit', id)}"
			>edit</Button
		>
		<Button
			type="button"
			mode="outline"
			color="{isFavor ? null : 'succes'}"
			on:click="{toggleFavor}"
			>{isFavor ? 'Unfavorite' : 'Favorite'}</Button
		>
		<Button type="button" on:click="{() => dispatch('showDetails', id)}"
			>show</Button
		>
	</footer>
</article>
