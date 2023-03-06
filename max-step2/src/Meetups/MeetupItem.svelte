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

	let isLoading = false;

	const dispatch = createEventDispatcher();

	const toggleFavor = () => {
		isLoading = true;
		fetch(
			`https://svelte-max-658a0-default-rtdb.firebaseio.com/meetup/${id}.json`,
			{
				method: 'PATCH',
				body: JSON.stringify({ isFavor: !isFavor }),
				headers: { 'Content-Type': 'application/json' },
			},
		)
			.then((res) => {
				if (!res.ok) {
					throw new Error('error');
				}

				isLoading = false;
				meetups.toggleFav(id);
			})
			.catch((err) => {
				isLoading = false;
				console.log(err);
			});
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
		<Button type="button" on:click="{() => dispatch('edit', id)}"
			>edit</Button
		>

		{#if isLoading}
			<p>loading</p>
		{:else}
			<Button
				type="button"
				mode="outline"
				color="{isFavor ? null : 'succes'}"
				on:click="{toggleFavor}"
				>{isFavor ? 'Unfavorite' : 'Favorite'}</Button
			>
		{/if}
		<Button type="button" on:click="{() => dispatch('showDetails', id)}"
			>show</Button
		>
	</footer>
</article>
