<script lang="ts">
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let sections: {
		title: string;
		path: string;
		items: (SpotifyApi.AlbumObjectSimplified | SpotifyApi.PlaylistObjectSimplified)[];
	}[] = [];

	$: {
		if (data.newReleases) {
			sections = [
				...sections,
				{
					title: 'New Releases',
					path: '/sections/new-releases',
					items: data.newReleases.albums.items
				}
			];
		}

		if (data.featuredPlaylists) {
			sections = [
				...sections,
				{
					title: 'Featured Releases',
					path: '/sections/featured-playlists',
					items: data.featuredPlaylists.playlists.items
				}
			];
		}

		data.homeCategories.forEach((category, index) => {
			const categoryPlaylists = data.categoriesPlaylists[index];

			if (categoryPlaylists) {
				sections = [
					...sections,
					{
						title: category.name,
						path: `/category/${category.id}`,
						items: categoryPlaylists.playlists.items
					}
				];
			}
		});

		if (data.userPlaylists) {
			sections = [
				...sections,
				{ title: 'Your Releases', path: '/playlists', items: data.userPlaylists.items }
			];
		}
	}
</script>

{#each sections as section}
	<sections class="content-row mb-10">
		<div class="content-row__header flex items-center justify-between mb-5">
			<div class="right">
				<h2 class="section__title text-22 font-w6">
					{section.title}
				</h2>
			</div>
			<div class="left">
				<Button element="a" href={section.path} variant="outline"
					>See All

					<span class="visually-hidden">
						{section.title}
					</span></Button
				>
			</div>
		</div>
		{#if section.items.length > 0}
			<div class="grid-items">
				{#each section.items as item}
					<div class="grid-item">
						<Card {item} />
					</div>
				{/each}
			</div>
		{:else}
			<p>none</p>
		{/if}
	</sections>
{/each}
