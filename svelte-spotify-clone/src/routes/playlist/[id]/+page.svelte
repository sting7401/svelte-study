<script lang="ts">
	import { page } from '$app/stores';
	import { Button, ItemPage } from '$components';
	import TrackList from '$components/TrackList.svelte';
	import { Heart } from 'lucide-svelte';
	import type { ActionData, PageData } from './$types';
	import { applyAction, enhance } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;

	let isLoading = false;
	let isLoadingFollow = false;
	let followButton: Button<'button'>;

	$: color = data.color;
	$: playlist = data.playlist;
	$: tracks = data.playlist.tracks;
	$: isFollowing = data.isFollowing;
	$: currentPage = $page.url.searchParams.get('page') || 1;

	let filteredTracks: SpotifyApi.TrackObjectFull[];

	$: {
		filteredTracks = [];
		tracks.items.forEach((item) => {
			if (item.track) filteredTracks = [...filteredTracks, item.track];
		});
	}

	const followersFormat = Intl.NumberFormat('en', { notation: 'compact' });

	const loadMoreTracks = async () => {
		if (!tracks.next) return;
		isLoading = true;
		const res = await fetch(tracks.next.replace('http://api.spotify.com/v1/', '/api/spotify'));
		const resJSON = await res.json();

		if (resJSON.ok) {
			tracks = {
				...resJSON,
				items: [...tracks.items, ...resJSON.items]
			};
		} else {
			alert(resJSON.error.message || 'Could not load data');
		}
		isLoading = false;
	};
</script>

{isFollowing}

<ItemPage
	title={playlist.name}
	image={playlist.images.length > 0 ? playlist.images[0].url : undefined}
	{color}
	type={playlist.type}
>
	<div slot="meta" class="mt-10 text-13">
		<p class="playlist-description text-18 text-[--light-gray]">{@html playlist.description}</p>
		<p class="meta">
			<span class="mr-5 font-w6">{playlist.owner.display_name}</span>
			<span class="mr-5">{followersFormat.format(playlist.followers.total)}</span>
			<span class="mr-5">{playlist.tracks.total} Tracks</span>
		</p>
	</div>

	<div class="playlist-actions flex justify-end mt-10 mb-30">
		{#if data.user?.id === playlist.owner.id}
			<Button element="a" variant="outline">Edit Playlist</Button>
		{:else if isFollowing !== null}
			<form
				class="follow"
				method="post"
				action={`?/${isFollowing ? 'unFollowPlaylist' : 'followPlaylist'}`}
				use:enhance={() => {
					isLoadingFollow = true;

					return async ({ result }) => {
						isLoadingFollow = false;
						await applyAction(result);
						followButton.focus();

						if (result.type === 'success') {
							isFollowing = !isFollowing;
						}
					};
				}}
			>
				<Button
					bind:this={followButton}
					element="button"
					type="submit"
					class="flex item-center"
					disabled={isLoadingFollow}
				>
					<Heart
						aria-hidden
						focusable="false"
						fill={isFollowing ? `var(--text-color)` : 'none'}
						class="mr-10 w-22 h-22"
					/>
					{isFollowing ? 'unFollow' : 'follow'}
					<span class="a11y-hidden">{playlist.name} playlist</span></Button
				>

				{#if form?.followError}
					<p class="error text-14 text-right color-[var(--error)]">{form.followError}</p>
				{/if}
			</form>
		{/if}
	</div>

	{#if playlist.tracks.items.length > 0}
		<TrackList tracks={filteredTracks} />
		{#if tracks.next}
			<div class="load-more text-center">
				<Button element="button" variant="outline" disabled={isLoading} on:click={loadMoreTracks}
					>More</Button
				>
			</div>
		{/if}

		<div class="pagination hidden">
			<div class="prev">
				{#if tracks.previous}
					<Button
						element="a"
						variant="outline"
						href="{$page.url.pathname}? {new URLSearchParams({
							page: `${Number(currentPage) - 1}`
						}).toString()}">prev page</Button
					>
				{/if}
			</div>
			<div class="next">
				{#if tracks.next}
					<Button
						element="a"
						variant="outline"
						href="{$page.url.pathname}? {new URLSearchParams({
							page: `${Number(currentPage) + 1}`
						}).toString()}">next page</Button
					>
				{/if}
			</div>
		</div>
	{:else}
		<div class="empty-playlist mt-40 text-center">
			<p class="text-22 font-w6">No items added to this playlist yet.</p>
			<Button element="a" href="/search">Search for Content</Button>
			<Button element="a" href="/playlists">View all Playlists</Button>
		</div>
	{/if}
</ItemPage>

<style lang="scss">
	.empty-playlist {
		:global(a) {
			margin: 0 10px;
		}
	}

	.load-more {
		:global(html.no-js) {
			display: none;
		}
	}

	:global(html.no-js) {
		.pagination {
			@include mixins.flex($ai: center);
		}
	}
</style>
