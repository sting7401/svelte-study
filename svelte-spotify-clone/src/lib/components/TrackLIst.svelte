<script lang="ts">
	import { msToTime } from '$helpers';
	import { Clock8, ListPlus } from 'lucide-svelte';
	import { Player } from '$components';
	import playingGif from '$lib/images/playing.gif';

	let currentlyPlaying: string | null = null;
	let isPaused = false;

	export let tracks: SpotifyApi.TrackObjectFull[] | SpotifyApi.TrackObjectSimplified[];
</script>

<div class="tracks">
	<header class="row header flex items-center py-7 px-5 border-b border-[--border] rounded-none">
		<div class="number-column flex justify-center w-30 mr-15">
			<span class="number text-14 text-[--light-gray]">#</span>
		</div>
		<div class="info-column flex-1 text-15 leading-none font-w4">
			<span class="track-title flex items-center text-12 text-[--light-gray] uppercase">
				Title
			</span>
		</div>
		<div class="duration-column">
			<Clock8 aria-hidden focusable="false" color="var(--light-gray)" class="w-16 h-16" />
		</div>
		<div class="actions-column w-30 ml-15">
			<span />
		</div>
	</header>

	{#each tracks as track, index}
		{@const currentPlayed = currentlyPlaying === track.id && !isPaused}
		<div
			class="row group flex items-center my-5 py-7 px-5 rounded hover:bg-white/5"
			class:is-current={currentlyPlaying === track.id}
		>
			<div class="number-column flex justify-center w-30 mr-15">
				{#if currentPlayed}
					<img src={playingGif} alt="" class="playing-gif w-12 h-12 group-hover:hidden" />
				{:else}
					<span
						class="number text-14 text-[--light-gray] group-hover:hidden"
						class:text-[--accent-color]={currentPlayed}>{index + 1}</span
					>
				{/if}

				<div class="player hidden group-hover:block">
					<Player
						{track}
						on:play={(e) => {
							currentlyPlaying = e.detail.track.id;
							isPaused = false;
						}}
						on:pause={(e) => {
							isPaused = e.detail.track.id === currentlyPlaying;
						}}
					/>
				</div>
			</div>
			<div class="info-column flex-1 text-15 leading-none font-w4">
				<div class="track-title flex items-center text-12 text-[--light-gray] uppercase">
					<h4 class:text-[--accent-color]={currentPlayed}>
						{track.name}
					</h4>

					{#if track.explicit}
						<span
							class="explicit flex item-center ml-10 py-2 px-3 border rounded-sm text-8/[1.1] text-[--light-gray] uppercase"
							>explicit</span
						>
					{/if}
				</div>
				<p class="artists mt-7 text-13/[1] text-[--light-gray]">
					{#each track.artists as artist, artistIndex}
						<a href="/artist/{artist.id}" class="text-inherit hover:underline">{artist.name}</a>

						{#if artistIndex < track.artists.length - 1}
							{', '}
						{/if}
					{/each}
				</p>
			</div>
			<div class="duration-column">
				<span class="duration text-14 text-[--light-gray]">
					{msToTime(track.duration_ms)}
				</span>
			</div>
			<div class="actions-column w-30 ml-15">
				<ListPlus aria-hidden focusable="false" />
			</div>
		</div>
	{/each}
</div>

<style>
</style>
