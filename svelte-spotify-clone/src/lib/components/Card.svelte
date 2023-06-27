<script lang="ts">
	import { Music } from 'lucide-svelte';

	type AlbumType = SpotifyApi.AlbumObjectFull | SpotifyApi.AlbumObjectSimplified;
	type PlayListType = SpotifyApi.PlaylistObjectFull | SpotifyApi.PlaylistObjectSimplified;
	type ArtistType = SpotifyApi.ArtistObjectFull;

	export let item: AlbumType | PlayListType | ArtistType;
</script>

<div
	class="card group {item.type} relative p-2 bg-[--dark-gray] shadow-[0_0_40px_0_rgba(0,0,0,0.4)] rounded transition duration-300 hover:bg-[--medium-gray]"
>
	{#if item.images.length > 0}
		<img
			loading="lazy"
			src={item.images[0].url}
			alt="{item.type} cover for {item.name}"
			class="w-full aspect-square object-cover"
		/>
	{:else}
		<div
			class="cover-placeholder flex items-center justify-center w-full aspect-square bg-[--medium-color] transition duration-300 group-hover:bg-[--dark-gray]"
		>
			<Music aria-hidden="true" focusable="false" color="var(--light-gray)" class="w-10 h-10" />
		</div>
	{/if}

	<h4 class="mb-5 text-16/4 font-w6 truncate" title={item.name}>
		<a
			href="/{item.type}/{item.id}"
			class="text-[--text-color] after:content-[''] after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0 after:rounded focus:outline-none after:focus:outline after:focus:outline-2 after:focus:outline-[--accent-color]"
		>
			{item.name}
		</a>
	</h4>

	{#if item.type === 'album'}
		<p class="m-0 text-14/4 text-[--light-gray]">
			{item.artists.map((item) => item.name).join(', ')}
		</p>
	{/if}

	{#if item.type === 'playlist'}
		<p class="line-clamp-2">{item.description}</p>
	{/if}
</div>

<style>
</style>
