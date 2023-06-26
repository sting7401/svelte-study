<script lang="ts">
	import Button from '$components/Button.svelte';
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
	<sections class="content-row">
		<div class="content-row__header">
			<div class="left">
				<Button element="a" href={section.path} variant="outline"
					>See All

					<span class="visually-hidden">
						{section.title}
					</span></Button
				>
			</div>
			<div class="right">
				<h2 class="section__title">
					{section.title}
				</h2>
			</div>
		</div>
		<div class="grid-items">
			{#each section.items as item}
				<div class="grid-item" style="background-color: black">
					<h5>{item.type}</h5>
					<h3>{item.name}</h3>
				</div>
			{/each}
		</div>
	</sections>
{/each}

<style lang="scss">
</style>
