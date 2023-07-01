<script lang="ts">
	import TrackLIst from './../../../lib/components/TrackLIst.svelte';
	import { getCopyrightsSymbol } from '$helpers';
	import { ItemPage, TrackList } from '$components';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	$: album = data.album;
	$: albumName = album.name;
	$: albumType = album.album_type;
	$: albumImages = album.images.length ? album.images[0].url : undefined;
	$: albumArtists = album.artists;
	$: albumReleaseDate = album.release_date;
	$: albumTotalTracks = album.total_tracks;
	$: albumTracks = album.tracks;
	$: albumCopyrights = album.copyrights;
	$: color = data.color;
</script>

<ItemPage title={albumName} type={albumType} {color} image={albumImages}>
	<p class="meta text-s13 font-w6" slot="meta">
		<span class="artists mr-1">
			{albumArtists.map((artist) => artist.name).join(', ')}
		</span>
		<span class="date">
			{new Date(albumReleaseDate).getFullYear()}
		</span>
		<span class="tracks-count ml-1 font-w4 text-[--light-gray]">
			{`${albumTotalTracks} Track${albumTotalTracks > 1 ? 's' : ''}`}
		</span>
	</p>

	<TrackList tracks={album.tracks.items} />

	<div class="creadit mt-10 text-11 text-[--light-gray]" transition:fade>
		<p class="date m-0 text-13 text-[--light-gray]">
			{new Date(albumReleaseDate).toLocaleDateString('ko', { dateStyle: 'medium' })}
		</p>
		{#each albumCopyrights as copyright}
			<p class="copyright m-0">
				{getCopyrightsSymbol(copyright.type)}{copyright.text}
			</p>
		{/each}
	</div>
</ItemPage>
